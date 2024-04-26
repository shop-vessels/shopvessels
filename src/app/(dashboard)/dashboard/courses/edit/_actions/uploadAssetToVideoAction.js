"use server";

import { VideoBucket, s3VideoClient } from "@/config/S3AssetsConfig";
import CourseModel from "@/database/models/CourseModel";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { revalidatePath } from "next/cache";
import { createHash, randomBytes } from "node:crypto";

async function uploadAssetToVideoAction(formData, courseId, videoId) {
  try {
    const file = formData.get("asset");

    // const fileNameHash = createHash("sha256")
    //   .update(file.name + randomBytes(64).toString("hex"))
    //   .digest("hex");

    const fileNameHash = createHash("sha256")
      .update(file.name + randomBytes(16).toString("hex"))
      .digest("hex")
      .slice(0, 32);

    console.log(fileNameHash);

    const Key = `files/${fileNameHash}`;
    console.log(Key);

    const command = new PutObjectCommand({
      Bucket: VideoBucket,
      Key,
      Body: new Uint8Array(await file.arrayBuffer()),
    });

    await s3VideoClient.send(command);

    const course = await CourseModel.findById(courseId);

    course.videos = course.videos.map((props) => {
      if (props._id.toString() !== videoId) return props;

      const asset = { title: file.name, assetS3Key: Key };
      if (Array.isArray(props.assets)) props.assets.push(asset);
      else props.assets = [asset];
      console.log(asset);


      return props;
    });

    const saved = await course.save();

    revalidatePath("/dashboard/courses/edit/assets", "page");

    return "SUCCESS";
  } catch (error) {
    console.log(error);
    return "FAILURE";
  }
}

export default uploadAssetToVideoAction;

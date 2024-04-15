"use server";
import { VideoBucket, s3VideoClient } from "@/config/S3AssetsConfig";
import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import crypto from "crypto";
import { revalidatePath } from "next/cache";

export default async function uploadVideoToBucketAction(formData, id) {
  try {
    const video = formData.get("video");

    const videoKey = crypto
      .createHash("sha256")
      .update(video.name + video?.size?.toString())
      .digest("hex");

    const uploadCommand = new PutObjectCommand({
      Bucket: VideoBucket,
      Key: videoKey,
      Body: new Uint8Array(await video.arrayBuffer()),
      ContentType: video.type,
    });

    const uploadResult = await s3VideoClient.send(uploadCommand);
    await connectDB();
    const course = await CourseModel.findById(id);

    course.videos.push({
      title: video.name,
      S3Key: videoKey,
    });
    await course.save();

    revalidatePath("/dashboard/courses/edit", "page");

    return "SUCCESS";
  } catch (error) {
    console.log(error);
    return "FAILURE";
  }
}

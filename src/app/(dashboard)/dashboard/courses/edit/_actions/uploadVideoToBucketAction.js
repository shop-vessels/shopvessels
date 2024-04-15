"use server";
import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import crypto from "crypto";
import { revalidatePath } from "next/cache";

const s3Client = new S3Client({
  region: process.env.NEXT_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_AWS_S3_SECRET_ACCESS_KEY,
  },
});

export default async function uploadVideoToBucketAction(formData, id) {
  try {
    const video = formData.get("video");

    const videoKey = crypto
      .createHash("sha256")
      .update(video.name)
      .digest("hex");

    const uploadCommand = new PutObjectCommand({
      Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME,
      Key: videoKey,
      Body: new Uint8Array(await video.arrayBuffer()),
      ContentType: video.type,
    });

    const uploadResult = await s3Client.send(uploadCommand);
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

"use server";

import { VideoBucket, s3VideoClient } from "@/config/S3AssetsConfig";
import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";
import { DeleteObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { revalidatePath } from "next/cache";

export default async function deleteBucketVideo(S3Key, courseId, videoId) {
  try {
    const command = new DeleteObjectCommand({
      Bucket: VideoBucket,
      Key: S3Key,
    });

    await s3VideoClient.send(command);

    await connectDB();

    const course = await CourseModel.findById(courseId);

    course.videos = course.videos.filter(
      ({ S3Key: innerS3Key }) => innerS3Key !== S3Key
    );

    await course.save();

    revalidatePath("/dashboard/courses/edit", "page");

    return "SUCCESS";
  } catch (error) {
    console.log(error);

    return "ERROR";
  }
}

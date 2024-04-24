"use server";
import { DeleteObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import crypto from "crypto";
import { s3VideoClient, VideoBucket } from "@/config/S3AssetsConfig";
import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";
import { revalidatePath } from "next/cache";

/**
 * Uploads a video to the specified S3 bucket.
 * @param {File} video The video file to upload.
 * @returns {Promise<{  S3Key: string, title: string }>} An object containing the URL, S3Key, and title of the uploaded video.
 */
export async function uploadVideoToBucket(video) {
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

  return {
    S3Key: videoKey,
    title: video.name,
  };
}

export async function deleteVideoFromBucket(S3Key) {
  try {
    const command = new DeleteObjectCommand({
      Bucket: VideoBucket,
      Key: S3Key,
    });
    await s3VideoClient.send(command);
    return true;
  } catch (error) {
    console.log("Error while deleting video ", error);

    throw new Error(error);
  }
}

export default async function uploadVideoToBucketAction(formData, id) {
  try {
    const video = formData.get("video");

    const { S3Key, title } = await uploadVideoToBucket(video);

    // Continue with your existing logic
    await connectDB();
    const course = await CourseModel.findById(id);

    course.videos.push({
      title: title,
      S3Key: S3Key,
    });
    await course.save();

    revalidatePath("/dashboard/courses/edit", "page");

    return "SUCCESS";
  } catch (error) {
    console.log(error);
    return "FAILURE";
  }
}

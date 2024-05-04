"use server";

import { VideoBucket, s3VideoClient } from "@/config/S3AssetsConfig";
import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import crypto from "crypto";
import { revalidatePath } from "next/cache";

export async function uploadFileActionPresigned(
  title,
  courseId,
  chapterId,
  dayId
) {
  try {
    if (!title || !courseId || !chapterId || !dayId) return "FAILURE";

    const fileHash = crypto
      .createHash("md5")
      .update(title + crypto.randomBytes(16).toString("hex"))
      .digest("hex");

    const S3Key = `files/${fileHash}`;

    const command = new PutObjectCommand({
      Bucket: VideoBucket,
      Key: S3Key,
      // Body: new Uint8Array(await file.arrayBuffer()),
    });

    const url = await getSignedUrl(s3VideoClient, command, {
      expiresIn: 3600,
    });

    return { success: true, url, S3Key };
  } catch (error) {
    console.log(error);
    return "FAILURE";
  }
}

export async function saveAssetS3KeyToBucket({
  courseId,
  chapterId,
  dayId,
  S3Key,
  title,
}) {
  try {
    await connectDB();

    const course = await CourseModel.findOne({
      _id: courseId,
      "chapters._id": chapterId,
      "chapters.days._id": dayId,
    }).select("chapters");

    course?.chapters
      ?.filter(({ _id }) => _id.toString() === chapterId)[0]
      ?.days?.filter(({ _id }) => _id.toString() === dayId)[0]
      ?.lesson?.files.push({ title, S3Key });

    await course.save();

    revalidatePath(
      `/dashboard/courses/videos/${courseId}/manage-lesson/${chapterId}/${dayId}`,
      "page"
    );

    return "SUCCESS";
  } catch (error) {
    console.log(error);

    return "FAILURE";
  }
}

"use server";

import { VideoBucket, s3VideoClient } from "@/config/S3AssetsConfig";
import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import crypto from "crypto";
import { revalidatePath } from "next/cache";


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

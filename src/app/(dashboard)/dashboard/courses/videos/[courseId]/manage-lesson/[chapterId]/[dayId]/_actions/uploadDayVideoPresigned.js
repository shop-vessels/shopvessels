"use server";
import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";
import { VideoBucket, s3VideoClient } from "@/config/S3AssetsConfig";
import {
  CompleteMultipartUploadCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import crypto from "crypto";
import { revalidatePath } from "next/cache";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import {
  CreateMultipartUploadCommand,
  UploadPartCommand,
} from "@aws-sdk/client-s3";





export async function saveVideoKeyToDatabase({
  title,
  courseId,
  chapterId,
  dayId,
  S3Key,
}) {
  try {
    await connectDB();
    const course = await CourseModel.findById(courseId);
    const chapterIndex = course.chapters.findIndex(
      (chapter) => chapter._id.toString() === chapterId
    );

    const dayIndex = course.chapters[chapterIndex].days.findIndex(
      (day) => day._id.toString() === dayId
    );

    // Update the 'videos' field of the lesson within the specific day (lesson) in the course model
    const updatedCourse = await CourseModel.findOneAndUpdate(
      {
        _id: courseId,
        "chapters._id": chapterId,
        "chapters.days._id": dayId,
      },
      {
        $push: {
          [`chapters.${chapterIndex}.days.${dayIndex}.lesson.videos`]: {
            title,
            S3Key,
          },
        },
      },
      {
        new: true,
      }
    );

    if (!updatedCourse) {
      console.log("Updated Course ", updatedCourse);
      return "FAILURE";
    }

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

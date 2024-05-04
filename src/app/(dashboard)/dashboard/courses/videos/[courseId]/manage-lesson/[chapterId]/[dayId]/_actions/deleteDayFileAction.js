"use server";

import { VideoBucket, s3VideoClient } from "@/config/S3AssetsConfig";
import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { revalidatePath } from "next/cache";

async function deleteDayFileAction(courseId, chapterId, dayId, S3Key) {
  try {
    if (!courseId || !chapterId || !courseId) return "FAILURE";
    await connectDB();

    const course = await CourseModel.findById(courseId);
    const chapterIndex = course.chapters.findIndex(
      (chapter) => chapter._id.toString() === chapterId
    );
    const dayIndex = course.chapters[chapterIndex].days.findIndex(
      (day) => day._id.toString() === dayId
    );

    const removeFile = await CourseModel.findOneAndUpdate(
      {
        _id: courseId,
        "chapters._id": chapterId,
        "chapters.days._id": dayId,
      },
      {
        $pull: {
          [`chapters.${chapterIndex}.days.${dayIndex}.lesson.files`]: {
            S3Key,
          },
        },
      },
      {
        new: true,
      }
    );

    const command = new DeleteObjectCommand({
      Bucket: VideoBucket,
      Key: S3Key,
    });

    await s3VideoClient.send(command);

    revalidatePath(
      `/dashboard/courses/videos/${courseId}/manage-lesson/${chapterId}/${dayId}`
    ,"page");

    return "SUCCESS";
  } catch (error) {
    console.log(error);
    return "FAILURE";
  }
}

export default deleteDayFileAction;

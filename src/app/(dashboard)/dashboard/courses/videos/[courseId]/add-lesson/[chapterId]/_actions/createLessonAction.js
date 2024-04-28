"use server";

import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";
import { revalidatePath } from "next/cache";

export const createLessonAction = async (courseId, chapterId, title, dayId) => {
  try {
    await connectDB();

    let result;
    let message;

    if (dayId) {
      // If dayId exists, update the title
      result = await CourseModel.updateOne(
        {
          _id: courseId,
          "chapters._id": chapterId,
          "chapters.days._id": dayId,
        },
        {
          $set: {
            "chapters.$[chapter].days.$[day].title": title,
          },
        },
        {
          arrayFilters: [{ "chapter._id": chapterId }, { "day._id": dayId }],
        }
      );
      message = "UPDATED";
    } else {
      // If dayId doesn't exist, create a new day
      result = await CourseModel.updateOne(
        {
          _id: courseId,
          "chapters._id": chapterId,
        },
        {
          $push: {
            "chapters.$.days": {
              title: title,
            },
          },
        }
      );
      message = "SUCCESS";
    }

    revalidatePath(
      `/dashboard/courses/videos/${courseId}/add-lesson/${chapterId}`,
      "layout"
    );

    return message;
  } catch (error) {
    console.log(error);
    return "FAILURE";
  }
};

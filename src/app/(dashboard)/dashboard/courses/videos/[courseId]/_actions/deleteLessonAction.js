"use server";

import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";
import { revalidatePath } from "next/cache";

async function deleteLessonAction( courseId, chapterId, dayId ) {
  try {
    if (!courseId || !chapterId || !courseId) return "FAILURE";
    await connectDB();
    const removed = await CourseModel.findOneAndUpdate(
      {
        _id: courseId,
        "chapters._id": chapterId,
        "chapters.days._id": dayId,
      },
      {
        $pull: {
          "chapters.$.days": {
            _id: dayId,
          },
        },
      }
    );

    revalidatePath(`/dashboard/courses/videos`, "layout");

    return "SUCCESS";
  } catch (error) {
    console.log(error);

    return "FAILURE";
  }
}

export default deleteLessonAction;

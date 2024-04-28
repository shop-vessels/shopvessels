"use server";

import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";

export async function uploadContentAction(content, courseId, chapterId, dayId) {
  try {
    await connectDB();
    const course = await CourseModel.findById(courseId);
    const chapterIndex = course.chapters.findIndex(
      (chapter) => chapter._id.toString() === chapterId
    );
    const dayIndex = course.chapters[chapterIndex].days.findIndex(
      (day) => day._id.toString() === dayId
    );

    const result = await CourseModel.findOneAndUpdate(
      {
        _id: courseId,
        "chapters._id": chapterId,
        "chapters.days._id": dayId,
      },
      {
        $set: {
          [`chapters.${chapterIndex}.days.${dayIndex}.lesson.textContent`]: content,
        },
      }
    );
    return "SUCCESS";
  } catch (error) {
    console.log(error);
    return "FAILURE";
  }
}

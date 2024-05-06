"use server";
import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";
import { revalidatePath } from "next/cache";

export async function linkDeleteAction(courseId, chapterId, dayId, id) {
  try {
    await connectDB();
    const course = await CourseModel.findOne({
      _id: courseId,
      "chapters._id": chapterId,
      "chapters.days._id": dayId,
    }).select("chapters");

    const chapterIndex = course.chapters.findIndex(
      (chapter) => chapter._id.toString() === chapterId
    );
    const dayIndex = course.chapters[chapterIndex].days.findIndex(
      (day) => day._id.toString() === dayId
    );
    const lessonIndex = course.chapters[chapterIndex].days[
      dayIndex
    ].lesson.externalLink.findIndex(
      (link) => link._id.toString() === id.toString()
    );

    if (lessonIndex !== -1) {
      course.chapters[chapterIndex].days[dayIndex].lesson.externalLink.splice(
        lessonIndex,
        1
      );
      await course.save();
      revalidatePath(
        `/dashboard/courses/videos/${courseId}/manage-lesson/${chapterId}/${dayId}`
      );
      return "SUCCESS";
    } else {
      return "FAILURE: Lesson not found";
    }
  } catch (error) {
    console.log(error);
    return "FAILURE: An error occurred";
  }
}

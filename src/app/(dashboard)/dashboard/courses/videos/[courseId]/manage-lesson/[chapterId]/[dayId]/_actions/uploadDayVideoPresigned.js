"use server";
import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";
import { revalidatePath } from "next/cache";

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

    // Find the correct chapter and day
    const chapterIndex = course.chapters.findIndex(
      (chapter) => chapter._id.toString() === chapterId
    );
    if (chapterIndex === -1) {
      return "FAILURE";
    }

    const dayIndex = course.chapters[chapterIndex].days.findIndex(
      (day) => day._id.toString() === dayId
    );
    if (dayIndex === -1) {
      return "FAILURE";
    }

    // Update the videos array
    course.chapters[chapterIndex].days[dayIndex].lesson.videos.push({
      title,
      S3Key,
    });

    // Save the updated course
    await course.save();

    // Revalidate path
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

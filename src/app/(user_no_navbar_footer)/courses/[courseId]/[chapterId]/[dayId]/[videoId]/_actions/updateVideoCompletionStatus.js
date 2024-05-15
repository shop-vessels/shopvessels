"use server";

import connectDB from "@/database/connectDatabase";
import CourseProgressModel from "@/database/models/ProgressModel";
import { revalidatePath } from "next/cache";

export async function updateVideoCompletionStatus(userId, courseId, dayId) {
  await connectDB();

  const courseProgress = await CourseProgressModel.findOne({
    userId,
    courseId,
  }).select("completedChapters");

  if (courseProgress?.completedChapters?.includes(dayId)) {
    courseProgress.completedChapters = courseProgress.completedChapters.filter(
      (id) => id !== dayId
    );
  } else {
    if (Array.isArray(courseProgress?.completedChapters)) {
      courseProgress?.completedChapters?.push(dayId);
    } else {
      courseProgress.completedChapters = [dayId];
    }
  }

  const saved = await courseProgress.save();

  revalidatePath(`/courses/${courseId}`, "layout");

  return saved?.completedChapters?.includes(dayId);
}

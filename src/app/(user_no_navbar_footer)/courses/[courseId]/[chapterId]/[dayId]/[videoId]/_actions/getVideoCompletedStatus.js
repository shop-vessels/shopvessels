"use server";

import connectDB from "@/database/connectDatabase";
import CourseProgressModel from "@/database/models/ProgressModel";

export async function getVideoCompletedStatus(userId, courseId, dayId) {
  await connectDB();
  const course = await CourseProgressModel.findOne({ userId, courseId })
    .select("completedChapters")
    .lean()
    .exec();


  return !!course?.completedChapters?.includes(dayId);
}

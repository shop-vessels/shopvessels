"use server";
import connectDB from "@/database/connectDatabase";
import CourseProgressModel from "@/database/models/ProgressModel";
import { AuthOptions } from "@/lib/auth/authOptions";
import { getServerSession } from "next-auth";

export async function getCompletedProgress(courseId, chapters) {
  await connectDB();
  const session = await getServerSession(AuthOptions);
  const progress = await CourseProgressModel.findOne({
    courseId,
    userId: session.user._id,
  }).select("completedChapters");

  const days = chapters
    .map((chapter) => chapter.days.map((day) => day._id.toString()))
    .flatMap((days) => days);

  const completeCount = days.reduce((acc, day) => {
    if (progress.completedChapters.includes(day)) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (completeCount / days.length) * 100;
}

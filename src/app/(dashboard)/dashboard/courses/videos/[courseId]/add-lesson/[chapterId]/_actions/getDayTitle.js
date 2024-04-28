"use server";

import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";

export async function getDayTitle(courseId, chapterId, dayId) {
  await connectDB();
  const day = await CourseModel.findOne({
    _id: courseId,
    "chapters._id": chapterId,
    "chapters.days._id": dayId,
  })
    .populate({
      path: "chapters.days",
      match: { _id: dayId },
    })
    .select("chapters.days");

  const title = day?.chapters[0]?.days[0]?.title;
  return title;
}

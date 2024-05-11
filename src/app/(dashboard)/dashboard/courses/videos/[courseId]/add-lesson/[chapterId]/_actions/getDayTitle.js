"use server";

import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";

export async function getDayTitle(courseId, chapterId, dayId) {
  "use server";
  await connectDB();
  const course = await CourseModel.findOne({
    _id: courseId,
  })
    .select("chapters")
    .lean()
    .exec();

  return (
    course?.chapters
      ?.find(({ _id }) => _id?.toString() === chapterId)
      ?.days?.find(({ _id }) => _id?.toString() === dayId)?.title || ""
  );
}

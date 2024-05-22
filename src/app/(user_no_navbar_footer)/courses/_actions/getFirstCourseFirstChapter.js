"use server";

import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";

export async function getFirstCourseFirstChapter(courseId) {
  await connectDB();
  const course = await CourseModel.findById(courseId).lean().exec();
  const chapter = course?.chapters?.[0];
  const dayId = chapter?.days?.[0]._id;
  
  return chapter?._id && dayId
    ? { chapterId: chapter?._id.toString(), dayId: dayId.toString() }
    : { chapterId: null, dayId: null };
}

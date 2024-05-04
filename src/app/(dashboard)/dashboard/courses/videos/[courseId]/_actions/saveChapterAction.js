"use server";

import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";
import { revalidatePath } from "next/cache";

export async function saveChapterAction(courseId, formData) {
  const title = formData.get("chapter");
  if (!title || title.length === 0) return;

  try {
    await connectDB();
    const course = await CourseModel.findById(courseId);
    course.chapters
      ? course.chapters.push({ title })
      : (course.chapters = [{ title }]);
    const saved = await course.save();

    revalidatePath(`/dashboard/courses/videos/${courseId}`);

    return "SUCCESS";
  } catch (error) {
    console.log(error);
    return "FAILURE";
  }
}

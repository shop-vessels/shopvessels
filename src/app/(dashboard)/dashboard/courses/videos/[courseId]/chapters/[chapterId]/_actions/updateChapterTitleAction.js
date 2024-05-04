"use server";

import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";
import { revalidatePath } from "next/cache";

export async function updateChapterTitleAction(courseId, chapterId, title) {
  try {
    await connectDB();
    const course = await CourseModel.findOne({
      _id: courseId,
      "chapters._id": chapterId,
    }).select("chapters");

    course.chapters = course.chapters.map((props) =>
      props?._id.toString() === chapterId ? { ...props, title } : props
    );

    await course.save();

    revalidatePath(
      `/dashboard/courses/videos/${courseId}/chapters/${chapterId}`
    ,"layout");
    return "SUCCESS";
  } catch (error) {
    console.log(error);
    return "FAILURE";
  }
}

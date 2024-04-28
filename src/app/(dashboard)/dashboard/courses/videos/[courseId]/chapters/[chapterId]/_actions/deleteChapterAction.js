"use server";

import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";

export async function deleteChapterAction(courseId, chapterId) {
  try {
    await connectDB();
    const course = await CourseModel.findOne({
      _id: courseId,
      "chapters._id": chapterId,
    }).select("chapters");
    course.chapters = course.chapters.filter(
      ({ _id }) => _id.toString() !== chapterId
    );

    await course.save();

    return "SUCCESS";
  } catch (error) {
    console.log(error);
    return "FAILURE";
  }
}

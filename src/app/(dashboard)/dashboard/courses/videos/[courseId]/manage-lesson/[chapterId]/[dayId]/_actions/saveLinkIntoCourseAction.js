"use server";
import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";
import { revalidatePath } from "next/cache";

export async function saveLinkIntoCourseAction(
  courseId,
  chapterId,
  dayId,
  link
) {
  try {
    await connectDB();
    const course = await CourseModel.findOne({
      _id: courseId,
      "chapters._id": chapterId,
      "chapters.days._id": dayId,
    }).select("chapters");

    let filesLinks = course?.chapters
      ?.filter(({ _id }) => _id.toString() === chapterId)[0]
      ?.days?.filter(({ _id }) => _id.toString() === dayId)[0]
      ?.lesson?.externalLink;

    if (filesLinks) {
      filesLinks.push({ title: link });
    } else {
      filesLinks = [{ title: link }];
    }

    await course.save();

    revalidatePath(
      `/dashboard/courses/videos/${courseId}/manage-lesson/${chapterId}/${dayId}`
    );

    return "SUCCESS";
  } catch (error) {
    console.log(error);
    return "FAILURE";
  }
}

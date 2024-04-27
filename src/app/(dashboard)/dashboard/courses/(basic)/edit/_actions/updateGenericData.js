"use server";

import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";
import { revalidatePath } from "next/cache";

export async function updateGenericData(values, id) {
  try {
    await connectDB();

    const course = await CourseModel.findById(id);

    if (values.enrollmentStatus)
      course.enrollmentStatus = values.enrollmentStatus;
    if (values.coursePrice) course.coursePrice = values.coursePrice;
    if (values.level) course.level = values.level;
    if (values.providesCertificate)
      course.providesCertificate = values.providesCertificate === "Yes";
    if (values.totalDuration) course.totalDuration = values.totalDuration;

    if (values.prerequisites) course.prerequisites = values.prerequisites;

    await course.save();

    revalidatePath("/dashboard/courses", "page");

    return "SUCCESS";
  } catch (error) {
    console.log(error);
    return "FAILURE";
  }
}

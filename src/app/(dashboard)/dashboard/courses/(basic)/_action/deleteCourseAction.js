"use server";

import { deleteAssetFromS3 } from "@/database/actions/S3AssetsDeleteByKey";
import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";
import { revalidatePath } from "next/cache";

export async function deleteCourseAction(id) {
  try {
    await connectDB();
    const course = await CourseModel.findById(id).select("S3Key").lean().exec();

    await deleteAssetFromS3({ S3Key: course.S3Key });

    await CourseModel.findByIdAndDelete(id);
    revalidatePath("/dashboard/courses", "page");

    return "SUCCESS";
  } catch (error) {
    console.log(error);

    return "FAILURE";
  }
}

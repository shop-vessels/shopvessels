"use server";

import { deleteAssetFromS3 } from "@/database/actions/S3AssetsDeleteByKey";
import { uploadAssetsFileToS3 } from "@/database/actions/ThumbnailUploadAction";
import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";
import { revalidatePath } from "next/cache";

export async function updateCourseMetaAction(formData, id) {
  const title = formData.get("title");
  const description = formData.get("description");
  const category = formData.get("category");
  const file = formData.get("thumbnail");

  // TODO: Implement Admin checkpoint security
  try {
    await connectDB();
    const course = await CourseModel.findById(id);

    if (title) course.title = title;
    if (description) course.description = description;
    if (category) course.category = category;
    if (file) {
      await deleteAssetFromS3({ S3Key: course.S3Key });
      const { publicUrl, S3Key } = await uploadAssetsFileToS3(file, "courses");
      course.S3Key = S3Key;
      course.image = publicUrl;
    }

    await course.save();
    revalidatePath("/dashboard/courses", "page");
    return "SUCCESS";
  } catch (error) {
    console.log(error);
    return "FAILURE";
  }
}

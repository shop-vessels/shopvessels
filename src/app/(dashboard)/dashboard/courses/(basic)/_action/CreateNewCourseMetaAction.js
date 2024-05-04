"use server";

import { uploadAssetsFileToS3 } from "@/database/actions/ThumbnailUploadAction";
import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";
import { revalidatePath } from "next/cache";

async function CreateNewCourseMetaAction(formData) {
  const title = formData.get("title");
  const description = formData.get("description");
  const category = formData.get("category");
  const file = formData.get("thumbnail");

  if (!title || !description || !category || !file) {
    return "INCLUDE ALL FIELDS";
  }
  // TODO: Implement Admin checkpoint security
  try {
    await connectDB();
    const { publicUrl, S3Key } = await uploadAssetsFileToS3(file, "courses");

    const course = new CourseModel({
      title,
      description,
      category,
      image: publicUrl,
      S3Key,
    });
    const saved = await course.save();

    revalidatePath("/dashboard/courses", "page");

    return { success: true, id: saved._id.toString() };
  } catch (err) {
    console.error("Error uploading file to S3:", err);
    return "FAILURE";
  }
}

export default CreateNewCourseMetaAction;

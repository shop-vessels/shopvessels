"use server";

import { deleteAssetFromS3 } from "@/database/actions/S3AssetsDeleteByKey";
import connectDB from "@/database/connectDatabase";
import BlogModel from "@/database/models/BlogModel";
import { revalidatePath } from "next/cache";

export async function deleteBlogAction(id) {
  try {
    await connectDB();

    const blog = await BlogModel.findById(id).select("S3Key");

    await deleteAssetFromS3({ S3Key: blog.S3Key });

    await BlogModel.findByIdAndDelete(id);
    revalidatePath("/dashboard/blogs", "page");
    return "SUCCESS";
  } catch (e) {
    console.log(e);
    return "FAILURE";
  }
}

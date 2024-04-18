"use server";

import { deleteAssetFromS3 } from "@/database/actions/S3AssetsDeleteByKey";
import { uploadAssetsFileToS3 } from "@/database/actions/ThumbnailUploadAction";
import connectDB from "@/database/connectDatabase";
import BlogModel from "@/database/models/BlogModel";

export async function handleEditBlogFormUpdateAction({ formData, id} ) {
  const title = formData.get("title");
  const description = formData.get("description");
  const category = formData.get("category");
  const file = formData.get("thumbnail");

  try {
    
    await connectDB();

    const blog = await BlogModel.findById(id);

    if (title) blog.title = title;
    if (description) blog.description = description;
    if (category) blog.category = category;

    if (file) {
      const { success, publicUrl, S3Key } = await uploadAssetsFileToS3(file);
      if (success) {
        await deleteAssetFromS3({ S3Key: blog.S3Key });
        blog.image = publicUrl;
        blog.S3Key = S3Key;
      }
    }

    await blog.save();
    return "SUCCESS";
  } catch (err) {
    console.log(err);
    return "FAILURE";
  }
}

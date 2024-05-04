"use server";

import connectDB from "@/database/connectDatabase";
import BlogModel from "@/database/models/BlogModel";

export async function updateContentAction({ content, id }) {
  await connectDB();
  try {
    
    const blog = await BlogModel.findById(id);
    blog.content = content;
    await blog.save();

    return "SUCCESS";
  } catch (error) {
    console.log(error);
    return "ERROR";
  }
}

"use server"

import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";

export async function getCourse(id) {
  
    await connectDB();
    const course = await CourseModel.findById(id)
      .select("title chapters")
      .lean()
      .exec();
    return course;
  }
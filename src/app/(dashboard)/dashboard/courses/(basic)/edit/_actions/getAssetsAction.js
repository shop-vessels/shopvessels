"use server";

import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";

export async function getAssetsAction(courseId, videoId) {
  try {
    await connectDB();
    const course = await CourseModel.findById(courseId);

    if (!course) return [];

    const videos = course?.videos.filter(
      (props) => props._id.toString() === videoId
    )?.[0];

    return videos.assets;
  } catch (error) {
    console.log(error);

    return "FAILURE";

    // throw new Error("Error while querying assets");
  }
}

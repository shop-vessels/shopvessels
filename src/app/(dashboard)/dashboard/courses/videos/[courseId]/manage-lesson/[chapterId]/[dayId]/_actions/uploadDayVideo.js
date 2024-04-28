"use server";
import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";
import { VideoBucket, s3VideoClient } from "@/config/S3AssetsConfig";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import crypto from "crypto";
import { revalidatePath } from "next/cache";

export async function uploadDayVideo(formData, { courseId, chapterId, dayId }) {
  try {
    await connectDB();

    // Ensure all required parameters are provided
    if (!formData || !courseId || !chapterId || !dayId) return "FAILURE";

    // Access the video file from the formData
    const video = formData.get("video");

    // Ensure a video file is provided
    if (!video) return "FAILURE";

    // Generate a unique S3 key for the uploaded video
    const fileHash = crypto
      .createHash("md5")
      .update(video.name + crypto.randomBytes(16).toString("hex"))
      .digest("hex");

    const S3Key = `course/${fileHash}`;

    // Upload the video file to the S3 bucket
    const command = new PutObjectCommand({
      Bucket: VideoBucket,
      Key: S3Key,
      Body: new Uint8Array(await video.arrayBuffer()),
      ContentType: video.type,
    });

    await s3VideoClient.send(command);

    // Update the 'videos' field of the lesson within the specific day (lesson) in the course model
    const course = await CourseModel.findById(courseId);
    const chapterIndex = course.chapters.findIndex(
      (chapter) => chapter._id.toString() === chapterId
    );
    const dayIndex = course.chapters[chapterIndex].days.findIndex(
      (day) => day._id.toString() === dayId
    );

    // Update the 'videos' field of the lesson within the specific day (lesson) in the course model
    const updatedCourse = await CourseModel.findOneAndUpdate(
      {
        _id: courseId,
        "chapters._id": chapterId,
        "chapters.days._id": dayId,
      },
      {
        $push: {
          [`chapters.${chapterIndex}.days.${dayIndex}.lesson.videos`]: {
            title: video.name,
            S3Key,
          },
        },
      },
      {
        new: true,
      }
    );

    if (!updatedCourse) {
      console.log("Updated Course ", updatedCourse);
      return "FAILURE";
    }

    revalidatePath(
      `/dashboard/courses/videos/${courseId}/manage-lesson/${chapterId}/${dayId}`,
      "page"
    );

    return "SUCCESS";
  } catch (error) {
    console.log(error);
    return "FAILURE";
  }
}

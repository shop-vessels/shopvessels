"use server";

import { uploadAssetsFileToS3 } from "@/database/actions/ThumbnailUploadAction";
import CourseModel from "@/database/models/CourseModel";

export async function uploadVideoThumbnailAction(formData, courseId, videoId) {
  try {
    const thumbnail = formData.get("thumbnail");

    if (!thumbnail) return "FAILURE";

    const { publicUrl, S3Key } = await uploadAssetsFileToS3(
      thumbnail,
      "courses"
    );


    const course = await CourseModel.findById(courseId);

    course.videos = course.videos.map((props) => {
      if (props._id.toString() !== videoId) return props;

      console.log("came here ");
      return { ...props, thumbnail: publicUrl, thumbnail_S3Key: S3Key };
    });

    // console.log(course.videos);

    const save = await course.save();

    return "SUCCESS";
  } catch (error) {
    console.log("Error while uploading video thumbnail ", error);
    return "FAILURE";
  }
}

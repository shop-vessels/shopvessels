"use server";

import CourseModel from "@/database/models/CourseModel";
import {
  deleteVideoFromBucket,
  uploadVideoToBucket,
} from "./uploadVideoToBucketAction";
import { revalidatePath } from "next/cache";

async function changeVideoAction(formData, courseId, videoId) {
  try {
    const file = formData.get("video");

    const { S3Key, title } = await uploadVideoToBucket(file);

    const course = await CourseModel.findById(courseId);

    let keyToDel = "";

    course.videos = course.videos.map((props) => {
      if (props._id.toString() !== videoId) return props;

      keyToDel = props.S3Key;

      const obj = {
        ...props,
        thumbnail: null,
        thumbnail_S3Key: null,
        S3Key: S3Key,
        title,
      };

      return obj;
    });

    await deleteVideoFromBucket(keyToDel).catch((err) =>
      console.log("error deleting old course video ", err)
    );

    await course.save();

    revalidatePath("/dashboard/courses/edit", "page");

    return "SUCCESS";
  } catch (error) {
    console.log(error);
    console.log("error");
    return "FAILURE";
  }
}

export default changeVideoAction;

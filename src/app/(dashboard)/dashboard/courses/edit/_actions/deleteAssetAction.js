"use server";
import { revalidatePath } from "next/cache";
import { deleteVideoFromBucket } from "./uploadVideoToBucketAction";
import CourseModel from "@/database/models/CourseModel";
import connectDB from "@/database/connectDatabase";

export async function deleteAssetAction(courseId, videoId, assetS3Key) {
  try {
    await connectDB();
    const result = await CourseModel.updateOne(
      {
        _id: courseId,
        "videos._id": videoId,
        "videos.assets.assetS3Key": assetS3Key
      },
      {
        $pull: {
          "videos.$.assets": { assetS3Key: assetS3Key }
        }
      }
    );

    // if (result.nModified > 0) {
      await deleteVideoFromBucket(assetS3Key);
      revalidatePath("/dashboard/courses/edit/assets", "page");
      return "SUCCESS";
    // } else {
    //   return "FAILURE";
    // }
  } catch (error) {
    console.error(error);
    return "FAILURE";
  }
}

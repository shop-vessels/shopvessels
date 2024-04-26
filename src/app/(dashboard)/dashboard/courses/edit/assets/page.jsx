import { isValidObjectId } from "mongoose";
import React from "react";
import AttachAssets from "../_components/CourseVideoUpload/AttachAssets";
import AssetsListing from "../_components/CourseVideoUpload/AssetsListing";

function page({ searchParams }) {
  const { courseId, videoId } = searchParams;
  const courseIdValid = isValidObjectId(courseId);
  const videoIdValid = isValidObjectId(videoId);

  console.log(courseId, videoId);

  if (!courseIdValid || !videoIdValid)
    return (
      <div className="py-10 bg-foreground/5 flex justify-center items-center flex-col rounded-md">
        <h2 className="text-lg font-bold">Invalid URL</h2>
        <p>Your URL is invalid, please check your url </p>
      </div>
    );
  return (
    <div>
      <AssetsListing courseId={courseId} videoId={videoId} />
      <div className="max-w-md relative mx-auto mt-5">
        <AttachAssets courseId={courseId} videoId={videoId} />
      </div>
    </div>
  );
}

export default page;

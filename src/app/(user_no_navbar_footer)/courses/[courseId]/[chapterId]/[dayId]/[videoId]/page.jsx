import ErrorBlock from "@/app/(user_side)/all-courses/_components/ErrorBlock";
import VideoPlayer from "@/components/VideoPlayer";
import { Button } from "@/components/ui/button";
import { VideoBucket, s3VideoClient } from "@/config/S3AssetsConfig";
import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { Loader } from "lucide-react";
import React, { Suspense } from "react";

async function getSignedVideoUrl(
  S3Key,
  { courseId, chapterId, dayId, videoId }
) {
  try {
    await connectDB();
    const course = await CourseModel.findById(courseId)
      .select("chapters")
      .lean()
      .exec();

    const chapter = course.chapters.find(
      (chapter) => chapter._id.toString() === chapterId
    );
    const days = chapter.days.find((day) => day._id.toString() === dayId);
    const video = days.lesson.videos.find(
      (video) => video._id.toString() === videoId
    );
    const videoTitle = video.title;

    const videoExtension = videoTitle.substring(
      videoTitle.lastIndexOf(".") + 1
    );

    const command = new GetObjectCommand({
      Bucket: VideoBucket,
      Key: S3Key,
      ResponseContentType: `video/${videoExtension}`, // Specify the desired content type of the video
      ResponseContentDisposition: "inline", // Specify how the video should be displayed
    });

    const url = await getSignedUrl(s3VideoClient, command, {
      expiresIn: 60 * 60,
    });

    return url;
  } catch (error) {
    console.log(error);
    return null;
  }
}

const page = async ({ params, searchParams }) => {
  const { courseId, chapterId, dayId, videoId } = params;
  const { S3Key } = searchParams;

  const videoUrl = await getSignedVideoUrl(S3Key, {
    courseId,
    chapterId,
    dayId,
    videoId,
  });
  if (videoUrl === null) {
    return (
      <ErrorBlock
        code={403}
        title={"Something wen't wrong!"}
        desc={"URL might be incorrect or try reloading the page!"}
      />
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 flex flex-col items-center">
      <div className="aspect-video w-full">
        <VideoPlayer url={videoUrl} />
      </div>
      <Button className="mx-auto mt-5">Mark As Completed</Button>
    </div>
  );
};

export default page;

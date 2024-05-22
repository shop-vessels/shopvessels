import ErrorBlock from "@/app/(user_side)/all-courses/_components/ErrorBlock";
import VideoPlayer from "@/components/VideoPlayer";
import { Button } from "@/components/ui/button";
import { VideoBucket, s3VideoClient } from "@/config/S3AssetsConfig";
import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import MarkCompletedButton from "./_components/MarkCompletedButton";
import { getServerSession } from "next-auth";
import { AuthOptions } from "@/lib/auth/authOptions";

async function getSignedVideoUrl(
  S3Key,
  { courseId, chapterId, dayId, videoId }
) {
  "use server";
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

async function getNextPrevVideoS3Key(courseId, chapterId, dayId, videoId) {
  "use server";
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
    const videoIndex = days.lesson.videos.findIndex(
      (video) => video._id.toString() === videoId
    );

    let prev = null;
    let next = null;

    if (videoIndex > 0 && days.lesson.videos[videoIndex - 1]) {
      const { _id: prevId, S3Key: prevS3Key } =
        days.lesson.videos[videoIndex - 1];
      prev = { prevId: prevId.toString(), prevS3Key };
    }

    if (
      videoIndex < days.lesson.videos.length - 1 &&
      days.lesson.videos[videoIndex + 1]
    ) {
      const { _id: nextId, S3Key: nextS3Key } =
        days.lesson.videos[videoIndex + 1];
      next = { nextId: nextId.toString(), nextS3Key };
    }

    return { prev, next };
  } catch (error) {
    console.log("error ", error);
    return { prev: null, next: null };
  }
}

const page = async ({ params, searchParams }) => {
  const { courseId, chapterId, dayId, videoId } = params;

  const { S3Key } = searchParams;

  const { prev, next } = await getNextPrevVideoS3Key(
    courseId,
    chapterId,
    dayId,
    videoId
  );

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

  const session = await getServerSession(AuthOptions);

  return (
    <div className="max-w-5xl mx-auto mt-10 flex flex-col items-center">
      <div className="self-start">
        <Button
          asChild
          variant="outline"
          size="sm"
          className="flex items-center gap-2 justify-self-start self-start"
        >
          <Link href={`/courses/${courseId}`}>
            <ChevronLeft /> Go Back
          </Link>
        </Button>
      </div>
      <Separator className="mt-3 w-full " />
      <div className="aspect-video w-full rounded-md overflow-hidden mt-3">
        <VideoPlayer url={videoUrl} />
      </div>
      <div className="flex w-full items-center justify-between mt-3 py-2">
        {prev ? (
          <Button variant="outline" asChild disabled={!prev}>
            <Link
              href={{
                pathname: `/courses/${courseId}/${chapterId}/${dayId}/${prev?.prevId}`,
                query: { S3Key: prev.prevS3Key },
              }}
            >
              Prev
            </Link>
          </Button>
        ) : (
          <Button variant="outline" disabled={!prev}>
            Prev
          </Button>
        )}

        {next ? (
          <Button variant="outline" asChild disabled={!next}>
            <Link
              href={{
                pathname: `/courses/${courseId}/${chapterId}/${dayId}/${next.nextId}`,
                query: { S3Key: next.nextS3Key },
              }}
            >
              Next
            </Link>
          </Button>
        ) : (
          <Button variant="outline" disabled={!next}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default page;

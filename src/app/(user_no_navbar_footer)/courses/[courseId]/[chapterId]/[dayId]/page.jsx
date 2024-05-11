import React from "react";
import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";
import ErrorBlock from "@/app/(user_side)/all-courses/_components/ErrorBlock";
import VideosBlock from "./_components/VideoBlock";
import { Files } from "lucide-react";
import FilesBlock from "./_components/FilesBlock";
import LinksBlock from "./_components/LinksBlock";

async function getDayData(courseId, chapterId, dayId) {
  try {
    await connectDB();
    const course = await CourseModel.findById(courseId)
      .select("chapters")
      .lean()
      .exec();

    if (!course) {
      throw new Error("Course not found");
    }

    const chapter = course.chapters.find(
      (chapter) => chapter._id.toString() === chapterId
    );

    if (!chapter) {
      throw new Error("Chapter not found");
    }

    const day = chapter.days.find((day) => day._id.toString() === dayId);

    if (!day) {
      throw new Error("Day not found");
    }

    return day.lesson;
  } catch (error) {
    console.error("Error fetching day data:", error);
    return null;
  }
}

const SingleDayVideo = async ({ params }) => {
  const { courseId, chapterId, dayId } = params;

  const lesson = await getDayData(courseId, chapterId, dayId);
  if (lesson === null) {
    return (
      <ErrorBlock
        code={403}
        title={"URL is invalid"}
        desc={"Please try reloading the page!"}
      />
    );
  }

  return (
    <div className="p-5 max-w-5xl mx-auto">
      <VideosBlock
        {...{ courseId, chapterId, dayId }}
        videos={lesson?.videos || []}
      />
      <div className="flex gap-5 ">
        <FilesBlock
          {...{ courseId, chapterId, dayId }}
          files={lesson?.files || []}
        />
        <LinksBlock links={lesson.externalLink || []} />
      </div>
    </div>
  );
};

export default SingleDayVideo;

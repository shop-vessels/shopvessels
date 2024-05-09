import React from "react";
import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";
import ErrorBlock from "@/app/(user_side)/all-courses/_components/ErrorBlock";
import VideosBlock from "./_components/VideoBlock";

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

  console.log(courseId, chapterId, dayId);

  return (
    <div>
      <VideosBlock videos={lesson?.videos || []} />
    </div>
  );
};

export default SingleDayVideo;

import React from "react";
import ChapterForm from "./_components/ChapterForm";
import CourseModel from "@/database/models/CourseModel";
import { notFound } from "next/navigation";

const page = async ({ params }) => {
  const { courseId, chapterId } = params;

  const course = await CourseModel.findOne({
    _id: courseId,
    "chapters._id": chapterId,
  }).select("chapters");
  if (!course) {
    return notFound();
  }

  const title = course?.chapters?.filter(
    ({ _id }) => _id.toString() === chapterId
  )?.[0]?.title;
  console.log(title);

  return (
    <main className="p-5 w-full max-w-lg mx-auto border mt-5 rounded-md">
      <h1 className="text-lg font-bold pb-5">Update Chapter Title</h1>
      <ChapterForm {...{ courseId, chapterId, title }} />
    </main>
  );
};

export default page;

import React from "react";
import ManageVideos from "./_components/ManageVideos/ManageVideos";
import ManageBlogText from "./_components/ManageBlogText/ManageBlogText";
import { Separator } from "@/components/ui/separator";
import CourseModel from "@/database/models/CourseModel";
import connectDB from "@/database/connectDatabase";
import ManageFileUpload from "./_components/ManageFileUpload/ManageFileUpload";

async function getContent({ courseId, chapterId, dayId }) {
  try {
    await connectDB();
    const course = await CourseModel.findOne({
      _id: courseId,
      "chapters._id": chapterId,
      "chapters.days._id": dayId,
    });

    return course?.chapters
      ?.filter(({ _id }) => _id?.toString() === chapterId)?.[0]
      ?.days?.filter(({ _id }) => _id?.toString() === dayId)?.[0]?.lesson
      ?.textContent;
  } catch (error) {
    return "";
  }
}

async function page({ params }) {
  const content = await getContent(params);

  return (
    <div className="flex flex-col gap-5 p-5">
      <ManageVideos {...{ ...params }} />

      <Separator className="my-5" />

      <ManageBlogText {...params} content={content} />

      <Separator className="my-5" />

      <ManageFileUpload {...params} />
    </div>
  );
}

export default page;

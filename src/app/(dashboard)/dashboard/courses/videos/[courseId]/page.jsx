import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";
import React from "react";
import ChapterForm from "./chapters/[chapterId]/_components/ChapterForm";
import { Separator } from "@/components/ui/separator";

async function page({ params }) {
  const { courseId } = params;
  await connectDB();

  const { chapters } = await CourseModel.findById(courseId)
    .select("chapters")
    .lean()
    .exec();

  return (
    <>
      <div className="flex-grow h-full p-5 overflow-hidden overflow-y-auto">
        <h1 className="text-lg lg:text-2xl font-bold">Manage Chapters</h1>
        <p>Here you can update or delete the all chapters</p>
        <Separator className="mt-5" />
        {(chapters?.length && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
            {chapters.map(({ _id: chapterId, title }) => (
              <ChapterForm
                key={chapterId.toString()}
                {...{ courseId, chapterId: chapterId.toString(), title }}
              />
            ))}
          </div>
        )) || <div className="text-center py-10 text-muted-foreground">No chapters found</div>}
      </div>
    </>
  );
}

export default page;

import { Separator } from "@/components/ui/separator";
import CourseModel from "@/database/models/CourseModel";
import { FileVideo, Trash } from "lucide-react";
import React from "react";
import DeleteFileButton from "./DeleteFileButton";
// import DeleteVideoButton from "./DeleteVideoButton";

const DayFiles = async ({ courseId, chapterId, dayId }) => {
  const course = await CourseModel.findOne({
    _id: courseId,
    "chapters._id": chapterId,
    "chapters.days._id": dayId,
  })
    .select("chapters")
    .lean()
    .exec();

  const files = course?.chapters
    ?.filter(({ _id }) => _id.toString() === chapterId)[0]
    ?.days?.filter(({ _id }) => _id.toString() === dayId)[0]?.lesson?.files;

  return (
    <div className="flex flex-col mt-5 gap-2 w-full mx-auto bg-background p-5 rounded-md">
      <h2 className="font-bold">Files</h2>
      <Separator className="my-1" />
      <div className=" flex flex-col gap-2 max-h-[300px] overflow-y-auto pr-2">
        {(files &&
          files?.length > 0 &&
          files?.map(({ title, S3Key, _id }) => (
            <div
              key={S3Key}
              className="rounded-md flex gap-2 items-center text-sm border-b py-2"
            >
              <span>
                <FileVideo size={18} />
              </span>
              <p className="line-clamp-1 flex-grow">{title}</p>
              <DeleteFileButton {...{ courseId, chapterId, dayId, S3Key }} />
            </div>
          ))) || <div> No File has been uploaded yet </div>}
      </div>
    </div>
  );
};

export default DayFiles;

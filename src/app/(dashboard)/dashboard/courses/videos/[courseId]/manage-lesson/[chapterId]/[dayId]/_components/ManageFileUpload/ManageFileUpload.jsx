import React from "react";
import FileUploadForm from "./FileUploadForm";
import DayFiles from "./DayFiles";
import { Separator } from "@/components/ui/separator";

function ManageFileUpload({ courseId, chapterId, dayId }) {
  return (
    <div className="flex p-5 bg-foreground/5 flex-col rounded-md w-full max-w-7xl mx-auto">
      <h2 className="text-xl font-bold">Upload File Assets of day</h2>

        <DayFiles {...{ courseId, chapterId, dayId }} />

        <Separator className="my-5 " />
        <FileUploadForm {...{ courseId, chapterId, dayId }} />
    </div>
  );
}

export default ManageFileUpload;

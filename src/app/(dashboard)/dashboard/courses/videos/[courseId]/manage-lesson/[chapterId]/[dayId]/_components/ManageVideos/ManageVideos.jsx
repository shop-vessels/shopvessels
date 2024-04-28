import React from "react";
import { getDayTitle } from "../../../../../add-lesson/[chapterId]/_actions/getDayTitle";
import ManageVideosHeader from "./ManageVideosHeader";
import UploadVideo from "./UploadVideo";
import DayVideos from "./DayVideos";

// {
//   courseId: "662cf06efafb4b557f40879a",
//   chapterId: "662cf080fafb4b557f4087a0",
//   dayId: "662cf27cfafb4b557f4087c7",
// };

async function ManageVideos({ courseId, chapterId, dayId }) {
  const title = await getDayTitle(courseId, chapterId, dayId);

  return (
    <div className="w-full bg-foreground/5 p-5 rounded-md">
      <ManageVideosHeader title={`Manage Videos Of - ${title}`} />
      <DayVideos {...{ courseId, chapterId, dayId }} />
      <UploadVideo {...{ courseId, chapterId, dayId }} />
    </div>
  );
}

export default ManageVideos;

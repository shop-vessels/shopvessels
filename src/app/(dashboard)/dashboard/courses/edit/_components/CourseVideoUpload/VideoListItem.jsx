import React from "react";
import DeleteVideoButtom from "./DeleteVideoButton";
import UploadVideoThumbnail from "./UploadVideoThumbnail";
import CourseModel from "@/database/models/CourseModel";
import ChangeVideo from "./ChangeVideo";

async function VideoListItem(props) {
  const { _id, title, S3Key, courseId } = props;

  const videoId = (_id && _id.toString()) || null;

  const thumbnail = await (
    await CourseModel.findById(courseId).select("videos").lean().exec()
  )?.videos.filter(({ _id }) => _id.toString() === videoId)?.[0]?.thumbnail;

  return (
    <li className=" flex flex-col lg:flex-row gap-5 lg:items-center justify-between">
      {title}
      <div className="flex gap-2 items-center">
        <UploadVideoThumbnail
          {...{ videoId: videoId.toString(), title, S3Key, courseId }}
          thumbnail={thumbnail}
        />
        <ChangeVideo
          {...{ videoId: videoId.toString(), title, S3Key, courseId }}
        />

        <DeleteVideoButtom
          S3Key={S3Key}
          videoId={videoId.toString()}
          courseId={courseId}
        />
      </div>
    </li>
  );
}

export default VideoListItem;

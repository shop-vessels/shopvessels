import React from "react";
import UploadVideoForm from "./UploadVideoForm";
import CourseModel from "@/database/models/CourseModel";
import DeleteVideoButtom from "./DeleteVideoButton";
import VideoListItem from "./VideoListItem";

async function CourseVideoUpload({ id }, params) {
  const courseVideos = await CourseModel.findById(id)
    .select("videos")
    .lean()
    .exec();

  return (
    <section>
      <h2 className="text-2xl font-bold text-foreground/80">
        Upload Videos of Course
      </h2>
      <p>Manage the videos of course</p>

      {(courseVideos?.videos?.length >= 1 && (
        <ul className="border rounded-md p-5 mt-5 flex flex-col gap-2 divide-y justify-center">
          {courseVideos?.videos.map((props) => (
            <VideoListItem {...props} courseId={id} key={props._id} />
          ))}
        </ul>
      )) || (
        <div className="mt-5 bg-foreground/5 py-10 text-center px-10 rounded-md text-foreground/60 font-medium">
          <p>No Video has been uploaded yet</p>
        </div>
      )}

      <UploadVideoForm id={id.toString()} />
    </section>
  );
}

export default CourseVideoUpload;

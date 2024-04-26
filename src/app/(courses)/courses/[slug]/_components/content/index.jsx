import React from "react";
// import VideoPlayer from "./VideoPlayer";
import { Button } from "@/components/ui/button";
import VideoPlayer from "@/components/VideoPlayer/index.jsx";

const CourseContent = ({ url }) => {
  return (
    <main className=" overflow-x-hidden flex flex-col items-stretch lg:p-10  lg:max-w-5xl mx-auto max-h-max overflow-y-auto">
      <VideoPlayer url={url} />
      <div className="mt-10 flex justify-center">
        <Button size="lg" className="font-bold mx-auto">
          Mark Completed
        </Button>
      </div>
    </main>
  );
};

export default CourseContent;

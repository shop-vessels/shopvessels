import React from "react";
// import VideoPlayer from "./VideoPlayer";
import { Button } from "@/components/ui/button";
import VideoPlayer from "@/components/VideoPlayer/index.jsx";

const CourseContent = ({ url }) => {
  return (
    <main className="flex-1 overflow-x-hidden flex justify-center items-center flex-col p-10  max-w-5xl mx-auto min-h-screen overflow-y-auto">
      <VideoPlayer url={url} />
      <div className="mt-10">
        <Button size="lg" className="font-bold">
          Mark Completed
        </Button>
      </div>
    </main>
  );
};

export default CourseContent;

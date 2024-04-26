import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import React from "react";
import WeeksAccordion from "./WeeksAccordion";
import VideoAssets from "./VideoAssets";

function VideoMetaTabs({ id, videos, courseId, videoId, course }) {
  return (
    <Tabs
      defaultValue="playlist"
      className="w-full flex flex-col justify-center"
    >
      <TabsList className="mx-auto">
        <TabsTrigger value="playlist">Play List</TabsTrigger>
        <TabsTrigger value="content">Assets</TabsTrigger>
      </TabsList>
      <TabsContent value="playlist">
        <WeeksAccordion id={id} videos={videos} />
      </TabsContent>
      <TabsContent value="content">
        <VideoAssets
          courseId={courseId}
          videoId={videoId || course?.videos?.[0]?._id}
        />
      </TabsContent>
    </Tabs>
  );
}

export default VideoMetaTabs;

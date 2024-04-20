import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import React from "react";
import WeeksAccordion from "./WeeksAccordion";

function VideoMetaTabs({ id, videos }) {
  return (
    <Tabs
      defaultValue="playlist"
      className="w-full flex flex-col justify-center"
    >
      <TabsList className="mx-auto">
        <TabsTrigger value="playlist">Play List</TabsTrigger>
        <TabsTrigger value="content">Additional Content</TabsTrigger>
      </TabsList>
      <TabsContent value="playlist">
        <WeeksAccordion id={id} videos={videos} />
      </TabsContent>
      <TabsContent value="content">
        <div className="w-full text-center bg-foreground/5 py-5">

        This section will be implement soon
        </div>
        </TabsContent>
    </Tabs>
  );
}

export default VideoMetaTabs;

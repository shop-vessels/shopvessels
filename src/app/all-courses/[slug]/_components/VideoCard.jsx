"use client";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { cleanVideoName } from "@/lib/cleanVideoTitle";
import { Play } from "lucide-react";
import React, { useState } from "react";
import VideoPopup from "./VideoPopUp";
import { getSignedUrl } from "../_actions/getSignedUrl";
import { toast } from "@/components/ui/use-toast";

function VideoCard({ title, S3Key }) {
  // console.log(S3Key);
  const [popUpVisible, setPopUpVisible] = useState(false);
  const [videoURL, setVideoURL] = useState("");

  async function handlePopUp() {
    const url = await getSignedUrl(S3Key);

    setPopUpVisible(true);

    if (url !== "ERROR") {
      console.log(url);
      setVideoURL(url);
    } else {
      toast({
        title: "Something went wrong",
        description: "Please try again",
      });
    }
  }

  return (
    <>
      {popUpVisible && videoURL && <VideoPopup url={videoURL} />}
      <Card className="p-2 group cursor-pointer" onClick={handlePopUp}>
        <div className="w-full bg-foreground/5 group-hover:bg-primary transition-colors rounded-md aspect-video flex justify-center items-center">
          <Play
            size={30}
            className="group-hover:text-white transition-colors"
          />
        </div>

        <CardHeader className="px-2">
          <CardTitle className="text-base line-clamp-2">
            {cleanVideoName(title)}
          </CardTitle>
        </CardHeader>
      </Card>
    </>
  );
}

export default VideoCard;

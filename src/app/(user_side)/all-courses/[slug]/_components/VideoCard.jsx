"use client";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { cleanVideoName } from "@/lib/cleanVideoTitle";
import { Play } from "lucide-react";
import React, { useState } from "react";
import VideoPopup from "./VideoPopUp";
import { getSignedUrl } from "../_actions/getSignedUrl";
import { toast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function VideoCard({ title, S3Key }) {
  const [popUpVisible, setPopUpVisible] = useState(false);
  const [videoURL, setVideoURL] = useState("");

  const router = useRouter();

  const { status, data } = useSession();


  async function handlePopUp() {
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }

    if(data?.user?.role === "UNVERIFIED") {
      toast({
        title: "Unverified Account",
        description: "Please verify your account to access this feature",
      });
      router.push("/")
      return;
    }

    const url = await getSignedUrl(S3Key);

    setPopUpVisible(true);

    if (url !== "ERROR") {
      setVideoURL(url);
    } else {
      toast({
        title: "Something went wrong",
        description: "Please try again",
      });
      setPopUpVisible(false);
    }
  }

  return (
    <>
      {popUpVisible && videoURL && (
        <VideoPopup {...{ popUpVisible, setPopUpVisible }} url={videoURL} />
      )}
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

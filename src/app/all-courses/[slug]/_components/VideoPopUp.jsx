"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Pause, Play } from "lucide-react";

function VideoPopup({ url }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-foreground/40 flex justify-center items-center h-screen">
      <div className="relative rounded-md overflow-hidden">
        <video
          ref={videoRef}
          src={url}
          controls
          controlsList="nodownload"
          preload="metadata"
          autoPlay
          className="w-full max-w-xl aspect-video"
        >
          {/* <source src={url} type="video/*" /> */}
        </video>
        <Button
          onClick={togglePlayPause}
          size="icon"
          className="absolute top-1/2 rounded-full w-16 h-16 -translate-y-1/2 left-1/2 -translate-x-1/2 border-2 border-foreground "
        >
          {isPlaying ? <Pause /> : <Play />}
        </Button>
        
      </div>
    </div>
  );
}

export default VideoPopup;

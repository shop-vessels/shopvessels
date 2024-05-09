import VideoPlayer from "@/components/VideoPlayer/index";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useRef, useState } from "react";

function VideoPopup({ url }) {
  const [hideVid, setHideVid] = useState(false);
  const videoRef = useRef(null);

  const hideVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pause the video
    }
    setHideVid(true); // Hide the video popup
  };

  return (
    <div
      className={`fixed inset-0 bg-foreground/40 flex justify-center items-center h-screen ${
        hideVid ? "hidden" : "block"
      }`}
    >
      {/* Pass the ref to VideoPlayer */}
      <VideoPlayer
        url={url}
        ref={videoRef}
        key={hideVid ? "hidden" : "visible"}
      />
      <Button
        className="absolute md:top-10 lg:right-44 md:right-14 top-4 right-4 "
        onClick={hideVideo}
      >
        <X className="text-white w-6 h-6" />
      </Button>
    </div>
  );
}

export default VideoPopup;

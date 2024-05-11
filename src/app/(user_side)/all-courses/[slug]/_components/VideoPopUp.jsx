import VideoPlayer from "@/components/VideoPlayer/index";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useRef, useState } from "react";

function VideoPopup({ url, popUpVisible, setPopUpVisible }) {
  // const [popUpVisible, setPopUpVisible] = useState(false);
  const videoRef = useRef(null);

  const hideVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pause the video
    }
    setPopUpVisible(false); // Hide the video popup
  };

  return (
    <div
      className={`fixed inset-0 bg-foreground/40 flex justify-center items-center h-screen ${
        !popUpVisible ? "hidden" : "block"
      }`}
    >
      {/* Pass the ref to VideoPlayer */}
      <div className="relative aspect-video w-full max-w-5xl bg-black">
        <VideoPlayer
          url={url}
          ref={videoRef}
          key={!popUpVisible ? "hidden" : "visible"}
        />
      </div>
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

import React from "react";
import Video from "next-video";

const VideoPlayer = () => {
  return (
    <Video
      src={
        "https://vessels-course-videos.s3.ap-south-1.amazonaws.com/computer.mp4"
      }
    />
  );
};

export default VideoPlayer;
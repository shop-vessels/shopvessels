"use client";
import ReactPlayer from "react-player";

const Player = ({ url }) => {
  return (
    <ReactPlayer
      width={"100%"}
      height={"auto"}
      
      controls
      className={"relative video-wraper aspect-video max-w-7xl w-full"}
      url={url}
      config={{
        file: {
          attributes: {
            controlsList: "nodownload",
          },
        },
      }}
    />
  );
};

export default Player;

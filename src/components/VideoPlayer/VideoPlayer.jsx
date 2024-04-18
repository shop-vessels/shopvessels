"use client";
import ReactPlayer from "react-player";

const Player = ({ url }) => {
  return (
    <ReactPlayer
      controls
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

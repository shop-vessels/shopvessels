import React from "react";

const kickstarter = ({ video }) => {
  return (
    <div className="relative ">
      <video
        autoPlay
        muted
        preload="auto"
        className="brightness-90 w-full aspect-[21/9] object-cover"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 flex flex-col gap-5 justify-center items-center w-full h-full">
        <p className="text-white text-4xl ">
          Successfully Launched on Kickstar
        </p>
        <p className="text-white text-lg">View the full video below.</p>
        <button className=" border-2 border-white px-3 py-2 rounded text-white ">
          WATCH VIDEO
        </button>
      </div>
    </div>
  );
};

export default kickstarter;

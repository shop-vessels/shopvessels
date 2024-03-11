import React from "react";

const kickstarter = ({ video }) => {
  return (
    <div>
      <div className="relative ">
        <video
          autoPlay
          muted
          preload="auto"
          width="1280"
          className="brightness-90 w-full"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 flex flex-col gap-5 justify-center items-center w-full h-full px-4 py-8">
          <p className="text-white md:text-4xl text-lg text-center ">
            Successfully Launched on Kickstar
          </p>
          <p className="text-white text-sm">View the full video below.</p>
          <button className=" border-2 border-white px-2 py-2 rounded text-white text-sm">
            WATCH VIDEO
          </button>
        </div>
      </div>
    </div>
  );
};

export default kickstarter;

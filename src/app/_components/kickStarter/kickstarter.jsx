import { Button } from "@/components/ui/button";
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
      <div className="absolute top-0 flex flex-col md:gap-5 gap-3 justify-center items-center w-full h-full md:px">
        <p className="text-white md:text-4xl sm:text-2xl ">
          Successfully Launched on Kickstar
        </p>
        <p className="text-white md:text-lg text-sm">
          View the full video below.
        </p>
        <Button className=" border-2 border-white md:px-4 px-2 rounded text-white bg-transparent md:text-sm text-xs">
          WATCH VIDEO
        </Button>
      </div>
    </div>
  );
};

export default kickstarter;

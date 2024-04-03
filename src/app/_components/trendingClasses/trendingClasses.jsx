import Image from "next/image";
import React from "react";

const trendingClasses = ({ image, time, title, maker }) => {
  return (
    <div className="">
      <div className=" text-foreground/65 ">
        <div className="relative">
          <Image
            src={image}
            width={200}
            height={200}
            alt="image"
            className="rounded-lg relative"
          />
          <p className="absolute bottom-2 right-5  text-white bg-foreground/75 text-xs px-2 py-1 rounded-md">
            {time}
          </p>
        </div>
        <div className="mt-2">
          <p className="text-lg font-bold ">{title}</p>
          <p className="text-base">{maker}</p>
        </div>
      </div>
    </div>
  );
};

export default trendingClasses;

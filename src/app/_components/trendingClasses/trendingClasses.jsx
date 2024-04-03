import Image from "next/image";
import React from "react";
// import image from "./image/image2.webp";
// import image from "../../../../public/images/trending_classes/image1.webp";

const trendingClasses = ({ image, time, title, maker }) => {
  return (
    <div className="">
      <div className="text-foreground/80 ">
        {/* <Image src={image} alt="image" / */}

        <div className="relative top-0">
          {" "}
          <Image
            src={image}
            width={200}
            height={200}
            alt="image"
            className="rounded-lg relative"
          />
        </div>

        <p className="absolute   text-white bg-foreground/75 text-xs px-2 py-1 rounded-md">
          {time}
        </p>
        <div className="mt-2">
          <p className="text-lg font-bold ">{title}</p>
          <p className="text-base">{maker}</p>
        </div>
      </div>
    </div>
  );
};

export default trendingClasses;

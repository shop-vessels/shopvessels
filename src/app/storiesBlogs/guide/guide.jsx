import React from "react";
import image from "../images/topImage.webp";
import Image from "next/image";

const guide = () => {
  return (
    <div className="min-h-screen  w-full  py-10 lg:px-14 px-4 relative flex items-end overflow-hidden">
      <Image
        fill
        src={image}
        alt=""
        className="object-cover w-full h-full brightness-75  relative "
      />
      <div className="z-10 top-0 left-0 absolute md:flex flex-col justify-center items-center  w-screen  h-screen hidden">
        <p className="text-white text-4xl w-[80%] text-center mb-5">
          A Beginner’s Guide To Microdosing Psychedelic Mushrooms
        </p>
        <button className="uppercase px-4 py-3 tracking-widest text-white border-2 border-white text-sm">
          continue reading
        </button>
      </div>
    </div>
  );
};

export default guide;

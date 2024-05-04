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
        className="object-cover w-full min-h-full h-full brightness-75  relative "
      />
      <div className="z-10 top-0 left-0 flex flex-col justify-center items-center  w-full  h-screen ">
        <p className="text-white md:text-4xl sm:text-2xl text-lg w-[80%] text-center mb-5">
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

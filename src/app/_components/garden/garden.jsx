"use client";

import React from "react";
import Gardenimg from "./images/garden.webp";
import Image from "next/image";

const Garden = () => {
  return (
    <div className=" h-full w-full  bg-contain pt-16">
      <Image
        src={Gardenimg}
        width={400}
        height={400}
        alt=""
        className=" md:h-[400px] w-full object-fit-cover object-cover "
      />
      <div className="bg-[#f7f7f7]">
        <p className="lg:px-20 px-5 md:py-16 py-10 text-center text-3xl">
          Interested in microdosing in a supportive group coaching container?
        </p>
      </div>
    </div>
  );
};

export default Garden;

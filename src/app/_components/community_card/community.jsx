"use clients";

import React from "react";
import image from "./images/communityCard.jpeg";
import Image from "next/image";

const CommunityCard = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="mt-3 p-4 flex justify-center items-center flex-col mb-11 shadow-lg w-full max-w-screen-sm">
        <div className="w-full relative top-0">
          <Image
            src={image}
            alt="image"
            width={500}
            height={500}
            className="h-[230px] w-full object-cover object-fit-cover  "
          />
          <div className="flex justify-center items-center">
            <p className="text-3xl font-bold text-center absolute top-[80px] left-[170px] z-10 text-white">
              Join the Community.
            </p>
            <p className="text-lg text-center absolute top-[130px] left-[185px] z-10 text-white">
              Sending you only the good stuff.
            </p>
          </div>
        </div>
        <div className="self-start w-full">
          <form action="">
            <div className="border-2  mt-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full outline-none p-3"
              />
            </div>
            <div className="border-2 mt-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full outline-none p-3"
              />
            </div>
            <div className="border-none mt-5 bg-[#de9d27] text-center hover:bg-[#c68d23] hover:transition-all ease-in-out duration-700 cursor-pointer">
              <button className="p-3 text-white font-semibold cursor-pointer">
                Let's do this.
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;

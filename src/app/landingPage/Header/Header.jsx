import React from "react";
import BgImg from "../../../../public/images/landingPage/header/Background.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div>
      <div className="relative w-full overflow-hidden aspect-[21/14]">
        <Image
          src={BgImg}
          fill
          alt="image"
          className="object-cover aspect-video w-full"
        ></Image>
        <div className=" flex justify-between w-full h-full relative z-10">
          <div className="text-white lg:px-0 px-16  w-full h-full text-center flex flex-col items-center justify-center self-center">
            <p className="lg:text-6xl text-3xl font-semibold tracking-wider">
              EMPOWER YOURSELF TO HEAL
            </p>
            <p className="lg:text-2xl text-lg lg:mt-5 mt-1">
              TRANSFORM THE EARTH STARTING WITH YOU!
            </p>
            <Button className="bg-primary lg:text-xl text-base lg:mt-8 mt-2">
              Book a free consultation
            </Button>
            <p className=" text-lg font-thin lg:mt-3 mt-1">
              Find out if this program is right for you!
            </p>
          </div>
          <div className="w-1/2 lg:block hidden"></div>
        </div>
      </div>
      <div className="bg-[#688f78] w-full text-center lg:text-2xl p-7 text-white ">
        <p>THE WORLD&apos;S #1 TRAINING IN SHAMANIC ENERGY MEDICINE</p>
      </div>
    </div>
  );
};

export default Header;

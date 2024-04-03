import Image from "next/image";
import React from "react";
import image from "../../../../public/images/practice/frame.webp";
import tvimg from "../../../../public/images/practice/tv.webp";
import laptopimg from "../../../../public/images/practice/laptop.webp";
import mobimg from "../../../../public/images/practice/mobile.webp";

const practice = () => {
  return (
    <div className="text-center text-foreground/65">
      <div className="w-1/2 m-auto">
        <p className="text-4xl font-semibold">PRACTICE ON ANY SCREEN</p>
        <p className="md:text-lg text-foreground/55">
          Practice with us anywhere, anytime (on all of your devices!) with our
          Humming Puppy On Demand App! Available on the Apple & Google Play
          Stores.
        </p>
      </div>
      <div className="flex justify-center items-center flex-col relative ">
        <Image
          src={image}
          width={1100}
          height={1100}
          alt="image"
          className="relative"
        />
        <div className="absolute left-72 top-6 ">
          <Image
            src={tvimg}
            width={750}
            height={750}
            alt="image"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default practice;

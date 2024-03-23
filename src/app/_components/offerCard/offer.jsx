"use client";

import React from "react";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Offer = ({ image, detail, currentPrice, previousPrice }) => {
  return (
    <div className="relative  lg:w-[370px] z-0 m-auto border pb-5 rounded-md">
      <Link href="/">
        <Image
          width={1000}
          height={1000}
          className="rounded-md"
          src={image}
          alt="image"
        />
      </Link>
      <p className="absolute top-2 left-2 z-10 bg-[#f7f7f7] text-sm px-3 py-1.5 rounded-3xl font-light tracking-widest">
        SALE
      </p>
      <Link
        href="/"
        className="absolute bottom-[5.7rem] right-2 bg-[#ffffff] w-8 h-8 flex justify-center items-center rounded-full hover:bg-[f7f7f7] hover:scale-110 transition-all duration-300   "
      >
        <Plus className="w-4 h-4" />
      </Link>
      <a href="#">
        <h2 className=" text-center mt-3 mb-1 text-lg text-foreground/80 font-semibold">
          {detail}
        </h2>
        <div className="flex justify-center items-center">
          <p className="text-center text-[#747474] text-sm font-semibold line-through pr-2 tracking-widest">
            ${previousPrice}
          </p>
          <p className="text-center text-[#747474] text-sm  tracking-widest">
            ${currentPrice}
          </p>
        </div>
      </a>
    </div>
  );
};

export default Offer;

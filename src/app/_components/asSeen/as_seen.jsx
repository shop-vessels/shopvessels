"use client";

import React from "react";
import Image from "next/image";
import {AsSeenData} from "../../../data/As_Seen.js";

const SeenAs = () => {
  return (
    <div className="bg-[#f7f7f7] py-[70px] lg:px-12 px-4">
      <h2 className=" text-center text-foreground/80 text-3xl lg:text-4xl font-bold mb-6 ">As Seen In</h2>
      <div className="grid md:grid-cols-5 grid-cols-2 justify-center gap-9 mt-10  max-w-7xl m-auto">
        {AsSeenData.map((Seen, index) => (
          <AsSeeen key={index} image={Seen?.image} />
        ))}
      </div>
    </div>
  );
};

const AsSeeen = ({ image }) => {
  return (
    <div className="self-center">
      <Image width={400} height={400} src={image} alt="logo" />
    </div>
  );
};

export default SeenAs;

"use client";

import React from "react";
import Image from "next/image";
import As_Seen_Data from "../../../data/As_Seen.json";

const SeenAs = () => {
  return (
    <div className="bg-[#f7f7f7] py-[70px] lg:px-12 px-4">
      <h1 className="uppercase text-center text-3xl mb-6 ">As Seen In</h1>
      <div className="grid md:grid-cols-5 grid-cols-2 justify-center gap-9  max-w-7xl m-auto">
        {As_Seen_Data.map((Seen, index) => (
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

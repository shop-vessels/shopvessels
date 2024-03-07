"use client";

import React from "react";
import image from "./images/travelJournal.webp";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="relative">
        <div className="w-full h-[600px] relative bg-[#0000004d]">
          <Image
            src={image}
            alt="image"
            className="object-cover w-full h-full brightness-75"
          />
          <div className="absolute left-0 bottom-0 text-white p-16 w-[40%]">
            <p className="text-4xl font-semibold mb-1">
              Mindful Travel Journal
            </p>
            <p className="text-lg font-semibold ">
              Manifest, plan, and document world and local adventures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

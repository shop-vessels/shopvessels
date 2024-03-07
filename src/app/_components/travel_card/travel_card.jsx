"use client";

import React from "react";
import wakeful from "../../../data/Wakwful.json";

const WakefulTravelMain = () => {
  return (
    <div className="mx-3">
      <div className="py-6">
        <p className="text-center text-2xl">@wakefultravel</p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 w-full ]">
        {wakeful.map((wakefulData) => (
          <Wakefultravel image={wakefulData.image} />
        ))}
      </div>
    </div>
  );
};

function Wakefultravel({ image }) {
  return (
    <div className="lg:h-[300px] md:[350px]">
      <a href="#">
        <img src={image} alt="image" className="w-full h-full" />
      </a>
    </div>
  );
}

export default WakefulTravelMain;

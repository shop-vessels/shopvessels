"use client";

import React from "react";
import wakeful from "../../../data/Wakwful.json";
import { Instagram } from "lucide-react";

const WakefulTravelMain = () => {
  return (
    <section className="px-3 max-w-7xl mx-auto">
      <div className="py-6">
        <p className="text-center text-2xl">@wakefultravel</p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 w-full ]">
        {wakeful.map((wakefulData) => (
          <Wakefultravel image={wakefulData.image} />
        ))}
      </div>
    </section>
  );
};

function Wakefultravel({ image }) {
  return (
    <div className="lg:h-[300px] md:h-[350px] relative ">
      <a href="#">
        <img src={image} alt="image" className="w-full h-full" />
        <div className="group absolute top-0 w-full h-full  hover:bg-foreground/45 transition-all duration-500 flex justify-center items-center">
          <Instagram className="hidden group-hover:block text-white w-5" />
        </div>
      </a>
    </div>
  );
}

export default WakefulTravelMain;

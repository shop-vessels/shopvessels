"use client";
import React from "react";
import Partner from "./partner";
import partnerData from "../../../data/Partner.json";

const page = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="py-16 px-14">
        <div>
          <p className="text-center text-3xl mb-5">Our Partners</p>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {partnerData.map((pData, index) => (
            <Partner title={pData.title} image={pData.image} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;

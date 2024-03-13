"use client";

import React from "react";
import Offer from "./offer";
import travelData from "../../../data/TravelExpensesn.json";

const OfferMain = () => {
  return (
    <section className=" w-full px-5 mt-5 lg:mt-10">
      <div>
        <h2 className="text-center text-lg md:text-2xl lg:text-4xl font-bold mt-12 mb-8">
          Wakeful Travel Journals
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8  text-center max-w-7xl mx-auto">
        {travelData.map((travel, index) => (
          <Offer
            key={index}
            image={travel.image}
            detail={travel.detail}
            currentPrice={travel.currentPrice}
            previousPrice={travel.previousPrice}
          />
        ))}
      </div>
      <div>
        <div className="text-center mt-3 mb-16 ">
          <a href="#" className="uppercase border-b border-black">
            view collection
          </a>
        </div>
      </div>
    </section>
  );
};

export default OfferMain;

"use client";

import React from "react";
import Offer from "./offer";
import travelData from "../../../data/TravelExpensesn.json";

const OfferMain = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-3xl mt-12 mb-8">
          Wakeful Travel Journals
        </h1>
      </div>
      <div className="flex gap-8 justify-center flex-wrap">
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
        <div className="text-center mt-3 mb-10 ">
          <a href="#" className="uppercase border-b border-black">
            view collection
          </a>
        </div>
      </div>
    </div>
  );
};

export default OfferMain;

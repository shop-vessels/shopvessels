"use client";

import React, { useState } from "react";
import restimg from "../../../../public/images/courses/reset/coureseMain.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { CirclePlay } from "lucide-react";
import membership from "../../../data/membership.json";

const Rest = () => {
  const [membershipp, setMembershipp] = useState(true);

  const showHide = () => {
    setMembershipp((prev) => !prev);
  };

  return (
    <div className="pt-16 pb-5 md:px-8 px-4 text-foreground/65 flex lg:flex-row flex-col lg:gap-5 gap-6">
      <Image
        src={restimg}
        responsive="true"
        alt="image"
        className="rounded-md "
      />

      <div className="max-x-1/2 ">
        <p className="text-sm font-semibold flex items-center gap-1">
          {" "}
          <CirclePlay className="w-5" /> COLLECTIONS
        </p>
        <p className="text-3xl font-medium mt-1">THE REST RESET</p>
        <p className="text-sm font-light mt-6 lg:line-clamp-none line-clamp-2">
          A curated selection of yoga practices meticulously crafted to guide
          you back to a place of deep relaxation and inner tranquility. <br />{" "}
          <br />
          These soothing practices offer a sanctuary where you can reconnect
          with yourself and rediscover your inner calm. <br />
          <br />
          Whether you're seeking solace from the hustle and bustle or simply
          yearning to unwind and restore, our Rest Collection provides the
          perfect refuge for nurturing your well-being and finding solace in the
          present moment.
        </p>
        <p className="text-primary">Learn more</p>
        <div className="flex md:flex-row flex-col gap-2 mt-4 w-full relative">
          <Button className="lg:w-full" onClick={showHide}>
            Subscribe and Watch <ChevronDown className="w- ml-1" />
          </Button>
          <Button className="bg-foreground/5 text-base hover:bg-card-foreground/10">
            Buy $29.00
          </Button>

          <div
            className={`border border-black/20 rounded-md  p-4 text-sm font-light absolute lg:-left-5 left-0 top-12 z-20 bg-white min-w-md md:w-auto w-full  ${
              membershipp ? "block" : "hidden"
            }`}
          >
            <p>Select a membership:</p>
            <div className="flex flex-col gap-4 mt-2 z-20">
              {membership.map((memb, index) => (
                <Membership
                  key={index}
                  image={memb.image}
                  month={memb.month}
                  title={memb.title}
                  offer={memb.offer}
                  money={memb.money}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rest;

const Membership = ({ image, month, title, offer, money }) => {
  return (
    <div className="flex rounded-md border border-black z-20 sm:h-auto h-[120px]">
      <Image
        src={image}
        alt="image"
        width={130}
        height={130}
        className="rounded-md sm:w-auto w-40"
      />
      <div className="p-2 flex flex-col justify-center text-foreground/65 z-30">
        <p className="text-primary text-sm">{month}</p>
        <p className="font-light text-sm sm:block hidden">{title}</p>
        <p className="font-medium sm:text-lg text-base md:mt-2">{offer}</p>
        <p className="sm:text-sm text-xs font-light ">
          AUD ${money}/month after trial
        </p>
      </div>
    </div>
  );
};

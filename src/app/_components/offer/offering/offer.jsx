import React from "react";
import image from "../../../../../public/images/offer/offerimg/offer.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const offer = () => {
  return (
    <div>
      <div className="text-foreground/65 flex justify-center  py-20 px-3">
        <div className="max-w-[1050px]  md:p-12 sm:p-8 p-4 w-full flex lg:flex-row flex-col justify-center items-center bg-foreground/5 lg:gap-24 gap-12 rounded-lg">
          <div className="">
            <Image
              src={image}
              width={1200}
              height={1200}
              alt="image"
              className="lg:rounded-none rounded-lg"
            />
          </div>
          <div className="">
            <p className="sm:text-4xl text-2xl font-semibold">
              EXPLORE A COMPLIMENTARY OFFERING
            </p>
            <p className="lg:w-[400px] mt-5 md:text-lg text-foreground/55">
              A gentle slow flow for sticky hips and those times when you're a
              little low on energy. We add in shapes like lizard lunge, yogi
              squat & deer pose - gentle but with intensity - to stretch out.
              This Mellow Hum is a Slow Flow offering, so we move more than we
              do in a Yin practice, but not so much as our Vinyasa practice.
              Like Goldilocks - not too little, not too light but just right!
            </p>
            <Button className="text-xl py-6 sm:w-auto w-full mt-9 text-foreground/55">
              Try A Class On Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default offer;

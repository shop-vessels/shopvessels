import React from "react";
import image from "../../../../../public/images/offer/offerimg/offerimg.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import Link from "next/link";

const offer = () => {
  return (
    <div>
      <div className="text-foreground/65 flex justify-center  py-20 px-3">
        <div className="max-w-[1050px]  md:p-12 sm:p-8 p-4 w-full flex lg:flex-row flex-col justify-center items-center bg-foreground/5 lg:gap-24 gap-12 rounded-lg">
          <div className="relative flex flex-col lg:gap-10 gap-5">
            <p className="md:text-5xl text-3xl lg:text-start text-center font-bold text-foreground/20">
              ONLINE-COURSE MODULES
            </p>
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
              A 40 DAY JOUNREY TOGETHER
            </p>
            <p className="lg:w-[400px] mt-5 md:text-lg text-foreground/55 ">
              <span className="text-lg font-bold">
                SELF-EXPLORATION (DAY 1-7) <br />
              </span>
              Watch daily video lessons, engage in journal prompts, fasting,
              breathwork, meditation. Utilize worksheets, readings, mindmaps.{" "}
              <br />
              <br />
              <span className="text-lg font-bold">
                HARMONIZE YOUR BEING (Day 8-14) <br />
              </span>
              Continue being immersed in fasting, video lessons, breathwork,
              meditation and Yoga. Manage stress, anxiety with our NOW method.{" "}
              <br />
              <br />
              <span className="text-lg font-bold">
                AWAKEN YOUR SPIRIT (DAYS 15-21)
                <br />
              </span>
              Conduct a sacred ceremony with either psychedelics of cocoa
              ceremony in the privacy of your home to begin heading from the
              past. <br />
              <br />
              <span className="text-lg font-bold">
                INTEGRATE AND EVOLVE (DAY 22-31)
                <br />
              </span>
              Navigage the integratioin phase of your psychedelic journey with
              grace, supported by our integration coach and other resources.{" "}
              <br />
              <br />
            </p>{" "}
            <Button
              asChild
              className="text-xl py-6 sm:w-auto w-full mt-2 text-foreground/55"
            >
              <Link href="/all-courses">Try A Class On Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default offer;

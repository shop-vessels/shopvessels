import React from "react";
import image from "../../../../public/images/hum/hum.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Play } from "lucide-react";
import Link from "next/link";

const hum = () => {
  return (
    <div>
      <div className="text-foreground/65 flex justify-center p-3">
        <div className="max-w-[1000px]  md:p-12 sm:p-8 p-4 w-full flex lg:flex-row flex-col justify-center items-center bg-foreground/5 lg:gap-24 md:gap-12 gap-7 rounded-lg">
          <div className="">
            <p className="text-3xl font-semibold">BRING THE HUM HOME</p>
            <p className="lg:w-[400px] mt-5 md:text-lg text-foreground/55">
              Humming Puppy offers a revered space to practice and one that
              reverberates with a Hum in place of music. By immersing yourself
              in these sound-waves during practice, you may begin to experience
              enhanced concentration and focus.
            </p>
            <Button className="text-xl py-6 sm:w-auto w-full mt-9 text-foreground/55">
              LISTEN TO THE HUM
            </Button>
          </div>
          <div className="relative">
            <Image
              src={image}
              width={1200}
              height={1200}
              alt="image"
              className="lg:rounded-none rounded-lg"
            />
            <Link
              className="z-10  w-20 h-20 bg-primary rounded-full flex justify-center items-center hover:scale-105 transition-all duration-300 absolute lg:top-1/3 top-1/3 lg:right-40 right-1/2"
              href="/all-courses"
            >
              <Play className="bg-transparent text-black/65 w-8 h-8 " />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hum;

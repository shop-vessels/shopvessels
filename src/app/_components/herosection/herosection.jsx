import Image from "next/image";
import heroimage from "../../../../public/images/hero_section/heroBgimage.webp";
import mobile from "../../../../public/images/hero_section/mobile.webp";
import { Button } from "@/components/ui/button";

const herosection = () => {
  return (
    <div className="relative text-white/95 md:h-full h-[600px] w-full overflow-hidden md:py-16 py-3">
      <Image
        src={heroimage}
        fill
        alt="image"
        className="brightness-75 object-cover w-full h-full max-w-full md:block hidden relative"
      />
      <Image
        src={mobile}
        fill
        alt="image"
        className="brightness-75 object-cover w-full h-full max-w-full md:hidden relative"
      />
      <div className="flex md:items-start items-center w-full h-[600px] z-10 md:px-6 px-3 md:py-16 py-5">
        <div className=" text-white/95 object-contain  max-w-[700px] relative">
          <p className="sm:text-6xl text-4xl font-bold">
            HUMMING PUPPY ON DEMAND
          </p>
          <p className="font-semibold text-lg mt-7">
            Yoga that resonates amongst home's luxuries.{" "}
          </p>
          <p className="sm:text-lg mt-8">
            Pause to practice whenever or wherever you wish. From
            strength-building flows to restorative practices, weve taken time to
            create classes that align with abundant schedules, full lives and
            ever changing responsibilities.
          </p>
          <Button className="text-lg font-semibold px-6 py-6 mt-8 sm:w-auto w-full">
            JOIN OUR 7 DAY FREE TRIAL
          </Button>
        </div>
      </div>
    </div>
  );
};

export default herosection;

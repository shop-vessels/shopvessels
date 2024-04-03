import { Button } from "@/components/ui/button";
import image from "../../../../../public/images/weRabout/trial/about.webp";
import Image from "next/image";
const weRabout = () => {
  return (
    <div className="text-foreground/65 flex justify-center p-4">
      <div className="max-w-[1000px]  md:p-12 sm:p-8 p-4 w-full flex lg:flex-row flex-col justify-center items-center bg-foreground/5 lg:gap-24 md:gap-12 gap-7 rounded-lg">
        <div className="">
          <p className="text-3xl font-semibold">WHAT WE ARE ABOUT</p>
          <p className="lg:w-[400px] mt-5 md:text-lg text-foreground/55">
            Pause to practice whenever or wherever you wish. From
            strength-building flows to restorative practices, we&apos;ve taken
            time to create classes that align with abundant schedules, full
            lives and ever changing responsibilities.
          </p>
          <Button className="text-xl py-6 sm:w-auto w-full mt-9 text-foreground/55">
            START FREE TRIAL
          </Button>
        </div>
        <div className="">
          <Image
            src={image}
            width={1200}
            height={1200}
            alt="image"
            className="lg:rounded-none rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default weRabout;

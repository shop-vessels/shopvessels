import { Button } from "@/components/ui/button";
import freeImg from "../../../../public/images/ourValues/freeNow.png";
import Image from "next/image";

const free = () => {
  return (
    <div className="pt-20 max-w-7xl m-auto">
      <div className="min-h-full relative h-full overflow-hidden py-20">
        <Image
          src={freeImg}
          fill
          alt="image"
          className=" brightness-75  object-cover w-full max-h-full"
        />

        <div className="text-center text-white/85 z-30 flex flex-col justify-center items-center w-full h-full px-2">
          <p className="md:text-4xl text-2xl font-semibold z-30">
            Get started for free now
          </p>
          <p className="mt-3 md:text-base text-sm z-30">
            Bring the hum home and practice with our global community of
            teachers
          </p>
          <Button className="md:mt-8 mt-4 md:text-base text-sm z-30">
            Start your free 14-day trial
          </Button>
        </div>
      </div>
    </div>
  );
};

export default free;

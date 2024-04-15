import { Button } from "@/components/ui/button";
import freeImg from "../../../../public/images/ourValues/freeNow.jpg";
import Image from "next/image";

const free = () => {
  return (
    <div className="pt-20 ">
      <div className="max-h-full relative">
        <Image
          src={freeImg}
          width={1300}
          height={1300}
          alt="image"
          className="max-h-[350px] object-cover brightness-75"
        />

        <div className="text-center text-white/85 absolute top-0 flex flex-col justify-center items-center w-full h-full px-2">
          <p className="md:text-4xl text-2xl font-semibold">
            Get started for free now
          </p>
          <p className="mt-3 md:text-base text-sm">
            Bring the hum home and practice with our global community of
            teachers
          </p>
          <Button className="md:mt-8 mt-4 md:text-base text-sm">
            Start your free 14-day trial
          </Button>
        </div>
      </div>
    </div>
  );
};

export default free;

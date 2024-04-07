import { Button } from "@/components/ui/button";
import welcomeimg from "../../../../public/images/ourValues/welcome.png";
import Image from "next/image";

const welcome = () => {
  return (
    <div className="flex lg:flex-row flex-col ">
      <div className="text-foreground/75 lg:px-24 lg:py-24 px-5 py-12  w-full lg:text-start text-center">
        <p className="md:text-4xl text-2xl font-semibold">
          Welcome to Humming Puppy On Demand
        </p>
        <p className="md:text-lg text-base mt-3">
          As a space for pause and sanctuary we provide a yoga experience that
          honours traditional yogic practices. Central to our philosophy we
          guide movement alongside a curated and resonant Hum. A frequency of
          our own design to deeply soothe or to simply generate good vibes.
        </p>
        <Button className="mt-14 text-lg px-7 py-6">
          Start Your 7 Day Trial
        </Button>
      </div>
      <div className="w-full lg:min-w-[630px] lg:aspect-auto md:aspect-[21/9] ">
        <Image
          src={welcomeimg}
          width={1000}
          height={1000}
          alt="image"
          className="lg:mx-0 mx-auto h-ful object-cover overflow-hiddenl lg:aspect-auto aspect-[21/9]"
        />
      </div>
    </div>
  );
};

export default welcome;

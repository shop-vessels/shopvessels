import { Button } from "@/components/ui/button";
import wel from "../../../../public/images/ourValues/wel.png";
import Image from "next/image";

const welcome = () => {
  return (
    <div className="flex lg:flex-row lgflex-col flex-col-reverse max-w-7xl m-auto">
      <div className="text-foreground/75 lg:px-24 lg:py-24 px-5 py-12  w-full lg:text-start text-center max-w-2xl">
        <p className="md:text-4xl text-2xl font-semibold">Welcome to Vessels</p>
        <p className="md:text-lg text-base mt-4">
          Vessels aims to become a holistic wellness leader, merging products
          with educational insights. While our immediate offerings center around
          the Archive 00: Genesis&apss;s NOW Program, it&apos;s just the
          beginning, with plans to expand into various health and holistic
          verticals.We envision hosting our own retreats for on-site experiences
          and more
        </p>
        <Button className="mt-9 text-lg px-7 py-6">
          Start Your 3 Day Trial
        </Button>
      </div>
      <div className="w-full max-w-full lg:aspect-auto md:aspect-[21/9] ">
        <Image
          src={wel}
          width={1000}
          height={1000}
          alt="image"
          className="lg:mx-0 mx-auto h-ful object-cover overflow-hidden  "
        />
      </div>
    </div>
  );
};

export default welcome;

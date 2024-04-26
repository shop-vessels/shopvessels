import Image from "next/image";
import heroimage from "../../../../public/images/hero_section/bg.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const herosection = () => {
  return (
    <div className=" relative text-white/95 md:h-full h-[600px] w-full overflow-hidden md:py-16 py-3">
      <Image
        src={heroimage}
        fill
        alt="image"
        className="brightness-75 object-cover w-full h-full max-w-full  relative"
      />

      <div className="flex md:items-start items-center w-full md:h-[600px] h-[550px]  z-10 md:px-6 px-3 md:py-16 py-5 max-w-7xl m-auto mt-12">
        <div className=" text-white/95 object-contain  max-w-[700px] relative lg:self-center">
          <p className="sm:text-6xl text-4xl font-bold">Archive 00: Genesis</p>
          <p className="font-semibold text-lg mt-7">
            A transformative 40-day journey to spiritual enlightenment
          </p>
          <p className="sm:text-lg mt-6">
            Genesis is our foundational offering, designed to ground individuals
            in key understandings that enhance their lives and expand their
            self-awareness. Starting here ensures you can show up in the world
            as your most effective self. While we offer a variety of vessels, we
            encourage the community to begin with Genesis, as its name
            suggests&mdash;the beginning.
          </p>
          <Button
            asChild
            className="text-lg font-semibold px-6 py-6 mt-8 sm:w-auto w-full uppercase"
          >
            <Link href="/all-courses">Join our 3 Day free trial</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default herosection;

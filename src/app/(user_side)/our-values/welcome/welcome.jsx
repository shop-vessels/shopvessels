import { Button } from "@/components/ui/button";
import wel from "../../../../../public/images/ourValues/wel.jpg";
import Image from "next/image";
import Link from "next/link";

const welcome = () => {
  return (
    <div className="flex lg:flex-row lgflex-col flex-col-reverse max-w-7xl m-auto">
      <div className="text-foreground/75 lg:px-16 lg:py-24 px-5 py-6  w-full lg:text-start text-center ">
        <p className="md:text-4xl text-2xl font-semibold">Welcome to Vessels</p>
        <p className="md:text-lg text-base md:mt-4 ">
          Vessels aims to become a holistic wellness leader, merging products
          with educational insights. While our immediate offerings center around
          the Archive 00: Genesis&apss;s NOW Program, it&apos;s just the
          beginning, with plans to expand into various health and holistic
          verticals.We envision hosting our own retreats for on-site experiences
          and more
        </p>
        <Button asChild className="mt-9 text-lg px-7 py-6">
          <Link href="/all-courses">Start Your 3 Day Trial</Link>
        </Button>
      </div>
      <div className="w-full max-w-full self-center">
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

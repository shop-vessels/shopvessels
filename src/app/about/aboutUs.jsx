import Image from "next/image";
import image from "../../../public/images/about/HummingPuppy.png";
import bgImage from "../../../public/images/about/bgImage.jpg";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Play } from "lucide-react";

const aboutUs = () => {
  return (
    <div className="min-h-screen  w-full  py-10 lg:px-14 px-4 relative flex items-end overflow-hidden">
      <Image
        src={bgImage}
        alt="image"
        fill
        className="object-cover w-full h-full brightness-75  relative "
      />
      <div className=" z-10 flex flex-col lg:flex-row lg:justify-around ">
        <div className="flex-1 flex lg:flex-row flex-col gap-8 text-white pb-6 w-full">
          <div className="z-10  w-20 h-20 bg-primary rounded-full flex justify-center items-center hover:scale-105 transition-all duration-300 min-w-20">
            <Play className="bg-transparent text-black/65 w-7 h-7 " />
          </div>
          <div className="">
            <Image src={image} width={200} height={200} alt="image" />
            <p className="pt-1">Yoga That Resonates</p>
          </div>
          <p className=" lg:w-[570px] w-[85%] text-base font-semibold line-clamp-6">
            Vessels aims to become a holistic wellness leader, merging products
            with educational insights. While our immediate offerings center
            around the Archive 00: Genesis&rsquo;s NOW Program, it&rsquo;s just
            the beginning, with plans to expand into various health and holistic
            verticals.We envision hosting our own retreats for on&ndash;site
            experiences and more. <br />
            We understand that &#39;doing the work&#39; leads to major life
            shifts for the better, and we want to be part of our community's
            journey from healing to thriving. With your support, we'll achieve
            our vision together.
          </p>
        </div>
        <div className="flex-grow flex lg:justify-end items-center h-12 flex-row gap-2">
          <a
            href="#"
            className="self-center bg-white w-8 h-8 flex justify-center items-center rounded-full hover:scale-105 transition-all duration-300"
          >
            <Instagram className="text-black/45  " />
          </a>
          <a
            href="#"
            className="self-center bg-white w-8 h-8 flex justify-center items-center rounded-full hover:scale-105 transition-all duration-300"
          >
            <Facebook className="text-black/45  " />
          </a>
          <button
            className="uppercase border-2 text-sm tracking-widest border-white py-3 px-4 text-white self-start"
            href="our-values"
          >
            learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default aboutUs;

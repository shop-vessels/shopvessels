"use client";

import Image from "next/image";
import image from "../../../../public/images/about/white-vertical.png";
import bgImage from "../../../../public/images/about/bgImage.jpg";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const aboutUs = () => {
  return (
    <div className="min-h-screen lg:pb-20  w-full  py-10 lg:px-14 px-4 relative flex items-end overflow-hidden">
      <Image
        src={bgImage}
        alt="image"
        fill
        className="object-cover w-full h-full brightness-75  relative "
      />
      <div className=" z-10 flex flex-col lg:flex-row items-center lg:justify-around ">
        <div className="flex-1 flex items-center lg:flex-row flex-col gap-8 text-white pb-6 w-full">
          <div className="">
            <Link href="/">
              <Image
                src={image}
                responsive="true"
                alt="image"
                className=" w-64"
              />
            </Link>
          </div>
          <p className=" lg:w-[670px] w-[85%] text-base font-semibold ">
            Vessels aims to become a holistic wellness leader, merging products
            with educational insights. While our immediate offerings center
            around the Archive 00: Genesis&rsquo;s NOW Program, it&rsquo;s just
            the beginning, with plans to expand into various health and holistic
            verticals.We envision hosting our own retreats for on&ndash;site
            experiences and more. <br />
            We understand that &#39;doing the work&#39; leads to major life
            shifts for the better, and we want to be part of our
            community&apos;s journey from healing to thriving. With your
            support, we&apos;ll achieve our vision together.
          </p>
        </div>
        <div className="flex-grow flex lg:justify-end items-center h-12 flex-row gap-2">
          <Link href="https://www.instagram.com/qppacademy">
            <Instagram className="hover:scale-110 transition-all duration-400 w-7 h-7 hover:text-foreground text-white" />
          </Link>
          <Link href="https://twitter.com/@QPPacademy">
            <Twitter className="hover:scale-110 transition-all duration-400 w-7 h-7 hover:text-foreground text-white" />
          </Link>
          <Button
            asChild
            className="uppercase border-2 text-sm tracking-widest border-white py-5 px-4 text-white self-start bg-transparent hover:border-primary"
            href="our-values"
          >
            <Link href="/our-values">learn more</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default aboutUs;

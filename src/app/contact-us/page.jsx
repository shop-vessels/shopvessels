import React from "react";
import Image from "next/image";
import image from "../../../public/images/contactus/contactUss.jpg";
import Link from "next/link";

export const metadata = {
  title: " Elevate Your Practice: Explore Yoga Courses on Our LMS Platform",
  description:
    "Dive into the transformative world of yoga with our comprehensive LMS platform. Discover a range of courses taught by experienced instructors, designed to enhance your practice and deepen your understanding of yoga philosophy, postures, and mindfulness techniques. Start your journey to inner peace and holistic well-being today.",
};

const page = () => {
  return (
    <div className="flex lg:flex-row flex-col w-full justify-between items-center lg:gap-6 gap-12 sm:px-16 px-3 lg:pt-28 py-16 max-w-7xl m-auto">
      <div className="text-foreground/75 w-full md:px-0 px-3 ">
        <p className="md:text-4xl text-3xl font-semibold ">Contact Us</p>
        <p className="md:text-xl text-lg mt-3">
          If you have any questions about your Vessels account please email:
        </p>
        <Link
          href="mailto:info@ShopVessels.com"
          className="text-blue-700 text-lg"
        >
          info@ShopVessels.com
        </Link>{" "}
      </div>
      <div className="w-full  ">
        <Image
          src={image}
          width={550}
          height={550}
          alt="image"
          className="rounded-ss-[80px] rounded-br-[80px] lg:mx-0 mx-auto"
        />
      </div>
    </div>
  );
};

export default page;

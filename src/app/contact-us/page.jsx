import React from "react";
import Image from "next/image";
import image from "../../../public/images/contactus/contactUs.jpg";
import Link from "next/link";

export const metadata = {
  title: "Humming Puppy On Demand: Contact Us for Account Inquiries & Support",
  description:
    "Need help with Humming Puppy On Demand or have questions about your account? Email us for prompt and friendly support. We're here to assist you!",
};

const page = () => {
  return (
    <div className="flex lg:flex-row flex-col w-full justify-between items-center lg:gap-6 gap-12 sm:px-16 px-3 lg:py-28 py-16 max-w-7xl m-auto">
      <div className="text-foreground/75 w-full md:px-0 px-3 ">
        <p className="md:text-4xl text-3xl font-semibold ">Contact Us</p>
        <p className="md:text-xl text-lg mt-3">
          If you have any inquiries about ShopVessels, feel free to contact us
          by email.
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

import React from "react";
import headerImg from "../../../../public/images/landingPage/header/fourwinds-favicon.png.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="border border-1 border-foreground/55 lg:flex justify-evenly items-center py-3 relative ">
      <Image
        src={headerImg}
        alt="image"
        className="lg:w-16 md:w-26 w-16 lg:ml-0 md:ml-24 ml-10 "
      />
      <p className="text-foreground/55 text-lg font-light  w-1/3 text-center lg:block hidden">
        Book a free consultation with our academic advisors to enquire about the
        program.
      </p>
      <Button className="bg-[#bb2026] text-white text-base lg:block hidden">
        Book a free consultant
      </Button>
    </div>
  );
};

export default Header;

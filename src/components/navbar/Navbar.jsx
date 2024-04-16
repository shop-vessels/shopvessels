"use client";

import Image from "next/image";
import React from "react";
import logo from "./images/hummimglogo.png";
import Link from "next/link";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
import { Toaster } from "../ui/toaster";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  return (
    <navbar
      className={` z-20 ${
        pathname === "/" ? "absolute " : "relative border-b shadow-sm "
      } w-full`}
    >
      <div className="relative w-full px-5 py-4 max-w-7xl mx-auto flex items-center lg:justify-normal justify-between font-light lg:gap-4">
        <Link href="/">
          <Image
            src={logo}
            height={40}
            alt="image"
            className="lg:w-auto lg:h-10 w-60"
          />
        </Link>

        {/* Computer NavLinks */}
        <NavLinks />
        <div className="uppercase ml-auto lg:flex hidden gap-2 ">
          <UserChip />
          <Button className="w-24 hover:bg-transparent hover:border-2 border-primary">
            <Link href="/signup">Join Now</Link>
          </Button>
        </div>
        {/* Mobile NavLinks */}
        <MobileNav />
      </div>
      <Toaster />
    </navbar>
  );
}

const UserChip = () => {
  return (
    <Button className="bg-transparent border-2 border-primary">
      <Link href="/login">Login</Link>
    </Button>
  );
};

export default Navbar;

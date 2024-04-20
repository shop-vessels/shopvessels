"use client";

import Image from "next/image";
import React from "react";
import logo from "../../../public/images/navbar/nav.png";
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
      <div className="relative w-full px-5 py-4 max-w-7xl mx-auto flex items-center lg:justify-normal justify-between font-light self-start ">
        <div className="max-w-60 relative aspect-video">
          <Link href="/">
            <Image
              src={logo}
              alt="image"
              className="w-full max-w-28"
            />
          </Link>
        </div>

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

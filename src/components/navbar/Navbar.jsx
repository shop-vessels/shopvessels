"use client";

import Image from "next/image";
import React from "react";
import logo from "./images/logo.png";
import Link from "next/link";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
import { Toaster } from "../ui/toaster";

function Navbar() {
  return (
    <navbar className=" z-10 bg-background">
      <div className="relative w-full px-5 max-w-7xl mx-auto flex items-center font-light gap-4">
        <Link href="/">
          <Image src={logo} height={50} alt="image" />
        </Link>

        {/* Computer NavLinks */}
        <NavLinks />

        <div className="uppercase ml-auto flex gap-5 ">
          <UserChip />
          <Link href="/">CART</Link>
        </div>
        {/* Mobile NavLinks */}
        <MobileNav />
      </div>
      <Toaster />
    </navbar>
  );
}

const UserChip = () => {
  return <Link href="/login">Login</Link>;
};

export default Navbar;

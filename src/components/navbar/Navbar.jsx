"use client";

import Image from "next/image";
import React from "react";
import logo from "./images/logo.png";
import Link from "next/link";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";

function Navbar() {
  return (
    <header className="w-full relative z-20 bg-background shadow-lg">
      <div className="relative w-full px-5 max-w-7xl mx-auto flex items-center font-light gap-4">
        <Link href="/">
          <Image src={logo} height={50} />
        </Link>
        <NavLinks />
        <div className="uppercase ml-auto flex gap-5 ">
          <UserChip />
          <Link href="/">CART</Link>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}

const UserChip = () => {
  return <Link href="/signup">SignIn</Link>;
};

export default Navbar;

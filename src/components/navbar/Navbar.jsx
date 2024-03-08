"use client";

import Image from "next/image";
import React from "react";
import logo from "./images/logo.png";
import Link from "next/link";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";

function Navbar() {
  return (
    <header className="w-full relative z-20">
      <div className="relative w-full px-5 max-w-7xl mx-auto flex items-center font-light gap-4">
        <Link href="/">
          <Image src={logo} height={50} />
        </Link>
        <NavLinks />
        <div className="uppercase ml-auto flex gap-5 ">
          <Link href="/api/auth/login">SignIn</Link>
          <Link href="/">CART</Link>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}




export default Navbar;
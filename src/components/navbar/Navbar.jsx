"use client";

import Image from "next/image";
import React from "react";
import logo from "../../../public/images/navbar/bluelogo.png";
import logowhite from "../../../public/images/navbar/nav.png";
import Link from "next/link";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
import { Toaster } from "../ui/toaster";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Loader } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className={` z-20 ${
        pathname === "/" ? "absolute " : "relative border-b shadow-sm "
      } w-full`}
    >
      <div className="relative w-full px-5 py-4 max-w-7xl mx-auto flex items-center lg:justify-normal justify-between font-light self-start ">
        <div
          className={`max-w-60 relative flex justify-center items-center ${
            pathname === "/" ? "block" : "hidden"
          }`}
        >
          <Link href="/">
            <Image src={logowhite} alt="image" className="w-full max-w-44" />
          </Link>
        </div>
        <div
          className={`max-w-60 relative flex justify-center items-center ${
            pathname === "/" ? "hidden" : "block"
          }`}
        >
          <Link href="/">
            <Image src={logo} alt="image" className="w-full max-w-44" />
          </Link>
        </div>

        {/* Computer NavLinks */}
        <NavLinks />
        <div className="uppercase ml-auto lg:flex hidden gap-2 ">
          <UserChip />
        </div>
        {/* Mobile NavLinks */}
        <MobileNav />
      </div>
      <Toaster />
    </nav>
  );
}

const UserChip = () => {
  const { data, status } = useSession();
  if (status === "unauthenticated" || status === "loading") {
    return (
      <Button
        asChild
        className={
          status === "loading"
            ? "lg:w-auto w-full bg-primary border-2 border-primary"
            : ""
        }
      >
        {status === "loading" ? (
          <Button className="aspect-video p-0">
            <Loader className="animate-spin" />
          </Button>
        ) : (
          <>
            <Button
              asChild
              className="w-24 bg-primary hover:border-2 border-primary"
            >
              <Link
                href="/login"
                // className="text-white hover:text-foreground"
              >
                SignIn
              </Link>
            </Button>
            <Button
              asChild
              className="w-24 bg-primary hover:border-2 border-primary"
            >
              <Link href="/signup">Join Now</Link>
            </Button>
          </>
        )}
      </Button>
    );
  }

  const { user } = data;

  if (status === "authenticated") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="h-9 w-9 cursor-pointer">
            <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
            <AvatarFallback>
              {user.name
                .split(" ")
                .map((str) => str[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()}
            </AvatarFallback>
            <span className="sr-only">Toggle user menu</span>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                <AvatarFallback>
                  {user.name
                    .split(" ")
                    .map((str) => str[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="grid gap-0.5 text-sm">
                <div className="font-medium">{user.name}</div>
                <div className="text-gray-500 dark:text-gray-400">
                  {user.email}
                </div>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <Link href={"/enrolled-courses"}>Enrolled Courses</Link>
          </DropdownMenuItem>
          {data?.user?.role === "ADMIN" && (
            <DropdownMenuItem>
              <Link href={"/dashboard/courses"}>Dashboard</Link>
            </DropdownMenuItem>
          )}
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-red-600">
            <Button
              variant={"destructive"}
              size="sm"
              className="w-full"
              onClick={signOut}
            >
              Log Out
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
};

export default Navbar;

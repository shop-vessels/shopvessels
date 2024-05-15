import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="w-full h-screen py-20 flex items-center justify-center flex-col">
      <span className="font-bold text-4xl">404</span>
      <p className="text-sm ">
        The course you are looking for is not available.
      </p>
      <Button size="sm" className="mt-4" asChild> 
        <Link href="/all-courses">All Courses</Link>
      </Button>
    </div>
  );
}

export default NotFound;

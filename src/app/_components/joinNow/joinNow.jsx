import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const joinNow = () => {
  return (
    <div className="text-foreground/65  text-center sm:p-16 py-8 px-3">
      <p className="sm:text-4xl text-2xl font-semibold">START YOUR TRIAL</p>
      <p className="mt-4 smtext-lg text-base">
        Join our growing global community and start your 3 day free trial today
      </p>
      <Button
        asChild
        className="text-lg py-6 px-6 text-foreground/65 mt-8 sm:w-auto w-full"
      >
        <Link href="/signup">JOIN NOW</Link>
      </Button>
    </div>
  );
};

export default joinNow;

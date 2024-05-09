"use client"; // Error components must be Client Components

import Image from "next/image";
import image from "../../public/images/warning/warning.png";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="flex-grow flex flex-col items-center justify-center max-w-md m-auto text-center md:py-16 py-8 lg:px-0 px-5">
      <Image
        width={200}
        height={200}
        src={image}
        className="md:w-52 w-1/3"
        alt="image"
      ></Image>{" "}
      <p className="md:text-4xl text-2xl font-semibold text-foreground/60">
        Oops! Something went wrong!
      </p>
      <p className="md:text-xl text-lg text-foreground/60 mt-7">
        Server issues. Please refresh. If problem persists, try again later.
      </p>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="mt-7 "
      >
        Try again
      </Button>
    </div>
  );
}

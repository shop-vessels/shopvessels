import Image from "next/image";
import React from "react";

const practice = () => {
  return (
    <div className="text-center text-foreground/65">
      <div className="w-1/2 m-auto">
        <p className="text-4xl font-semibold">PRACTICE ON ANY SCREEN</p>
        <p className="md:text-lg text-foreground/55">
          Practice with us anywhere, anytime (on all of your devices!) with our
          Humming Puppy On Demand App! Available on the Apple & Google Play
          Stores.
        </p>
      </div>
      <div>{/* <Image src={}/> */}</div>
    </div>
  );
};

export default practice;

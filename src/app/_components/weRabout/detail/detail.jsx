import React from "react";
// import image from "./images/image1.webp";
import Image from "next/image";

const detail = ({ image, title, desc }) => {
  return (
    <div className="text-foreground/65  text-center flex flex-col justify-center items-center gap-5">
      <Image
        src={image}
        width={120}
        height={120}
        alt="image"
        className="rounded-full"
      />
      <p className="text-lg font-semibold ">{title}</p>
      <p className="text-foreground/55">{desc}</p>
    </div>
  );
};

export default detail;

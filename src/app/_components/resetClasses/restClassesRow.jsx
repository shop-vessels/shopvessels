import Image from "next/image";
import React from "react";

const restClassesRow = ({ image, title, desc }) => {
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

export default restClassesRow;

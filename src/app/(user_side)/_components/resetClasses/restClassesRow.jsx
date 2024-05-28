import Image from "next/image";
import React from "react";

const restClassesRow = ({ image, title, desc }) => {
  return (
    <div className="text-foreground/65  text-center flex flex-col justify-start items-center gap-2 ">
      <div className="relative max-w-32 w-full overflow-hidden rounded-full aspect-square">
        <Image
          src={image}
          fill
          alt="image"
          className="w-full h-full object-cover aspect-square"
        />
      </div>
      <p className="text-lg font-semibold ">{title}</p>
      <p className="text-foreground/55 ">{desc}</p>
    </div>
  );
};

export default restClassesRow;

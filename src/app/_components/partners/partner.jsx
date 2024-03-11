"use client";
import Image from "next/image";

const Partner = ({ title, image }) => {
  return (
    <div className="self-center relative group">
      <div className="relative w-full aspect-square">
        <Image className="object-cover" fill src={image} alt="image" />
      </div>
      <div className="absolute opacity-0 group-hover:opacity-100 transition-all w-full left-0 bottom-0 py-5 bg-foreground/60 h-full flex items-center justify-center">
        <p className="text-center text-xl font-semibold mt-2 text-white">{title}</p>
      </div>
    </div>
  );
};

export default Partner;

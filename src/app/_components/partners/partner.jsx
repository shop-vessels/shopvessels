"use client";
import Image from "next/image";

const Partner = ({ title, image }) => {
  return (
    <div className="self-center">
      <Image width={400} height={400} src={image} alt="image" />
      <div>
        <p className="text-center text-xl font-semibold mt-2">{title}</p>
      </div>
    </div>
  );
};

export default Partner;

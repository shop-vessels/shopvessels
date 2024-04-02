import React from "react";
// import image from "../../../../../public/images/landingPage/uniqueTraning/image1.jpg";
import Image from "next/image";

const UniqueCards = ({ image, title, description }) => {
  return (
    <div className=" lg:w-1/3 text-center  text-foreground/55 lg:mt-0 mt-4">
      <Image
        src={image}
        width={300}
        height={300}
        alt="image"
        className="mx-auto lg:w-auto w-full"
      />
      <p className=" text-2xl lg:mt-3 mt-1 lg:px-14">{title}</p>
      <p className="font-light text-lg lg:mt-3 mt-1">{description}</p>
    </div>
  );
};

export default UniqueCards;

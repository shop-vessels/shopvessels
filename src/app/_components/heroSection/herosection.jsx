import React from "react";
import Heroimage from "../../../../public/images/hero_section/heroBgimage.webp";
import Image from "next/image";

const herosection = () => {
  return (
    <div>
      <Image src={Heroimage} width={1300} height={1300} alt="image" />
    </div>
  );
};

export default herosection;

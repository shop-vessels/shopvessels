import Image from "next/image";
import React from "react";
import image from "../../../../public/images/practice/frame.webp";
// import tvimg from "../../../../public/images/practice/tv.webp";
// import laptopimg from "../../../../public/images/practice/laptop.webp";
// import mobimg from "../../../../public/images/practice/mobile.webp";
import main from "../../../../public/images/practice/main.png";

const practice = () => {
  return (
    <div className="text-center text-foreground/65 pt-24">
      <div className="w-1/2 m-auto">
        <p className="text-4xl font-semibold">PRACTICE ON ANY SCREEN</p>
        <p className="md:text-lg text-foreground/55">
          Practice with us anywhere, anytime (on all of your devices!) with our
          Humming Puppy On Demand App! Available on the Apple & Google Play
          Stores.
        </p>
      </div>
      <div>
        <div className="w-full lg:px-0 px-4">
          <Image
            src={main}
            width={1300}
            height={1300}
            alt="image"
            className="m-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default practice;

import Image from "next/image";
import React from "react";
import main from "../../../../public/images/practice/main.jpg";

const practice = () => {
  return (
    <div className=" text-center text-foreground/65 md:pt-24 pt-12">
      <div className="sm:w-1/2 m-auto sm:px-0 px-4">
        <p className="md:text-4xl text-2xl w font-semibold">
          PRACTICE ON ANY SCREEN
        </p>
        <p className="md:text-lg text-foreground/55 mt-4">
          Practice with us anywhere, anytime (on all of your devices!) with our
          Humming Puppy On Demand App! Available on the Apple & Google Play
          Stores.
        </p>
      </div>
      <div>
        <div className="w-full lg:px-0 px-4 mt-8">
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

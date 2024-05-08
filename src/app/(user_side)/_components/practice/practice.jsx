import Image from "next/image";
import React from "react";
import main from "../../../../../public/images/practice/Frame.png";

const practice = () => {
  return (
    <div className="max-w-7xl mx-auto text-center text-foreground/65 md:pt-24 pt-12">
      <div className="md:w-1/2 m-auto md:px-0 px-4">
        <p className="md:text-4xl text-2xl w font-semibold">
          INTRODUCING OUR FIRST VESSEL
        </p>
        <p className="md:text-3xl text-xl mt-2 font-medium">
          Archive 00: Genesis
        </p>
        <p className="md:text-lg text-foreground/55 mt-4">
          We&#39;ve named our first offering or what we call a
          &#8216;vessel&#8217; &mdash; Archive 00: Genesis because we believe
          that the greatest gift we can offer our community is the gift of
          healing. This vessel marks the beginning of all things &ndash; the
          beginning of self-love, the beginning of self-regulation,
          self&ndash;awareness, self&ndash;worth, and the journey to discovering
          your true path on this earth.
        </p>
      </div>
      <div>
        <div className="w-full lg:px-0 px-4 ">
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
import dynamic from "next/dynamic";
// import Slider from "../hero_section/slider/Slider";

const Slider = dynamic(
  () => import("./slider/Slider").then((slider) => slider.default),
  { ssr: false }
);

import React from "react";

function page() {
  return (
    <div>
      <Slider />
    </div>
  );
}

export default page;

import React from "react";
import Kickstarter from "./kickstarter";
import kickstarterData from "../../../data/video.json";

const page = () => {
  return (
    <div className="max-w-7xl m-auto">
      {kickstarterData.map((starter, index) => (
        <Kickstarter video={starter.video} key={index} />
      ))}
    </div>
  );
};

export default page;

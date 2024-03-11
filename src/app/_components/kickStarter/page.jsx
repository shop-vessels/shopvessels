import React from "react";
import Kickstarter from "./kickstarter";
import { TrustedGuideData } from "../../../data/TrustedGuideVideo.js";

const page = () => {
  return (
    <div className="w-full m-auto">
      <Kickstarter video={TrustedGuideData.video}  />
    </div>
  );
};

export default page;

"use client";
import Trustedguied from "./trustedguied";
import { TrustedGuideData } from "../../../data/TrustedGuideVideo.js";

// console.log(videoData);

const page = () => {
  return (
    <div className="w-full m-auto">
      <Trustedguied video={TrustedGuideData?.video} />
    </div>
  );
};

export default page;

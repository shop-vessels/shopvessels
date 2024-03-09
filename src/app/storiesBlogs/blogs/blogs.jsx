import React from "react";
import Catagoury from "./catagoury/catagoury";
import catagoryData from "../../../data/catagory.json";

const blogs = () => {
  return (
    <div>
      <p className="text-center pt-12 text-3xl">The Wakeful Travel Blog</p>
      <div className="px-12 py-12  justify-center grid grid-flow-row gap-6 text-base">
        {catagoryData.map((option) => (
          <Catagoury option={option.option} />
        ))}
      </div>
    </div>
  );
};

export default blogs;

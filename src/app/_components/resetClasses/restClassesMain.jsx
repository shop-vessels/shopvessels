import React from "react";
import ResetClasses from "./resetClasses";
import RestClassesRow from "./restClassesRow";
import detailData from "../../../data/weRaboutDetail.json";

const restClassesMain = () => {
  return (
    <div>
      <ResetClasses />
      <div className="grid lg:grid-cols-4 md:grid-cols-2  md:gap-4 gap-8  md:px-6 px-6 py-16">
        {detailData.map((detail, index) => (
          <RestClassesRow
            key={index}
            image={detail.image}
            title={detail.title}
            desc={detail.description}
          />
        ))}
      </div>
    </div>
  );
};

export default restClassesMain;

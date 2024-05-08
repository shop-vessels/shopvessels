import React from "react";
import ResetClasses from "./resetClasses";
import RestClassesRow from "./restClassesRow";
import detailData from "../../../../data/weRaboutDetail.json";

const restClassesMain = () => {
  return (
    <div className="max-w-7xl m-auto">
      <div className="grid lg:grid-cols-4 md:grid-cols-2  md:gap-4 gap-8  md:px-6 px-6 py-16 max-w-[1200px] m-auto">
        {detailData.map((detail, index) => (
          <RestClassesRow
            key={index}
            image={detail.image}
            title={detail.title}
            desc={detail.description}
          />
        ))}
      </div>
      <ResetClasses />
    </div>
  );
};

export default restClassesMain;

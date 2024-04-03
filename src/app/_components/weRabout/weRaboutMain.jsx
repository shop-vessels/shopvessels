import WeRabout from "./weRaboutTrial/weRabout";
import Detail from "./detail/detail";
import detailData from "../../../data/weRaboutDetail.json";

const weRaboutMain = () => {
  return (
    <div>
      <WeRabout />
      <div className="grid lg:grid-cols-4 md:grid-cols-2  md:gap-4 gap-8 pt-24 md:px-6 px-6 pb-16">
        {detailData.map((detail, index) => (
          <Detail
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

export default weRaboutMain;

import TrendingClasses from "./trendingClasses";
import trendingData from "../../../data/trending_classes.json";

const trendingMain = () => {
  return (
    <div className="p-16">
      <p className="text-center text-5xl font-semibold text-foreground/80">
        TRENDING CLASSES
      </p>
      <div className="grid grid-cols-5 gap-7 mt-16">
        {trendingData.map((trending , ind) => (
          <TrendingClasses
            image={trending.image}
            time={trending.time}
            title={trending.title}
            maker={trending.maker}
            key={ind}
          />
        ))}
      </div>
    </div>
  );
};

export default trendingMain;

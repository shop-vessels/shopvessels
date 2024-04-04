import TrendingClasses from "./trendingClasses";
import trendingData from "../../../data/trending_classes.json";

const trendingMain = () => {
  return (
    <div className="p-16 ">
      <p className="text-center text-4xl font-semibold text-foreground/70">
        TRENDING CLASSES
      </p>
      <div className="">
        <TrendingClasses />
      </div>
    </div>
  );
};

export default trendingMain;

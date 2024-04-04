import TrendingClasses from "./trendingClasses";
import trendingData from "../../../data/trending_classes.json";

const trendingMain = () => {
  return (
    <div className="sm:py-16 py-9 px-3">
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

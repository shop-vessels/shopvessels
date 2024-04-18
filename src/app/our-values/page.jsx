import Welcome from "./welcome/welcome";
import Experience from "./experience/experience";
import HumHome from "./humHome/humHome";
import Culture from "./culture/culture";
import HumingHum from "./humHumming/humHuming";
import Free from "./free/Free";

export const metadata = {
  title: "Humming Puppy On Demand: Yoga Classes for All Levels & Global Access",
  description:
    "Explore a variety of yoga classes on Humming Puppy On Demand, catering to all skill levels. Join specialized practices and traditional styles from anywhere in the world, bringing yoga and guidance into the comfort of your home.",
};

const page = () => {
  return (
    <div>
      <Welcome />
      <Experience />
      <HumHome />
      <Culture />
      <HumingHum />
      <Free />
    </div>
  );
};

export default page;

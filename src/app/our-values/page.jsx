import Welcome from "./welcome/welcome";
import Experience from "./experience/experience";
import HumHome from "./humHome/humHome";
import Culture from "./culture/culture";
import HumingHum from "./humHumming/humHuming";
import Free from "./free/Free";

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

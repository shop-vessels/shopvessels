import Welcome from "./welcome/welcome";
import Experience from "./experience/experience";
import HumHome from "./humHome/humHome";
import Culture from "./culture/culture";

const page = () => {
  return (
    <div>
      <Welcome />
      <Experience />
      <HumHome />
      <Culture />
    </div>
  );
};

export default page;

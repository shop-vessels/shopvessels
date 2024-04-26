import Welcome from "./welcome/welcome";
import Experience from "./experience/experience";
import HumHome from "./humHome/humHome";
import Culture from "./culture/culture";
import HumingHum from "./humHumming/humHuming";
import Free from "./free/Free";

export const metadata = {
  title: "Unity, Innovation, Empowerment, Harmony: Our Pillars of Well-Being",
  description:
    "Explore our pillars of unity, innovation, empowerment, and harmony as we come together to celebrate diversity and inclusion. Join us in pioneering groundbreaking approaches to holistic wellness and personal development, fostering resilience and promoting balance in mind, body, and spirit.",
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

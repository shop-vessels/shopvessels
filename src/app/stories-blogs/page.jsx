import Guide from "./guide/guide";
import Blogs from "./blogs/blogss";
import SortBy from "./SortBy/SortBy";

export const metadata = {
  title: "Microdosing Magic Mushrooms: A Path to Healing and Self-Discovery?",
  description:
    "Discover the potential benefits of microdosing magic mushrooms. Learn how small, imperceptible doses of psychedelics may offer a pathway to healing and self-discovery for some",
};

const page = () => {
  return (
    <div>
      <div className="md:hidden block">
        <SortBy />
      </div>
      <Guide />
      <Blogs />
    </div>
  );
};

export default page;

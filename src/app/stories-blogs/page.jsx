import Guide from "./guide/guide";
import Blogs from "./blogs/blogs";
import SortBy from "./SortBy/SortBy";

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

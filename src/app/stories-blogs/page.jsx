import Guide from "./guide/guide";
import Blogs from "./blogs/blogss";
import SortBy from "./SortBy/SortBy";
import BlogModel from "@/database/models/BlogModel";
import ErrorBlock from "../all-courses/_components/ErrorBlock";

// Do not mark this page as client

export const metadata = {
  title: "Microdosing Magic Mushrooms: A Path to Healing and Self-Discovery?",
  description:
    "Discover the potential benefits of microdosing magic mushrooms. Learn how small, imperceptible doses of psychedelics may offer a pathway to healing and self-discovery for some",
};

const page = async () => {
  const blogs = await BlogModel.find({}).lean().exec();
  

  console.log(blogs);

  if (!blogs || blogs.length === 0) {
    return (
      <ErrorBlock
        code={404}
        title={"Currently No blog is available"}
        desc={"Please visit later to enroll into blog"}
      />
    );
  }

  console.log(blogs);
  
  // Do rendering on blogs here below

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

export const dynamic = "force-dynamic";
import Blogs from "./blogs/blogss";
import SortBy from "./SortBy/SortBy";
import BlogModel from "@/database/models/BlogModel";
import ErrorBlock from "../all-courses/_components/ErrorBlock";
import connectDB from "@/database/connectDatabase";

// Do not mark this page as client

export const metadata = {
  title: "Microdosing Magic Mushrooms: A Path to Healing and Self-Discovery?",
  description:
    "Discover the potential benefits of microdosing magic mushrooms. Learn how small, imperceptible doses of psychedelics may offer a pathway to healing and self-discovery for some",
};

const page = async () => {
  await connectDB();
  const blogs = await BlogModel.find({}).select("-content").lean().exec();

  if (!blogs || blogs.length === 0) {
    return (
      <ErrorBlock
        code={404}
        title={"Currently No blog is available"}
        desc={"Please visit later to enroll into blog"}
      />
    );
  }

  // Do rendering on blogs here below

  return (
    <main>
      <div className="md:hidden block">
        <SortBy />
      </div>
      {/* <Guide /> */}
      <Blogs blogs={blogs} />
    </main>
  );
};

export default page;

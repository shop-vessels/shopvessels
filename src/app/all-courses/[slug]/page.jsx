export const dynamic = "force-dynamic";

import Rest from "./restReset/Rest";
import Videos from "./videos/videos";
import videoData from "../../../data/all_courses.json";
import { CirclePlay } from "lucide-react";
import Link from "next/link";
import CourseModel from "@/database/models/CourseModel";
import ErrorBlock from "../_components/ErrorBlock";

const page = async ({ params }) => {
  const { slug } = params;
  const course = await CourseModel.findById(slug).lean().exec();

  if (!course) {
    return (
      <ErrorBlock
        code={404}
        title={"Not Found"}
        desc={"Invalid URL or the course has been removed"}
      />
    );
  }


  return (
    <div className=" max-w-7xl m-auto ">
      <Rest course={course} />
      <div className="bg-foreground/5 py-10 border border-foreground/5  px-5">
        <p className="flex items-center gap-1">
          <CirclePlay className="w-5" /> videos
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4  mt-4">
          {videoData.map((vidata, index) => (
            <Videos
              key={index}
              image={vidata.image}
              time={vidata.time}
              title={vidata.title}
              description={vidata.title}
            />
          ))}
        </div>
      </div>
      <Comment />
    </div>
  );
};

const Comment = () => {
  return (
    <div className="py-8 px-6">
      <div className="border-b border-foreground/4 pb-5">
        <p className="sm:text-2xl text-xl">Comments on collection (0)</p>
        <p className="mt-1">
          <Link href="/login" className="text-primary ">
            signin
          </Link>{" "}
          to participate in conversation
        </p>
      </div>
      <p className="mt-5">No comments yet</p>
    </div>
  );
};
export default page;

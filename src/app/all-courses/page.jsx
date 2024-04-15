import Rest from "./restReset/Rest";
import Videos from "./videos/videos";
import videoData from "../../data/all_courses.json";
import { CirclePlay } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Rest />
      <div className="bg-foreground/5 py-10 border border-foreground/5  px-5">
        <p className="flex items-center gap-1">
          {" "}
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

export default page;

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

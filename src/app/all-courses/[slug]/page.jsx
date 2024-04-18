export const dynamic = "force-dynamic";

import Rest from "./restReset/Rest";
import { CirclePlay } from "lucide-react";
import Link from "next/link";
import CourseModel from "@/database/models/CourseModel";
import ErrorBlock from "../_components/ErrorBlock";
import connectDB from "@/database/connectDatabase";
import VideoCard from "./_components/VideoCard";

const page = async ({ params }) => {
  const { slug } = params;
  await connectDB();
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

  // const videos = await getLinksOfVideos(course.videos);

  return (
    <div className=" max-w-7xl m-auto ">
      <Rest course={course} />
      <div className="bg-foreground/5 py-10 border border-foreground/5  px-5">
        <p className="flex items-center gap-1">
          <CirclePlay className="w-5" /> videos
        </p>
        {(course.videos?.length && (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4  mt-4">
            {course.videos?.map(({ title, S3Key }, index) => (
              <VideoCard title={title} S3Key={S3Key} key={S3Key} />
            ))}
          </div>
        )) || (
          <ErrorBlock
            code={404}
            title={"This course might have 0 video"}
            desc={"Please try reloading the page or check again tomorrow"}
          />
        )}
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

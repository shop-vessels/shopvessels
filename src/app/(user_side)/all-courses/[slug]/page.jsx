export const dynamic = "force-dynamic";

import Rest from "./restReset/Rest";
import { CirclePlay } from "lucide-react";
import Link from "next/link";
import CourseModel from "@/database/models/CourseModel";
import ErrorBlock from "../_components/ErrorBlock";
import connectDB from "@/database/connectDatabase";
import VideoCard from "./_components/VideoCard";
import { notFound } from "next/navigation";

const page = async ({ params }) => {
  const { slug } = params;
  await connectDB();
  const course = await CourseModel.findById(slug).lean().exec();

  if (!course) {
    return notFound();
  }

  const firstThreeVideos = course.chapters
    .flatMap((chapter) => chapter.days)
    .flatMap((day) => day.lesson.videos)
    .slice(0, 3);

  return (
    <div className="w-full max-w-7xl m-auto ">
      <Rest course={course} />
      <div className="bg-foreground/5 py-10 border border-foreground/5 rounded-md mb-10  px-5">
        <p className="flex items-center gap-1">
          <CirclePlay className="w-5" /> videos
        </p>
        {(firstThreeVideos && firstThreeVideos?.length && (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4  mt-4">
            {firstThreeVideos?.map(({ title, S3Key }, index) => (
              <VideoCard title={title} S3Key={S3Key} key={S3Key} />
            ))}
          </div>
        )) || (
          <div className="w-full max-w-md mx-auto border border-accent-foreground/20 p-5 rounded-md">
            <h2 className="font-bold">No Video Found</h2>
            <p>This course has no video uploaded.</p>
          </div>
        )}
      </div>
      {/* <Comment /> */}
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

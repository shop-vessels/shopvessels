import { Progress } from "@/components/ui/progress";
import { ChevronLeft } from "lucide-react";
import React from "react";
import SearchBar from "./_components/SearchBar";
import WeeksAccordion from "./_components/WeeksAccordion";
import CourseContent from "./_components/content";
import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";
import { isValidObjectId } from "mongoose";

const Page = async ({ params }) => {
  const { slug } = params;
  await connectDB();

  const isIdValid = isValidObjectId(slug);

  if (!isIdValid) {
    return (
      <div className="max-w-md bg-foreground/5 rounded-md p-10 mx-auto">
        <h2 className="text-lg font-bold">Invalid URL</h2>
        <p>Your URL is invalid, please check your url </p>
      </div>
    );
  }

  const course = await CourseModel.findById(slug).lean().exec();

  if (!course) {
    return (
      <div className="max-w-md bg-foreground/5 rounded-md p-10 mt-10 mx-auto text-center">
        <h2 className="text-lg font-bold ">404</h2>
        <p>This course has been removed or doesn&apos;t exists.</p>
      </div>
    );
  }

  // console.log(course);
  return (
    <div className="flex justify-center items-center h-screen relative">
      <aside className="border-r w-full max-w-sm p-5 !h-full overflow-y-auto">
        <CourseMetaBlock course={course} />
        {/* <SearchBar /> */}
        <WeeksAccordion id={slug} videos={course?.videos} />
      </aside>
      <CourseContent />
    </div>
  );
};

const CourseMetaBlock = ({ course }) => {
  return (
    <div className="border shadow-md rounded-md">
      <div className="text-center bg-primary py-3">
        <p>Logo</p>
      </div>
      <div className="p-2">
        <div className="text-xs flex gap-0.5 text-foreground/60 mt-2 items-center">
          <ChevronLeft size={14} /> <span>Go to Dashboard</span>
        </div>
        <h2 className="mt-2 text-xl font-medium text-foreground/80">
          {course?.title}
        </h2>
        <p className="line-clamp-3">{course?.description}</p>
        <div className="mt-2">
          <Progress value={10} className="h-1 mb-2" />
          <span>10% </span>
          <span className="text-xs">complete</span>
        </div>
      </div>
    </div>
  );
};

export default Page;

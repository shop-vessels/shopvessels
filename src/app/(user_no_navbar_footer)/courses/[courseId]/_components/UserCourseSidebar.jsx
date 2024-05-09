import { Progress } from "@/components/ui/progress";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import Chapters from "./Chapters";
import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";

async function getCourse(id) {
  "use server";

  await connectDB();
  const course = await CourseModel.findById(id)
    .select("title chapters")
    .lean()
    .exec();
  return course;
}

const UserCourseSidebar = async ({ courseId }) => {
  try {
    const course = await getCourse(courseId.toString());
    const { title, chapters } = course;

    return (
      <aside className=" overflow-y-auto w-full h-full self-stretch max-w-sm bg-foreground/5">
        <MetaData title={title} />
        <Chapters chapters={chapters} courseId={courseId} />
      </aside>
    );
  } catch (error) {
    console.log(error);
    throw new Error("Something wen't wrong while fetching the course.");
  }
};

const MetaData = ({ title }) => {
  return (
    <div className="p-2 ">
      <div className="rounded-md  bg-white border overflow-hidden flex flex-col gap-3">
        <div className="bg-primary flex justify-center text-2xl text-background py-4">
          Vessels
        </div>
        <div className="p-3">
          <Link href={"#"} className="text-sm flex gap-1 items-center">
            <ChevronLeft size={14} /> Go Dashboard{" "}
          </Link>

          <h1 className="text-2xl font-medium">{title}</h1>
          <Progress value="10" className="h-2 mt-2" />

          <p className="text-sm mt-3">10% complete</p>
        </div>
      </div>
    </div>
  );
};

export default UserCourseSidebar;

import connectDB from "@/database/connectDatabase";
import { isValidObjectId } from "mongoose";
import React from "react";
import ErrorBox from "../../../(common)/_components/ErrorBox";
import CourseModel from "@/database/models/CourseModel";
import { Separator } from "@/components/ui/separator";
import EditCourseForm from "./_components/EditCourseForm";
import CourseGenericInfoForm from "./_components/CourseGenericInfoForm";
import CourseVideoUpload from "./_components/CourseVideoUpload";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function page({ searchParams }) {
  const { id } = searchParams;
  const myId = id?.toString() || null;

  await connectDB();

  const isValidId = isValidObjectId(myId);

  if (!myId || !isValidId) return <ErrorBox />;

  const course = await CourseModel.findById(myId)
    .select("-_id -videos")
    .lean()
    .exec();

  if (!course)
    return (
      <ErrorBox
        title={"Not Found"}
        description={
          "Course does not exists, Please reload the page and try again"
        }
      />
    );

  // console.log(course);

  return (
    <div className="max-w-4xl mx-auto lg:px-5">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-3xl">Edit Course</h1>
          <p className="text-foreground/60">{myId}</p>
        </div>
        <Button variant="outline" asChild>
          <Link href={`/all-courses/${myId}`} target="_blank">Preview</Link>
        </Button>
      </div>
      <Separator className="my-5" />
      <EditCourseForm course={course} id={myId} />

      <Separator className="my-5" />

      <CourseGenericInfoForm course={course} id={myId} />
      <Separator className="my-5" />
      {/* <CourseVideoUpload id={myId} /> */}

      <Button className="w-full" asChild>
        <Link href={`/dashboard/courses/videos/${myId}`}>Manage Videos </Link>
      </Button>
    </div>
  );
}

export default page;

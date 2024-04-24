import connectDB from "@/database/connectDatabase";
import { isValidObjectId } from "mongoose";
import React from "react";
import ErrorBox from "../../_components/ErrorBox";
import CourseModel from "@/database/models/CourseModel";
import { Separator } from "@/components/ui/separator";
import EditCourseForm from "./_components/EditCourseForm";
import CourseGenericInfoForm from "./_components/CourseGenericInfoForm";
import CourseVideoUpload from "./_components/CourseVideoUpload";

async function page({ searchParams }) {
  const { id } = searchParams;
  const myId = id?.toString() || null;

  await connectDB();

  const isValidId = isValidObjectId(myId);

  if (!myId || !isValidId) return <ErrorBox />;

  const course = await CourseModel.findById(myId).select("-_id -videos").lean().exec();


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
      <h1 className="font-bold text-3xl">Edit Course</h1>
      <p className="text-foreground/60">{myId}</p>
      <Separator className="my-5" />
      <EditCourseForm course={course} id={myId} />

      <Separator className="my-5" />

      <CourseGenericInfoForm course={course} id={myId} />
      <Separator className="my-5" />
      <CourseVideoUpload id={myId} />
    </div>
  );
}

export default page;

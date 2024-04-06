import connectDB from "@/database/connectDatabase";
import { isValidObjectId } from "mongoose";
import React from "react";
import ErrorBox from "../../_components/ErrorBox";
import CourseModel from "@/database/models/CourseModel";
import { Separator } from "@/components/ui/separator";
import EditCourseForm from "./_components/EditCourseForm";
import CourseGenericInfoForm from "./_components/CourseGenericInfoForm";

async function page({ searchParams }) {
  const { id } = searchParams;

  await connectDB();

  const isValidId = isValidObjectId(id);

  if (!id || !isValidId) return <ErrorBox />;

  const course = await CourseModel.findById(id).select("-_id").lean().exec();

  if (!course)
    return (
      <ErrorBox
        title={"Not Found"}
        description={
          "Course does not exists, Please reload the page and try again"
        }
      />
    );

  console.log(id);
  return (
    <div className="max-w-4xl mx-auto px-5">
      <h1 className="font-bold text-3xl">Edit Course</h1>
      <p className="text-foreground/60">{id}</p>
      <Separator className="my-5" />
      <EditCourseForm course={course} id={id} />

      <Separator className="my-5" />

      <CourseGenericInfoForm course={course} id={id} />
    </div>
  );
}

export default page;

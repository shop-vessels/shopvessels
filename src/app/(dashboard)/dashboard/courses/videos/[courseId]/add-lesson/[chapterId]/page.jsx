import React from "react";
import { Separator } from "@/components/ui/separator";
import LessonForm from "./_components/LessonForm";
import CourseModel from "@/database/models/CourseModel";
import connectDB from "@/database/connectDatabase";

async function AddLessonPage({ params, searchParams }) {
  const { dayId } = searchParams;

  return (
    <div className="rounded-md p-5 bg-foreground/5 w-full max-w-md mx-auto mt-10">
      <h1 className="text-lg font-bold">
        Fill below to {dayId ? "update" : "create"} Lesson
      </h1>
      <Separator className="mt-5" />
      <LessonForm params={params} dayId={dayId} />
    </div>
  );
}

export default AddLessonPage;

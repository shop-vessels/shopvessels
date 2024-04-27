import React from "react";
import CourseHeader from "./_components/CourseHeader";
import Courses from "./_components/Courses";
import { Separator } from "@/components/ui/separator";

function page() {
  return (
    <div className="relative">
      <CourseHeader />
      <Separator className="mt-10" />
      <Courses />
    </div>
  );
}

export default page;

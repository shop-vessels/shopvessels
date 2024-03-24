import { ScrollText, SquareDot, SquarePen, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import CreateCoursePopup from "./_components/CreateCoursePopup";
import CourseHeader from "./_components/CourseHeader";
import Courses from "./_components/Courses";
import { Separator } from "@/components/ui/separator";

function page() {
  return (
    <div>
      <CourseHeader />
      <Separator className="mt-10" />
      <Courses />
    </div>
  );
}

export default page;

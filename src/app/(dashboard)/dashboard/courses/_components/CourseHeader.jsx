import React from "react";
import CreateCoursePopup from "./CreateCoursePopup";

const CourseHeader = () => {
  return (
    <header className="flex justify-between items-center">
      <div>
        <h1 className="text-4xl font-bold text-foreground/80">
          Manage Courses
        </h1>
        <p className="mt-2 text-lg">
          Here you can create, update, delete courses
        </p>
      </div>

      <CreateCoursePopup />
    </header>
  );
};

export default CourseHeader;

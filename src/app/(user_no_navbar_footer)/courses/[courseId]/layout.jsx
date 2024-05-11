import React from "react";
import UserCourseSidebar from "./_components/UserCourseSidebar";
import { redirect } from "next/navigation";

const layout = ({ children, params }) => {
  const { courseId } = params;

  return (
    <div className="h-screen overflow-y-hidden flex">
      <UserCourseSidebar courseId={courseId} />
      <main className="flex-grow mx-auto overflow-y-auto">{children}</main>
    </div>
  );
};

export default layout;

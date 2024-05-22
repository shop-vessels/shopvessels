import React from "react";
import CourseVideoSideBar from "./_components/SideBar/CourseVideoSideBar";

function Layout({ params, children }) {
  const { courseId } = params;
  return (
    <div className="flex-grow flex relative h-full overflow-y-auto">
      <CourseVideoSideBar courseId={courseId} />
      <div className="w-full mt-10 lg:mt-0 overflow-x-hidden h-full flex-grow overflow-y-auto flex flex-col">
        {children}
      </div>
    </div>
  );
}

export default Layout;

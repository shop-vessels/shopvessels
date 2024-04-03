import React from "react";
import CreateCoursePopup from "./CreateCoursePopup";
import DashboardPageHeader from "../../_components/DashboardPageHeader";

const CourseHeader = () => {
  return (
    <DashboardPageHeader
      title="Manage Courses"
      description="Here you can create, update, delete courses"
    >
      <CreateCoursePopup />
    </DashboardPageHeader>
  );
};

export default CourseHeader;

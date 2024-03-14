import React from "react";
import CourseProvider from "./_context/CourseContext";

function Layout({ children }) {
  return <CourseProvider>{children}</CourseProvider>;
}

export default Layout;
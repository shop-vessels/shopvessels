"use client";
import { useContext, createContext, useState } from "react";

const CourseContext = createContext();

const CourseProvider = ({ children }) => {
  const [courseObject, setCourseObject] = useState(null);

  const values = { courseObject, setCourseObject };

  return (
    <CourseContext.Provider value={values}>{children}</CourseContext.Provider>
  );
};

export const useCourse = () => useContext(CourseContext);

export default CourseProvider;

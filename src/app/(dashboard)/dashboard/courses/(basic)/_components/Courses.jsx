import React from "react";
import DashboardCourseCard from "./DashboardCourseCard";
import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";

const Courses = async () => {
  try {
    await connectDB();

    const courses = await CourseModel.find().lean().exec();

    return (
      <div className="mt-10">
        <h2 className="font-bold text-foreground/70 text-2xl">All Courses</h2>
        {courses.length <= 0 && (
          <div className="py-10 mt-10 font-medium text-foreground/80 text-center">
            <h2 className="text-xl font-bold">Not Found</h2>
            <p className="mt-3">
              There is not existing course <br /> Please create a new one!
            </p>
          </div>
        )}

        <div className=" mt-5 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {courses &&
            courses.map((course) => (
              <DashboardCourseCard {...course} key={course._id} />
            ))}
        </div>
      </div>
    );
  } catch (error) {}
};

export default Courses;

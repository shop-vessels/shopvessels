import connectDB from "@/database/connectDatabase";
import PurchaseModel from "@/database/models/CheckoutModel";
import CourseModel from "@/database/models/CourseModel";
import UserModel from "@/database/models/UserModel";
import { AuthOptions } from "@/lib/auth/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { CourseCard } from "../all-courses/page";

const page = async () => {
  await connectDB();

  const session = await getServerSession(AuthOptions);

  if (!session) {
    return redirect("/login");
  }

  const { _id } = await UserModel.findOne({ email: session?.user?.email })
    .select("_id")
    .lean()
    .exec();

  console.log(_id);

  const enrolled = await PurchaseModel.find({ userId: _id })
    .select("courseId")
    .lean()
    .exec();

  const courses = await Promise.all(
    enrolled.map(({ courseId }) =>
      CourseModel.findById(courseId)
        .select("title description category image level _id")
        .lean()
        .exec()
    )
  );

  console.log(courses);

  return (
    <div className="">
      <div className="py-5 bg-foreground/5">
        <h1 className="text-2xl px-5 font-bold max-w-5xl mx-auto">
          Enrolled Courses
        </h1>
      </div>
      <div className="grid px-5 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto mt-10">
        {courses.map((props) => (
          <CourseCard
            {...props}
            key={props._id}
            href={`/courses/${props?._id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default page;

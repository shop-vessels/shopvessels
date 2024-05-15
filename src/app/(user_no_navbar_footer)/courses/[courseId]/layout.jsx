export const dynamic = "force-dynamic";
import React from "react";
import UserCourseSidebar from "./_components/UserCourseSidebar";
import { getServerSession } from "next-auth";
import { AuthOptions } from "@/lib/auth/authOptions";
import { getFirstCourseFirstChapter } from "../_actions/getFirstCourseFirstChapter";
import PurchaseModel from "@/database/models/CheckoutModel";
import { redirect } from "next/navigation";
import connectDB from "@/database/connectDatabase";
import Chapters from "./_components/Chapters";
import { getCourse } from "./_actions/getCourse";
import { getCompletedProgress } from "./_actions/getCompletedProgress";

const layout = async ({ children, params }) => {
  const { courseId } = params;

  const session = await getServerSession(AuthOptions);

  if (!session) return redirect(`/login?callbackUrl=/courses/${courseId}`);

  await connectDB();
  const purchased = await PurchaseModel.findOne({
    userId: session.user?._id,
    courseId: courseId,
  })
    .select("_id")
    .lean()
    .exec();

  if (!purchased) return redirect(`/all-courses/${courseId}`);

  const course = await getCourse(courseId.toString());
  if (!course) return notFound();

  const { title, chapters } = course;

  const completedProgress = await getCompletedProgress(courseId, chapters);

  return (
    <div className="h-screen relative overflow-y-hidden flex">
      <UserCourseSidebar
        courseId={courseId}
        title={title}
        completedProgress={completedProgress}
      >
        <Chapters chapters={chapters} courseId={courseId} />
      </UserCourseSidebar>
      <main className="flex-grow mx-auto overflow-y-auto">{children}</main>
    </div>
  );
};

export default layout;

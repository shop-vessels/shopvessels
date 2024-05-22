import { redirect } from "next/navigation";
import { getFirstCourseFirstChapter } from "../_actions/getFirstCourseFirstChapter";
import { getServerSession } from "next-auth";
import { AuthOptions } from "@/lib/auth/authOptions";
import PurchaseModel from "@/database/models/CheckoutModel";

const page = async ({ params }) => {
  const { courseId } = params;

  
  const { chapterId, dayId } = await getFirstCourseFirstChapter(courseId);

  redirect(`/courses/${courseId}/${chapterId}/${dayId}`);
};

export default page;

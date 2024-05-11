import { NextResponse } from "next/server";
import { headers } from "next/headers";
import stripe from "@/lib/stripe/stripe";
import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";
import { getServerSession } from "next-auth";
import { AuthOptions } from "@/lib/auth/authOptions";
import UserModel from "@/database/models/UserModel";

export async function POST(_, { params: { courseId } }) {
  const headersList = headers();

  try {
    connectDB();
    const { user } = await getServerSession(AuthOptions);
    await connectDB();
    const { _id } = await UserModel.findOne({
      email: user?.email,
    })
      .select("_id")
      .lean()
      .exec();

    const course = await CourseModel.findById(courseId)
      .select("title coursePrice description")
      .lean()
      .exec();

    if (!course) {
      throw new Error("No course found");
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: course?.title,
              description: course?.description,
            },

            unit_amount: course.coursePrice * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      metadata: {
        courseId: course._id.toString(),
        userId: _id.toString(),
      },
      success_url: `${headersList.get("origin")}/courses/${courseId}`,
      cancel_url: `${headersList.get("origin")}/`,
    });

    return NextResponse.json({ sessionId: session.id, error: null });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Error creating checkout session" });
  }
}

import connectDB from "@/database/connectDatabase";
import PurchaseModel from "@/database/models/CheckoutModel";
import CourseProgressModel from "@/database/models/ProgressModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { data } = body;

    if (
      data.object.object === "checkout.session" &&
      data.object.payment_status === "paid"
    ) {
      const {
        id: sessionId,
        metadata: { courseId, userId },
        amount_total,
      } = data.object;

      const checkoutData = {
        sessionId,
        courseId,
        userId,
        amount: amount_total, //   Paid in dollar
        timestamp: new Date(),
      };

      await connectDB();
      await PurchaseModel.create({
        userId,
        sessionId,
        courseId,
        amount: amount_total,
      });

      await CourseProgressModel.create({
        userId,
        courseId,
        watchedVideosIds: [],
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ success: false }, { status: 500 });
  }
}

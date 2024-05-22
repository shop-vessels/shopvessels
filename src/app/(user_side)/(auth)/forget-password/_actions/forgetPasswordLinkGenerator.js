"use server";
import connectDB from "@/database/connectDatabase";
import UserModel from "@/database/models/UserModel";
import jwt from "jsonwebtoken";

export async function forgetPasswordLinkGenerator(email) {
  try {
    await connectDB();
    const exist = await UserModel.exists({ email: email });
    if (!exist) return "Not-Found";

    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const link = `${
      process.env.BASE_URL
    }/forget-password/verify?token=${encodeURI(token)}`;

    console.log(link);

    return "SUCCESS";
  } catch (error) {
    console.log(error);
    return "ERROR";
  }
}

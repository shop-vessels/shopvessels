"use server";

import connectDB from "@/database/connectDatabase";
import UserModel from "@/database/models/UserModel";
import bcrypt from "bcryptjs";

export async function updatePasswordAction(email, password) {
  try {
    await connectDB();
    const user = await UserModel.findOne({ email });
    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword;

    await user.save();

    return "SUCCESS";
  } catch (error) {
    console.log("error while updating password ", error);
    return "FAILURE";
  }
}

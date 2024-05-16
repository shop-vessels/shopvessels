"use server";

import connectDB from "@/database/connectDatabase";
import UserModel from "@/database/models/UserModel";

export async function changeUserRole(userId, value) {
  try {
    await connectDB();
    const user = await UserModel.findById(userId);
    user.role = value;
    await user.save();
    return "SUCCESS";
  } catch (error) {
    console.log(error);
    return "FAILURE";
  }
}

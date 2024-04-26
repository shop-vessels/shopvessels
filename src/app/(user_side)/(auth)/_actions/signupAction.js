"use server";

import UserModel from "@/database/models/UserModel";
import bcrypt from "bcryptjs";
import { sendSignUpEmail } from "../_libs/nodemailerTransporter";
import connectDB from "@/database/connectDatabase";

export async function signUpAction({ fullname, email, password, terms }) {
  try {
    await connectDB();

    const exists = await UserModel.exists({ email });
    if (exists) return "DUPLICATE";

    await sendSignUpEmail({email});

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({
      fullname,
      email,
      password: hashedPassword,
    });

    await user.save();

    return "SUCCESS";
  } catch (error) {
    console.log(error);
    return "ERROR";
  }
}

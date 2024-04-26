import React from "react";

import jwt from "jsonwebtoken";
import UserModel from "@/database/models/UserModel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import connectDB from "@/database/connectDatabase";

async function page({ searchParams }) {
  try {
    await connectDB()
    
    const token = searchParams?.token;
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserModel.findOne({ email: verified.email });

    user.role = "USER";
    await user.save();

    if (verified) {
      return (
        <main className="border w-full max-w-max p-10 mx-auto mt-10 lg:mt-20 rounded-md ">
          <h2 className=" text-2xl font-bold">Success</h2>
          <p>Your account has been verified successfully!</p>
          <p>Please login to continue to the website</p>
          <div className="flex gap-5 mt-5">
            <Link href={"/"}>
              <Button>Go Home</Button>
            </Link>
            <Link href={"/login"}>
              <Button>Login</Button>
            </Link>
          </div>
        </main>
      );
    }
  } catch (error) {
    return (
      <main className="p-10 border rounded-lg w-max">
        <h2 className="text-destructive text-2xl font-bold">Expired</h2>
        <p className="mt-2 ">The link is invalid or has been expired!</p>
        <Button className="mt-5">Resend Link</Button>
      </main>
    );
  }
}

export default page;

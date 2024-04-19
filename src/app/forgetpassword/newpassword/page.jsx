import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="px-3 my-16">
      <form className=" md:px-5 py-10 border-2 w-full max-w-lg bg-background mx-auto rounded-md">
        <div className="max-w-l p-6">
          <h1 className="text-3xl font-bold text-foreground/65">
            Reset Password
          </h1>
          <div className="mt-5">
            <label htmlFor="forget" className="">
              Email Address
            </label>
            <Input
              id="forget"
              type="email"
              placeholder="example@gmail.com"
              className="mt-2 mb-2"
            />
            <label htmlFor="confirm" className="">
              Confirm Password
            </label>
            <Input
              id="cinfirm"
              type="email"
              placeholder="example@gmail.com"
              className="mt-2"
            />
            <Button className="w-full mt-6"> Forget Password</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;

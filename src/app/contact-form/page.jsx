"use client";

import { Textarea } from "@/components/ui/textarea";

import { Input } from "@/components/ui/input";
import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Page = () => {
  const userSchema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup.string().required("Please enter a valid email address"),
    message: yup.string().min(20,"Must be at least 20 characters long").max(400).required("Please enter a message"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

  const onsubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-5">
      <form
        className="p-5 lg:p-10 w-full max-w-2xl border mx-auto mt-10 rounded-md"
        onSubmit={handleSubmit(onsubmit)}
      >
        {/* <h1 className="text-center md:text-3xl text-2xl font-bold text-foreground/60">
        Contact Us
      </h1> */}
        <h2 className="font-bold text-foreground/60 text-2xl">
          Contact Shop Vessels
        </h2>
        <p className="text-lg mt-2 text-foreground/60">
          We&apos;d love to hear from you!
        </p>
        <div className="flex flex-col mt-2">
          <InputBox
            type="text"
            title={"Your Name*"}
            id="name"
            placeholder="Full Name"
            {...register("name")}
            error={errors.name?.message}
          />

          <InputBox
            type="email"
            title={"Your Email Address*"}
            id="password"
            placeholder="johndoe.example.com"
            {...register("email")}
            error={errors.email?.message}
          />
          <label
            htmlFor="text-area"
            className="mt-3 text-base font-semibold text-foreground/60"
          >
            Your Message...
          </label>

          <Textarea
            name="textarea"
            id="text-area"
            cols="10"
            rows="4"
            className={`outline-none  w-full border-2 border-black/10 mt-2 py-6 px-4 ${
              errors.message?.message ? " border-red-600" : ""
            }`}
            
            placeholder="Type your message here..."
            {...register("message")}
            error={errors.message?.message}
          />
          {errors && <p className="text-red-600 mt-2 text-sm">{errors.message?.message}</p>}
        </div>
        <Button
          className="uppercase border border-primary px-5 py-5  mt-4 "
          type="submit"
        >
          submit
        </Button>
      </form>
    </div>
  );
};

const InputBox = forwardRef(({ title, error, ...props }, ref) => {
  return (
    <div className="mt-4">
      <label
        htmlFor={props?.id}
        className="inline-block text-foreground/60 font-bold"
      >
        {title}
      </label>
      <div>
        <Input
          ref={ref}
          className={` outline-none  w-full border-2 border-black/10 mt-2 py-6 px-4 ${
            error ? " border-red-600" : ""
          }`}
          {...props}
        />
        {error && <p className="text-red-600 mt-2 text-sm">{error}</p>}
      </div>
    </div>
  );
});

InputBox.displayName = "InputBox";

export default Page;

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
    message: yup.string().min(20).max(400).required("Please enter a message"),
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
    <form className="lg:p-16 p-8" onSubmit={handleSubmit(onsubmit)}>
      <p className="text-center md:text-3xl text-2xl font-bold text-foreground/60">
        Contact Us
      </p>
      <p className="font-bold text-foreground/60 text-3xl  md:mt-16 mt-10">
        CONTACT WAKEFUL TRAVEL
      </p>
      <p className="text-2xl mt-4 text-foreground/60">
        We’d love to hear from you.
      </p>
      <div className="flex flex-col">
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
          id="teaxt-area"
          cols="10"
          rows="4"
          className="border border-black/15 p-3 mt-3  bg-black/5"
          placeholder="Type your message here..."
          {...register("message")}
          error={errors.message?.message}
        />
      </div>
      <Button
        className="uppercase border border-primary px-5 py-5  mt-4 "
        type="submit"
      >
        submit
      </Button>
    </form>
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

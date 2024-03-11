"use client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const Login = () => {
  const userSchema = yup.object().shape({
    email: yup.string().required("Please enter a valid email address"),
    password: yup
      .string()
      .trim()
      .min(8, "Password must be at least 8 characters")
      .max(16, "Password should not be more than 16 characters")
      .required("Password is required"),
    terms: yup
      .boolean()
      .required("The terms and conditions must be accepted.")
      .oneOf([true], "The terms and conditions must be accepted.")
      .required("error"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onsubmit = (data) => {
    console.log(data);
  };

  console.log(errors?.terms);

  return (
    <form
      className="flex justify-center items-center md:px-10 px-3 lg:px-12 py-14 border-2 w-full max-w-lg bg-background mx-auto mt-10 rounded-md"
      onSubmit={handleSubmit(onsubmit)}
    >
      <div className="w-full max-w-md">
        <p className="text-3xl font-bold text-foreground/65">Welcome Back!</p>
        <p>We are glad to see you back!</p>

        <InputBox
          title={"Enter Your Email"}
          type="email"
          id="emailInput"
          placeholder="johndoe.example.com"
          {...register("email")}
          error={errors.email?.message}
        />

        <InputBox
          type="password"
          title={"Enter Your Password"}
          id="password"
          placeholder="Password"
          {...register("password")}
          error={errors.password?.message}
        />
        <div>
          <Link href="/forget" className=" text-sm font-light mt-3">
            Forgot Password?
          </Link>
        </div>

        <div className="flex flex-col justify-between mt-4">
          <div className="flex gap-2 group">
            <Checkbox id="terms" {...register("terms")} />
            <label
              htmlFor="terms"
              className="text-sm font-light cursor-pointer select-none"
            >
              I agree to the{" "}
              <a
                href="/terms"
                className="group-hover:text-blue-400 hover:underline"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
          {errors?.terms?.message && (
            <p className="text-red-600 mt-2 text-sm">
              Please checkout the box!
            </p>
          )}
        </div>
        {/* <input
          type="submit"
          className="bg-primary text-white px-7 py-5 rounded-[40px] hover:bg-[#212326] transition-all duration-200 font-semibold mb-10"
          value="Log in"
        /> */}
        <Button size="xl" className="w-full mt-4 text-base">
          Login Account
        </Button>
        <Link
          href="/signup"
          className=" w-max group block mt-3 text-sm font-light "
        >
          Don't have an account?
          <span className="group-hover:text-blue-500">Create a new one!</span>
        </Link>
      </div>
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

export default Login;

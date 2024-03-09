"use client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const login = () => {
  const userSchema = yup.object().shape({
    email: yup.string().required("Please enter a valid email address"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(16, "Password should not be more than 16 characters")
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
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

  return (
    <form
      className="flex justify-center items-center lg:px-14 px-4 py-16"
      onSubmit={handleSubmit(onsubmit)}
    >
      <div className="w-[50%] ">
        <p className="text-5xl mb-8 text-center">Welcome Back!</p>
        <p className="text-red-500">{errors.email?.message}</p>
        <label htmlFor="emailInput" className="font-semibold">
          Email
        </label>
        <div
          className={`border-2 border-black/10 px-3 py-3 mb-6 ${
            errors.email ? "border-2 border-red-500" : ""
          }`}
        >
          <input
            type="text"
            placeholder="Email"
            className="outline-none w-full"
            id="emailInput"
            {...register("email")}
          />
        </div>
        <p className="text-red-500">{errors.password?.message}</p>
        <label htmlFor="passwordInput" className="font-semibold">
          Password
        </label>
        <div
          className={`border-2 border-black/10 px-3 py-3 mb-6 ${
            errors.email ? "border-2 border-red-500" : ""
          }`}
        >
          <input
            type="password"
            placeholder="Password"
            className="outline-none w-full"
            id="passwordInput"
            {...register("password")}
          />
        </div>
        <div className="flex justify-between mb-6">
          <div className="flex gap-1">
            <input
              type="checkbox"
              name=""
              id="checkbocInput"
              className="self-center"
            />
            <label htmlFor="checkbocInput" className="text-sm font-light">
              Remember me
            </label>
          </div>
          <a href="#" className="border-b-2 border-black/10 text-sm font-light">
            Forgot Password?
          </a>
        </div>
        <input
          type="submit"
          className="bg-[#1E1C27] text-white px-7 py-5 rounded-[40px] hover:bg-[#212326] transition-all duration-200 font-semibold mb-10"
          value="Log in"
        />

        <div className="text-center">
          <a
            href="#"
            className="border-b-2 border-black/10 text-sm font-light "
          >
            Create a new account
          </a>
        </div>
      </div>
    </form>
  );
};

export default login;

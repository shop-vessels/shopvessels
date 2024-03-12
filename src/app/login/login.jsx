"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const Login = () => {
  const userSchema = z
    .object({
      email: z.string("Invalid email address"),
      password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(16, "Password should not be more than 16 characters"),
      terms: z.boolean().refine((val) => val === true, {
        message: "Please read and accept the terms and conditions",
      }),
    })
    .required();

  const form = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      email: "",
      password: "",
      terms: false,
    },
  });

  function handleSubmit(values, event) {
    event.preventDefault();
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        className="flex justify-center items-center border-2 w-full max-w-lg bg-background mx-auto mt-10 rounded-md py-10 px-5 md:px-10"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-foreground/65">
            Welcome Back!
          </h1>
          <p>We are glad to see you back!</p>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mt-5">
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="example@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mt-5">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <Link href="/forget" className=" text-sm font-light mt-3">
              Forgot Password?
            </Link>
          </div>

          <FormField
            control={form.control}
            name="terms"
            required="true"
            render={({ field }) => (
              <FormItem className="mt-5">
                <div className="flex flex-row items-center space-x-3 space-y-0 rounded-md">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>

                  <FormLabel className="text-foreground/70">
                    I have read the terms and conditions{" "}
                  </FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button size="xl" className="w-full mt-4 py-4 text-base">
            Login Account
          </Button>
          <Link href="/signup" className=" w-max group block mt-3 text-sm ">
            Don&apos;t have an account?{" "}
            <span className="group-hover:text-blue-500">Create a new one!</span>
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default Login;

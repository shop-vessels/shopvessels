"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { userSignUpSchema } from "../_schemas/userSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { signUpAction } from "../_actions/signupAction";
import { toast } from "@/components/ui/use-toast";

const Login = () => {
  const form = useForm({
    resolver: zodResolver(userSignUpSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      terms: false,
    },
  });

  const handleSignup = async (data, e) => {
    e.preventDefault();
    const res = await signUpAction(data);
    if (res === "SUCCESS") {
      toast({
        title: "Account Created",
        description: "Please check your gmail to verify your account",
      });
      return;
    }
    if (res === "DUPLICATE") {
      toast({
        title: "Account Already Exists",
        description: "Account with this email already exists!",
      });
      return;
    }
    if (res === "ERROR") {
      toast({
        title: "Something wen't wrong!",
        description: "Please try again! if issue persist then please try later",
        variant: "destructive",
      });
      return;
    }
  };

  return (
    <Form {...form}>
      <form
        className="flex justify-center items-center md:px-10 px-3 lg:px-12 py-14 border-2 w-full max-w-lg bg-background mx-auto mt-10 rounded-md"
        onSubmit={form.handleSubmit(handleSignup)}
      >
        <div className="w-full max-w-md">
          <p className="text-3xl font-bold text-foreground/65">
            Join us Today!
          </p>
          <p>Create your account</p>

          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem className="mt-8">
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mt-5">
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="example@gmail.com" {...field} />
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

          <FormField
            control={form.control}
            name="terms"
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

          <Button
            size="xl"
            className="w-full mt-4 py-4
           text-base"
          >
            Sign Up
          </Button>
          <Link
            href="/login"
            className=" w-max group block mt-5 text-sm font-light "
          >
            Have an account?{" "}
            <span className="group-hover:text-blue-500">Login</span>
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default Login;

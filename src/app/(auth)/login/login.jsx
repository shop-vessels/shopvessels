"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { userLoginSchema } from "../_schemas/userSchema";
import { signIn } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(userLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const params = useSearchParams();

  async function handleSubmit(data, e) {
    e.preventDefault();

    try {
      console.log(data);
      const { error } = signIn("credentials", {
        email: data?.email,
        password: data?.password,
        redirect: false,
      });

      if (error) {
        console.log(error);
        toast({
          description: "Something went wrong, please retry!",
          variant: "destructive",
        });
        return;
      }
      toast({ description: "Logged in successfully!" });

      setTimeout(() => {
        router.push(params?.get("callbackUrl") || "/");
      }, 1500);
    } catch (error) {
      console.log(error);
      toast({
        description: "Something went wrong, please retry!",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form} className="w-full ">
      <form
        className="flex justify-center items-center h-full lg:border-none border border-black w-full max-w-1/2 bg-background lg:mx-0 mx-auto  rounded-md py-10 px-5 md:px-10 lg:mt-0 mt-10 lg:max-w-none max-w-lg"
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

          <div>
            <Link href="/forget-password" className=" text-sm font-light mt-3">
              Forgot Password?
            </Link>
          </div>

          <Button
            size="xl"
            type="submit"
            className="w-full mt-5 py-4 text-base"
          >
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

const Login = () => {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
};

export default Login;

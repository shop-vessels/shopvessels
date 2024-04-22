"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { forgetpassword } from "../(auth)/_schemas/userSchema";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const Page = () => {
  const form = useForm({
    resolver: zodResolver(forgetpassword),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" md:px-5 px-3 py-14  border-2 w-full max-w-lg bg-background mx-auto rounded-md my-16"
      >
        <div className="flex justify-center flex-col">
          <h1 className="text-3xl font-bold text-foreground/65">
            Forget Password
          </h1>
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
          <Button type="submit" className="mt-5">
            Forget Password
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Page;

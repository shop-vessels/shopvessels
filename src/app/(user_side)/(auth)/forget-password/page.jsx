"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { forgetpassword } from "./../_schemas/userSchema";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { forgetPasswordLinkGenerator } from "./_actions/forgetPasswordLinkGenerator";
import { toast } from "@/components/ui/use-toast";
import Link from "next/link";
import SuccessBlock from "./_components/SuccessBlock";

const Page = () => {
  const [notFound, setNotFound] = useState(null);
  const [sent, setSent] = useState(false);
  const form = useForm({
    resolver: zodResolver(forgetpassword),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data) => {
    setSent(false);
    setNotFound(null);
    const email = data.email;
    await sendMail(email);
  };

  async function sendMail(email) {
    const res = await forgetPasswordLinkGenerator(email);
    if (res === "SUCCESS") {
      setSent(true);
      toast({
        title: "Email has been sent",
        description: "Please check your email to reset your password",
      });
    } else if (res === "Not-Found") {
      setNotFound(true);
      toast({
        title: "Account Not Found!",
        description:
          "No account found with this email! Please recheck your gmail",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Oops!",
        description: "Something went wrong",
      });
    }
  }


  if (sent)
    return (
      <SuccessBlock
        resend={sendMail}
        changeEmail={() => setSent(false)}
        email={form.getValues().email}
      />
    );

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" md:px-5 px-3 py-5  border-2 w-full max-w-lg bg-background mx-auto rounded-md my-16"
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
                <div className="flex items-center justify-between">
                  <FormLabel>Email Address</FormLabel>
                  {notFound && (
                    <p className="text-xs text-red-500">
                      No account found with this email
                    </p>
                  )}
                </div>
                <FormControl>
                  <Input placeholder="example@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="text-primary mt-2 text-sm flex gap-1">
            <Link href={"/login"}>Have an account? Login</Link>
          </div>
          <Button
            disabled={form.formState.isSubmitting}
            type="submit"
            className="mt-5"
          >
            Forget Password
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Page;

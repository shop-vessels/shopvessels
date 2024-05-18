"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { resetpassword } from "./../../../_schemas/userSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { updatePasswordAction } from "../_actions/updatePasswordAction";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";

const UpdatePassword = ({ email }) => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(resetpassword),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data, e) => {
    e.preventDefault();

    console.log(data.password);
    const password = data.password;

    const res = await updatePasswordAction(email, password);

    if (res === "SUCCESS") {
      toast({
        title: "Password updated successfully",
        description: "You can now login with your new password.",
      });
      router.push("/login");
    }
    if (res === "FAILURE") {
      toast({
        title: "Password Update Failed",
        description:
          "Something wen't wrong while updating your password. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form className="w-full px-3" onSubmit={form.handleSubmit(onSubmit)}>
        <div className=" md:px-5 px-3 py-14  border-2 w-full max-w-lg bg-background mx-auto rounded-md my-16">
          <h1 className="text-3xl font-bold text-foreground/65">
            Reset Password
          </h1>

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mt-8">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="New password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="mt-5">
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input placeholder="Confirm Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="mt-5 w-full flex gap-2 items-center"
          >
            {form.formState.isSubmitting && <Loader className="animate-spin" />}
            Update Password
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UpdatePassword;

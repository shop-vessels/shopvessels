"use client";
// import React from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// const page = () => {
//   return (
//     <div className="px-3 my-16">
//       <form className=" md:px-5 py-10 border-2 w-full max-w-lg bg-background mx-auto rounded-md">
//         <div className="max-w-l p-6">
//           <h1 className="text-3xl font-bold text-foreground/65">
//             Reset Password
//           </h1>
//           <div className="mt-5">
//             <label htmlFor="forget" className="">
//               Email Address
//             </label>
//             <Input
//               id="forget"
//               type="email"
//               placeholder="example@gmail.com"
//               className="mt-2 mb-2"
//             />
//             <label htmlFor="confirm" className="">
//               Confirm Password
//             </label>
//             <Input
//               id="cinfirm"
//               type="email"
//               placeholder="example@gmail.com"
//               className="mt-2"
//             />
//             <Button className="w-full mt-6"> Forget Password</Button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default page;
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { resetpassword } from "@/app/(auth)/_schemas/userSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const Page = () => {
  const form = useForm({
    resolver: zodResolver(resetpassword),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    console.log("successful", data);
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
                  <Input placeholder="Create password" {...field} />
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
          <Button type="submit" className="mt-5 w-full">
            Reset Password
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Page;

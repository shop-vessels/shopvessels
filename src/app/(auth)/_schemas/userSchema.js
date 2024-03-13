import { z } from "zod";

export const userSignUpSchema = z
  .object({
    fullname: z
      .string({ required_error: "This field has to be filled" })
      .min(3, "Must have atleast 4 chracters"),
    email: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .email("This is not a valid email."),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(16, "Password should not be more than 16 characters"),
    terms: z.boolean().refine((val) => val === true, {
      message: "Please read and accept the terms and conditions",
    }),
  })
  .required();

export const userLoginSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .email("This is not a valid email."),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(16, "Password should not be more than 16 characters"),
  })
  .required();

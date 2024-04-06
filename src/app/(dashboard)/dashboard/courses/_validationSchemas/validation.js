import { checkFileIsImage } from "@/lib/checkFileType";

const { z } = require("zod");

const MAX_IMAGE_SIZE = 2000000;

export const createCourseSchema = z.object({
  title: z
    .string()
    .min(10, "Title is required and must at least 10 characters"),
  description: z
    .string({ required_error: "Description is required!" })
    .min(10, "Description is required and must at least 10 characters"),
  category: z
    .string({ required_error: "Category is required" })
    .min(4, "Category must be at least 4 characters!"),
  thumbnail: z
    .any({ required_error: "Thumbnail is required" })
    .refine((file) => file?.length === 1, "Thumbnail is required")
    .refine(
      (file) => checkFileIsImage(file),
      "Only .jpeg, .jpg, .png formats are supported."
    )
    .refine(
      (file) => file[0]?.size < MAX_IMAGE_SIZE,
      "Max thumbnail size is 2MB."
    ),
});
export const editCourseSchema = z.object({
  title: z
    .string({ required_error: "Title is required " })
    .min(10, "Title must at least 10 characters"),
  description: z
    .string({ required_error: "Description is required!" })
    .min(10, "Description is required and must at least 10 characters"),
  category: z
    .string({ required_error: "Category is required" })
    .min(4, "Category must be at least 4 characters!"),
  thumbnail: z
    .any()
    .optional()
    .refine(
      (file) => !file || !file[0] || checkFileIsImage(file),
      "Only .jpeg, .jpg, .png formats are supported."
    )
    .refine(
      (file) => !file || !file[0] || file[0].size < MAX_IMAGE_SIZE,
      "Max thumbnail size is 2MB."
    ),
});

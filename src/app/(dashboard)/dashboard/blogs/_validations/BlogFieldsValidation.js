import { checkFileIsImage } from "@/lib/checkFileType";
import { z } from "zod";

const MAX_IMAGE_SIZE = 2000000;

const generateBlogFormSchema = (thumbnailRequired = true) => {
  const schema = z.object({
    title: z
      .string({ required_error: "Please fill out this field" })
      .min(10, "Title must be at least 10"),
    description: z
      .string({ required_error: "Please fill out this field" })
      .min(10, "Description must be at least 10"),
    category: z.string({ required_error: "Please fill out this field" }),
    thumbnail: thumbnailRequired
      ? z
          .any()
          .refine((file) => file?.length === 1, "Thumbnail is required")
          .refine(
            (file) => file && checkFileIsImage(file[0]),
            "Only .jpeg, .jpg, .png formats are supported."
          )
          .refine(
            (file) => file[0]?.size < MAX_IMAGE_SIZE,
            "Max thumbnail size is 2MB."
          )
      : z
          .any()
          .optional()
          .refine((file) => {
            if (!file || !file[0]) return true;
            return checkFileIsImage(file);
          }, "Only .jpeg, .jpg, .png formats are supported.")
          .refine(
            (file) => !file || !file[0] || file[0].size < MAX_IMAGE_SIZE,
            "Max thumbnail size is 2MB."
          ),
  });

  return schema;
};

export const BlogFormSchema = generateBlogFormSchema(true);
export const EditBlogFormSchema = generateBlogFormSchema(false);

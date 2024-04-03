const { z } = require("zod");

const MAX_IMAGE_SIZE = 2000000;

export const createCourseSchema = z.object({
  title: z
    .string()
    .min(10, "Title is required and must at least 10 characters"),
  description: z
    .string()
    .min(1, "Description is required!")
    .min(10, "Description is required and must at least 10 characters"),
  thumbnail: z
    .any()
    .refine((file) => file?.length === 1, "Thumbnail is required")
    .refine(
      (file) => checkFileIsImage(file),
      "Only .jpeg, .jpg, .png formats are supported."
    )
    .refine(
      (file) => file[0].size < MAX_IMAGE_SIZE,
      "Max thumbnail size is 2MB."
    ),
});

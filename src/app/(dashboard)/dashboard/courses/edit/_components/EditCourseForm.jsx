"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Loader } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { editCourseSchema } from "../../_validationSchemas/validation";
import {
  updateCourseMetaAction,
} from "../_actions/updateCourseMetaAction";

export default function EditCourseMetaData({ course, id }) {
  const form = useForm({
    resolver: zodResolver(editCourseSchema),
    defaultValues: {
      title: course.title || "",
      description: course.description || "",
      category: course.category || "",
    },
  });

  const fileRef = form.register("thumbnail");

  async function handleUpdateCourse(data, event) {
    event.preventDefault();

    const file = data?.thumbnail[0];

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    if (file) formData.append("thumbnail", file);

    console.log(data);

    const courseUpdateRes = await updateCourseMetaAction(formData, id);

    if (courseUpdateRes === "FAILURE") {
      return toast({
        title: "Something went wrong!",
        description: "Please try again!",
      });
    }
    if (courseUpdateRes === "INCLUDE ALL FIELDS") {
      return toast({
        title: "Inclde all fields",
        description: "Please fill out all fields carefully!",
      });
    }
    if (courseUpdateRes === "SUCCESS") {
      return toast({
        title: "Course Updated Successfully",
        description: "Your course has been updated successfully!",
      });
    }
  }

  return (
    <Form {...form} className="relative z-[999999999999999999999999999]">
      <form
        onSubmit={form.handleSubmit(handleUpdateCourse)}
        className="relative"
      >
        <FormField
          name="title"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>CourseTitle</FormLabel>
              <FormControl>
                <Input placeholder="Course Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="description"
          control={form.control}
          render={({ field }) => (
            <FormItem className="mt-5">
              <FormLabel>Course Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Course Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="category"
          control={form.control}
          render={({ field }) => (
            <FormItem className="mt-5">
              <FormLabel>Course Category</FormLabel>
              <FormControl>
                <Input placeholder="Course Category" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="thumbnail"
          control={form.control}
          render={({ field }) => (
            <FormItem className="mt-5">
              <FormLabel>Course Thumbnail</FormLabel>
              <FormControl>
                <Input
                  placeholder="Course Thumbnail"
                  type="file"
                  className="py-4 h-auto"
                  accept="image/png, image/jpeg, image/jpg"
                  {...fileRef}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mt-5 flex justify-end">
          <Button type="submit" disabled={form?.formState?.isSubmitting}>
            {form.formState.isSubmitting ? (
              <Loader className="animate-spin" />
            ) : (
              "Update Changes"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}

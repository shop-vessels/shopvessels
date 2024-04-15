"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { createCourseSchema } from "../_validationSchemas/validation";
import CreateNewCourseMetaAction from "../_action/CreateNewCourseMetaAction";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Loader } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

export default function CreateCoursePopup() {
  const form = useForm({
    resolver: zodResolver(createCourseSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      thumbnail: undefined,
    },
  });

  const fileRef = form.register("thumbnail");
  const router = useRouter();

  async function createCourseAction(data, event) {
    event.preventDefault();

    const file = data.thumbnail[0];

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("thumbnail", file);

    console.log(data);

    const courseRes = await CreateNewCourseMetaAction(formData);

    if (courseRes === "FAILURE") {
      return toast({
        title: "Something went wrong!",
        description: "Please try again!",
      });
    }
    if (courseRes === "INCLUDE ALL FIELDS") {
      return toast({
        title: "Inclde all fields",
        description: "Please fill out all fields carefully!",
      });
    }

    if (courseRes?.success) {
      toast({
        title: "Course Created",
      });
      return router.push(`/dashboard/courses/edit?id=${courseRes.id}`);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create Course</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Course</DialogTitle>
          <DialogDescription>
            Fill the below detail to create new course.
          </DialogDescription>
        </DialogHeader>

        <Form {...form} className="relative z-[999999999999999999999999999]">
          <form
            onSubmit={form.handleSubmit(createCourseAction)}
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
                      placeholder="Course Description"
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
            <DialogFooter className="mt-5">
              <Button type="submit" disabled={form?.formState?.isSubmitting}>
                {form.formState.isSubmitting ? (
                  <Loader className="animate-spin" />
                ) : (
                  "Save changes"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

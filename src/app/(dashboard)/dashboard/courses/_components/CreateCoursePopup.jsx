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
import { z } from "zod";
import CreateNewCourseMetaAction from "../_action/CreateNewCourseMetaAction";
import { getSignedURLAction } from "../_action/getSignedURLAction";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

const MAX_FILE_SIZE = 2000000;

const schema = z.object({
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
      (file) => checkFileType(file),
      "Only .jpeg, .jpg, .png formats are supported."
    )
    .refine(
      (file) => file[0].size < MAX_FILE_SIZE,
      "Max thumbnail size is 2MB."
    ),
});

export default function CreateCoursePopup() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const fileRef = form.register("thumbnail");

  async function createCourseAction(data, event) {
    event.preventDefault();

    const file = data.thumbnail[0];

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("thumbnail", file);
    // await CreateNewCourseMetaAction(formData);

    const signedURLResult = await getSignedURLAction();

    if (signedURLResult?.failure !== undefined)
      toast({
        description: "Something wen't wrong, please try again!",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });

    const { url } = signedURLResult?.success;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": file.type,
      },
      body: file,
    });

    console.log(res);
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
                    <Input placeholder="Course Description" {...field} />
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
                  <FormLabel>Course Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Course Description"
                      type="file"
                      className="py-4 h-auto"
                      accept="image/png, image/jpeg, image/jpg"
                      {...fileRef}
                      // onChange={(event) => {
                      //   field.onChange(event.target?.files?.[0] ?? undefined);
                      // }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="mt-5">
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

function checkFileType(fileObj) {
  const file = fileObj[0];
  if (file?.name) {
    console.log(file?.name);
    const fileType = file.name.split(".").pop()?.toLowerCase();
    console.log(fileType);

    if (fileType === "jpeg" || fileType === "jpg" || fileType === "png") {
      return true;
    }
  }
  return false;
}

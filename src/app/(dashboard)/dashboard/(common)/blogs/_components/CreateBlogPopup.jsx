"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { CreateBlogAction } from "../_actions/CreateBlogAction.js";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { checkFileIsImage } from "@/lib/checkFileType";
import { BlogFormSchema } from "../_validations/BlogFieldsValidation.js";
import { Loader } from "lucide-react";



function CreateBlogPopup() {
  const form = useForm({
    resolver: zodResolver(BlogFormSchema),
    defaultValues: {
      title: "",
      description: "",
      thumbnail: undefined,
    },
  });

  const router = useRouter();

  const fileRef = form.register("thumbnail");

  async function handleSubmit(values, event) {
    event.preventDefault();
    const { title, description, category, thumbnail } = values;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("thumbnail", thumbnail[0]);

    const res = await CreateBlogAction(formData);
    if (res === "FAILURE") {
      toast({
        title: "Something went wrong!",
      });
      return;
    }
    if (res?.success) {
      toast({
        title: "Blog created successfully!",
      });
      // redirect(`/dashboard/blogs/edit?id=${res?._id}`);

      router.push(`/dashboard/blogs/edit?id=${res?._id}`, { scroll: false });
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create Course</Button>
      </DialogTrigger>
      <DialogContent className=" overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Fill to create course</DialogTitle>
          <DialogDescription>
            Here you can fill these field to create new blog, you will be
            redirected to another page to fulfill other data.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-2">
            {InputFormFields.map(({ name, title, placeholder, type }, ind) => (
              <FormField
                control={form.control}
                key={ind}
                name={name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{title}</FormLabel>
                    {type && type === "textarea" ? (
                      <Textarea placeholder={placeholder} {...field} />
                    ) : (
                      <Input placeholder={placeholder} {...field} />
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <FormField
              control={form.control}
              name={"thumbnail"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload Thumbnail</FormLabel>
                  <Input
                    placeholder="Blog thumbnail"
                    type="file"
                    className="py-4 h-auto"
                    accept="image/png, image/jpeg, image/jpg"
                    {...fileRef}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="w-full mt-5"
              disabled={form?.formState?.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <Loader className="animate-spin" />
              ) : (
                "Create Blog Post"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

const InputFormFields = [
  {
    name: "title",
    title: "Blog Title",
    placeholder: "Enter blog title",
  },
  {
    name: "category",
    title: "Blog Category",
    placeholder: "programming, development, graphics etc...",
  },
  {
    name: "description",
    title: "Blog Description",
    type: "textarea",
    placeholder: "Enter blog description",
  },
];

export default CreateBlogPopup;

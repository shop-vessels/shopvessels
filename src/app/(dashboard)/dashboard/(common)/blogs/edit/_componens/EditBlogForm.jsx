"use client";
import { Button } from "@/components/ui/button";

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
import { toast } from "@/components/ui/use-toast";
import { EditBlogFormSchema } from "../../_validations/BlogFieldsValidation";
import { useSearchParams } from "next/navigation";
import { handleEditBlogFormUpdateAction } from "../_actions/handleEditBlogFormUpdateAction";
import { Loader } from "lucide-react";

function EditBlogForm({ blog }) {
  const { title, description, image, category } = blog;
  const form = useForm({
    resolver: zodResolver(EditBlogFormSchema),
    defaultValues: {
      title: title || "",
      description: description || "",
      category: category || "",
      thumbnail: undefined,
    },
  });
  const searchParams = useSearchParams();

  const fileRef = form.register("thumbnail");

  async function handleSubmit(values, event) {
    event.preventDefault();

    const { title, description, category, thumbnail } = values;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);

    formData.append("category", category);
    if (thumbnail && thumbnail.length > 0) {
      formData.append("thumbnail", thumbnail[0]);
    }
    const id = searchParams.get("id");
    if (id) {
      const res = await handleEditBlogFormUpdateAction({ formData, id });
      if (res === "SUCCESS")
        toast({ title: "Meta data successfully updated!" });
      else {
        toast({ title: "Something went wrong!" });
      }
    } else {
      toast({
        title: "Something went wrong",
        description: "Please try again",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="grid grid-cols-1 lg:grid-cols-2 gap-5"
      >
        {InputFormFields.map(
          ({ name, title, placeholder, type, message }, ind) => (
            <FormField
              control={form.control}
              key={ind}
              name={name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {title} {message}
                  </FormLabel>
                  {type && type === "textarea" ? (
                    <Textarea placeholder={placeholder} {...field} />
                  ) : (
                    <Input placeholder={placeholder} {...field} />
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          )
        )}
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

        <div>
          <Button
            className={`w-full mt-5 col-span-2 ${
              form.formState.isSubmitting && "px-14"
            }`}
            disabled={form?.formState?.isSubmitting}
          >
            {form.formState.isSubmitting ? (
              <Loader className="animate-spin" />
            ) : (
              "Update Post"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}

const InputFormFields = [
  {
    name: "title",
    title: "Blog Title",
    placeholder: "Enter blog title",
    message: "(Should be between 20-60 characters.)",
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
    message: "(should be between 40-80 words.)",
  },
];

export default EditBlogForm;

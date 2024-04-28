"use client";
import React from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { uploadFileAction } from "../../_actions/uploadFileAction";
import { toast } from "@/components/ui/use-toast";

function FileUploadForm({ courseId, chapterId, dayId }) {
  const form = useForm({
    resolver: zodResolver(
      z.object({
        file: z.any().refine((file) => file?.length, "File is required"),
      })
    ),
    defaultValues: {
      file: undefined,
    },
  });

  const fileRef = form.register("file");

  async function handleSubmit(values, e) {
    e.preventDefault();

    const { file } = values;
    const formData = new FormData();

    formData.append("file", file?.[0]);
    const res = await uploadFileAction(formData, courseId, chapterId, dayId);

    if (res === "SUCCESS") {
      toast({
        title: "File Has been uploaded successfully",
      });
    }
    if (res === "FAILURE") {
      toast({
        title: "Something went wrong on our servers! Please try again",
      });
    }

    return;
  }

  return (
    <Form {...form} asChild>
      <form className="" onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Upload FIle</FormLabel>
              <Input type="file" className="h-auto" {...fileRef} />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={form.formState?.isSubmitting}
          className="flex gap-1 mt-2"
        >
          {form.formState?.isSubmitting && <Loader className="animate-spin" />}
          Upload File
        </Button>
      </form>
    </Form>
  );
}

export default FileUploadForm;

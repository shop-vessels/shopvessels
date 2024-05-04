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
import {
  saveAssetS3KeyToBucket,
  uploadFileActionPresigned,
} from "../../_actions/uploadFileAction";
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

    const { file: fileList } = values;
    const file = fileList?.[0];

    console.log(file);

    const res = await uploadFileActionPresigned(
      file.name,
      courseId,
      chapterId,
      dayId
    );

    if (res.success) {
      const fRes = await fetch(res.url, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": file?.type,
        },
      });
      if (fRes.ok) {
        await saveAssetS3KeyToBucket({
          title: file.name,
          courseId,
          chapterId,
          dayId,
          S3Key: res.S3Key,
        });

        toast({
          title: "File Has been uploaded successfully",
        });
      } else {
        console.log(fRes);
        toast({
          title: "Something went wrong on our servers! Please try again",
        });
      }
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

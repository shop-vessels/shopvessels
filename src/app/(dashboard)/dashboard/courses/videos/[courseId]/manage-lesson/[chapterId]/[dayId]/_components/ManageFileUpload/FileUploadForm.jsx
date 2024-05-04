"use client";
import React, { useState } from "react";
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
import { saveAssetS3KeyToBucket } from "../../_actions/uploadFileAction";
import { toast } from "@/components/ui/use-toast";
import { Upload } from "@aws-sdk/lib-storage";
import { VideoBucket, s3VideoClient } from "@/config/S3AssetsConfig";
import { generateS3Key } from "@/lib/generateS3Key";

function FileUploadForm({ courseId, chapterId, dayId }) {
  const [progress, setProgress] = useState(null);
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

    try {
      const S3Key = generateS3Key({ title: file.name, dir: "files" });

      const parallelUploads3 = new Upload({
        client: s3VideoClient,
        params: {
          Bucket: VideoBucket,
          Body: file,
          Key: S3Key,
        },
      });

      setProgress(0);

      parallelUploads3.on("httpUploadProgress", (progressEvent) => {
        const loaded = progressEvent.loaded;
        const total = progressEvent.total;

        // Calculate progress percentage
        const progressPercentage = Math.round((loaded / total) * 100);

        setProgress(progressPercentage);
      });

      await parallelUploads3.done();

      const res = await saveAssetS3KeyToBucket({
        courseId,
        chapterId,
        dayId,
        title: file.name,
        S3Key,
      });
      if (res === "FAILURE") {
        throw new Error("Error while uploading");
      }
      setProgress(null);
      toast({
        title: "File Has been uploaded successfully",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong on our servers! Please try again",
      });
    }
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
          {(form.formState?.isSubmitting && (
            <>
              <Loader className="animate-spin" /> Uploaded {progress}%
            </>
          )) ||
            "Upload File"}
        </Button>
      </form>
    </Form>
  );
}

export default FileUploadForm;

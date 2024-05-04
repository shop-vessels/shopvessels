"use client";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { checkFileIsVideo } from "@/lib/checkFileType";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { saveVideoKeyToDatabase } from "../../_actions/uploadDayVideoPresigned";
import { toast } from "@/components/ui/use-toast";
import { Loader } from "lucide-react";
import { Upload } from "@aws-sdk/lib-storage";
import { generateS3Key } from "@/lib/generateS3Key";
import { VideoBucket, s3VideoClient } from "@/config/S3AssetsConfig";

function UploadVideo({ courseId, chapterId, dayId }) {
  const [progress, setProgress] = useState(null);
  const form = useForm({
    resolver: zodResolver(
      z.object({
        video: z
          .any()
          .refine(
            (file) => checkFileIsVideo(file),
            "Please upload a video file"
          ),
      })
    ),
  });

  const videoFileRef = form.register("video");

  async function handleSubmit(values, e) {
    e.preventDefault();

    const file = values.video[0];

    try {
      const S3Key = generateS3Key({ title: file.name });

      const client = s3VideoClient;

      const parallelUploads3 = new Upload({
        client,
        params: { Bucket: VideoBucket, Key: S3Key, Body: file },
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

      const saveDbRes = await saveVideoKeyToDatabase({
        title: file.name,
        courseId,
        chapterId,
        dayId,
        S3Key,
      });

      setProgress(null);

      if (saveDbRes === "FAILURE") {
        throw new Error("Error while saving to DB");
      }

      toast({
        title: "Video Uploaded",
        description: "Your video has been uploaded",
        variant: "success",
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Something went wrong",
        description: "Please try again",
        variant: "destructive",
      });
    }
  }

  return (
    <div className=" mx-auto mt-5 border p-5 rounded-md bg-background">
      <Form {...form} asChild>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            control={form.control}
            name={"video"}
            render={({ field }) => (
              <FormItem>
                <Label>Upload Video</Label>
                <Input
                  {...videoFileRef}
                  className="h-auto"
                  type="file"
                  accept="video/*"
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="w-full mt-2 flex gap-2"
            disabled={form.formState.isSubmitting}
          >
            {" "}
            {(form.formState.isSubmitting && (
              <>
                <Loader className="animate-spin" /> Uploaded {progress}%
              </>
            )) ||
              "Upload"}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default UploadVideo;

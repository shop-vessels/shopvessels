"use client";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { checkFileIsVideo } from "@/lib/checkFileType";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { uploadDayVideo } from "../../_actions/uploadDayVideo";
import { toast } from "@/components/ui/use-toast";
import { Loader } from "lucide-react";

function UploadVideo({ courseId, chapterId, dayId }) {
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

    const video = values.video[0];
    console.log(video);
    const formData = new FormData();
    formData.append("video", video);

    const res = await uploadDayVideo(formData, { courseId, chapterId, dayId });
    if (res === "SUCCESS") {
      toast({
        title: "Video Has been uploaded successfully",
      });
      form.reset();
    }
    if (res === "FAILURE") {
      toast({
        title: "Something went wrong on our servers! Please try again",
      });
    }
  }

  return (
    <div className="max-w-md mx-auto mt-5 border p-5 rounded-md bg-background">
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
          <Button className="w-full mt-2 flex gap-2" disabled={form.formState.isSubmitting}> {form.formState.isSubmitting && <Loader className="animate-spin" />}  Upload </Button>
        </form>
      </Form>
    </div>
  );
}

export default UploadVideo;

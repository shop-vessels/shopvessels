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
import { Loader } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { z } from "zod";
import { checkFileIsVideo } from "@/lib/checkFileType";
import uploadVideoToBucketAction from "../../_actions/uploadVideoToBucketAction";

const videoSchema = z.object({
  video: z
    .any()
    .refine((file) => file.length === 1, "Video file is required")
    .refine(
      (file) => checkFileIsVideo(file),
      "Only .mp4, .avi and .webm formats are supported."
    ),
});

export default function UploadVideoForm({ id }) {
  const form = useForm({
    resolver: zodResolver(videoSchema),
  });

  const fileRef = form.register("video");

  async function handleUpdateCourse(data, event) {
    event.preventDefault();

    const file = data?.video?.[0];

    const formData = new FormData();
    formData.append("video", file);

    

     
    const courseUpdateRes = await uploadVideoToBucketAction(formData, id);

    if (courseUpdateRes === "FAILURE") {
      return toast({
        title: "Something went wrong!",
        description: "Please try again!",
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
          name="video"
          control={form.control}
          render={({ field }) => (
            <FormItem className="mt-5">
              <FormLabel>Course Video</FormLabel>
              <FormControl>
                <Input
                  placeholder="Course Video"
                  type="file"
                  className="py-4 h-auto"
                  accept="video/mp4, video/avi, video/webm"
                  {...fileRef}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mt-5 flex justify-center">
          <Button type="submit" disabled={form?.formState?.isSubmitting}>
            {form.formState.isSubmitting ? (
              <Loader className="animate-spin" />
            ) : (
              "Upload Video"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}

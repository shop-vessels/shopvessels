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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileVideo2, ImageUp, Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import { videoSchema } from "./UploadVideoForm";
import changeVideoAction from "../../_actions/changeVideoAction";

function ChangeVideo({ videoId, courseId }) {
  const form = useForm({
    resolver: zodResolver(videoSchema),
    defaultValues: {
      thumbnail: undefined,
    },
  });

  const fileRef = form.register("video");

  async function handleSubmit(values, e) {
    e.preventDefault();

    const { video } = values;
    const formData = new FormData();
    formData.append("video", video?.[0]);

    const res = await changeVideoAction(formData, courseId, videoId);

    if (res === "SUCCESS") {
      toast({
        title: "Video Has been changed successfully",
        description: "Please update your thumbnail too",
      });
    }

    if (res === "FAILURE") {
      toast({
        title: "Something went wrong",
        description: "Please try again!",
      });
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <FileVideo2 />{" "}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload/Change Video</DialogTitle>
          <DialogDescription>
            The old video will be replaced with the new one.
          </DialogDescription>
        </DialogHeader>

        {/* <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode"></Label>
        </div> */}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name={"video"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload Video</FormLabel>
                  <Input
                    placeholder="Video"
                    type="file"
                    className="py-4 h-auto"
                    accept="video/mp4, video/avi, video/webm"
                    {...fileRef}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button
                type="submit"
                className="mt-2"
                disabled={form?.formState?.isSubmitting}
              >
                {form?.formState?.isSubmitting ? (
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

export default ChangeVideo;

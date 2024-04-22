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
import { checkFileIsImage } from "@/lib/checkFileType";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImageUp, Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { uploadVideoThumbnailAction } from "../../_actions/uploadVideoThumbnailAction";
import { toast } from "@/components/ui/use-toast";
import Image from "next/image";

const MAX_IMAGE_SIZE = 2000000;

function UploadVideoThumbnail({ videoId, courseId, thumbnail }) {
  const form = useForm({
    resolver: zodResolver(
      z.object({
        thumbnail: z
          .any()
          .refine((file) => file?.length === 1, "Thumbnail is required")
          .refine(
            (file) => file && checkFileIsImage(file),
            "Only .jpeg, .jpg, .png formats are supported."
          )
          .refine(
            (file) => file && file?.[0]?.size < MAX_IMAGE_SIZE,
            "Max thumbnail size is 2MB."
          ),
      })
    ),
    defaultValues: {
      thumbnail: undefined,
    },
  });

  const fileRef = form.register("thumbnail");

  async function handleSubmit(values, e) {
    e.preventDefault();

    const { thumbnail } = values;
    const formData = new FormData();
    formData.append("thumbnail", thumbnail?.[0]);

    const res = await uploadVideoThumbnailAction(formData, courseId, videoId);

    if (res === "SUCCESS") {
      toast({
        title: "Thumbnail uploaded successfully",
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
          <ImageUp />{" "}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload/Change Thumbnail</DialogTitle>
          <DialogDescription>
            This thumbnail will be shown on card.
          </DialogDescription>
        </DialogHeader>

        {thumbnail && (
          <div className="relative rounded-md overflow-hidden w-full aspect-video">
            <Image
              fill
              src={thumbnail}
              className="w-full h-full object-cover object-center"
              alt="Thumbnail of Course Video"
            />
          </div>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
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
            <DialogFooter>
              <Button
                type="submit"
                className="mt-2"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
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

export default UploadVideoThumbnail;

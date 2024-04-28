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
import { zodResolver } from "@hookform/resolvers/zod";
import { FileUp, Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import uploadAssetToVideoAction from "../../_actions/uploadAssetToVideoAction";
import { z } from "zod";
import { checkFileIsAsset } from "@/lib/checkFileType";

function AttachAssets({ videoId, courseId }) {
  const form = useForm({
    resolver: zodResolver(
      z.object({
        asset: z
          .any()
          .refine((file) => file?.length === 1, "Video file is required")
          .refine(
            (file) => checkFileIsAsset(file),
            "Only .mp4 .avi .webm .pdf .docx .pptx and .txt formats are supported."
          ),
      })
    ),
    defaultValues: {
      asset: undefined,
    },
  });

  const fileRef = form.register("asset");

  async function handleSubmit(values, e) {
    e.preventDefault();

    const { asset } = values;
    const formData = new FormData();
    formData.append("asset", asset?.[0]);

    const res = await uploadAssetToVideoAction(formData, courseId, videoId);

    if (res === "SUCCESS") {
      toast({
        title: "Video Has been changed successfully",
        description: "Please update your thumbnail too",
      });
      form.reset();
    }

    if (res === "FAILURE") {
      toast({
        title: "Something went wrong",
        description: "Please try again!",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name={"asset"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Upload Asset</FormLabel>
              <Input
                placeholder="Asset"
                type="file"
                className="py-4 h-auto"
                accept=".mp4,.avi,.webm,.pdf,.docx,.pptx,.txt"
                {...fileRef}
              />
              <FormMessage />
            </FormItem>
          )}
        />

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
      </form>
    </Form>
  );
}

export default AttachAssets;

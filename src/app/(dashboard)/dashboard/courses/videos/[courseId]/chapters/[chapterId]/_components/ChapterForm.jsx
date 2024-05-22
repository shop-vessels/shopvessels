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
import { Loader, Trash } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { updateChapterTitleAction } from "../_actions/updateChapterTitleAction";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { deleteChapterAction } from "../_actions/deleteChapterAction";

const ChapterForm = ({ courseId, chapterId, title }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(
      z.object({
        title: z.string({ required_error: "Title is required" }),
      })
    ),
    defaultValues: {
      title: title || "",
    },
  });

  async function handleSubmit(values, e) {
    e.preventDefault();
    const { title } = values;

    const res = await updateChapterTitleAction(courseId, chapterId, title);

    if (res === "SUCCESS") {
      toast({
        title: "Chapter Updated",
      });
    }
    if (res === "FAILURE") {
      toast({
        title: "Something went wrong",
        description: "Please try again",
      });
    }
    return;
  }

  async function handleDelete() {
    setIsDeleting(true);
    const res = await deleteChapterAction(courseId, chapterId);

    if (res === "SUCCESS") {
      router.push(`/dashboard/courses/videos/${courseId.toString().trim()}`);
    } else {
      toast({
        title: "Something went wrong",
        description: "Please try again",
      });
    }
    setIsDeleting(false);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-full mx-auto border rounded-md p-2"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Chapter Title</FormLabel>
              <Input {...field} placeholder="Title of chapter" />
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-1">
          <Button
            disabled={form.formState.isSubmitting}
            className="w-full mt-2 flex justify-center gap-2"
            type="submit"
          >
            {form.formState.isSubmitting && <Loader className="animate-spin" />}{" "}
            Update
          </Button>
          <Button
            className="aspect-square mt-2"
            size="icon"
            variant="destructive"
            type="button"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {(isDeleting && <Loader className="animate-spin" />) || <Trash />}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ChapterForm;

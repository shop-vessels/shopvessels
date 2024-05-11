"use client";
import React, { useEffect, useState } from "react";
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
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import { createLessonAction } from "../_actions/createLessonAction";
import { Loader } from "lucide-react";
import { getDayTitle } from "../_actions/getDayTitle";
import { useSearchParams } from "next/navigation";

const LessonSchema = z.object({
  title: z
    .string({ required_error: "Title is required to submit data" })
    .min(5, "Must be at least 5 characters"),
});

function LessonForm({ params, dayId }) {
  const { chapterId, courseId } = params;
  const [title, setTitle] = useState("");

  const searchParams = useSearchParams();

  const dayIdSP = searchParams.get("dayId");
  useEffect(() => {
    (async () => {
      const title = await getDayTitle(courseId, chapterId, dayId);
      setTitle(title || "");
    })();
  }, [dayId, dayIdSP, chapterId, courseId]);

  const form = useForm({
    resolver: zodResolver(LessonSchema),
    defaultValues: { title },
  });

  async function handleSubmit(formData, e) {
    e.preventDefault();

    if (!courseId || !chapterId || !formData.title)
      return toast({ title: "Something wen't wrong, please reload the page" });

    let res = await createLessonAction(
      courseId,
      chapterId,
      formData.title,
      dayId || searchParams.get("dayId")
    );

    if (res === "SUCCESS") {
      toast({ title: "Lesson has been added successfully!" });
      form.reset();
    }
    if (res === "UPDATED") {
      toast({ title: "Lesson has been updated successfully!" });
      form.reset();
    }
    if (res === "FAILURE")
      toast({ title: "Something went wrong on our servers! Please try again" });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="mt-5">
        <FormField
          controls={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>

              <FormControl>
                <Input placeholder="Lesson Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full mt-5"
          type="submit"
          disabled={form.formState?.isSubmitting}
        >
          {form.formState?.isSubmitting ? (
            <Loader className="animate-spin" />
          ) : (
            "Create Lesson"
          )}
        </Button>
      </form>
    </Form>
  );
}

export default LessonForm;

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
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { saveLinkIntoCourseAction } from "../../_actions/saveLinkIntoCourseAction";
import { toast } from "@/components/ui/use-toast";
import { Loader } from "lucide-react";

const LinkForm = ({ courseId, chapterId, dayId }) => {
  const form = useForm({
    resolver: zodResolver(
      z.object({
        link: z
          .string()
          .refine((value) => !!value?.trim(), {
            message: "Please paste URL here!",
          })
          .refine((value) => value?.length >= 5, {
            message: "Link must be at least 5 characters long!",
          })
          .refine(
            (value) => {
              const urlPattern = /^https?:\/\/(?:www\.)?[^\s.]+\.\S{2,}$/i;
              return urlPattern.test(value);
            },
            {
              message: "Please enter a valid HTTPS URL!",
            }
          ),
      })
    ),
    defaultValues: {
      link: "",
    },
  });

  async function handleSubmit(values, e) {
    e.preventDefault();

    const { link } = values;

    const res = await saveLinkIntoCourseAction(
      courseId,
      chapterId,
      dayId,
      link
    );

    if (res === "SUCCESS") {
      toast({
        title: "Link has been added successfully",
      });
      form.reset();
    } else {
      toast({
        title: "Something wen't wrong! please retry",
      });
    }
  }

  return (
    <Form {...form} asChild>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="mt-5">
        <FormField
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Link/URL</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Paste external Link/URL here" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={form.formState.disabled} className="mt-2">
          {" "}
          {form.formState.disabled ? (
            <Loader className="animate-spin" />
          ) : (
            "Add Title"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default LinkForm;

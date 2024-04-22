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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Trash2 } from "lucide-react";
import { updateGenericData } from "../_actions/updateGenericData";
import { toast } from "@/components/ui/use-toast";

const CourseGenericDataSchema = z.object({
  enrollmentStatus: z.enum(["open", "closed"]),
  coursePrice: z
    .string({
      required_error: "Price is required",
    })
    .refine((string) => parseFloat(string) >= 20, "Must atleast 20$"),
  level: z.enum(["Beginner", "Intermediate", "Advanced"]),
  providesCertificate: z.enum(["Yes", "No"]),
  totalDuration: z
    .string({
      required_error: "Duration is required",
    })
    .refine((string) => parseFloat(string) >= 20, "Must atleast 20 minutes"),

  prerequisites: z
    .string()
    .array()
    .min(1, "Please add at least one prerequisites"),
});

function CourseGenericInfoForm({ course, id }) {
  // console.log(course);
  const form = useForm({
    resolver: zodResolver(CourseGenericDataSchema),
    defaultValues: {
      enrollmentStatus: course?.enrollmentStatus || "open",
      coursePrice: course?.coursePrice?.toString() || "",
      level: course.level || "Intermediate",
      providesCertificate: (course?.providesCertificate && "Yes") || "No",
      totalDuration: course?.totalDuration || "",
      prerequisites: course?.prerequisites || [],
    },
  });

  const submitData = async (values, e) => {
    e.preventDefault();
    const res = await updateGenericData(values, id);
    if (res === "SUCCESS") {
      toast({
        title: "Course Updated",
      });
    }
    if (res === "FAILURE") {
      toast({
        title: "Something went wrong!",
        description: "Please try again!",
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitData)} onKeyDown={handleKeyDown}>
        <div className=" flex flex-col gap-3 lg:gap-0 lg:flex-row justify-between items-center mt-10">
          <h2 className="font-bold text-foreground/80 text-3xl"> Generic Information</h2>
          <FormField
            name="enrollmentStatus"
            control={form.control}
            render={({ field }) => (
              <FormItem
                className={"flex gap-5 items-center text-xs font-medium"}
              >
                <FormLabel className="text-base">
                  Enrollment Status :{" "}
                </FormLabel>
                <div className="flex gap-1 !m-0 items-center font-bold bg-foreground/5 py-2 px-4 rounded-2xl shadow-inner">
                  <span>Closed</span>
                  <FormControl>
                    <Switch
                      checked={field.value === "open"}
                      onCheckedChange={(e) =>
                        field.onChange(e ? "open" : "closed")
                      }
                    />
                  </FormControl>
                  <span>Open</span>
                </div>
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <FormField
            name="coursePrice"
            control={form.control}
            render={({ field }) => (
              <FormItem className="mt-5">
                <FormLabel>Course Price</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Course Price $$$"
                    type={"number"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="level"
            control={form.control}
            render={({ field }) => (
              <FormItem className="mt-5">
                <FormLabel>Course Level</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Beginner">Beginner</SelectItem>
                      <SelectItem value="Intermediate">Intermediate</SelectItem>
                      <SelectItem value="Advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="totalDuration"
            control={form.control}
            render={({ field }) => (
              <FormItem className="mt-5">
                <FormLabel>Course Duration</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter in minutes"
                    type={"number"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="providesCertificate"
            control={form.control}
            render={({ field }) => (
              <FormItem className="mt-5">
                <FormLabel>Certificate</FormLabel>
                <div className="border border-input px-3 py-3 flex items-center justify-center gap-5 w-full rounded-md">
                  <FormLabel>Do this course includes Certificate</FormLabel>
                  <FormControl className="!m-0">
                    <Switch
                      checked={field.value === "Yes"}
                      onCheckedChange={(e) => field.onChange(e ? "Yes" : "No")}
                    />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />

          <FormField
            name="prerequisites"
            control={form.control}
            render={({ field }) => {
              const handleAddPrerequisite = (value) => {
                field.onChange([...(field.value || []), value]);
              };

              const handleKeyDown = (e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddPrerequisite(e.target.value);
                  e.target.value = "";
                }
              };

              return (
                <FormItem className="mt-5">
                  <FormLabel>Prerequisites</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Write prerequisites and hit enter"
                      onKeyDown={handleKeyDown}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <div className=" h-full">
            <h2 className="text-sm font-medium">All prerequisite</h2>
            <ul className="flex flex-col w-full px-4 divide-y gap-1 h-full max-h-44 mt-2 overflow-y-auto border rounded-md overflow-hidden ">
              {(form?.watch("prerequisites").length > 0 &&
                form?.watch("prerequisites")?.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center py-1"
                  >
                    <span className="text-xs font-medium">{item}</span>
                    <span className="text-xs font-medium">
                      <Button
                        type="button"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => {
                          form.setValue(
                            "prerequisites",
                            form
                              .watch("prerequisites")
                              .filter((crnt) => crnt !== item)
                          );
                        }}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </span>
                  </li>
                ))) || (
                <li className="flex justify-between items-center py-1 justify-self-center text-foreground/40 text-sm">
                  Please add at least one prerequisite
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-9 flex justify-end ">
          <Button
            type="submit"
            disabled={form.formState.isSubmitting || form.formState.isDirty}
          >
            Update
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default CourseGenericInfoForm;

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
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(10, "Title is required and must atleast 10 chracters"),
});

export default function CreateCoursePopup() {
  const form = useForm({
    resolver: zodResolver(),
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create Course</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Course</DialogTitle>
          <DialogDescription>
            Fill the below detail to create new course.
          </DialogDescription>
        </DialogHeader>

        <Form {...form} className="relative z-[999999999999999999999999999]">
          <form className="relative z-[]">
            <FormField
              name="title"
              control={form.control}
              render={(field) => (
                <FormItem>
                  <FormLabel>CourseTitle</FormLabel>
                  <FormControl>
                    <Input placeholder="Course Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="description"
              control={form.control}
              render={(field) => (
                <FormItem className="mt-5">
                  <FormLabel>Course Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Course Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="description"
              control={form.control}
              render={(field) => (
                <FormItem className="mt-5">
                  <FormLabel>Course Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Course Description" type="file" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>

        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

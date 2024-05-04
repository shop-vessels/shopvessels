"use client";

import { Button } from "@/components/ui/button";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { saveChapterAction } from "../../_actions/saveChapterAction";
import { usePathname } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { useRef, useState } from "react";
import { Loader } from "lucide-react";

const ChapterForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const params = usePathname();
  const courseId = params.split("/").slice(-1)[0];
  const inputRef = useRef();

  const saveChapter = async (formData) => {
    if (courseId === undefined || courseId === null) {
      return toast({ title: "Something went wrong! Please try again" });
    }
    setIsSubmitting(true);

    setTimeout(async () => {
      const res = await saveChapterAction(courseId, formData);

      if (res === "FAILURE") {
        toast({
          title: "Something went wrong on our servers! Please try again",
        });
      }
      if (res === "SUCCESS") {
        toast({ title: "Chapter has been added successfully!" });
        inputRef.current.value = "";
      }
      setIsSubmitting(false);
    }, 100);
  };
  return (
    <form action={saveChapter}>
      <Label htmlFor="chapter">Chapter Name</Label>
      <Input
        ref={inputRef}
        className="mt-2"
        placeholder="Chapter Name"
        name="chapter"
        id="chapter"
      />
      <DialogFooter className={"mt-5"}>
        <Button variant="outline" asChild>
          <DialogClose>Cancel</DialogClose>
        </Button>

        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? <Loader className="animate-spin" /> : "Save"}
        </Button>
      </DialogFooter>
    </form>
  );
};
export default ChapterForm;

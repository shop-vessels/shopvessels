"use client";

import { Button } from "@/components/ui/button";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { saveChapterAction } from "../../_actions/saveChapterAction";
import { usePathname, useSearchParams } from "next/navigation";
import { toast } from "@/components/ui/use-toast";

const ChapterForm = () => {
  const params = usePathname();
  const courseId = params.split("/").slice(-1)[0];

  const saveChapter = async (formData) => {
    if (courseId === undefined || courseId === null) {
      return toast({ title: "Something went wrong! Please try again" });
    }

    const res = await saveChapterAction(courseId, formData);

    if (res === "FAILURE") {
      toast({ title: "Something went wrong on our servers! Please try again" });
    }
    if (res === "SUCCESS") {
      toast({ title: "Chapter has been added successfully!" });
    }
  };
  return (
    <form action={saveChapter}>
      <Label htmlFor="chapter">Chapter Name</Label>
      <Input
        className="mt-2"
        placeholder="Chapter Name"
        name="chapter"
        id="chapter"
      />
      <DialogFooter className={"mt-5"}>
        <Button variant="outline" asChild>
          <DialogClose>Cancel</DialogClose>
        </Button>

        <Button type="submit">Save</Button>
      </DialogFooter>
    </form>
  );
};
export default ChapterForm;

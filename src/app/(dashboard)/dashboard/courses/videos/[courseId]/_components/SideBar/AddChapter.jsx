import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Menu } from "lucide-react";
import React from "react";
import ChapterForm from "./ChapterForm";

function AddChapterButton() {
  return (
    <div className=" bg-muted-foreground p-5 flex gap-2 items-center">
      <ChapterPopUp />

      <Button size="icon">
        <Menu />
      </Button>
    </div>
  );
}

const ChapterPopUp = () => {
  return (
    <Dialog>
      <Button asChild>
        <DialogTrigger className="w-full">Add Chapter</DialogTrigger>
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Chapter</DialogTitle>
          <DialogDescription>
            Fill the below detail to create new chapter.
          </DialogDescription>
        </DialogHeader>

        <ChapterForm />
      </DialogContent>
    </Dialog>
  );
};



export default AddChapterButton;

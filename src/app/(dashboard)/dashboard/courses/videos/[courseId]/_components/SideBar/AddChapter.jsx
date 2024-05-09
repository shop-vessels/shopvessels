"use client";
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
import React, { useState } from "react";
import ChapterForm from "./ChapterForm";

function AddChapterButton() {
  return (
    <div className=" border-t-2 p-5 flex gap-2 items-center">
      <ChapterPopUp />
    </div>
  );
}

const ChapterPopUp = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <Dialog open={isOpened} onOpenChange={setIsOpened}>
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

        <ChapterForm setIsOpened={setIsOpened} />
      </DialogContent>
    </Dialog>
  );
};

export default AddChapterButton;

"use client";
import { Button } from "@/components/ui/button";
import { Loader, Trash } from "lucide-react";
import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import deleteDayFileAction from "../../_actions/deleteDayFileAction";

const DeleteFileButton = ({ courseId, chapterId, dayId, S3Key }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  async function handleDelete() {
    setIsDeleting(true);
    const res = await deleteDayFileAction(courseId, chapterId, dayId, S3Key);
    if (res === "SUCCESS") {
      toast({
        title: "File has been removed successfully",
      });
    }

    if (res === "FAILURE") {
      toast({
        title: "Something went wrong on our servers! Please try again",
      });
    }

    setIsDeleting(false);
  }

  return (
    <Button
      onClick={handleDelete}
      size="icon"
      className="w-max px-2 aspect-square"
      variant="destructive"
      disabled={isDeleting}
    >
      {isDeleting ? (
        <Loader className="animate-spin transition-transform" />
      ) : (
        <Trash />
      )}
    </Button>
  );
};

export default DeleteFileButton;

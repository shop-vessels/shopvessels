"use client";
import { Button } from "@/components/ui/button";
import { Loader, Trash } from "lucide-react";
import React, { useState } from "react";
import deleteDayVideoAction from "../../_actions/deleteDayVideoAction";
import { toast } from "@/components/ui/use-toast";

const DeleteVideoButton = ({ courseId, chapterId, dayId, S3Key }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  async function handleDelete() {
    setIsDeleting(true);
    const res = await deleteDayVideoAction(courseId, chapterId, dayId, S3Key);
    if (res === "SUCCESS") {
      toast({
        title: "Video has been removed successfully",
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

export default DeleteVideoButton;

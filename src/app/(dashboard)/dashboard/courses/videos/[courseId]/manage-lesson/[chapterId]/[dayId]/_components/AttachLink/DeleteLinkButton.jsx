"use client";
import { Button } from "@/components/ui/button";
import { Loader, Trash } from "lucide-react";
import React, { useState } from "react";
import { linkDeleteAction } from "../../_actions/linkDeleteAction";
import { toast } from "@/components/ui/use-toast";

const DeleteLinkButton = ({ courseId, chapterId, dayId, _id }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    setIsDeleting(true);
    const res = await linkDeleteAction(courseId, chapterId, dayId, _id);
    if (res === "SUCCESS") {
      toast({
        title: "Link has been removed successfully!",
      });
    } else {
      toast({
        title: "Something wen't wrong, Please refresh and retry!",
      });
    }
    setIsDeleting(false);
  }
  return (
    <Button
      size="icon"
      disabled={isDeleting}
      onClick={handleDelete}
      variant="destructive"
    >
      {isDeleting ? <Loader className="animate-spin" /> : <Trash />}
    </Button>
  );
};

export default DeleteLinkButton;

"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { deleteCourseAction } from "../_action/deleteCourseAction";
import { Loader } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const DeleteCourseButton = ({ id }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    setIsDeleting(true);
    const res = await deleteCourseAction(id);
    if (res === "SUCCESS") {
      toast({
        title: "Course Deleted",
      });
    } else {
      toast({
        title: "Something went wrong",
        description: "Please try again",
      });
    }
    setIsDeleting(false);
  }

  return (
    <Button onClick={handleDelete} variant="destructive">
      {isDeleting ? <Loader className="animate-spin" /> : "Delete"}
    </Button>
  );
};

export default DeleteCourseButton;

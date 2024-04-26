"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { deleteBlogAction } from "../_actions/deleteBlogAction";
import { Loader } from "lucide-react";

function DeleteButton({ id }) {
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    setIsDeleting(true);
    await deleteBlogAction(id);
    setIsDeleting(false);
  }
  return (
    <Button variant="destructive" disabled={isDeleting} onClick={handleDelete}>
      {isDeleting ? <Loader className="animate-spin"/> : "Delete"}
    </Button>
  );
}

export default DeleteButton;

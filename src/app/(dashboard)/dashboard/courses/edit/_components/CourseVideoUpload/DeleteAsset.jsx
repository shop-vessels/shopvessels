"use client";

import { Button } from "@/components/ui/button";
import { deleteAssetAction } from "../../_actions/deleteAssetAction";
import { Loader, Trash2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";

export default function DeleteAsset({ videoId, courseId, assetS3Key }) {
  const [isDeleting, setIsDeleting] = useState(false);
  async function handleDelete() {
    setIsDeleting(true);
    const res = await deleteAssetAction(courseId, videoId, assetS3Key);

    if (res === "SUCCESS") {
      toast({
        title: "Assets has been deleted successfully",
      });
    }
    if (res === "FAILURE") {
      toast({
        title: "Something went wrong while deleting! retry",
      });
    }
    setIsDeleting(false);
  }

  return (
    <Button size="icon" onClick={handleDelete} disabled={isDeleting}>
      {isDeleting ? <Loader className="animate-spin" /> : <Trash2 size={18} />}
    </Button>
  );
}

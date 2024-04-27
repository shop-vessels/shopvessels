"use client";

import { Button } from "@/components/ui/button";
import { Loader, Trash2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import deleteBucketVideo from "../../_actions/deleteBucketVideo";

const DeleteVideoButtom = ({ S3Key, courseId, videoId }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDeleteVideo() {
    setIsDeleting(true);
    try {
      const res = await deleteBucketVideo(S3Key, courseId, videoId);
      if (res === "SUCCESS") {
        toast({
          title: "Video has been removed successfully",
        });
      }
      if (res === "ERROR") {
        toast({
          title: "Something went wrong",
          description: "Please try again",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Something went wrong",
        description: "Please try again",
        variant: "destructive",
      });
    }

    setIsDeleting(false);
  }

  return (
    <Button
      onClick={handleDeleteVideo}
      disabled={isDeleting}
      size={"icon"}
      variant="destructive"
    >
        {isDeleting ?
        <Loader className="animate-spin transition-transform"/>
        :
      <Trash2 />
        }
    </Button>
  );
};

export default DeleteVideoButtom;

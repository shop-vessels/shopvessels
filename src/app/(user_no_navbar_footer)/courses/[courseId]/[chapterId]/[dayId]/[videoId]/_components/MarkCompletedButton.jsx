"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { getVideoCompletedStatus } from "../_actions/getVideoCompletedStatus";
import { updateVideoCompletionStatus } from "../_actions/updateVideoCompletionStatus";
import { CircleCheck, CircleX, Loader } from "lucide-react";

const MarkCompletedButton = ({ courseId, chapterId, userId, dayId }) => {
  const [isCompleted, setIsCompleted] = useState(null);

  useEffect(() => {
    getVideoCompletedStatus(userId, courseId, dayId).then((completed) => {
      setIsCompleted(completed);
    });
  }, []);

  async function toggleUpdate() {
    setIsCompleted(null);
    const res = await updateVideoCompletionStatus(userId, courseId, dayId);
    setIsCompleted(res);
  }

  return (
    <Button
      onClick={toggleUpdate}
      size={"sm"}
      disabled={isCompleted === null}
      variant={isCompleted === true ? "destructive" : "default"}
      className="w-max text-xs md:text-base"
    >
      {isCompleted === true && (
        <span className="flex gap-2 items-center">
          <CircleX size={18} />
          <span className="hidden lg:flex items-center">Mark as uncompleted</span>
          
        </span>
      )}
      {isCompleted === false && (
        <span className="flex gap-2 items-center">
          <CircleCheck size={18} />
          <span className="hidden lg:flex items-center">Mark as</span>
          completed
        </span>
      )}
      {isCompleted === null && <Loader className="animate-spin" />}
    </Button>
  );
};

export default MarkCompletedButton;

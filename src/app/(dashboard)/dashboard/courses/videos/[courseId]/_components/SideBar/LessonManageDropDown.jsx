"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import React from "react";
import deleteLessonAction from "../../_actions/deleteLessonAction";
import { toast } from "@/components/ui/use-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

function LessonManageDropDown({ courseId, chapterId, lessonId: dayId }) {
  async function handleDelete() {
    // return;
    const res = await deleteLessonAction(courseId, chapterId, dayId);
    if (res === "SUCCESS") {
      toast({
        title: "Lesson Deleted",
      });
    }
    if (res === "FAILURE") {
      toast({
        title: "Something went wrong",
        description: "Please try again",
      });
    }
  }

  return (
    <DropdownMenu className="ml-auto">
      <DropdownMenuTrigger size="sm" variant="primary" className="ml-auto">
        <Menu size="18" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Manage Lesson</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button className="w-full" size="sm" asChild>
            <Link
              href={{
                pathname: `/dashboard/courses/videos/${courseId}/add-lesson/${chapterId}`,
                query: {
                  dayId: dayId,
                },
              }}
            >
              Rename
            </Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            variant="destructive"
            onClick={handleDelete}
            className="w-full"
            size="sm"
          >
            Delete
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LessonManageDropDown;

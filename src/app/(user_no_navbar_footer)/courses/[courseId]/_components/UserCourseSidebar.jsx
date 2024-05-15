"use client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const UserCourseSidebar = ({
  title,
  courseId,
  completedProgress,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsVisible(false);
  }, [pathname]);

  return (
    <aside
      className={`${
        isVisible
          ? "inline-block inset-0  xl:w-full absolute xl:relative bg-foreground/40"
          : " xl:flex xl:justify-start w-max xl:w-full xl:relative"
      }  inset-0 xl:inset-[none] xl:relative border-l-2  w-full h-full z-[9999] self-stretch xl:max-w-sm  xl:bg-background border-r-2 max-w-sm`}
    >
      <div className="flex gap-1 bg-background w-full h-full">
        <div
          className={`overflow-y-auto border-r-2 w-full h-full max-w-sm bg-background ${
            isVisible
              ? " inline-block"
              : "hidden xl:inline-block xl:translate-x-0"
          } border-r`}
        >
          <MetaData
            title={title}
            completed={completedProgress}
            courseId={courseId}
            closeSidebar={() => {
              setIsVisible(false);
            }}
          />
          {children}
        </div>
        {!isVisible && (
          <div className="xl:hidden h-max p-3">
            <Button size="icon" onClick={() => setIsVisible(true)}>
              <Menu />
            </Button>
          </div>
        )}
      </div>
    </aside>
  );
};

const MetaData = ({ title, courseId, completed, closeSidebar }) => {
  return (
    <div className="p-2 ">
      <div className="rounded-md  bg-white border overflow-hidden flex flex-col gap-3">
        <div className="bg-primary flex justify-between px-5 text-2xl text-background py-4">
          Vessels
          <Button
            size="icon"
            className="xl:hidden"
            onClick={closeSidebar}
            variant="outline"
          >
            <X className="text-foreground" />
          </Button>
        </div>
        <div className="p-3">
          <Link
            href={"/enrolled-courses"}
            className="text-sm flex gap-1 items-center"
          >
            <ChevronLeft size={14} /> Purchased Courses{" "}
          </Link>

          <h1 className="text-2xl font-medium">{title}</h1>
          <Progress value={completed ?? 0} className="h-2 mt-2" />

          <p className="text-sm mt-3">
            {completed !== undefined && completed !== null
              ? `${Math.round(completed)}%`
              : "N/A"}{" "}
            complete
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCourseSidebar;

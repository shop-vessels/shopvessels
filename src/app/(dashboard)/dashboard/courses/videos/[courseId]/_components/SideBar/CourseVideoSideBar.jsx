import React from "react";
import AddChapterButton from "./AddChapter";
import connectDB from "@/database/connectDatabase";
import CourseModel from "@/database/models/CourseModel";
import { notFound } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BetweenHorizonalStart,
  Milestone,
  Presentation,
} from "lucide-react";
import Link from "next/link";
import LessonManageDropDown from "./LessonManageDropDown";
import { isValidObjectId } from "mongoose";

function CourseVideoSideBar({ courseId }) {
  return (
    <Chapters courseId={courseId}>
      <AddChapterButton />
    </Chapters>
  );
}

const Chapters = async ({ children, courseId }) => {
  await connectDB();

  if (!courseId || !isValidObjectId(courseId)) return notFound();

  const course = await CourseModel.findById(courseId).select("chapters");
  if (!course) return notFound();

  return (
    <aside className="flex relative flex-col min-w-[400px] bg-foreground/5">
      <div className="flex-grow p-5 h-full  overflow-y-auto">
        <Accordion type="multiple" className="flex flex-col gap-2">
          {course && course?.chapters.length > 0 ? (
            course.chapters.map((chapter) => (
              <ChapterBlock
                key={chapter?._id}
                chapter={chapter}
                courseId={courseId}
              />
            ))
          ) : (
            <div>No Chapter has been added yet</div>
          )}
        </Accordion>
      </div>
      {children}
    </aside>
  );
};

const ChapterBlock = ({ chapter, courseId }) => {
  const days = chapter?.days;

  return (
    <div className="rounded-md w-full px-3 bg-background ">
      <AccordionItem value={chapter?._id?.toString()}>
        <AccordionTrigger>
          <h2 className="text font-medium w-full text-foreground flex gap-2 items-center">
            <BetweenHorizonalStart size={16} /> {chapter?.title}{" "}
          </h2>
        </AccordionTrigger>
        <AccordionContent>
          {days?.length > 0 ? (
            <div className="flex flex-col gap-3">
              {days?.map(({ title, _id }) => (
                <Lesson
                  key={_id}
                  id={_id?.toString()}
                  title={title}
                  courseId={courseId}
                  chapterId={chapter?._id.toString()}
                />
              ))}
            </div>
          ) : (
            <p className="text-sm mt-5 p-2 bg-foreground/5 rounded-md text-muted-foreground text-center">
              No Lesson has been added yet!
            </p>
          )}
          <AddLesson courseId={courseId} chapterId={chapter?._id} />
        </AccordionContent>
      </AccordionItem>
    </div>
  );
};

const Lesson = ({ title, courseId, chapterId, id: lessonId }) => {
  return (
    <div className="flex items-center justify-between hover:bg-foreground/5 px-2 py-1">
      <Link
        href={`/dashboard/courses/videos/${courseId}/manage-lesson/${chapterId}/${lessonId} `}
        className="flex-grow hover:underline  "
      >
        <div className="w-full flex gap-2 items-center py-2 text-left line-clamp-2 border-b">
          <span className="aspect-square">
            <Presentation />
          </span>
          <p className="line-clamp-2 text-muted-foreground hover:text-foreground">
            {title}
          </p>
        </div>
      </Link>
      <LessonManageDropDown
        {...{
          courseId: courseId?.toString(),
          chapterId: chapterId?.toString(),
          lessonId: lessonId?.toString(),
        }}
      />
    </div>
  );
};

const AddLesson = ({ chapterId, courseId }) => {
  return (
    <div className="mt-4 w-full flex gap-2">
      <Button className="w-full" size="sm" asChild>
        <Link
          href={`/dashboard/courses/videos/${courseId}/add-lesson/${chapterId.toString()}`}
        >
          Add Lesson
        </Link>
      </Button>
      <Button size="sm" className="aspect-square" asChild>
        <Link
          href={`/dashboard/courses/videos/${courseId}/chapters/${chapterId.toString()}`}
        >
          <ArrowRight size={14} />
        </Link>
      </Button>
    </div>
  );
};

export default CourseVideoSideBar;

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
import { BetweenHorizonalStart, Milestone } from "lucide-react";
import Link from "next/link";

function CourseVideoSideBar({ courseId }) {
  return (
    <Chapters courseId={courseId}>
      <AddChapterButton />
    </Chapters>
  );
}

const Chapters = async ({ children, courseId }) => {
  await connectDB();

  if (!courseId) return notFound();

  const course = await CourseModel.findById(courseId).select("chapters");
  if (!course) return notFound();

  return (
    <aside className="flex relative flex-col w-[450px] bg-foreground/5">
      <div className="flex-grow p-5 h-full  overflow-y-auto">
        <Accordion type="multiple" className="flex flex-col gap-2">
          {course && course?.chapters.length > 0 ? (
            course.chapters.map((chapter) => (
              <ChapterBlock key={chapter?._id} chapter={chapter} />
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

const ChapterBlock = ({ chapter }) => {
  const days = chapter?.days;
  console.log(chapter?._id);

  return (
    <div className="rounded-md w-full px-3 bg-background ">
      {days?.length === 0 ? (
        <AccordionItem value={chapter?.title}>
          <AccordionTrigger>
            <h2 className="text font-medium text-foreground flex gap-2 items-center">
              <BetweenHorizonalStart size={16} /> {chapter?.title}{" "}
            </h2>
          </AccordionTrigger>
          <AccordionContent>
            {chapter?.length > 0 ? (
              chapter?.map(({ title, _id }) => (
                <Lesson key={_id} id={_id} title={title} />
              ))
            ) : (
              <p>No Lesson has been added yet!</p>
            )}
            <AddLesson chapterId={chapter?._id} />
          </AccordionContent>
        </AccordionItem>
      ) : (
        <div>No Lesson has been added yet</div>
      )}
    </div>
  );
};

const AddLesson = ({ chapterId }) => {
  console.log("Chapter ID ", chapterId);
  return (
    <form action="#" className="mt-2">
      <Button className="w-full" size="sm" asChild>
        <Link
          href={`/dashboard/courses/videos/661c21b9be8e828325111e46/add-lesson/${chapterId.toString()}`}
        >
          Add Lesson
        </Link>
      </Button>
    </form>
  );
};

const Lesson = () => {
  return;
};

export default CourseVideoSideBar;

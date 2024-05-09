import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Circle, Video } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Chapters = ({ chapters, courseId }) => {
  return (
    <Accordion type="multiple" className="flex flex-col">
      {chapters.map(({ title, days, _id: chapterId }, index) => (
        <AccordionItem
          key={index}
          value={title}
          className=" border-none rounded-none"
        >
          <AccordionTrigger className="gap-4 items-start text-left border-b border-b-foreground px-4">
            <span className="aspect-square pt-1">
              <Circle size={18} />
            </span>
            <span className="mr-auto">{title}</span>{" "}
            <span className="text-sm font-normal">1/7</span>
          </AccordionTrigger>
          <AccordionContent className={days?.length && "py-3"}>
            <div className="flex flex-col gap-2">
              {(days?.length &&
                days.map(({ title, _id: dayId }, dayIndex) => (
                  <Button
                    className="w-full relative justify-start h-auto py-2 items-start text-foreground"
                    variant="link"
                    asChild
                    key={dayIndex}
                  >
                    <Link
                      href={{
                        pathname: `/courses/${courseId}/${chapterId}/${dayId}`,
                      }}
                      className="p-4 hover:bg-foreground/5 flex gap-5 hover:no-underline"
                    >
                      <span className="line-b">
                        {" "}
                        <Circle size={14} />{" "}
                      </span>
                      <span className="flex flex-col">
                        <span>{title}</span>
                        <span className="flex gap-2 text-muted-foreground items-center text-xs">
                          <Video size={14} /> Video{" "}
                        </span>
                      </span>
                    </Link>
                  </Button>
                ))) || (
                <div className="text-center bg-foreground/5 py-2">
                  No lessons found
                </div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Chapters;

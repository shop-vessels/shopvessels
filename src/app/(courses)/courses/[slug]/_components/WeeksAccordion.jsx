import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, Circle, Play, Video } from "lucide-react";
import Link from "next/link";
import { cleanVideoName } from "@/lib/cleanVideoTitle";
import Image from "next/image";

function WeeksAccordion({ videos, id }) {
  return (
    <Accordion type="single" collapsible className="w-full text-left lg:mt-5">
      {/* <CustomAccordionItem value="1" /> */}
      {/* <CustomAccordionItem value="2" />
      <CustomAccordionItem value="3" /> */}
      {videos.length === 0 && (
        <div className="p-2 bg-foreground/5 mt-5 rounded-md">
          <p className="text-sm text-center">No Video has been uploaded yet</p>
        </div>
      )}
      {videos?.length > 0 &&
        videos?.map((props, ind) => (
          <AccordionContentChip {...props} id={id} key={ind} />
        ))}
    </Accordion>
  );
}

const CustomAccordionItem = ({ value }) => {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="flex items-start text-left gap-2 hover:no-underline">
        <span>
          <Circle size={18} />
        </span>
        <h2 className="font-bold text-sm text-foreground/80">
          Week 1 - Preparing the Mind and Body (Days 1-7):
        </h2>
        <span>1/7</span>
      </AccordionTrigger>
      <AccordionContent className="divide-y px-0"></AccordionContent>
    </AccordionItem>
  );
};

// _id = video id
const AccordionContentChip = ({ id, _id, S3Key, title, thumbnail }) => {
  console.log(thumbnail);
  return (
    <Link href={`/courses/${id}?videoId=${S3Key}`}>
      <span className="flex gap-2 items-stretch relative h-14 py-2 hover:bg-foreground/5 px-2 transition-colors">
        <span className=" flex  flex-col items-center  h-full  relative w-max">
          <span className="flex items-center justify-center w-3.5 h-3.5">
            {false ? <CheckCircle size={16} /> : <Circle size={16} />}
          </span>
          <div className=" bg-black/40 block h-full pb-11  w-0.5"></div>{" "}
        </span>
        <div className="max-w-24 relative aspect-video rounded-md overflow-hidden flex items-center">
          {thumbnail ? (
            <Image
              src={thumbnail}
              fill
              className="object-cover w-full h-full object-center"
              alt="none"
            />
          ) : (
            <div className="w-full h-full bg-foreground/5 flex justify-center items-center">
              <Play />
            </div>
          )}
        </div>
        <span>
          <p className=" line-clamp-1 font-bold text-foreground/80 ">
            {cleanVideoName(title)}
          </p>
          <span className="flex gap-2 items-center text-xs text-foreground/60">
            <Video className="text-foreground/60 py-0" size="18" color="currentColor"/> Video
          </span>
        </span>
      </span>
    </Link>
  );
};

export default WeeksAccordion;

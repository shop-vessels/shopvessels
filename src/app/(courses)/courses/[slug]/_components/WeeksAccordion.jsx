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
    <div className="w-full text-left px-2 md:px-10 lg:px-0 lg:mt-5">
      {/* <CustomAccordionItem value="1" /> */}
      {/* <CustomAccordionItem value="2" />
      <CustomAccordionItem value="3" /> */}
      {videos.length === 0 && (
        <div className="p-2 bg-foreground/5 mt-5 rounded-md">
          <p className="text-sm text-center">No Video has been uploaded yet</p>
        </div>
      )}
      <div className="w-full flex flex-col gap-2">
        {videos?.length > 0 &&
          videos?.map((props, ind) => (
            <div key={ind} className="border-b py-2">
              <div className="text-sm mt-2 font-bold text-foreground/70">
                Day : {ind + 1}
              </div>
              <AccordionContentChip {...props} id={id} ind={ind} key={ind} />
            </div>
          ))}
      </div>
    </div>
  );
}

// _id = video id
const AccordionContentChip = ({ id, _id, S3Key, title, thumbnail, ind }) => {
  return (
    <Link href={`/courses/${id}?videoId=${S3Key}`}>
      <div className="flex gap-2 items-center rounded-lg overflow-hidden relative hover:bg-foreground/5 transition-colors py-2 px-2">
        {thumbnail ? (
          <div className="relative aspect-video w-full max-w-24 rounded-md overflow-hidden">
            <Image
              src={thumbnail}
              fill
              className="object-cover w-full h-full object-center"
              alt="none"
            />
          </div>
        ) : (
          <div className="p-2 w-full max-w-24 aspect-video rounded-md bg-foreground/5 flex justify-center items-center">
            <Play />
          </div>
        )}

        <div className="h-max">
          <p
            title={cleanVideoName(title)}
            className=" line-clamp-1 font-bold text-foreground/80 "
          >
            {cleanVideoName(title)}
          </p>
          <span className="flex gap-2 items-center text-xs text-foreground/60">
            <Video
              className="text-foreground/60 py-0"
              size="18"
              color="currentColor"
            />{" "}
            Video
          </span>
        </div>
      </div>
    </Link>
  );
};

export default WeeksAccordion;

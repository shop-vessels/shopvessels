import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, Circle, Video } from "lucide-react";
import Link from "next/link";

function WeeksAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full text-left">
      <CustomAccordionItem value="1" />
      <CustomAccordionItem value="2" />
      <CustomAccordionItem value="3" />
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
      <AccordionContent className="divide-y px-0">
        <AccordionContentChip />
        <AccordionContentChip />
        <AccordionContentChip />
        <AccordionContentChip />
        <AccordionContentChip />
        <AccordionContentChip />
        <AccordionContentChip />
      </AccordionContent>
    </AccordionItem>
  );
};
const AccordionContentChip = () => {
  return (
    <Link href={"/"}>
      <span className="flex gap-2 items-stretch relative h-14 py-2 hover:bg-foreground/5 px-2 transition-colors">
        <span class=" flex  flex-col items-center  h-full  relative w-max">
          <span className="flex items-center justify-center w-3.5 h-3.5">
            {false ? <CheckCircle size={16} /> : <Circle size={16} />}
          </span>
          <div class=" bg-black/40 block h-full pb-11  w-0.5"></div>{" "}
        </span>
        <span>
          <p className=" line-clamp-1 font-bold text-foreground/60 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            dolor corporis vero praesentium, beatae sunt dicta temporibus
            obcaecati adipisci laborum excepturi provident voluptatem illum
            alias fugit. Vitae aut pariatur minus.
          </p>
          <span className="flex gap-2 items-center text-xs text-foreground/80 mt-2">
            <Video className="text-foreground/60 py-0" size="18" /> Video
          </span>
        </span>
      </span>
    </Link>
  );
};

export default WeeksAccordion;

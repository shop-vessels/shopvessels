import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, Circle } from "lucide-react";

function WeeksAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full text-left">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-left text-sm">
          Week 1 - Preparing the Mind and Body (Days 1-7):
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2">
          {false ? <CheckCircle /> : <Circle size={16} />}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default WeeksAccordion;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqsData from "../../../data/faqs.json";

const faqs = () => {
  return (
    <div className="py-20 ld:px-0 px-4">
      <p className="text-center text-4xl font-semibold text-foreground/65">
        FREQUENTLY ASKED QUESTIONS
      </p>
      <Accordion
        type="single"
        collapsible
        className="max-w-[1000px] w-full w m-auto mt-9"
      >
        {faqsData.map(
          (
            faq,
            index // corrected map function
          ) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="bg-foreground/5 mt-3 px-4 rounded-lg text-lg font-semibold list-none text-start">
                {faq.title}
              </AccordionTrigger>
              <AccordionContent className="bg-foreground/5 px-4 text-base">
                {faq.description}
              </AccordionContent>
            </AccordionItem>
          )
        )}
      </Accordion>
    </div>
  );
};

export default faqs;

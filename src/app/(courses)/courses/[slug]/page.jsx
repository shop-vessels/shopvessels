
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft } from "lucide-react";
import React from "react";
import SearchBar from "./_components/SearchBar";
import WeeksAccordion from "./_components/WeeksAccordion";

const Page = () => {
  return (
    <div className="flex justify-center items-center h-screen relative">
      <aside className="border-r w-full max-w-sm p-5 !h-full overflow-y-auto">
        <CourseMetaBlock />
        <SearchBar />
        <WeeksAccordion />
        
      </aside>
      <main className="flex-1 flex justify-center items-center p-10  max-w-5xl mx-auto min-h-screen overflow-y-auto">
        Content
      </main>
    </div>
  );
};

const CourseMetaBlock = () => {
  return (
    <div className="border shadow-md rounded-md">
      <div className="text-center bg-primary py-3">
        <p>Logo</p>
      </div>
      <div className="p-2">
        <div className="text-xs flex gap-0.5 text-foreground/60 mt-2 items-center">
          <ChevronLeft size={14} /> <span>Go to Dashboard</span>
        </div>
        <h2 className="mt-2 text-xl font-medium text-foreground/80">
          QuantumPsyche Programming (QPP): The 40-Day Blueprint for Elevated
          Consciousness
        </h2>
        <div className="mt-2">
          <Progress value={10} className="h-1 mb-2" />
          <span>10% </span>
          <span className="text-xs">complete</span>
        </div>
      </div>
    </div>
  );
};

export default Page;

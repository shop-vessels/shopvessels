import { Button } from "@/components/ui/button";
import React from "react";

const joinNow = () => {
  return (
    <div className="text-foreground/65  text-center p-16">
      <p className="text-4xl font-semibold">START YOUR TRIAL</p>
      <p className="mt-4 text-lg">
        Tune in to our global community and start your 7 day free trial today;
        then its only 50c a day!
      </p>
      <Button className="text-lg py-6 px-6 text-foreground/65 mt-8">
        JOIN NOW
      </Button>
    </div>
  );
};

export default joinNow;

import { Button } from "@/components/ui/button";
import React from "react";

const classes = ({
  durition,
  currency,
  price,
  save,
  offer1,
  offer2,
  offer3,
  offer4,
  offer5,
}) => {
  return (
    <div className="max-w-[400px] w-full  border-2 border-primary py-5 px-6 rounded-lg bg-card-foreground/5 hover:scale-[1.01] hover:shadow-2xl hover:transition-all ease-in-out duration-300 hover:bg-white">
      <p className="text-center text-primary text-lg ">{durition}</p>
      <p className="text-3xl font-medium text-center mt-3 text-foreground/70">
        {currency} <span className="text-6xl text-foreground/75">{price}</span>
      </p>
      <p className="text-center text-lg ">{save}</p>
      <ul className=" mt-9 flex flex-col gap-1">
        <li>{offer1}</li>
        <li>{offer2}</li>
        <li>{offer3}</li>
        <li>{offer4}</li>
        <li>{offer5}</li>
      </ul>
      <Button className="w-full text-lg text-foreground/65 mt-8 py-7">
        Start free trial
      </Button>
    </div>
  );
};

export default classes;

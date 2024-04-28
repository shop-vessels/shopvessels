"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const SearchBar = () => {
  const [isVissible, setIsVissible] = useState(false);

  function handleChange(e) {
    const input = e.target.value;
    setIsVissible(input.length > 0);
  }

  return (
    <div className="relative mt-4">
      <Input
        className="py-2 text-xs"
        placeholder="Search by lesson title"
        onChange={handleChange}
      />
      {isVissible && (
        <ul className="absolute top-full max-h-40 divide-y overflow-y-auto bg-background w-full left-0 right-0 mt-2 border p-2 rounded-md">
          {Array.from({ length: 20 })
            .fill("John Doe")
            .map((item, ind) => (
              <li
                key={ind}
                className="text-xs py-2 hover:bg-foreground/5 rounded-md px-2"
              >
                {item}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;

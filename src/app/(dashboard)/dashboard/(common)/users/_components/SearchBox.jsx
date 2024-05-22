"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const SearchBox = ({ defaultValue }) => {
  const inputRef = useRef();
  const router = useRouter();

  function handleSearch() {
    router.push(`/dashboard/users?q=${inputRef.current.value}`);
  }

  return (
    <div className="flex w-full relative items-center gap-2 ">
      <Input
        ref={inputRef}
        type="search"
        defaultValue={defaultValue}
        placeholder="Search name"
        id="search"
      />
      <Button
        size="icon"
        onClick={handleSearch}
        className="h-[98%] p-0 w-auto aspect-square"
      >
        <Search />
      </Button>
    </div>
  );
};

export default SearchBox;

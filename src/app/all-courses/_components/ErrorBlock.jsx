import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

function ErrorBlock({ code, title, desc }) {
  return (
    <div className="py-10 flex flex-col justify-center items-center max-w-md p-10 mx-auto bg-foreground/5 rounded-md mt-10">
      <span className="text-4xl font-bold text-foreground/80">{code}</span>
      <h2 className="font-bold text-lg text-foreground/80">{title}</h2>
      <p className="text-foreground/60">{desc}</p>
      <Link href={"/"} className="mt-2">
        <Button size="sm" className="flex gap-2 items-center">
          <Home size={16} /> Go Home
        </Button>
      </Link>
    </div>
  );
}

export default ErrorBlock;

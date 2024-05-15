import { Separator } from "@/components/ui/separator";
import { File } from "lucide-react";
import Link from "next/link";
import React from "react";

const LinksBlock = ({ links }) => {
  return (
    <div className="w-full border mt-10  p-5 rounded-md">
      <h2 className="font-bold px-2 text-lg">External Links</h2>
      <Separator className="mt-2" />
      <div className="flex flex-col gap-2  max-h-64 overflow-y-auto">
        {links.length === 0 && (
          <div className="flex items-center justify-start gap-2 p-2 border-b py-5">
            No link found
          </div>
        )}
        {links &&
          links.map(({ title, S3Key }, index) => (
            <Link
              key={index}
              href={title}
              target="_blank"
              className="flex items-center justify-start gap-2 p-2 border-b hover:bg-foreground/5 py-4"
            >
              <File />
              {title}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default LinksBlock;

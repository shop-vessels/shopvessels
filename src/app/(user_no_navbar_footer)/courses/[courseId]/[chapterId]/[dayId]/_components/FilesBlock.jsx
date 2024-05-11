import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cleanVideoName } from "@/lib/cleanVideoTitle";
import { Download, File } from "lucide-react";
import React from "react";
import { DownloadFileButton } from "./DownloadFileButton";

const FilesBlock = ({ files }) => {
  return (
    <div className="w-full  border mt-10 max-w-md p-5 rounded-md">
      <h2 className="font-bold px-2 text-lg">Files of day</h2>
      <Separator className="mt-2" />
      <div className="flex flex-col gap-2 max-w-md max-h-64 overflow-y-auto">
      {files.length === 0 && (
          <div className="flex items-center justify-start gap-2 p-2 border-b py-5">
            No file found
          </div>
        )}
        {files &&
          files.map(({ title, S3Key }, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-2 p-2 border-b"
            >
              <File />
              {title}

              <DownloadFileButton S3Key={S3Key} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default FilesBlock;

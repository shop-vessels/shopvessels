import ErrorBlock from "@/app/(user_side)/all-courses/_components/ErrorBlock";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cleanVideoName } from "@/lib/cleanVideoTitle";
import { Play } from "lucide-react";
import React from "react";

const VideosBlock = ({ videos }) => {
  console.log(videos);

  if (videos.length === 0) {
    return (
      <ErrorBlock
        code={404}
        title={"No Videos Found"}
        desc={"This page may not have any video uploaded yet!"}
      />
    );
  }

  return (
    <div className="p-5 flex flex-col gap-5  border-2 max-w-[98%] mx-auto mt-10 rounded-md">
      <h2 className="font-bold text-lg">All Videos of day</h2>
      <div className="grid grid-cols-3 w-full gap-5 mx-auto">
        {videos.map(({ title, S3Key, _id }) => (
          <Card className="px-5 py-2" key={_id}>
            <div className="aspect-video rounded-md w-full bg-foreground/5 flex items-center justify-center">
              <Play />
            </div>
            <Separator />
            <CardHeader className="px-2">
              <CardTitle className="text-base">{cleanVideoName( title)}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VideosBlock;

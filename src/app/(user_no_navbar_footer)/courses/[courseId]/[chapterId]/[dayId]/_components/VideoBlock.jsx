import ErrorBlock from "@/app/(user_side)/all-courses/_components/ErrorBlock";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cleanVideoName } from "@/lib/cleanVideoTitle";
import { Play } from "lucide-react";
import Link from "next/link";
import React from "react";
import MarkCompletedButton from "../[videoId]/_components/MarkCompletedButton";
import { getServerSession } from "next-auth";
import { AuthOptions } from "@/lib/auth/authOptions";

const VideosBlock = async ({ videos, courseId, chapterId, dayId }) => {
  const session = await getServerSession(AuthOptions);

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
    <div className="px-2 lg:p-5 flex flex-col gap-5  border-2 max-w-7xl w-full mx-auto mt-5 lg:mt-10 rounded-md">
      <div className="flex justify-between items-center px-2 py-4">
        <h2 className="font-bold lg:text-lg">All Videos of day</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-5 py-2 mx-auto">
        {videos.map(({ title, S3Key, _id: videoId }, ind, arr) => {
          return (
            <Link
              href={{
                pathname: `/courses/${courseId}/${chapterId}/${dayId}/${videoId}`,
                query: {
                  S3Key,
                },
              }}
              key={videoId}
            >
              <Card className="px-2 lg:px-5 py-2">
                <div className="aspect-video rounded-md w-full bg-foreground/5 flex items-center justify-center">
                  <Play />
                </div>
                <Separator />
                <CardHeader className="px-2">
                  <CardTitle as="span" className="text-base">
                    {cleanVideoName(title)}
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-end">
        <MarkCompletedButton
          {...{
            courseId,
            chapterId,
            dayId,
            userId: session?.user?._id.toString(),
          }}
        />
      </div>
    </div>
  );
};

export default VideosBlock;

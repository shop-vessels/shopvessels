import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

import Thumbnail from "./thumbnail.webp";
import Link from "next/link";
import DeleteCourseButton from "./DeleteCourseButton";

const DashboardCourseCard = (props) => {
  const { _id, title, description, enrollmentStatus, level, image } = props;

  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-[box-shadow]">
      <div className="relative w-full aspect-video object-cover overflow-hidden">
        <Image
          fill
          src={image}
          alt="thumbnail"
          className=" group-hover:scale-105 transition-transform duration-300"
        />

        {enrollmentStatus === "open" ? (
          <span className="absolute top-3 right-5 border-2 px-2 py-0.5 text-xs rounded-md bg-green-500 text-background">
            Open
          </span>
        ) : (
          <span className="absolute top-3 right-5 border-2 px-2 py-0.5 text-xs rounded-md bg-red-500 text-background">
            Closed
          </span>
        )}
      </div>

      <CardHeader>
        <CardTitle className="flex justify-between line-clamp-2 gap-5 text-xl">
          {title}{" "}
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-between">
        <Link href={`/dashboard/courses/edit?id=${_id}`}>
          <Button>Edit Course</Button>
        </Link>
        <DeleteCourseButton id={_id.toString()} />
      </CardFooter>
    </Card>
  );
};

export default DashboardCourseCard;

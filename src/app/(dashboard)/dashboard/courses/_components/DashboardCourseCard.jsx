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

const DashboardCourseCard = () => {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-[box-shadow]">
      <div className="relative w-full aspect-video object-cover overflow-hidden">
        <Image fill src={Thumbnail} alt="thumbnail" className=" group-hover:scale-105 transition-transform duration-300" />
      </div>

      <CardHeader>
        <CardTitle>Learn HTML in one language</CardTitle>
        <CardDescription className="line-clamp-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          odit repudiandae voluptate velit esse voluptatibus commodi magnam
          repellat explicabo nemo, dignissimos quo ex sit, atque est dolorum?
          Repudiandae, aut a.
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-between">
        <Button>Edit Course</Button>
        <Button variant="destructive">Delete</Button>
      </CardFooter>
    </Card>
  );
};

export default DashboardCourseCard;

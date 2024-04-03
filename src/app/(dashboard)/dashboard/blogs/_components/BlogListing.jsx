import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import connectDB from "@/database/connectDatabase";
import BlogModel from "@/database/models/BlogModel";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DeleteButton from "./DeleteButton";

async function BlogListing() {
  await connectDB();
  const blogs = (await BlogModel.find({}).lean().exec()).map(
    ({ _id, ...blog }) => ({ _id: _id.toString(), ...blog })
  );

  return (
    <div className="mt-10 p-5 grid grid-cols-3 gap-5">
      {blogs.map((blog) => {
        return (
          <Card
            key={blog._id}
            className="border bg-foreground/5 overflow-hidden"
          >
            <div className="relative w-full aspect-video">
              <Image
                fill
                src={blog.image}
                alt={blog.title}
                className="object-cover"
              />
            </div>
            <CardContent className="p-5">
              <CardTitle className="text-lg font-bold text-foreground/80">
                {blog.title}
              </CardTitle>

              <CardDescription className="line-clamp-3">
                {blog.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link
                href={{
                  pathname: "/dashboard/blogs/edit",
                  query: { id: blog._id },
                }}
              >
                <Button>Edit</Button>
              </Link>
              <DeleteButton id={blog._id} />
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}

export default BlogListing;

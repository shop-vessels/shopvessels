import React from "react";
import EditBlogForm from "./_componens/EditBlogForm";
import { Separator } from "@/components/ui/separator";
import ClientEditorWrapper from "./_componens/ClientEditorWrapper";
import ErrorBox from "../../_components/ErrorBox";
import connectDB from "@/database/connectDatabase";
import BlogModel from "@/database/models/BlogModel";
import { isValidObjectId } from "mongoose";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function page({ searchParams }) {
  const id = searchParams?.id;

  await connectDB();

  const isValidId = isValidObjectId(id);

  if (!id || !isValidId) return <ErrorBox />;

  const blog = await BlogModel.findById(id).select("-_id").lean().exec();

  if (!blog)
    return (
      <ErrorBox
        title={"Not Found"}
        description={
          "Blog does not exists, Please reload the page and try again"
        }
      />
    );

  return (
    <div className="max-w-4xl mx-auto lg:px-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-3xl">Edit Blog</h1>
          <p className="text-foreground/60">{searchParams?.id}</p>
        </div>
        <Button variant="outline" asChild>
          <Link href={`/stories-blogs/${id}`} target="_blank">Preview</Link>
        </Button>
      </div>
      <Separator className="my-5" />
      <EditBlogForm blog={blog} />

      <Separator className="my-5" />

      <ClientEditorWrapper content={blog?.content || ""} />
    </div>
  );
}

export default page;

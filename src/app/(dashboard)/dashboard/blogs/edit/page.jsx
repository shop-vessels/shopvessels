import React from "react";
import EditBlogForm from "./_componens/EditBlogForm";
import { Separator } from "@/components/ui/separator";
import ClientEditorWrapper from "./_componens/ClientEditorWrapper";
import ErrorBox from "../../_components/ErrorBox";
import connectDB from "@/database/connectDatabase";
import BlogModel from "@/database/models/BlogModel";
import { isValidObjectId } from "mongoose";

async function page({ searchParams }) {
  const id = searchParams?.id;

  await connectDB();

  const isValidId = isValidObjectId(id);

  if (!id || !isValidId) return <ErrorBox />

  const blog = await BlogModel.findById({ _id: id }).select("-_id").lean().exec();

  if(!blog) return <ErrorBox title={"Not Found"} description={"Blog does not exists, Please reload the page and try again"} />


  return (
    <div className="max-w-4xl mx-auto px-5">
      <h1 className="font-bold text-3xl">Edit Blog</h1>
      <p className="text-foreground/60">{searchParams?.id}</p>
      <Separator className="my-5" />
      <EditBlogForm blog={blog}/>

      <Separator className="my-5" />

      <ClientEditorWrapper content={blog?.content || ""} />
    </div>
  );
}

export default page;

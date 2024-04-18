import ErrorBlock from "@/app/all-courses/_components/ErrorBlock";
import BlogHTMLRender from "@/components/QuillBotEditor/BlogHTMLRender";
import connectDB from "@/database/connectDatabase";
import BlogModel from "@/database/models/BlogModel";
import Image from "next/image";
import React from "react";

async function SingleBlog({ params }) {
  const { id } = params;

  await connectDB();
  const blog = await BlogModel.findById(id).lean().exec();

  if (!blog) {
    return (
      <ErrorBlock
        code={404}
        title={"Blog Not Found"}
        desc={"Invalid URL or the blog does not exist"}
      />
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-5 lg:px-10 border-l border-r text-foreground/80">
      <div className="relative w-full aspect-video rounded-md mt-5 overflow-hidden">
        <Image
          src={blog?.image}
          fill
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold mt-5">{blog.title}</h2>
      </div>
      <div className=" max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mt-5 ">Preview</h2>
        <BlogHTMLRender value={blog.content} client />
      </div>
    </div>
  );
}

export default SingleBlog;

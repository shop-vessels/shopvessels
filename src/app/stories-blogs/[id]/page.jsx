import ErrorBlock from "@/app/all-courses/_components/ErrorBlock";
import connectDB from "@/database/connectDatabase";
import BlogModel from "@/database/models/BlogModel";
import React from "react";

async function SingleBlog({ params }) {
  const { id } = params;
  console.log(id);
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

  return <div>page</div>;
}

export default SingleBlog;

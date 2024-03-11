import React from "react";
import Blog from "../blogs/blogs";
import blogData from "../../../data/Blog.json";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div>
      <div className="lg:p-12 p-4">
        <div className="pt-16">
          <p className="text-3xl text-center pb-10">Blog Posts</p>
        </div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 grid-cols-1 gap-3">
          {blogData.map((data, index) => (
            <Blog
              key={index}
              image={data.image}
              title={data.title}
              description={data.explanation}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button size="lg">
            View More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;

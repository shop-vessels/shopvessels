import React from "react";

import Stories from "./stories/stories";

import { dateFormateForBlog } from "@/lib/dateConvert";

const blogs = ({ blogs }) => {
  return (
    <section className="max-w-7xl mx-auto">
      <p className="text-center pt-12 text-3xl">ShopVessels Blogs</p>

      <div className="grid md:grid-cols-2 gap-3 lg:p-14 p-5   ">
        {blogs.map((blogs, index) => (
          <Stories
            key={index}
            image={blogs.image}
            title={blogs.title}
            publishedAt={dateFormateForBlog(blogs.createdAt)}
            description={blogs.description}
            id={blogs._id}
          />
        ))}
      </div>
    </section>
  );
};

export default blogs;

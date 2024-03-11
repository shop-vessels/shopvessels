import React from "react";
import Catagoury from "./catagoury/catagoury";
import catagoryData from "../../../data/catagory.json";
import Stories from "./stories/stories";
import storiesBlogsData from "../../../data/stories-blogs.json";

const blogs = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <p className="text-center pt-12 text-3xl">The Wakeful Travel Blog</p>

      <div className="flex justify-center items-center flex-wrap gap-5 mt-8">
        {catagoryData.map((option, ind) => (
          <Catagoury option={option.option} key={ind} />
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-3 lg:p-14 p-5">
        {storiesBlogsData.map((blogs, index) => (
          <Stories
            key={index}
            image={blogs.image}
            title={blogs.title}
            publishedAt={blogs.publishedDate}
            description={blogs.explanation}
          />
        ))}
      </div>
    </section>
  );
};

export default blogs;

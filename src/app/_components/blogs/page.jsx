import React from "react";
import Blog from "../blogs/blogs";
import blogData from "../../../data/Blog.json";

const page = () => {
  return (
    <div>
      <div className="lg:p-12 p-4">
        <div className="pt-16">
          <p className="text-3xl text-center pb-10">blog posts</p>
        </div>
        <div className=" grid lg:grid-cols-3 grid-cols-1 gap-3">
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
          <button className="uppercase bg-[#de9e27] px-5 py-3 rounded-sm text-white text-sm">
            view more
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;

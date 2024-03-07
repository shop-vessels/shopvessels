"use client";

import React from "react";

const Blog = ({ image, title, description }) => {
  return (
    <div className="w-full">
      <div>
        <img src={image} alt="Image" className="w-full" />
      </div>
      <div>
        <p className="text-xl font-semibold py-2">{title}</p>
        <p className="text-lg font-semibold">{description}</p>
        <div className="pt-3">
          <a
            href="#"
            className="uppercase tracking-widest text-sm border-b border-black"
          >
            Continue reading
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;

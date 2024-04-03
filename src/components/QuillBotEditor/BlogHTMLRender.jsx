import React from "react";
import parse from "html-react-parser";
const BlogHTMLRender = ({ value }) => {
  return (
    <div className="prose mx-auto border-x mt-5 px-5 max-w-4xl">
      {value ? parse(value) : <p>Please write above to see changes</p>}
    </div>
  );
};

export default BlogHTMLRender;
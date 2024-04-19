import React from "react";
import parse from "html-react-parser";
const BlogHTMLRender = ({ value, client }) => {
  return (
    <div
      className={`prose mx-auto  mt-5  ${
        !client ? "max-w-4xl border-x px-5" : "max-w-none"
      }`}
    >
      {value ? (
        parse(value)
      ) : client ? null : (
        <p>Please write above to see changes</p>
      )}
    </div>
  );
};

export default BlogHTMLRender;

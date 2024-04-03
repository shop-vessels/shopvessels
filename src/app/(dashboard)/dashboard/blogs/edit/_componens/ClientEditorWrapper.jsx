"use client";
import React, { useEffect } from "react";
import QuillBotEditor from "@/components/QuillBotEditor";
import { useEditBlog } from "../_context/editBlogContext";
import BlogHTMLRender from "@/components/QuillBotEditor/BlogHTMLRender";
import UpdateContent from "./UpdateContent";

function ClientEditorWrapper({ content }) {
  const { htmlValue, setHtmlValue } = useEditBlog();
  useEffect(() => {
    setHtmlValue(content);
  }, []);
  return (
    <>
      <QuillBotEditor onChange={setHtmlValue} defaultValue={content} />
      <UpdateContent />
      <div className=" max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mt-5 ">Preview</h2>
        <BlogHTMLRender value={htmlValue}  />
      </div>
    </>
  );
}

export default ClientEditorWrapper;

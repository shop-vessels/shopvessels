"use client";
import React, { useState } from "react";
import QuillBotEditor from "@/components/QuillBotEditor";
import BlogHTMLRender from "@/components/QuillBotEditor/BlogHTMLRender";
import { Button } from "@/components/ui/button";
import { uploadContentAction } from "../../_actions/uploadContentAction";
import { toast } from "@/components/ui/use-toast";
import { Loader } from "lucide-react";

const ManageBlogText = ({ courseId, chapterId, dayId, content }) => {
  const [htmlData, setHtmlData] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit() {
    setIsSubmitting(true);
    const res = await uploadContentAction(htmlData, courseId, chapterId, dayId);

    if (res === "SUCCESS") {
      toast({
        title: "Content has been uploaded successfully",
      });
    }
    if (res === "FAILURE") {
      toast({
        title: "Something went wrong on our servers! Please try again",
      });
    }

    setIsSubmitting(false);
  }

  return (
    <div className="pb-10 w-full max-w-7xl mx-auto">
      <div className="py-5">
        <h2 className="text-xl font-bold">Handle Blog</h2>
      </div>
      <QuillBotEditor onChange={setHtmlData} defaultValue={content} />
      <div className=" max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mt-5 ">Preview</h2>
        <BlogHTMLRender value={htmlData} />
      </div>

      <div className="w-full max-w-4xl mx-auto mt-5 flex justify-center">
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full mx-auto flex items-center gap-1"
        >
          {isSubmitting && <Loader className="animate-spin" />} Save
        </Button>
      </div>
    </div>
  );
};

export default ManageBlogText;

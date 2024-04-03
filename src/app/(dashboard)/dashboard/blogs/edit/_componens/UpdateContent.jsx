import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useEditBlog } from "../_context/editBlogContext";
import { updateContentAction } from "../_actions/updateContentAction";
import { useSearchParams } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { Loader } from "lucide-react";

function UpdateContent() {
  const { htmlValue } = useEditBlog();
  const [isUpdating, setIsUpdating] = useState(false);
  const params = useSearchParams();

  async function handleUpdate() {
    setIsUpdating(true);
    const id = params.get("id");

    if (id) {
      const res = await updateContentAction({ content: htmlValue, id });
      if (res === "SUCCESS") {
        toast({
          title: "Blog Updated",
        });
      } else {
        toast({
          title: "Something went wrong!",
          description: "Please try again!",
        });
      }
    } else {
      toast({
        title: "URL is invalid",
      });
    }

    setIsUpdating(false);
  }

  return (
    <div className="flex justify-end mt-5">
      <Button
        onClick={handleUpdate}
        className={isUpdating && "px-14"}
        disabled={isUpdating}
      >
        {isUpdating ? <Loader className="animate-spin" /> : "Update Content"}
      </Button>
    </div>
  );
}

export default UpdateContent;

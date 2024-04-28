import React from "react";
import ManageVideos from "./_components/ManageVideos/ManageVideos";

function page({ params }) {
  // console.log(params);
  return (
    <div className="flex flex-col gap-5 p-5">
      <ManageVideos {...{ ...params }} />
    </div>
  );
}

export default page;

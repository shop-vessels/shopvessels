import React, { Suspense } from "react";
import Signup from "./signup";

const page = () => {
  return (
    <Suspense>
      <div className="w-full px-5 ">
        <Signup />
      </div>
    </Suspense>
  );
};

export default page;

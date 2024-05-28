import React, { Suspense } from "react";
import login from "../../../../../public/images/login/signlog.jpg";
import Signup from "./signup";
import Image from "next/image";

const page = () => {
  return (
    <Suspense>
      <div className="absolute top-0 z-20 min-h-screen bg-white min-w-full lg:py-0 py-16">
        <div className="lg:px-0 px-3 relative w-full flex rounded-lg ">
          <Signup />

          <div className="w-full relative h-screen  lg:block hidden">
            <Image
              src={login}
              fill
              alt="image"
              className=" w-full min-h-screen h-full object-cover object-left"
            />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default page;

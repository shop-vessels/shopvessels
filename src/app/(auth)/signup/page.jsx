import React, { Suspense } from "react";
import login from "../../../../public/images/login/login.jpeg";
import Signup from "./signup";
import Image from "next/image";

const page = () => {
  return (
    <Suspense>
      <div className="absolute top-0 z-20 min-h-screen bg-white min-w-full lg:py-0 py-16">
        <div className="lg:px-0 px-3 relative w-full flex rounded-lg ">
          <Signup />

          <div className="w-full h-screen  lg:block hidden">
            <Image
              src={login}
              width={700}
              height={700}
              alt="image"
              className="min-w-[700px] w-full min-h-screen"
            />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default page;

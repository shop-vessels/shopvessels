import Login from "./login";
import login from "../../../../public/images/login/signlog.jpg";
import Image from "next/image";

const page = () => {
  return (
    <div className="absolute top-0 z-20 min-h-screen bg-white min-w-full lg:py-0 py-16">
      <div className="lg:px-0 px-3 relative w-full min-h-screen flex rounded-lg">
        <Login />

        <div className="w-full h-screen lg:block hidden ">
          <Image
            src={login}
            width={700}
            height={700}
            alt="image"
            className=" w-full min-h-screen"
          />
        </div>
      </div>
    </div>
  );
};

export default page;

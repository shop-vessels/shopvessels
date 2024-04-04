import Login from "./login";
import login from "../../../../public/images/login/login.jpeg";
import Image from "next/image";

const page = () => {
  return (
    <div className="px-5 relative w-full flex rounded-lg lg:mt-10">
      <Login />

      <div className="w-full   lg:block hidden">
        <Image
          src={login}
          width={500}
          height={500}
          alt="image"
          className="w-full rounded-xl"
        />
      </div>
    </div>
  );
};

export default page;

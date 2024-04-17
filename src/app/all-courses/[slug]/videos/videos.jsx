import Image from "next/image";
import { Lock } from "lucide-react";

const videos = ({ image, time, title, description }) => {
  return (
    <div className="">
      <div className=" text-foreground/65">
        <div className="relative ">
          <Image
            src={image}
            width={300}
            height={300}
            className="m-auto relative w-full rounded-md"
            alt="image"
          />
          <div className="w-full h-full absolute top-0 bg-black/40 flex justify-center items-center text-white ">
            {" "}
            <Lock />
          </div>
          <p className="text-white bg-background/10 text-sm absolute bottom-2 right-3 z-10">
            {time}
          </p>
        </div>
        <p className="line-clamp-1">{title}</p>
        <p className="text-sm font-light">{description}</p>
      </div>
    </div>
  );
};

export default videos;

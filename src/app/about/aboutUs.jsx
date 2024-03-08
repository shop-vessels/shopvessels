import Image from "next/image";
import image from "./image/HummingPuppy.png";
import bgImage from "./image/bgImage.jpg";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";

const aboutUs = () => {
  return (
    <div className="min-h-screen  w-full  py-10 lg:px-14 px-4 relative flex items-end overflow-hidden">
      <Image
        src={bgImage}
        alt="image"
        fill
        className="object-cover w-full h-full brightness-75  relative bg-fixed"
      />
      <div className=" z-10 flex flex-col lg:flex-row lg:justify-around ">
        <div className="flex-1 flex lg:flex-row flex-col  gap-8 text-white pb-6">
          <div className="">
            <Image src={image} width={200} height={200} alt="image" />
            <p className="pt-1">Yoga That Resonates</p>
          </div>
          <p className=" lg:w-[570px] w-[85%] text-sm  font-semibold">
            Humming Puppy is a Yoga studio like no other. Our spaces are
            uniquely designed to soothe and focus the senses, elevating your
            Yoga practice. With our bespoke soundscape &apos;the Hum&apos;
            featuring through each and every session, you can expect accessible,
            immersive Yoga classes inclusive of traditional movement, breathwork
            and meditation practices.
          </p>
        </div>
        <div className="flex-grow flex lg:justify-end h-12 flex-row gap-2">
          <a
            href="#"
            className="self-center bg-white w-8 h-8 flex justify-center items-center rounded-full"
          >
            <Instagram className="text-black/45  " />
          </a>
          <a
            href="#"
            className="self-center bg-white w-8 h-8 flex justify-center items-center rounded-full"
          >
            <Facebook className="text-black/45  " />
          </a>
          <button className="uppercase border-2 text-sm tracking-widest border-white py-3 px-4 text-white self-start">
            learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default aboutUs;
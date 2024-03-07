"use client";

import Image from "next/image";

const page = ({ image, dose, title, currentPrice, previousPrice }) => {
  return (
    <div className="flex justify-between flex-col lg:flex-row items-center lg:p-16 p-9 lg:gap-0 gap-10 max-w-7xl m-auto bg-[#f7f7f7]">
      <div className="">
        <Image width={550} height={500} src={image} alt="image" />
      </div>
      <div className=" lg:p-12">
        <p className="text-sm pb-4 lg:text-start text-center">{dose}</p>
        <p className="md:text-3xl text-xl text lg:text-start text-center">
          {title}
        </p>
        <p className="pt-4 lg:text-start text-center">WAKEFUL TRAVEL</p>
        <div className="flex pt-4 gap-1 lg:justify-start justify-center">
          <p className="lg:text-2xl text-lg  tracking-widest ">
            ${currentPrice}
          </p>
          <p className="self-center text-sm tracking-widest line-through">
            ${previousPrice}
          </p>
        </div>
        <div className="pt-4 flex mx-auto flex-col gap-4">
          <button className="border-2 py-2 border-[#de9e27] text-[#de9e27]">
            ADD TO CART
          </button>

          <button className="border-2  py-2 bg-[#5a31f4] border-[#5a31f4] text-white">
            ADD TO CART
          </button>
          <a href="#" className="uppercase self-center border-b border-black">
            more payments options
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;

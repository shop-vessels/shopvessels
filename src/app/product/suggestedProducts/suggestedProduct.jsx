import { Plus } from "lucide-react";
import Image from "next/image";

const suggestedProduct = ({ image, detail, currentPrice, previousPrice }) => {
  return (
    <div className="px-3">
      <div className="relative  max-w-[280px]  z-0 m-auto ">
        <a href="#">
          <Image width={400} height={400} src={image} alt="image" />
        </a>
        <p className="absolute top-2 left-2 z-10 bg-[#f7f7f7] text-sm px-3 py-1.5 rounded-3xl font-light tracking-widest">
          SALE
        </p>
        <a
          href="#"
          className="absolute bottom-[4.5rem] right-2 bg-[#ffffff] w-8 h-8 flex justify-center items-center rounded-full hover:bg-[f7f7f7] hover:scale-110 transition-all duration-300   "
        >
          <Plus className="w-4 h-4" />
        </a>
        <a href="#">
          <p className=" text-center mt-3 mb-1 text-lg font-semibold">
            {detail}
          </p>
          <div className="flex justify-center items-center">
            <p className="text-center text-[#747474] text-sm font-semibold line-through pr-2 tracking-widest">
              ${previousPrice}
            </p>
            <p className="text-center text-[#747474] text-sm  tracking-widest">
              ${currentPrice}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default suggestedProduct;

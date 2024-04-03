"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/a11y";
import { ChevronRight, ChevronLeft } from "lucide-react";
import collectionData from "../../../../data/collection.json";
import Image from "next/image";

const collection = () => {
  return (
    <div className="">
      <p className="text-center text-4xl font-semibold">
        EXPLORE OUR COLLECTIONS
      </p>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={5}
        loop
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        pagination={{
          clickable: true,
          el: ".pagination",
          bulletClass: "bullet",
        }}
        grabCursor={true}
        className="mt-16"
      >
        {collectionData.map((collection, index) => (
          <SwiperSlide key={index} className="w-full ">
            <Image
              width={200}
              height={200}
              src={collection.image}
              alt="image"
              className="rounded-lg m-auto"
            />
            <p className="text-lg font-semibold ml-3 mt-1">
              {collection.title}
            </p>
          </SwiperSlide>
        ))}
        <div className="text-black hidden md:flex bg-slate-100 p-2 pl-1.5 rounded-full absolute z-20  top-[60px] left-0 transform -translate-y-1/2 border border-black ">
          <ChevronLeft className="prev  rounded-full  " />
        </div>
        <div className="text-black hidden md:flex bg-slate-100 p-2  rounded-full absolute z-10  top-[60px] right-0 transform -translate-y-1/2 border border-black">
          <ChevronRight className="next   rounded-full  " />
        </div>
        {/* <div className="absolute px-10 z-10 -bottom-20  h-max w-full flex justify-center lg:justify-end gap-2 pagination text-white bg-background py-3 lg:bg-transparent "></div> */}
      </Swiper>
    </div>
  );
};

export default collection;

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ChevronRight, ChevronLeft } from "lucide-react";
import slides from "../../../../data/moke.json";
import Image from "next/image";

const Slider = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        pagination={{
          clickable: true,
          el: ".pagination ",
        }}
        grabCursor={true}
        className="relative"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.image} className="relative ">
            <Image
              width={400}
              height={400}
              src={slide.image}
              alt={slide.title}
              className="w-full "
            />
            <DetailChip
              heading={slide.heading}
              detail={slide.detail}
              orderNow={slide.orderNow}
              productUrl={slide.productUrl}
            />
          </SwiperSlide>
        ))}
        <div className="text-black flex  absolute z-10  top-1/2 left-4 transform -translate-y-1/2">
          <ChevronLeft className="prev bg-slate-100 rounded-full w-8 h-8 " />
        </div>
        <div className="text-black flex  absolute z-10  top-1/2 right-4 transform -translate-y-1/2">
          <ChevronRight className="next bg-white  rounded-full w-8 h-8  " />
        </div>
        <div className="  absolute z-10 bottom-4  right-7 flex gap-2  bg-transparent rounded-full  ">
          <span className="pagination"></span>
        </div>
      </Swiper>
    </div>
  );
};

function DetailChip({ heading, detail, productUrl, orderNow }) {
  return (
    <div className="absolute bottom-6 left-10  z-10 p-14 gap-2 bg-white w-[40%] h-[30%] flex justify-center items-start flex-col">
      <h2 className="text-3xl">{heading}</h2>
      <p className="text-xl font-semibold">{detail}</p>
      <div className="border border-b-black border-t-0 border-l-0 border-r-0">
        <a href={productUrl}>{orderNow}</a>
      </div>
    </div>
  );
}

export default Slider;

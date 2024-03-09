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
import slides from "../../../../data/moke.json";
import Image from "next/image";
import Link from "next/link";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
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
      className="relative w-full aspect-[16/14] lg:aspect-auto lg:h-screen flex items-center"
    >
      {slides.map((slide, ind) => (
        <SwiperSlide
          key={ind}
          className="relative overflow-hidden w-full h-screen"
        >
          <Image
            fill
            src={slide.image}
            alt={slide.title}
            className="w-full object-cover brightness-75"
          />
          <DetailChip
            heading={slide.heading}
            detail={slide.detail}
            orderNow={slide.orderNow}
            productUrl={slide.productUrl}
          />
        </SwiperSlide>
      ))}
      <div className="text-black hidden md:flex bg-slate-100 p-2 pl-1.5 rounded-full absolute z-10  top-1/2 left-4 transform -translate-y-1/2">
        <ChevronLeft className="prev   rounded-full  " />
      </div>
      <div className="text-black hidden md:flex bg-slate-100 p-2 pr-1.5 rounded-full absolute z-10  top-1/2 right-4 transform -translate-y-1/2">
        <ChevronRight className="next   rounded-full  " />
      </div>
      <div className="absolute px-10 z-10 left-0 !bottom-0 lg:bottom-7 h-max w-full flex justify-center lg:justify-end gap-2 pagination text-white bg-background py-3 lg:bg-transparent "></div>
    </Swiper>
  );
};

function DetailChip({ heading, detail, productUrl, orderNow }) {
  return (
    <div className="absolute text-center md:text-left top-1/2 lg:top-auto -translate-y-1/2 left-1/2 -translate-x-1/2 lg:bottom-6 lg:left-10 lg:translate-x-0 lg:translate-y-0 z-10 px-5 py-5 md:px-10 gap-2 bg-white w-full max-w-md ">
      <h2 className="text-lg lg:text-2xl">{heading}</h2>
      <p className="md:text-lg text-foreground/60 line-clamp-2">{detail}</p>
      <div className="text-sm mt-3">
        <Link
          href={productUrl}
          className="border border-t-0 border-l-0 border-r-0 border-b-black w-max mx-auto"
        >
          {orderNow}
        </Link>
      </div>
    </div>
  );
}

export default Slider;

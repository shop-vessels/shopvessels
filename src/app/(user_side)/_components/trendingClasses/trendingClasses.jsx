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
import { useRouter } from "next/navigation";

const TrendingClasses = () => {
  const router = useRouter();

  return (
    <div className="max-w-7xl m-auto">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        breakpoints={{
          992: {
            slidesPerView: 5,
          },

          768: {
            slidesPerView: 3,
          },

          320: {
            slidesPerView: 1,
          },
        }}
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
            <div
              className="lg:max-w-[200px] md:max-w-[250px] max-w-[350px] h m-auto cursor-pointer"
              onClick={() => router.push("/all-courses")}
            >
              {/* <Link href="/all-courses" className="w-full h-full"> */}
              <Image
                width={300}
                height={300}
                src={collection.image}
                alt="image"
                className="rounded-lg m-auto w-full h-full "
              />

              <p className="text-lg font-semibold ml-3 mt-1 ">
                {collection.title}
              </p>
              {/* </Link> */}
            </div>
          </SwiperSlide>
        ))}
        <div className="text-black md:flex bg-slate-100 p-2 rounded-full absolute z-20  lg:top-[60px] md:top-[70px] top-[100px] left-0 transform -translate-y-1/2 border border-black ">
          <ChevronLeft className="prev  rounded-full  " />
        </div>
        <div className="text-black md:flex bg-slate-100 p-2  rounded-full absolute z-20 lg:top-[60px]  md:top-[70px] top-[100px] right-0 transform -translate-y-1/2 border border-black">
          <ChevronRight className="next   rounded-full  " />
        </div>
      </Swiper>
    </div>
  );
};

export default TrendingClasses;

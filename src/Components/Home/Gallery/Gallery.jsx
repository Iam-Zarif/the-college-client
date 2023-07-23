import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper/modules";
import photo from "../../../assets/Screenshot-2020-05-12-at-4.22.00-PM-1024x1007.png";

const Gallery = () => {
  return (
    <div className="mx-auto p-24">
      <div>
        <p className="text-center mb-12 text-3xl text-blue-500 basic-font font-semibold shadow-xl shadow-black w-1/2 mx-auto py-2 rounded-xl">
          Our Memorable Moments
        </p>
        {/* <hr className="w-1/2 mx-auto mb-10" /> */}
      </div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={photo} className="" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo} className="" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo} className="" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo} className="" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo} className="" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo} className="" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo} className="" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo} className="" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo} className="" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;

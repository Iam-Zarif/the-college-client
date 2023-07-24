import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper/modules";
import photo1 from "../../../assets/a.jpeg";
import photo2 from "../../../assets/b.jfif";
import photo3 from "../../../assets/c.jpg";
import photo4 from "../../../assets/d.jpeg";
import photo5 from "../../../assets/e.png";
import photo6 from "../../../assets/f.jpg";
import photo7 from "../../../assets/g.jpg";

const Gallery = () => {
  return (
    <div
      className="mx-auto p-24 mt-12"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-duration="3000"
    >
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
          <img src={photo1} className="lg:w-full h-36 w-44 lg:h-96" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo2} className="lg:w-full h-36 w-44 lg:h-96" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo3} className="lg:w-full h-36 w-44 lg:h-96" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo4} className="lg:w-full h-36 w-44 lg:h-96" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo5} className="lg:w-full h-36 w-44 lg:h-96" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo6} className="lg:w-full h-36 w-44 lg:h-96" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo7} className="lg:w-full h-36 w-44 lg:h-96" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo1} className="lg:w-full h-36 w-44 lg:h-96" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo1} className="lg:w-full h-36 w-44 lg:h-96" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;

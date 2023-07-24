
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import photo1 from "../../../assets/r1.jfif"
import photo2 from "../../../assets/r2.jfif"
import photo3 from "../../../assets/r3.jfif"
import photo4 from "../../../assets/r4.jpg"

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Container from "../../../Container/Container";
import { Link } from "react-router-dom";
const Research = () => {
    return (
      <Container >
        <div className="basic-font" data-aos="zoom-in" data-aos-duration="3000">
          {" "}
          <div>
            <p className="text-center mb-12 text-3xl text-blue-500 basic-font font-semibold shadow-lg shadow-black w-1/2 mx-auto py-2 rounded-xl">
              Our Students next level success
            </p>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper mx-auto"
          >
            <SwiperSlide>
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 lg:gap-20">
                <div>
                  <img
                    src={photo1}
                    className="mx-auto lg:w-[500px] lg:h-96 "
                    alt=""
                  />
                </div>
                <div className="col-span-2">
                  <p className="text-center lg:text-left text-5xl text-white logo-name ">
                    TechHub Institute of Technology
                  </p>
                  <p className="mt-5 lg:px-0 px-12">
                    the research endeavors revolve around cutting-edge
                    technologies and innovative engineering solutions. Faculty
                    and students collaborate on projects ranging from advanced
                    robotics and artificial intelligence to renewable energy
                    systems. The college boasts state-of-the-art laboratories
                    equipped with the latest tools and equipment, fostering an
                    environment that encourages experimentation and exploration.
                    Researchers at College A are committed to addressing
                    real-world challenges and shaping the future of technology.
                  </p>
                  <section className="pb-10 lg:pb-0 lg:text-left text-center lg:mt-20 mt-10 ">
                    <Link className=" text-xl shadow-lg border border-slate-600 rounded-2xl px-3 py-1 hover:shadow-black hover:text-white">
                      Research Documents
                    </Link>
                  </section>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 lg:gap-20">
                <div>
                  <img
                    src={photo1}
                    className="mx-auto lg:w-[500px] lg:h-96 "
                    alt=""
                  />
                </div>
                <div className="col-span-2">
                  <p className="text-center lg:text-left text-5xl text-white logo-name ">
                    TechHub Institute of Technology
                  </p>
                  <p className="mt-5 lg:px-0 px-12">
                    the research endeavors revolve around cutting-edge
                    technologies and innovative engineering solutions. Faculty
                    and students collaborate on projects ranging from advanced
                    robotics and artificial intelligence to renewable energy
                    systems. The college boasts state-of-the-art laboratories
                    equipped with the latest tools and equipment, fostering an
                    environment that encourages experimentation and exploration.
                    Researchers at College A are committed to addressing
                    real-world challenges and shaping the future of technology.
                  </p>
                  <section className="pb-10 lg:pb-0 lg:text-left text-center lg:mt-20 mt-10 ">
                    <Link className=" text-xl shadow-lg border border-slate-600 rounded-2xl px-3 py-1 hover:shadow-black hover:text-white">
                      Research Documents
                    </Link>
                  </section>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 lg:gap-20">
                <div>
                  <img
                    src={photo1}
                    className="mx-auto lg:w-[500px] lg:h-96 "
                    alt=""
                  />
                </div>
                <div className="col-span-2">
                  <p className="text-center lg:text-left text-5xl text-white logo-name ">
                    TechHub Institute of Technology
                  </p>
                  <p className="mt-5 lg:px-0 px-12">
                    the research endeavors revolve around cutting-edge
                    technologies and innovative engineering solutions. Faculty
                    and students collaborate on projects ranging from advanced
                    robotics and artificial intelligence to renewable energy
                    systems. The college boasts state-of-the-art laboratories
                    equipped with the latest tools and equipment, fostering an
                    environment that encourages experimentation and exploration.
                    Researchers at College A are committed to addressing
                    real-world challenges and shaping the future of technology.
                  </p>
                  <section className="pb-10 lg:pb-0 lg:text-left text-center lg:mt-20 mt-10 ">
                    <Link className=" text-xl shadow-lg border border-slate-600 rounded-2xl px-3 py-1 hover:shadow-black hover:text-white">
                      Research Documents
                    </Link>
                  </section>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 lg:gap-20">
                <div>
                  <img
                    src={photo1}
                    className="mx-auto lg:w-[500px] lg:h-96 "
                    alt=""
                  />
                </div>
                <div className="col-span-2">
                  <p className="text-center lg:text-left text-5xl text-white logo-name ">
                    TechHub Institute of Technology
                  </p>
                  <p className="mt-5 lg:px-0 px-12">
                    the research endeavors revolve around cutting-edge
                    technologies and innovative engineering solutions. Faculty
                    and students collaborate on projects ranging from advanced
                    robotics and artificial intelligence to renewable energy
                    systems. The college boasts state-of-the-art laboratories
                    equipped with the latest tools and equipment, fostering an
                    environment that encourages experimentation and exploration.
                    Researchers at College A are committed to addressing
                    real-world challenges and shaping the future of technology.
                  </p>
                  <section className="pb-10 lg:pb-0 lg:text-left text-center lg:mt-20 mt-10 ">
                    <Link className=" text-xl shadow-lg border border-slate-600 rounded-2xl px-3 py-1 hover:shadow-black hover:text-white">
                      Research Documents
                    </Link>
                  </section>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 lg:gap-20">
                <div>
                  <img
                    src={photo1}
                    className="mx-auto lg:w-[500px] lg:h-96 "
                    alt=""
                  />
                </div>
                <div className="col-span-2">
                  <p className="text-center lg:text-left text-5xl text-white logo-name ">
                    TechHub Institute of Technology
                  </p>
                  <p className="mt-5 lg:px-0 px-12">
                    the research endeavors revolve around cutting-edge
                    technologies and innovative engineering solutions. Faculty
                    and students collaborate on projects ranging from advanced
                    robotics and artificial intelligence to renewable energy
                    systems. The college boasts state-of-the-art laboratories
                    equipped with the latest tools and equipment, fostering an
                    environment that encourages experimentation and exploration.
                    Researchers at College A are committed to addressing
                    real-world challenges and shaping the future of technology.
                  </p>
                  <section className="pb-10 lg:pb-0 lg:text-left text-center lg:mt-20 mt-10 ">
                    <Link className=" text-xl shadow-lg border border-slate-600 rounded-2xl px-3 py-1 hover:shadow-black hover:text-white">
                      Research Documents
                    </Link>
                  </section>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 lg:gap-20">
                <div>
                  <img
                    src={photo1}
                    className="mx-auto lg:w-[500px] lg:h-96 "
                    alt=""
                  />
                </div>
                <div className="col-span-2">
                  <p className="text-center lg:text-left text-5xl text-white logo-name ">
                    TechHub Institute of Technology
                  </p>
                  <p className="mt-5 lg:px-0 px-12">
                    the research endeavors revolve around cutting-edge
                    technologies and innovative engineering solutions. Faculty
                    and students collaborate on projects ranging from advanced
                    robotics and artificial intelligence to renewable energy
                    systems. The college boasts state-of-the-art laboratories
                    equipped with the latest tools and equipment, fostering an
                    environment that encourages experimentation and exploration.
                    Researchers at College A are committed to addressing
                    real-world challenges and shaping the future of technology.
                  </p>
                  <section className="pb-10 lg:pb-0 lg:text-left text-center lg:mt-20 mt-10 ">
                    <Link className=" text-xl shadow-lg border border-slate-600 rounded-2xl px-3 py-1 hover:shadow-black hover:text-white">
                      Research Documents
                    </Link>
                  </section>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 lg:gap-20">
                <div>
                  <img
                    src={photo1}
                    className="mx-auto lg:w-[500px] lg:h-96 "
                    alt=""
                  />
                </div>
                <div className="col-span-2">
                  <p className="text-center lg:text-left text-5xl text-white logo-name ">
                    TechHub Institute of Technology
                  </p>
                  <p className="mt-5 lg:px-0 px-12">
                    the research endeavors revolve around cutting-edge
                    technologies and innovative engineering solutions. Faculty
                    and students collaborate on projects ranging from advanced
                    robotics and artificial intelligence to renewable energy
                    systems. The college boasts state-of-the-art laboratories
                    equipped with the latest tools and equipment, fostering an
                    environment that encourages experimentation and exploration.
                    Researchers at College A are committed to addressing
                    real-world challenges and shaping the future of technology.
                  </p>
                  <section className="pb-10 lg:pb-0 lg:text-left text-center lg:mt-20 mt-10 ">
                    <Link className=" text-xl shadow-lg border border-slate-600 rounded-2xl px-3 py-1 hover:shadow-black hover:text-white">
                      Research Documents
                    </Link>
                  </section>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 lg:gap-20">
                <div>
                  <img
                    src={photo1}
                    className="mx-auto lg:w-[500px] lg:h-96 "
                    alt=""
                  />
                </div>
                <div className="col-span-2">
                  <p className="text-center lg:text-left text-5xl text-white logo-name ">
                    TechHub Institute of Technology
                  </p>
                  <p className="mt-5 lg:px-0 px-12">
                    the research endeavors revolve around cutting-edge
                    technologies and innovative engineering solutions. Faculty
                    and students collaborate on projects ranging from advanced
                    robotics and artificial intelligence to renewable energy
                    systems. The college boasts state-of-the-art laboratories
                    equipped with the latest tools and equipment, fostering an
                    environment that encourages experimentation and exploration.
                    Researchers at College A are committed to addressing
                    real-world challenges and shaping the future of technology.
                  </p>
                  <section className="pb-10 lg:pb-0 lg:text-left text-center lg:mt-20 mt-10 ">
                    <Link className=" text-xl shadow-lg border border-slate-600 rounded-2xl px-3 py-1 hover:shadow-black hover:text-white">
                      Research Documents
                    </Link>
                  </section>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 lg:gap-20">
                <div>
                  <img
                    src={photo1}
                    className="mx-auto lg:w-[500px] lg:h-96 "
                    alt=""
                  />
                </div>
                <div className="col-span-2">
                  <p className="text-center lg:text-left text-5xl text-white logo-name ">
                    TechHub Institute of Technology
                  </p>
                  <p className="mt-5 lg:px-0 px-12">
                    the research endeavors revolve around cutting-edge
                    technologies and innovative engineering solutions. Faculty
                    and students collaborate on projects ranging from advanced
                    robotics and artificial intelligence to renewable energy
                    systems. The college boasts state-of-the-art laboratories
                    equipped with the latest tools and equipment, fostering an
                    environment that encourages experimentation and exploration.
                    Researchers at College A are committed to addressing
                    real-world challenges and shaping the future of technology.
                  </p>
                  <section className="pb-10 lg:pb-0 lg:text-left text-center lg:mt-20 mt-10 ">
                    <Link className=" text-xl shadow-lg border border-slate-600 rounded-2xl px-3 py-1 hover:shadow-black hover:text-white">
                      Research Documents
                    </Link>
                  </section>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    );
};

export default Research;
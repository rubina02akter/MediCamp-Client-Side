import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import img from "../../assets/images/different-people-doing-volunteer-work.jpg";
import img1 from "../../assets/images/doctor-patient-ophthalmologist-s-office.jpg";
import img2 from "../../assets/images/medical-assistant-helping-patient-with-physiotherapy-exercises.jpg";
import img3 from "../../assets/images/paramedics-examining-injured-boy.jpg";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

export default function Slider() {
  return (
    <>
      {/* Swiper Carousel with Overlaid Text */}
      <Swiper
        effect={"coverflow"}
        autoplay={{
          delay: 2000, // Delay in milliseconds (2 seconds)
          disableOnInteraction: false, // Keeps autoplay running after user interaction
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src={img}
              alt="Volunteers working together"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-lg"></div>
            <div className="absolute top-0 md:top-1/4 left-0 mx-2 my-4 md:left-1/4 text-white text-xl font-thin">
              <h3 className="mt-2 text-sm md::text-3xl font-semibold lg:text-5xl">
                Efficient Camp Organization
              </h3>
              <p className="text-xs md::text-base lg:text-xl">
                Simplify the process of setting up medical camps with our
                intuitive management tools.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={img1}
              alt="Doctor with patient"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg"></div>
            <div className="absolute top-0 md:top-1/4 left-0 mx-2 my-4 md:left-1/4 text-white text-xl font-thin">
              <h3 className="mt-2 text-sm md::text-3xl font-semibold lg:text-5xl">
                Improved Patient Care
              </h3>
              <p className="text-xs md::text-base lg:text-xl">
                Ensure participants receive top-notch healthcare through
                streamlined scheduling and tracking.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={img2}
              alt="Medical assistant helping a patient"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg"></div>
            <div className="absolute top-0 md:top-1/4 left-0 mx-2 my-4 md:left-1/4 text-white text-xl font-thin">
              <h3 className="mt-2 text-sm md::text-3xl font-semibold lg:text-5xl">
                Seamless Coordination
              </h3>
              <p className="text-xs md::text-base lg:text-xl">
                Facilitate collaboration between organizers, volunteers, and
                medical professionals.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={img3}
              alt="Paramedics assisting an injured boy"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg"></div>
            <div className="absolute top-0 md:top-1/4 left-0 mx-2 my-4 md:left-1/4 text-white text-xl font-thin">
              <h3 className="mt-2 text-sm md::text-3xl font-semibold lg:text-5xl">
                Community Health Impact
              </h3>
              <p className="text-xs md::text-base lg:text-xl">
                Promote wellness in underserved areas by organizing impactful
                medical camps.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

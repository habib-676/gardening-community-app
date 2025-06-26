import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const slidesPromise = fetch("/slideData.json").then((res) => res.json());

const Slider = () => {
  const slides = use(slidesPromise);

  return (
    <div className="min-w-11/12 mx-auto max-h-[70vh]">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper flex justify-center items-center h-full"
      >
        {/* items */}

        {slides.map((slide) => (
          <SwiperSlide className="min-h-[60vh]">
            <div className="card bg-base-100 image-full w-96 h-full">
              <figure>
                <img src={slide.backgroundImage} />
              </figure>
              <div className="card-body space-y-10 ">
                <h2 className="text-3xl font-bold montserrat text-center ">
                  {slide.title}
                </h2>
                <p className="text-center  text-lg">{slide.description}</p>
                <button className="btn text-accent">{slide.buttonText}</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* item */}
      </Swiper>
    </div>
  );
};

export default Slider;

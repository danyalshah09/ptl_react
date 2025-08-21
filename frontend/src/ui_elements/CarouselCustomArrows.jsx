import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../index.css";
const CustomCarouselArrows = () => {
  const slides = [
    { id: 1, title: "Mountain View", imageUrl: "/assets/slider/ptll.jpg" },
    { id: 2, title: "Lobby", imageUrl: "/assets/slider/ptl_lobby2.jpg" },
    { id: 3, title: "Traditional Sitting", imageUrl: "/assets/slider/ptl_traditional.jpg" },
    { id: 4, title: "PTL Huts", imageUrl: "/assets/images/ptl13.jpg" },
    { id: 5, title: "PTL Autumn", imageUrl: "/assets/images/ptl_autumn.jpg" },
    { id: 6, title: "PTL Spring", imageUrl: "/assets/images/ptl_spring.jpg" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-8 relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="rounded-2xl shadow-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col items-center relative">
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="max-h-[70vh] w-full object-contain rounded-2xl"
              />
              {/* Title ABOVE pagination dots */}
              <h3 className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white text-lg font-semibold bg-black/50 px-4 py-1 rounded-lg">
                {slide.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomCarouselArrows;

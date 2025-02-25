import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const RoomImageSlider = ({ roomType }) => {
  const roomImages = {
    masterbed: [
      "/assets/rooms/masterbed111.jpg",
      "/assets/rooms/masterbed2.jpg",
      "/assets/rooms/masterbed3.jpg",
      "/assets/rooms/masterbed4.jpg",
      "/assets/rooms/masterbed.jpg",
    ],
    twinbed: [
      "/assets/rooms/twinbed4.webp",
      "/assets/rooms/twinbed1.jpg",
      "/assets/rooms/twinbed2.jpg",
      "/assets/rooms/twinbed3.webp"
    ],
    triplebed: [
      "/assets/rooms/triplebed.jpg",
      "/assets/rooms/triplebed1.jpg",
      "/assets/rooms/triplebed2.jpg",
      "/assets/rooms/triplebed3.jpg"
    ],
  };

  const images = roomImages[roomType] || [];

  return (
    <div className="max-w-6xl mx-auto my-10">
      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            color: black !important;
          }
          
          .swiper-pagination-bullet {
            background: gray !important;
          }
          
          .swiper-pagination-bullet-active {
            background: white !important;
          }
        `}
      </style>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={{ clickable: true }}
        className="rounded-lg shadow-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[700px] object-contain rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RoomImageSlider;
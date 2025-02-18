import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const SwiperComponent = () => {
  useEffect(() => {
    new Swiper(".progress-slide-carousel", {
      loop: true,
      autoplay: {
        delay: 1200,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".progress-slide-carousel .swiper-pagination",
        type: "progressbar",
      },
      modules: [Pagination, Autoplay],
    });
  }, []);

  const images = [
    "/assets/slider/parking.jpg",
    "/assets/slider/ptl_autumn2.jpg",
    "/assets/slider/ptl33.jpg",
    "/assets/slider/ptl_exteriorr.jpg",

  ];

  return (
    <div className="w-80 relative mb-4 mx-auto">
      <div className="swiper progress-slide-carousel swiper-container relative">
        <div className="swiper-wrapper gap-3">
          {images.map((src, index) => (
            <div key={index} className="swiper-slide">
              <img src={src} alt={`Slide ${index + 1}`} className="w-full h-96 object-contain rounded-2xl" />
            </div>
          ))}
        </div>
        <div className="swiper-pagination !bottom-2 !top-auto !w-80 right-0 mx-auto bg-gray-100"></div>
      </div>
    </div>
  );
};

export default SwiperComponent;

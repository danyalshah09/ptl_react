import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsapScrollAnimation } from "./hooks/useGsapScrollAnimation";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const imageRefs = useRef([]);
  const headingRef = useGsapScrollAnimation("left", { duration: 1.2 });

  const images = [
    { src: "./assets/images/ptl1.webp", alt: "Image 1" },
    { src: "./assets/images/ptl2.webp", alt: "Image 2" },
    { src: "./assets/images/ptl3.jpg", alt: "Image 3" },
    { src: "./assets/images/ptl4.webp", alt: "Image 4" },
    { src: "./assets/images/ptl5.jpg", alt: "Image 5" },
    { src: "./assets/images/ptl6.jpg", alt: "Image 6" },
    { src: "./assets/images/ptl7.jpg", alt: "Image 7" },
    { src: "./assets/images/ptl8.jpg", alt: "Image 8" },
    { src: "./assets/images/ptl9.jpg", alt: "Image 9" },
    { src: "./assets/images/room2.jpg", alt: "Image 10" },
    { src: "./assets/images/tpl_twin.webp", alt: "Image 11" },
    { src: "./assets/images/ptl13.jpg", alt: "Image 12" }
  ];

  useEffect(() => {
    imageRefs.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none reverse",
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Section Header */}
      <div className="w-full h-56 bg-slate-500 flex items-center justify-center">
        <h1 className="text-5xl text-white font-semibold" ref={headingRef}>Gallery</h1>
      </div>

      <hr className="w-[20%] mt-2 text-center mx-auto" />

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mx-4 mt-1">
        {images.map((image, index) => (
          <div key={index} className="flex justify-center w-full">
            <figure
              ref={(el) => (imageRefs.current[index] = el)}
              className="w-full relative overflow-hidden bg-gray-100"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                fetchPriority={index < 4 ? "high" : "auto"}
                decoding="async"
                loading={index < 8 ? "eager" : "lazy"}
              />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

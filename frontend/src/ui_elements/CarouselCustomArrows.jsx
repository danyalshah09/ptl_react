import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CustomCarouselArrows = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef();

  const slides = [
    { id: 1, title: "Mountain View", imageUrl: "./assets/slider/ptl_exteriorr.jpg" },
    { id: 2, title: "Lobby", imageUrl: "./assets/slider/ptl_lobby2.jpg" },
    { id: 3, title: "Traditional Sitting", imageUrl: "./assets/slider/ptl_traditional.jpg" },
    { id: 4, title: "PTL Huts", imageUrl: "./assets/slider/ptl_huts.jpg" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto play
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  // Single optimized scroll animation
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Set initial state
    gsap.set(el, { x: -60, opacity: 0 });

    const animation = gsap.to(el, {
      x: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        once: true, // Only trigger once to prevent retriggering
        invalidateOnRefresh: true,
      }
    });

    return () => {
      if (animation.scrollTrigger) animation.scrollTrigger.kill();
      animation.kill();
    };
  }, []);


  return (
    <div
      ref={containerRef}
      className="w-full md:w-4/5 py-12 lg:w-3/5 relative mx-auto group"
    >
      {/* Left Arrow */}
      <div className="absolute inset-y-0 left-0 z-10 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
        <button
          onClick={prevSlide}
          className="group/arrow p-1 sm:p-2 ml-2 sm:ml-4 flex justify-center items-center border border-white w-8 h-8 sm:w-10 md:w-12 sm:h-10 md:h-12 rounded-full bg-black bg-opacity-40 hover:bg-white transition duration-300"
          aria-label="previousSlide"
        >
          <svg
            className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover/arrow:text-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M10.0002 11.9999L6 7.99971L10.0025 3.99719"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Right Arrow */}
      <div className="absolute inset-y-0 right-0 z-10 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
        <button
          onClick={nextSlide}
          className="group/arrow p-1 sm:p-2 mr-2 sm:mr-4 flex justify-center items-center border border-white w-8 h-8 sm:w-10 md:w-12 sm:h-10 md:h-12 rounded-full bg-black bg-opacity-40 hover:bg-white transition duration-300"
          aria-label="nextSlide"
        >
          <svg
            className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover/arrow:text-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M5.99984 4.00012L10 8.00029L5.99748 12.0028"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <div className="relative h-64 sm:h-80 md:h-96 w-full">
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-2 sm:py-4 bg-black bg-opacity-40">
                  <h3 className="text-white text-sm lg:text-xl font-semibold">
                    {slide.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomCarouselArrows;

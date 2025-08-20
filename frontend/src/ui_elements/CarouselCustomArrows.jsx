import React, { useState, useEffect, useRef } from 'react';

const CustomCarouselArrows = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef();

  const slides = [
    { id: 1, title: "Mountain View", imageUrl: "./assets/slider/ptll.jpg" },
    { id: 2, title: "Lobby", imageUrl: "./assets/slider/ptl_lobby2.jpg" },
    { id: 3, title: "Traditional Sitting", imageUrl: "./assets/slider/ptl_traditional.jpg" },
    { id: 4, title: "PTL Huts", imageUrl: "./assets/images/ptl13.jpg" },
    { id: 4, title: "PTL Autumn", imageUrl: "./assets/images/ptl_autumn.jpg" },
    { id: 4, title: "PTL Spring", imageUrl: "./assets/images/ptl_spring.jpg" },

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




  return (
    <div
      ref={containerRef}
      className="w-4/5 mx-auto py-8"
    >
      {/* Main Image Display */}
      <div className="relative">
        <div className="aspect-[21/9] w-full flex items-center justify-center">
          <img
            src={slides[currentSlide].imageUrl}
            alt={slides[currentSlide].title}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Navigation Arrows - Bottom Center */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        <button
          onClick={prevSlide}
            className="w-8 h-8 bg-transparent border border-gray-200 rounded-full flex items-center justify-center transition-colors"
            aria-label="Previous"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
            className="w-8 h-8 bg-transparent  border border-gray-200 rounded-full flex items-center justify-center transition-colors"
            aria-label="Next"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        </div>
      </div>

      {/* Title */}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-medium text-gray-800">
          {slides[currentSlide].title}
                  </h3>
                </div>

      {/* Simple Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index
                ? 'bg-gray-800'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomCarouselArrows;

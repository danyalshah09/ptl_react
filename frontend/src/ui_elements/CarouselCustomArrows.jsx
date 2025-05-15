import React, { useState, useEffect, useRef } from 'react';

const CustomCarouselArrows = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef(null);
  
  const slides = [
    { 
      id: 1, 
      title: "Mountain View",
      imageUrl: "./assets/slider/ptl_exteriorr.jpg",
      webpUrl: "./assets/slider/ptl_exteriorr.webp"
    },
    { 
      id: 2, 
      title: "Lobby",
      imageUrl: "./assets/slider/ptl_lobby2.jpg",
      webpUrl: "./assets/slider/ptl_lobby2.webp"
    },
    { 
      id: 3, 
      title: "Traditional Sitting",
      imageUrl: "./assets/slider/ptl_traditional.jpg",
      webpUrl: "./assets/slider/ptl_traditional.webp"
    },
    { 
      id: 4, 
      title: "PTL Huts",
      imageUrl: "./assets/slider/ptl_huts.jpg",
      webpUrl: "./assets/slider/ptl_huts.webp"
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    // Intersection observer for lazy loading
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Only start auto-sliding when visible
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible]);

  // Preload next slide image
  useEffect(() => {
    if (!isVisible) return;
    
    const nextIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    const preloadImage = new Image();
    preloadImage.src = slides[nextIndex].imageUrl;
  }, [currentSlide, isVisible]);

  return (
<<<<<<< HEAD
    <div className="w-full md:w-4/5 lg:w-3/5 relative mx-auto" ref={carouselRef}>
=======
    <div className="w-full md:w-4/5 lg:w-3/5 relative mx-auto">
>>>>>>> b77fc23204c9e832a523a2709adff95bd1f62e75
      {/* Fixed position navigation arrows */}
      <div className="absolute inset-y-0 left-0 z-10 flex items-center">
        <button 
          onClick={prevSlide}
          className="group p-1 sm:p-2 ml-2 sm:ml-4 flex justify-center items-center border border-solid border-white w-8 h-8 sm:w-10 md:w-12 sm:h-10 md:h-12 transition-all duration-500 rounded-full hover:bg-white bg-black bg-opacity-40"
<<<<<<< HEAD
          aria-label="Previous slide"
=======
>>>>>>> b77fc23204c9e832a523a2709adff95bd1f62e75
        >
          <svg 
            className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:text-black" 
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
      
      <div className="absolute inset-y-0 right-0 z-10 flex items-center">
        <button 
          onClick={nextSlide}
          className="group p-1 sm:p-2 mr-2 sm:mr-4 flex justify-center items-center border border-solid border-white w-8 h-8 sm:w-10 md:w-12 sm:h-10 md:h-12 transition-all duration-500 rounded-full hover:bg-white bg-black bg-opacity-40"
<<<<<<< HEAD
          aria-label="Next slide"
=======
>>>>>>> b77fc23204c9e832a523a2709adff95bd1f62e75
        >
          <svg 
            className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:text-black" 
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
      
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <div className="relative h-64 sm:h-80 md:h-96 w-full">
<<<<<<< HEAD
                {/* Only render the current slide and adjacent slides */}
                {(Math.abs(index - currentSlide) <= 1 || index === slides.length - 1 && currentSlide === 0 || index === 0 && currentSlide === slides.length - 1) && (
                  <picture>
                    <source srcSet={slide.webpUrl} type="image/webp" />
                    <img 
                      src={slide.imageUrl}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      width="800"
                      height="600"
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </picture>
                )}
=======
                <img 
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
>>>>>>> b77fc23204c9e832a523a2709adff95bd1f62e75
                {/* Title container at the bottom */}
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

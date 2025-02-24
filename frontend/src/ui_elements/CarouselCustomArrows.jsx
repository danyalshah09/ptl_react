import React, { useState, useEffect } from 'react';

const CustomCarouselArrows = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { 
      id: 1, 
      title: "Mountain View",
      imageUrl: "./assets/slider/ptl_exteriorr.jpg"
    },
    { 
      id: 2, 
      title: "Lobby",
      imageUrl: "./assets/slider/ptl_lobby2.jpg"
    },
    { 
      id: 3, 
      title: "Traditional Sitting",
      imageUrl: "./assets/slider/ptl_traditional.jpg"
    },
    { 
      id: 4, 
      title: "PTL Huts",
      imageUrl: "./assets/slider/ptl_huts.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Changes slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-3/5 relative mx-auto">
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <div className="relative h-96 w-full">
                <img 
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-40">
                  <h3 className="text-white text-xl font-semibold">
                    {slide.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="absolute flex gap-2 bottom-4 right-4">
          <button 
            onClick={prevSlide}
            className="group p-2 flex justify-center items-center border border-solid border-white w-12 h-12 transition-all duration-500 rounded-full hover:bg-white bg-black bg-opacity-40"
          >
            <svg 
              className="h-5 w-5 text-white group-hover:text-black" 
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
          
          <button 
            onClick={nextSlide}
            className="group p-2 flex justify-center items-center border border-solid border-white w-12 h-12 transition-all duration-500 rounded-full hover:bg-white bg-black bg-opacity-40"
          >
            <svg 
              className="h-5 w-5 text-white group-hover:text-black" 
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
      </div>
    </div>
  );
};

export default CustomCarouselArrows;
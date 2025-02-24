import React, { useState, useEffect } from "react";

const Gallery = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const images = [
    { src: "./assets/images/ptl1.webp", alt: "Image 1", lowResSrc: "./assets/images/ptl1-low.webp" },
    { src: "./assets/images/ptl2.webp", alt: "Image 2", lowResSrc: "./assets/images/ptl2-low.webp" },
    { src: "./assets/images/ptl3.jpg", alt: "Image 3", lowResSrc: "./assets/images/ptl3-low.jpg" },
    { src: "./assets/images/ptl4.webp", alt: "Image 4", lowResSrc: "./assets/images/ptl4-low.webp" },
    { src: "./assets/images/ptl5.jpg", alt: "Image 5", lowResSrc: "./assets/images/ptl5-low.jpg" },
    { src: "./assets/images/ptl6.jpg", alt: "Image 6", lowResSrc: "./assets/images/ptl6-low.jpg" },
    { src: "./assets/images/ptl7.jpg", alt: "Image 7", lowResSrc: "./assets/images/ptl7-low.jpg" },
    { src: "./assets/images/ptl8.jpg", alt: "Image 8", lowResSrc: "./assets/images/ptl8-low.jpg" },
    { src: "./assets/images/ptl9.jpg", alt: "Image 9", lowResSrc: "./assets/images/ptl9-low.jpg" },
    { src: "./assets/images/room2.jpg", alt: "Image 10", lowResSrc: "./assets/images/room2-low.jpg" },
    { src: "./assets/images/tpl_twin.webp", alt: "Image 11", lowResSrc: "./assets/images/tpl_twin-low.webp" },
    { src: "./assets/images/ptl13.jpg", alt: "Image 12", lowResSrc: "./assets/images/ptl13-low.jpg" }
  ];

  // Preload images
  useEffect(() => {
    const imagePromises = images.map(image => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = image.src;
        img.onload = resolve;
      });
    });

    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
    });
  }, []);

  const ImageComponent = ({ image, index }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    return (
      <div key={index} className="flex justify-center w-full">
        <figure className="w-full relative overflow-hidden bg-gray-100">
          {!isLoaded && !error && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-black rounded-full animate-spin border-t-transparent"></div>
            </div>
          )}
          <img
            src={image.src}
            alt={image.alt}
            className={`w-full h-64 object-cover shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            onError={() => setError(true)}
          />
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <span className="text-gray-500">Failed to load image</span>
            </div>
          )}
        </figure>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Section with background and centered title */}
      <div className="w-full h-56 bg-slate-500 flex items-center justify-center">
        <h1 className="text-5xl text-white font-semibold">Gallery</h1>
      </div>

      <hr className="w-[20%] mt-2 text-center mx-auto" />
      
      {/* Gallery grid with loading state */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mx-4 mt-1">
        {images.map((image, index) => (
          <ImageComponent key={index} image={image} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
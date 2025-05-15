import React, { useEffect } from "react";
import { OptimizedImage, preloadCriticalImages } from "../utils/imageOptimizer";

const Gallery = () => {
  const images = [
    { src: "./assets/images/ptl1.jpg", alt: "Passu Tourist Lodge View" },
    { src: "./assets/images/ptl2.jpg", alt: "Lodge Exterior" },
    { src: "./assets/images/ptl3.jpg", alt: "Mountain View" },
    { src: "./assets/images/ptl4.jpg", alt: "Accommodation" },
    { src: "./assets/images/ptl5.jpg", alt: "Dining Area" },
    { src: "./assets/images/ptl6.jpg", alt: "Lounge" },
    { src: "./assets/images/ptl7.jpg", alt: "Traditional Setting" },
    { src: "./assets/images/ptl8.jpg", alt: "Restaurant" },
    { src: "./assets/images/ptl9.jpg", alt: "Outdoor View" },
    { src: "./assets/images/room2.jpg", alt: "Room Interior" },
    { src: "./assets/images/tpl_twin.jpg", alt: "Twin Room" },
    { src: "./assets/images/ptl13.jpg", alt: "Scenic View" }
  ];

  // Preload first 4 images for faster rendering
  useEffect(() => {
    const criticalImages = images.slice(0, 4).map(img => img.src);
    preloadCriticalImages(criticalImages);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Section with background and centered title */}
      <div className="w-full h-56 bg-slate-500 flex items-center justify-center">
        <h1 className="text-5xl text-white font-semibold">Gallery</h1>
      </div>

      <hr className="w-[20%] mt-2 text-center mx-auto" />
      
      {/* Gallery grid with optimized image loading */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mx-4 mt-1">
        {images.map((image, index) => (
          <div key={index} className="flex justify-center w-full">
            <figure className="w-full relative overflow-hidden bg-gray-100 rounded">
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                width={640}
                height={480}
                priority={index < 4}
                loading={index < 8 ? "eager" : "lazy"}
                objectFit="cover"
              />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
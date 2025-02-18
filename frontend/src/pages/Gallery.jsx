import React from "react";

const Gallery = () => {
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

  return (
    <>
      {/* Section with background and centered title */}
      <div className="w-full h-56 bg-slate-500 flex items-center justify-center">
        <h1 className="text-5xl text-white font-semibold">Gallery</h1>
      </div>

      <hr className="w-[20%] mt-2 text-center mx-auto" />
      
      {/* Gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mx-4 mt-1">
        {images.map((image, index) => (
          <div key={index} className="flex justify-center w-full">
            <figure className="w-full relative overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                loading="lazy"
              />
            </figure>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;

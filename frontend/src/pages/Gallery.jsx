import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsapScrollAnimation } from "./hooks/useGsapScrollAnimation";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const imageRefs = useRef([]);
  const headingRef = useGsapScrollAnimation("left", { duration: 1.2 });
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    { src: "./assets/images/ptl1.webp", alt: "Lodge Exterior", size: "large" },
    { src: "./assets/images/ptl2.webp", alt: "Mountain View", size: "medium" },
    { src: "./assets/images/ptl3.jpg", alt: "Traditional Room", size: "small" },
    { src: "./assets/images/ptl4.webp", alt: "Reception Area", size: "medium" },
    { src: "./assets/images/ptl5.jpg", alt: "Dining Hall", size: "wide" },
    { src: "./assets/images/ptl6.jpg", alt: "Guest Room", size: "small" },
    { src: "./assets/images/ptl7.jpg", alt: "Outdoor View", size: "large" },
    { src: "./assets/images/ptl8.jpg", alt: "Interior Design", size: "medium" },
    { src: "./assets/images/ptl9.jpg", alt: "Scenic Beauty", size: "tall" },
    { src: "./assets/images/room2.jpg", alt: "Comfortable Stay", size: "small" },
    { src: "./assets/images/tpl_twin.webp", alt: "Twin Bed Room", size: "medium" },
    { src: "./assets/images/ptl13.jpg", alt: "Lodge Experience", size: "wide" }
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
              once: true,
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const openModal = (image, index = null) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const nextImage = () => {
    const currentIndex = images.findIndex(img => img.src === selectedImage.src);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = images.findIndex(img => img.src === selectedImage.src);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

    // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isModalOpen, selectedImage]);

  return (
    <div className="min-h-screen">
      {/* Section Header */}
      <div className="w-full h-56 bg-slate-500 flex items-center justify-center">
        <h1 className="text-5xl text-white font-semibold" ref={headingRef}>Gallery</h1>
      </div>

      <hr className="w-[20%] mt-2 text-center mx-auto" />

            {/* Masonry Grid with No Empty Spaces */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => openModal(image)}
            >
              <figure
                ref={(el) => (imageRefs.current[index] = el)}
                className="w-full relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110"
                  fetchPriority={index < 4 ? "high" : "auto"}
                  decoding="async"
                  loading={index < 8 ? "eager" : "lazy"}
                />

                {/* Elegant overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-lg font-semibold drop-shadow-lg">
                      {image.alt}
                    </h3>
                  </div>
                </div>
              </figure>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          {/* Close button - Top right of screen */}
          <button
            onClick={closeModal}
            className="fixed top-4 right-4 sm:top-6 sm:right-6 z-20 bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous button - Left edge of screen */}
          <button
            onClick={prevImage}
            className="fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button - Right edge of screen */}
          <button
            onClick={nextImage}
            className="fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
            aria-label="Next image"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Modal content container */}
          <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center p-4 sm:p-8">
            {/* Modal image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />

            {/* Image title */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <h3 className="text-white text-lg sm:text-xl font-semibold bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 sm:px-4 sm:py-2 inline-block">
                {selectedImage.alt}
              </h3>
            </div>
          </div>

          {/* Click outside to close */}
          <div className="absolute inset-0 -z-10" onClick={closeModal}></div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

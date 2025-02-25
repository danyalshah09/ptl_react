import React, { useState, useEffect } from "react";

// Reusable Image component with improved loading performance
const OptimizedImage = ({ src, alt, className, height = "h-48", priority = false }) => {
  const [imageStatus, setImageStatus] = useState("loading"); // "loading", "loaded", "error"
  const [imageSrc, setImageSrc] = useState(null);

  // Generate blur placeholder - a lightweight base64 image
  const blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMi4xMi4uMS8yNzY5ODY1PjA/SVFOUUlXWldaXGR4dISEiK7//2wBDARVFx4aHx8eKRkaKa+xr7Gvr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6//wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";
  
  // Preload image
  useEffect(() => {
    // Create new image object to preload
    if (src) {
      const img = new Image();
      
      img.onload = () => {
        setImageSrc(src);
        setImageStatus("loaded");
      };
      
      img.onerror = () => {
        setImageStatus("error");
      };
      
      // Start loading the image
      img.src = src;
    }
    
    // Cleanup function
    return () => {
      setImageStatus("loading");
      setImageSrc(null);
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Blur placeholder shown while loading */}
      <div 
        className={`absolute inset-0 ${imageStatus === "loaded" ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        style={{
          backgroundImage: `url(${blurDataURL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
        }}
        aria-hidden="true"
      />

      {/* Loading spinner */}
      {imageStatus === "loading" && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50">
          <div className="w-8 h-8 border-4 border-black rounded-full animate-spin border-t-transparent" aria-label="Loading image"></div>
        </div>
      )}

      {/* Actual image - only rendered once preloaded */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`w-full ${height} object-cover transition-opacity duration-300 ${
            imageStatus === "loaded" ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          decoding="async"
          fetchpriority={priority ? "high" : "auto"}
        />
      )}

      {/* Error state */}
      {imageStatus === "error" && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <span className="text-gray-500">Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default function Location() {
  const attractions = [
    {
      name: "Karimabad Hunza",
      distance: "60 km",
      time: "1.5-hour drive",
      image: "/assets/location/karimabad1.jpg",
    },
    {
      name: "Baltit Fort",
      distance: "60 km",
      time: "1.5-hour drive",
      image: "/assets/location/baltit.jpg",
    },
    {
      name: "Attabad Lake",
      distance: "35 km",
      time: "45-min drive",
      image: "/assets/location/attabad_lake.jpg",
    },
    {
      name: "Hussaini Suspension Bridge",
      distance: "5 km",
      time: "10-min drive",
      image: "/assets/location/hussaini_suspension.jpg",
    },
    {
      name: "Borith Lake",
      distance: "7 km",
      time: "15-min drive",
      image: "/assets/location/borith.jpg",
    },
    {
      name: "Passu Village",
      distance: "1 km",
      time: "5-min walk",
      image: "/assets/location/passu.jpg",
    },
    {
      name: "Batura Lake",
      distance: "10 km",
      time: "20-min drive",
      image: "/assets/location/batura.jpeg",
    },
    {
      name: "Khunjerab Border",
      distance: "85 km",
      time: "2-hour drive",
      image: "/assets/location/khunjerab.jpeg",
    },
    {
      name: "Sost Dryport",
      distance: "35 km",
      time: "40-min drive",
      image: "/assets/location/sost.jpeg",
    },
  ];

  return (
    <div className="bg-gray-50">
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Find Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Air Travel */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-md flex flex-col gap-4">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              By Air
            </h3>
            <p className="text-gray-600">
              <strong>Islamabad to Gilgit:</strong> 1-hour flight (PIA operates
              daily flights, subject to weather conditions)
            </p>
            <p className="text-gray-600">
              <strong>Karachi to Gilgit:</strong> 4-hour flight with a stopover
              in Islamabad
            </p>
            <p className="text-gray-600">
              <strong>Lahore to Gilgit:</strong> 2-hour flight with a stopover
              in Islamabad
            </p>

            <OptimizedImage
              src="/assets/location/byair.PNG"
              alt="Flight to Gilgit"
              className="rounded-lg shadow-md"
              height="h-[400px]"
              priority={true}
            />
          </div>

          {/* Road Travel */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-md flex flex-col h-full">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">By Car</h3>
            <p className="text-gray-600">
              <strong>Gilgit to Passu Tourist Lodge:</strong> 3-hour drive (125 km) via the scenic Karakoram Highway
            </p>
            <p className="text-gray-600">
              The journey offers breathtaking views of mountains, rivers, and valleys.
            </p>

            <div className="flex-grow"></div>

            <OptimizedImage
              src="/assets/location/gilgit.PNG"
              alt="Mountain drive"
              className="rounded-lg shadow-md"
              height="h-[400px]"
              priority={true}
            />
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Nearby Attractions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-md">
                <OptimizedImage
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full rounded-t-lg"
                  priority={index < 3} // Only prioritize the first 3 attraction images
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{attraction.name}</h3>
                  <p className="text-gray-600">
                    {attraction.distance} • {attraction.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
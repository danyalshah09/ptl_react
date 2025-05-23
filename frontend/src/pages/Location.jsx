import React from "react";

// Reliable image component that ensures images load properly
const OptimizedImage = ({ src, alt, className, height = "h-48", priority = false }) => {
  return (
    <div className={`relative overflow-hidden ${className} bg-gray-200`}>
      {/* Direct image with proper attributes for guaranteed loading */}
      <img
        src={src}
        alt={alt}
        className={`w-full ${height} object-cover`}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        onError={(e) => {
          // Fallback for error - replace with a placeholder
          e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f0f0f0'/%3E%3Cpath d='M30,50 L70,50 M50,30 L50,70' stroke='%23cccccc' stroke-width='5'/%3E%3C/svg%3E";
          e.currentTarget.className = `w-full ${height} object-cover opacity-60`;
        }}
      />
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
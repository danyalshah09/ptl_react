import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsapScrollAnimation } from "./hooks/useGsapScrollAnimation";

gsap.registerPlugin(ScrollTrigger);

// Reusable image component
const OptimizedImage = ({
  src,
  alt,
  className,
  height = "h-48",
  priority = false,
}) => {
  return (
    <div className={`relative overflow-hidden ${className} bg-gray-200`}>
      <img
        src={src}
        alt={alt}
        className={`w-full ${height} object-cover`}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        onError={(e) => {
          e.currentTarget.src =
            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f0f0f0'/%3E%3Cpath d='M30,50 L70,50 M50,30 L50,70' stroke='%23cccccc' stroke-width='5'/%3E%3C/svg%3E";
          e.currentTarget.className = `w-full ${height} object-contain bg-black `;
        }}
      />
    </div>
  );
};

export default function Location() {
  const cardsRef = useRef([]);
  const attractionsRef = useRef(null);
  // Add missing animation refs for elements using ref={leftRef} and ref={byCarRef}
  const headerRef = useGsapScrollAnimation("left", {
    duration: 1.2,
    distance: 40,
  });

  const leftRef = useGsapScrollAnimation("left", {
    duration: 1.6,
    distance: 40,
  });
  const byCarRef = useGsapScrollAnimation("right", {
    duration: 1.6,
    distance: 40,
  });

  const attractions = [
    {
      name: "Karimabad Hunza",
      distance: "60 km",
      time: "45 mins drive",
      image: "/assets/location/karimabad1.webp",
    },
    {
      name: "Baltit Fort",
      distance: "60 km",
      time: "45-mins drive",
      image: "/assets/location/baltit.webp",
    },
    {
      name: "Attabad Lake",
      distance: "35 km",
      time: "35-min drive",
      image: "/assets/location/attabad_lake.webp",
    },
    {
      name: "Hussaini Suspension Bridge",
      distance: "5 km",
      time: "15-min drive",
      image: "/assets/location/hussaini_suspension.webp",
    },
    {
      name: "Borith Lake",
      distance: "7 km",
      time: "20-min drive",
      image: "/assets/location/borith.webp",
    },
    {
      name: "Passu Village",
      distance: "1 km",
      time: "3-min drive",
      image: "/assets/location/passu.webp",
    },
    {
      name: "Batura Lake",
      distance: "10 km",
      time: "10-min drive",
      image: "/assets/location/batura.webp",
    },
    {
      name: "Khunjerab Border",
      distance: "85 km",
      time: "2.5-hour drive",
      image: "/assets/location/khunjerab1.webp",
    },
    {
      name: "Sost Dryport",
      distance: "35 km",
      time: "40-min drive",
      image: "/assets/location/sost.webp",
    },
  ];

  // ✅ GSAP animation effect
  useEffect(() => {
    const elements = cardsRef.current;

    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: attractionsRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <div >

<section className="container mx-auto px-4 py-12">
  <h2
    className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10 text-center tracking-tight"
    ref={headerRef}
  >
    Find Us
  </h2>

  <div className="grid md:grid-cols-2 gap-10">
  {/* By Air */}
  <div
    className="bg-gray-100 p-6 rounded-xl shadow-md flex flex-col gap-4"
    ref={leftRef}
  >
    <div className="space-y-2 text-center">
      <h3 className="text-xl font-medium text-gray-900">By Air</h3>
      <p className="text-gray-600"><strong>Islamabad → Gilgit:</strong> 1 hr flight</p>
       </div>
    <OptimizedImage
      src="/assets/location/isbtogilgit.webp"
      alt="Flight to Gilgit"
      className="rounded-lg shadow-md"
      height="h-[400px]"
      priority
    />
  </div>

  {/* By Car */}
  <div
    className="bg-gray-100 p-6 rounded-xl shadow-md flex flex-col h-full"
    ref={byCarRef}
  >
    <div className="space-y-2 text-center">
      <h3 className="text-xl font-medium text-gray-900">By Car</h3>
      <p className="text-gray-600"><strong>Gilgit → Passu:</strong> 3 hrs (125 km)</p>
      <p className="text-gray-600">Scenic Karakoram Highway views</p>
    </div>
    <OptimizedImage
      src="/assets/location/gilgittopassu.webp"
      alt="Mountain drive"
      className="rounded-lg shadow-md bg-cover"
      height="h-[400px]"
      priority
    />
  </div>
</div>

  {/* See Live Location Button */}
  <div className="flex justify-center mt-8">
    <a
      href="https://www.google.com/maps?q=Passu%20Tourist%20Lodge"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 bg-white/70 backdrop-blur-sm text-gray-800 hover:bg-white transition-colors shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
    >
      <svg
        className="h-4 w-4 text-orange-600 transition-transform group-hover:-translate-y-0.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
      <span className="font-medium">See live location</span>
    </a>
  </div>

</section>

{/* Nearby Attractions */}
<section className="bg-white py-12" ref={attractionsRef}>
  <div className="container mx-auto px-4">
    <h2 className="text-2xl text-center md:text-3xl font-semibold text-gray-900 mb-8">
      Nearby Attractions
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {attractions.map((attraction, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className="bg-white border border-gray-200 rounded-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <OptimizedImage
            src={attraction.image}
            alt={attraction.name}
            className="w-full"
            priority={index < 3}
          />
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-900">{attraction.name}</h3>
            <p className="text-gray-500">{attraction.distance} • {attraction.time}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
}

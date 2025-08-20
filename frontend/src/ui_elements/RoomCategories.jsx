import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RoomCategories = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const roomheadingRef = useRef();

  const rooms = [
    { to: "/masterbed", imgSrc: "/assets/rooms/masterbed1.jpg", title: "Deluxe Room" },
    { to: "/twinbed", imgSrc: "/assets/images/ptl_twin.jpg", title: "Executive Room" },
    { to: "/triplebed", imgSrc: "/assets/rooms/triplebed1.jpg", title: "Triple Bed" },
  ];

  // One-time scroll animation
  useEffect(() => {
    const el = roomheadingRef.current;
    if (!el) return;

    gsap.set(el, { x: -60, opacity: 0 });

    const animation = gsap.to(el, {
      x: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        once: true, // Critical: only trigger once
        invalidateOnRefresh: true,
      }
    });

    return () => {
      if (animation.scrollTrigger) animation.scrollTrigger.kill();
      animation.kill();
    };
  }, []);


  return (
    <section id="room_types" className="py-12 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" ref={roomheadingRef}>
        Room <span className="text-orange-700">Categories</span>
      </h2>

      <div className="flex flex-wrap md:flex-row flex-col gap-6 max-w-7xl mx-auto px-4 md:px-6">
        {rooms.map((room, index) => (
          <Link

            key={index}
            to={room.to}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`overflow-hidden transition-all duration-500 relative shadow-lg rounded-lg group ${
              hoveredIndex === index ? "flex-[2] md:flex-[2]" : "flex-1 md:flex-[1]"
            }`}
          >
            <div className="h-64 md:h-96 overflow-hidden">
              <img
                src={room.imgSrc}
                alt={room.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <span className="block text-xl md:text-2xl text-center py-4 bg-white bg-opacity-80 backdrop-blur-md text-black group-hover:text-orange-600 transition-colors duration-300">
              {room.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RoomCategories;

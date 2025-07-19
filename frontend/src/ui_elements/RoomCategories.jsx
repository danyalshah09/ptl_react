import React, { useState } from "react";
import { Link } from "react-router-dom";

const RoomCategories = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const rooms = [
    { to: "/masterbed", imgSrc: "/assets/rooms/masterbed1.jpg", title: "Deluxe Room" },
    { to: "/twinbed", imgSrc: "/assets/images/ptl_twin.jpg", title: "Executive Room" },
    { to: "/triplebed", imgSrc: "./assets/rooms/triplebed1.jpg", title: "Triple Bed" },
  ];

  return (
    <section id="room_types" className="py-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Room <span className="text-orange-700">Categories</span>
      </h2>
      <div className="flex flex-wrap md:flex-row flex-col gap-6 max-w-7xl mx-auto px-4 md:px-6">
        {rooms.map((room, index) => (
          <Link
            key={index}
            to={room.to}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`overflow-hidden transition-all duration-500 relative shadow-lg group ${
              hoveredIndex === index
                ? "flex-[2] md:flex-[2]"
                : "flex-1 md:flex-[1]"
            }`}
          >
            <div className="h-64 md:h-96 overflow-hidden">
              <img
                src={room.imgSrc}
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <span className="block text-2xl text-center py-4 bg-white bg-opacity-70 text-black group-hover:text-orange-500">
              {room.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RoomCategories;
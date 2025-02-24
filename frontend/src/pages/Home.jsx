import React, { useRef } from "react";
import RoomCategories from "../ui_elements/RoomCategories";
import { Facilities } from "../ui_elements/Facilities";
import MapSection from "../ui_elements/Map";
import VideoSection from "./Video";
import Places from "../ui_elements/Places";
import Intro from "../ui_elements/Intro";
import CarouselCustomArrows from "../ui_elements/CarouselCustomArrows";

const Home = () => {
  const roomCategoriesRef = useRef(null);

  // Function to scroll smoothly
  const scrollToRooms = () => {
    roomCategoriesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <h1 className="text-center text-4xl mt-4">Passu Tourist Lodge</h1> 
      <section className="parallax_section h-full mt-4 w-full">
        <div className="parallax1 flex flex-col items-center justify-start mx-auto h-[70vh] w-[85%] bg-contain bg-center bg-fixed bg-no-repeat bg-[url('./assets/images/ptl_old.jpg')] mb-4">
          <p
            className="font-dancing_script text-2xl sm:text-xl md:text-3xl mt-6 text-center py-2 text-white"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
          >
            Experience Comfort and Serenity Under the Majestic Passu Cones
          </p>

          {/* Scroll to RoomCategories when clicked */}
          <button
            onClick={scrollToRooms}
            className="btn_book py-2 px-6 bg-gray-300 text-black-700 text-center mt-4 hover:bg-gray-500 hover:text-black"
          >
            Book Now
          </button>
        </div>
      </section>
      
      <Intro />
      <CarouselCustomArrows />

      {/* Attach ref to RoomCategories */}
      <div ref={roomCategoriesRef}>
        <RoomCategories />
      </div>

      <Facilities />
      <VideoSection />
      <MapSection />
      <Places />
    </>
  );
};

export default Home;

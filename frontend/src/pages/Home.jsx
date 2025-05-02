import React, { useRef, lazy, Suspense } from "react";
import Button from "../ui_elements/Button";

// Lazy load components
const RoomCategories = lazy(() => import("../ui_elements/RoomCategories"));
const Facilities = lazy(() => import("../ui_elements/Facilities").then(module => ({ default: module.Facilities })));
const MapSection = lazy(() => import("../ui_elements/Map"));
const VideoSection = lazy(() => import("./Video"));
const Places = lazy(() => import("../ui_elements/Places"));
const Intro = lazy(() => import("../ui_elements/Intro"));
const CarouselCustomArrows = lazy(() => import("../ui_elements/CarouselCustomArrows"));

// Loading fallback
const SectionLoading = () => (
  <div className="flex items-center justify-center h-64">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
  </div>
);

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
        <div className="parallax1 flex flex-col items-center justify-start mx-auto h-[30vh] lg:h-[70vh] w-[95%] bg-contain bg-center bg-no-repeat bg-[url('/assets/images/ptl_old.webp')]
 mb-4">
          <p
            className="font-dancing_script text-2xl sm:text-xl md:text-3xl mt-6 text-center py-2 text-white"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
          >
            Experience Comfort and Serenity Under the Majestic Passu Cones
          </p>

          {/* Scroll to RoomCategories when clicked */}
         
          <Button onClick={scrollToRooms} className="btn_book py-2 px-6 bg-gray-300 text-black-700 text-center mt-4 hover:bg-gray-500 hover:text-white">
            Book Now
          </Button>
        </div>
      </section>
      
      <Suspense fallback={<SectionLoading />}>
        <Intro />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <CarouselCustomArrows />
      </Suspense>

      {/* Attach ref to RoomCategories */}
      <div ref={roomCategoriesRef}>
        <Suspense fallback={<SectionLoading />}>
          <RoomCategories />
        </Suspense>
      </div>

      <Suspense fallback={<SectionLoading />}>
        <Facilities />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <VideoSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <MapSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <Places />
      </Suspense>
    </>
  );
};

export default Home;
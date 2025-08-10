import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGsapScrollAnimation } from "../pages/hooks/useGsapScrollAnimation";


const MapSection = () => {
  const mapRef = useGsapScrollAnimation("left", { duration: 1.5 });

  return (
    <section
      id="map_section_container"
      ref={mapRef}

      className="py-12 text-center opacity-0 translate-y-20"
    >
      <h2 className="text-3xl font-bold text-center mb-8">
        Find Us <span className="text-orange-700">Here</span>
      </h2>
      <div
      className="map-container relative max-w-4xl w-full h-screen border-0 mx-auto overflow-hidden shadow-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.5198136866748!2d74.87758537553478!3d36.49036688510403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e8adfb81741d0b%3A0x49d4202a4eb150c8!2sPassu%20Tourist%20Lodge%20(PTL)!5e1!3m2!1sen!2s!4v1710789672437!5m2!1sen!2s&output=embed"
          width="1000"
          height="400"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map showing the location of Passu Tourist Lodge"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;

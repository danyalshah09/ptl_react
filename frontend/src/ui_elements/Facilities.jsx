import React, { useMemo } from "react";
import { Zap, Wifi, Car, ShieldCheck, Coffee, Bike } from "lucide-react";
import { useGsapScrollAnimation } from "../pages/hooks/useGsapScrollAnimation";

const facilities = [
  {
    title: "24/7 Hot Water",
    description: "Continuous hot water supply throughout your stay",
    icon: <Zap className="w-10 h-10" />,
  },
  {
    title: "Power Backup",
    description: "Uninterrupted electricity with generator backup",
    icon: <ShieldCheck className="w-10 h-10" />,
  },
  {
    title: "Musical Nights",
    description: "Live performances and entertainment evenings",
    icon: <Coffee className="w-10 h-10"  />,
  },
  {
    title: "High-Speed WiFi",
    description: "Enjoy internet even in the mountains",
    icon: <Wifi className="w-10 h-10"  />,
  },
  {
    title: "Car Rental",
    description: "Premium vehicles with professional drivers",
    icon: <Car className="w-10 h-10" />,
  },
  {
    title: "Cycling Tours",
    description: "Guided bike tours and mountain adventures",
    icon: <Bike className="w-10 h-10"  />,
  },
];

export default function Facilities() {
  // Memoize animation options to prevent re-creation on each render
  const headingOptions = useMemo(() => ({ duration: 1.2, distance: 60 }), []);
  const facilityOptions1 = useMemo(() => ({ duration: 0.8, distance: 40, delay: 0.1 }), []);
  const facilityOptions2 = useMemo(() => ({ duration: 0.8, distance: 40, delay: 0.2 }), []);
  const facilityOptions3 = useMemo(() => ({ duration: 0.8, distance: 40, delay: 0.3 }), []);
  const facilityOptions4 = useMemo(() => ({ duration: 0.8, distance: 40, delay: 0.4 }), []);
  const facilityOptions5 = useMemo(() => ({ duration: 0.8, distance: 40, delay: 0.5 }), []);
  const facilityOptions6 = useMemo(() => ({ duration: 0.8, distance: 40, delay: 0.6 }), []);

  // Create animation refs for heading and each facility item
  const headingRef = useGsapScrollAnimation("down", headingOptions);
  const facility1Ref = useGsapScrollAnimation("down", facilityOptions1);
  const facility2Ref = useGsapScrollAnimation("down", facilityOptions2);
  const facility3Ref = useGsapScrollAnimation("down", facilityOptions3);
  const facility4Ref = useGsapScrollAnimation("down", facilityOptions4);
  const facility5Ref = useGsapScrollAnimation("down", facilityOptions5);
  const facility6Ref = useGsapScrollAnimation("down", facilityOptions6);

  // Array of refs for easy mapping
  const facilityRefs = [facility1Ref, facility2Ref, facility3Ref, facility4Ref, facility5Ref, facility6Ref];

  return (
    <section className="py-16 bg-white">
      {/* Simple Heading */}
      <div className="text-center mb-12">
        <h2 ref={headingRef} className="text-3xl font-bold text-gray-800">
          Our <span className="text-black-700">Facilities</span>
        </h2>
      </div>

      {/* Clean Grid Layout */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              ref={facilityRefs[index]}
              className="flex flex-col items-center text-center group"
            >
               {/* Minimalist Icon Container with Border Animation */}
               <div className="w-20 h-20 border border-gray-200 flex items-center justify-center mb-6 relative overflow-hidden">
                 <div className="text-orange-700">
                  {facility.icon}
                </div>

                 {/* Animated Border Overlays */}
                 {/* Top border */}
                 <div className="absolute top-0 left-0 h-px bg-red-600 w-0 group-hover:w-1/2 transition-all duration-500 ease-out"></div>
                 <div className="absolute top-0 right-0 h-px bg-red-600 w-0 group-hover:w-1/2 transition-all duration-500 ease-out"></div>

                 {/* Bottom border */}
                 <div className="absolute bottom-0 left-0 h-px bg-red-600 w-0 group-hover:w-1/2 transition-all duration-500 ease-out"></div>
                 <div className="absolute bottom-0 right-0 h-px bg-red-600 w-0 group-hover:w-1/2 transition-all duration-500 ease-out"></div>

                 {/* Left border */}
                 <div className="absolute left-0 top-0 w-px bg-red-600 h-0 group-hover:h-1/2 transition-all duration-500 ease-out"></div>
                 <div className="absolute left-0 bottom-0 w-px bg-red-600 h-0 group-hover:h-1/2 transition-all duration-500 ease-out"></div>

                 {/* Right border */}
                 <div className="absolute right-0 top-0 w-px bg-red-600 h-0 group-hover:h-1/2 transition-all duration-500 ease-out"></div>
                 <div className="absolute right-0 bottom-0 w-px bg-red-600 h-0 group-hover:h-1/2 transition-all duration-500 ease-out"></div>

                 {/* Small accent line */}
                 <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-px bg-orange-700"></div>
              </div>

               {/* Professional Typography */}
               <h3 className="text-base font-semibold text-gray-800 mb-3 tracking-wide">
                  {facility.title}
                </h3>

               {/* Refined Description */}
               <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                  {facility.description}
                </p>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}

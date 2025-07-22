import React from "react";
import { Zap, Wifi, Car, ShieldCheck, Coffee, Bike } from "lucide-react";

const facilities = [
  {
    title: "24/7 Hot",
    subtitle: "Water",
    description: "Continuous hot water supply with smart temperature control",
    icon: <Zap className="w-10 h-10" />
  },
  {
    title: "Power",
    subtitle: "Backup",
    description: "Uninterrupted electricity with advanced generator systems",
    icon: <ShieldCheck className="w-10 h-10" />
  },
  {
    title: "Musical",
    subtitle: "Nights",
    description: "Curated live performances and entertainment experiences",
    icon: <Coffee className="w-10 h-10" />
  },
  {
    title: "High-Speed",
    subtitle: "WiFi",
    description: "Ultra-fast fiber optic internet throughout the property",
    icon: <Wifi className="w-10 h-10" />
  },
  {
    title: "Premium",
    subtitle: "Car Rental",
    description: "Luxury vehicles with 24/7 concierge booking service",
    icon: <Car className="w-10 h-10" />
  },
  {
    title: "Adventure",
    subtitle: "Cycling",
    description: "Guided tours and premium bike rental experiences",
    icon: <Bike className="w-10 h-10" />
  }
];

export default function Facilities() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
      {/* Centered Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          Facilities
        </h2>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>

      <div className="container mx-auto relative z-10 px-4">
        {/* Facilities Grid - 2 per row on mobile, 3 per row on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 max-w-7xl mx-auto">
          {facilities.map((facility, index) => (
            <div key={index} className="group flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 p-4 sm:p-6 rounded-xl transition-all duration-700 ease-out relative overflow-hidden">
              {/* Minimalist hover background */}
              <div className="absolute inset-0 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 ease-out"></div>

              {/* Icon container */}
              <div className="relative flex-shrink-0 z-10">
                <div className="text-gray-500 dark:text-orange-400 p-3 rounded-full bg-gray-200 dark:bg-red-700/80 group-hover:bg-white dark:group-hover:bg-gray-600/90 transition-all duration-500">
                  {facility.icon}
                </div>
              </div>

              {/* Clean separator */}
              <div className="hidden sm:block w-px h-16 bg-gray-200 dark:bg-gray-700 group-hover:bg-orange-300 dark:group-hover:bg-orange-600 transition-colors duration-500"></div>

              {/* Mobile separator */}
              <div className="block sm:hidden w-full h-px bg-gray-200 dark:bg-gray-700 group-hover:bg-orange-300 dark:group-hover:bg-orange-600 transition-colors duration-500"></div>

              <div className="flex-1 text-left relative z-10">
                <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-gray-900 dark:group-hover:text-white group-hover:drop-shadow-md transition-all duration-500">
                  {facility.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-2 font-medium group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-500">
                  {facility.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed transition-colors duration-500">
                  {facility.description}
                </p>

                {/* Subtle progress indicator */}
                <div className="mt-3 h-px bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-gray-400 to-orange-600 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
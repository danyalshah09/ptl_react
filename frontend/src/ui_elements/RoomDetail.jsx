import React, { useRef } from "react";
import HotelBookingForm from "../ui_elements/HotelBookingForm";
import { useLocation } from "react-router-dom";
import RoomImageSlider from "./RoomImageSlider";
import Button from "./Button";

// Icons
import { FaWifi, FaParking, FaFire, FaBirthdayCake, FaShower } from "react-icons/fa";
import { MdBalcony, MdOutlineElectricBolt } from "react-icons/md";
import { GiTeapotLeaves, GiBathtub } from "react-icons/gi";
import { RiCarLine } from "react-icons/ri";

const RoomDetails = ({ title, image, price, description, amenities, policies, roomType }) => {
  const bookingSectionRef = useRef(null);

  // Scroll to booking section
  const scrollToBooking = () => {
    bookingSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const location = useLocation();
  const { bookingDetails } = location.state || {}; // From Cart.jsx

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative h-[600px] bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-3xl px-4">
            <h1 className="text-4xl font-extrabold text-white mb-4">{title}</h1>
            <p className="text-lg text-white/80 mb-6">{description}</p>
            <Button onClick={scrollToBooking} className="btn_book">
              Book Now
            </Button>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-8 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Policies & Conditions */}
          <div className="bg-white p-6 rounded-lg shadow">
            {policies.map((policy, index) => (
              <div key={index} className="booking_details mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{policy.title}</h2>
                {Array.isArray(policy.content) ? (
                  <ul className="list-disc list-inside ml-5 text-gray-700 space-y-2">
                    {policy.content.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700">{policy.content}</p>
                )}
              </div>
            ))}
          </div>

          {/* Booking Section */}
          <div ref={bookingSectionRef} className="bg-white p-6 shadow">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
              PKR {price}/night
            </h2>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Amenities</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
              {amenities.map((amenity, index) => (
                <AmenityItem key={index} title={amenity} />
              ))}
            </div>
            <HotelBookingForm bookingDetails={bookingDetails} />

            {/* Environmental Responsibility Note */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mt-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">Environmental Responsibility</h3>
                  <p className="text-sm text-blue-700 mt-1">
                    Help us preserve the pristine beauty of Passu. Please dispose of waste properly,
                    conserve water and electricity, and respect the natural environment.
                    Together we can keep this mountain paradise clean for future generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RoomImageSlider roomType={roomType} />
    </>
  );
};

const AmenityItem = ({ title }) => {
  const iconMap = {
    "Balcony with view": <MdBalcony className="text-3xl sm:text-2xl text-gray-700" />,
    "24/7 Electricity": <MdOutlineElectricBolt className="text-3xl sm:text-2xl text-gray-700" />,
    "Complimentary Green Tea": <GiTeapotLeaves className="text-3xl sm:text-2xl text-gray-700" />,
    "Free Parking": <FaParking className="text-3xl sm:text-2xl text-gray-700" />,
    "WiFi": <FaWifi className="text-3xl sm:text-2xl text-gray-700" />,
    "Bonfire on Demand": <FaFire className="text-3xl sm:text-2xl text-gray-700" />,
    "Toiletries": <GiBathtub className="text-3xl sm:text-2xl text-gray-700" />,
    "Hot Water Facility": <FaShower className="text-3xl sm:text-2xl text-gray-700" />,
    "Rent a car – (Assistance)": <RiCarLine className="text-3xl sm:text-2xl text-gray-700" />,
    "Birthday Arrangement": <FaBirthdayCake className="text-3xl sm:text-2xl text-gray-700" />
  };

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200 text-center sm:text-left">
      <div className="flex-shrink-0">
        {iconMap[title] || <span className="w-8 h-8 sm:w-6 sm:h-6 bg-gray-300 rounded-full"></span>}
      </div>
      <span className="text-sm sm:text-base text-gray-800 font-medium leading-tight">{title}</span>
    </div>
  );
};

export default RoomDetails;

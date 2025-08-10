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
        className={`relative h-[600px] bg-[url('${image}')] bg-cover bg-center bg-no-repeat bg-fixed`}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {amenities.map((amenity, index) => (
                <AmenityItem key={index} title={amenity} />
              ))}
            </div>
            <HotelBookingForm bookingDetails={bookingDetails} />
          </div>
        </div>
      </div>

      <RoomImageSlider roomType={roomType} />
    </>
  );
};

const AmenityItem = ({ title }) => {
  const iconMap = {
    "Balcony with view": <MdBalcony className="text-2xl text-gray-700" />,
    "24/7 Electricity": <MdOutlineElectricBolt className="text-2xl text-gray-700" />,
    "Complimentary Green Tea": <GiTeapotLeaves className="text-2xl text-gray-700" />,
    "Free Parking": <FaParking className="text-2xl text-gray-700" />,
    "WiFi": <FaWifi className="text-2xl text-gray-700" />,
    "Bonfire on Demand": <FaFire className="text-2xl text-gray-700" />,
    "Toiletries": <GiBathtub className="text-2xl text-gray-700" />,
    "Hot Water Facility": <FaShower className="text-2xl text-gray-700" />,
    "Rent a car – (Assistance)": <RiCarLine className="text-2xl text-gray-700" />,
    "Birthday Arrangement": <FaBirthdayCake className="text-2xl text-gray-700" />
  };

  return (
    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
      {iconMap[title] || <span className="w-6 h-6 bg-gray-300 rounded-full"></span>}
      <span className="text-gray-800 font-medium">{title}</span>
    </div>
  );
};

export default RoomDetails;

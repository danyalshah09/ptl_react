import React from "react";
import HotelBookingForm from "../ui_elements/HotelBookingForm";
import { useLocation } from "react-router-dom";
import RoomImageSlider from "./RoomImageSlider";
const RoomDetails = ({ title, image, price, description, amenities, policies,roomType  }) => {
  const location = useLocation();
  const { bookingDetails } = location.state || {}; // Accessing booking details from Cart.jsx

  return (
    <>
      {/* Hero Section */}
      <div className={`relative h-[600px] bg-[url('${image}')] bg-cover bg-center bg-no-repeat bg-fixed`}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-3xl px-4">
            <h1 className="text-4xl font-extrabold text-white mb-4">{title}</h1>
            <p className="text-lg text-white/80 mb-6">{description}</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition">
              Book Now
            </button>
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

          {/* Amenities & Booking */}
          <div className="bg-white p-6 shadow">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">PKR {price}/night</h2>
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

const AmenityItem = ({ title }) => (
  <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
    <span className="text-gray-800 font-medium">{title}</span>
  </div>
);

export default RoomDetails;

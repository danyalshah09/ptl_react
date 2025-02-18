// import React from "react";
// import HotelBookingForm from "../ui_elements/HotelBookingForm";
// // import ImageSlider from "../ui_elements/ImageSlider";
// import { useLocation } from "react-router-dom";

// const Masterbed = () => {
//   const location = useLocation();
//   const { bookingDetails } = location.state || {}; // Accessing bookingDetails passed from Cart.jsx

//   return (
//     <>
//       <div className="relative h-[600px] bg-[url('./assets/rooms/ptl3.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
//         <div className="absolute inset-0 bg-black/50"></div>
//         <div className="relative z-10 h-full flex items-center justify-center">
//           <div className="text-center max-w-3xl px-4">
//             <h1 className="text-4xl font-extrabold text-white mb-4">
//               Luxury Master Bedroom Suite
//             </h1>
//             <p className="text-lg text-white/80 mb-6">
//               Experience unparalleled comfort in our 650 sq.ft sanctuary
//               featuring panoramic views and premium amenities.
//             </p>
//             <button className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition">
//               Book Now
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="p-8 bg-gray-100">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
//           {/* Booking Conditions */}
//           <div className="bg-white p-6 rounded-lg shadow">
//             <div className="booking_details">
//               <h2 className="text-2xl font-bold text-gray-800 mb-4">
//                 Booking Conditions
//               </h2>
//               <ul className="list-disc list-inside ml-5 text-gray-700 space-y-2">
//                 <li>
//                   A maximum of three persons can sleep in this room with an
//                   additional rollaway bed (mattress).
//                 </li>
//                 <li>
//                   A rollaway bed is available at a cost of Rs 3,000 per night.
//                 </li>
//                 <li>
//                   Children under the age of 5 years can stay for free. (above 5
//                   years up to 10 will be charged Rs.1500 per child, 10+ will be
//                   charged full with complimentary breakfast)
//                 </li>
//                 <li>
//                   A valid CNIC for locals and passport for foreign tourists is
//                   required upon arrival.
//                 </li>
//                 <li>Upfront payment required at confirmation.</li>
//                 <li>Cancellation policy: 100% refund for 21+ days prior.</li>
//               </ul>
//             </div>
//             <div className="booking_details">
//               <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-4">
//                 Checkin and Checkout
//               </h2>
//               <ul className="list-disc list-inside ml-5 text-gray-700 space-y-2">
//                 <li>Standard check-in time for guest is 1400hrs.</li>
//                 <li>Standard check-out time for guests is 1100am.</li>
//               </ul>
//             </div>
//             <div className="booking_details">
//               <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-4">
//                 Early Check in and Check out Policy
//               </h2>
//               <ul className="list-disc list-inside ml-5 text-gray-700 space-y-2">
//                 <li>
//                   Accommodations regarding a late check-out/ early check-in
//                   subject to availability of Rooms and prior notice.
//                 </li>
//                 <li>
//                   Failure to comply with the designated check-out time will
//                   result in additional charges. Half a day’s rent is charged if
//                   the check out is by 3pm and a full day’s rent if the checkout
//                   is extended past this time.
//                 </li>
//               </ul>
//             </div>
//             <div className="booking_details">
//               <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-4">
//                 Payment Policy
//               </h2>
//               <ul className="list-disc list-inside ml-5 text-gray-700 space-y-2">
//                 <li>
//                   A valid credit card, cash deposit online transaction is
//                   required at the time of booking as a guarantee..
//                 </li>
//                 <li>
//                   Upfront payment is required at the time of booking
//                   confirmation.
//                 </li>
//                 <li>
//                   Rooms and prices advertised are on management discretion and
//                   current and expected availaibility
//                 </li>
//                 <li>
//                   Offto Resort reserves the right to change rates and services
//                   at its discretion.
//                 </li>
//               </ul>
//             </div>
//             <div className="booking_details">
//               <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-4">
//                 Cancellation Policy
//               </h2>
//               <p>
//                 100% refund if cancellation done atleast 21 days before the
//                 check in date 50% Refund if cancellation done atleast 15 days
//                 before the check in date Zero refund if cancellation done less
//                 than 15 days before the check in date.
//               </p>
//             </div>
//             <div className="booking_details">
//               <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-4">
//                 No Show Policy
//               </h2>
//               <p>
//                 In case of no show due to flight cancellation, road closure or
//                 any unforeseen natural calamity, Offto Resort will be obliged to
//                 refund the paid amount in the form of a pre paid resort voucher
//                 that the guest can use to rebook at the resort. Voucher validity
//                 is 6 months from the date of issue. In all other cases, refunds
//                 will be at the discretion of the Offto Resort management
//               </p>
//             </div>
//           </div>

//           {/* Amenities */}
//           <div className="bg-white p-6 shadow">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
//               PKR 8000/night
//             </h2>
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">Amenities</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <AmenityItem title="Balcony with view" />
//               <AmenityItem title="24/7 Electricity" />
//               <AmenityItem title="Complimentary Green Tea" />
//               <AmenityItem title="Free Parking" />
//               <AmenityItem title="WiFi" />
//               <AmenityItem title="Bornfire on Demand" />
//               <AmenityItem title="Toiletries" />
//               <AmenityItem
//                 title=" Hot Water Facility"/>
//               <AmenityItem
//                 title="Rent a car – (Assistance)"/>
//               <AmenityItem title="Birthday Arrangment" />

            
//             </div>
//             <HotelBookingForm bookingDetails={bookingDetails} /> {/* Pass bookingDetails to the form */}

//           </div>
//         </div>
//         {/* <ImageSlider/> */}
//       </div>
     
      
//     </>
//   );
// };

// const AmenityItem = ({ title }) => (
//   <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
//     <span className="text-gray-800 font-medium">{title}</span>
//   </div>
// );

// export default Masterbed;


import React from "react";
import RoomDetails from "../ui_elements/RoomDetail";

const Masterbed = () => {
  return (
    <RoomDetails
      title="Master Bedroom Suite"
      image="./assets/rooms/ptl3.jpg"
      price="8000"
      description="Experience unparalleled comfort in our 650 sq.ft sanctuary featuring panoramic views and premium amenities."
      amenities={[
        "Balcony with view",
        "24/7 Electricity",
        "Complimentary Green Tea",
        "Free Parking",
        "WiFi",
        "Bonfire on Demand",
        "Toiletries",
        "Hot Water Facility",
        "Rent a car – (Assistance)",
        "Birthday Arrangement"
      ]}
      policies={[
        {
          title: "Booking Conditions",
          content: [
            "A maximum of three persons can sleep in this room with an additional rollaway bed (mattress).",
            "A rollaway bed is available at a cost of Rs 3,000 per night.",
            "Children under the age of 5 years can stay for free. (above 5 years up to 10 will be charged Rs.1500 per child, 10+ will be charged full with complimentary breakfast).",
            "A valid CNIC for locals and passport for foreign tourists is required upon arrival.",
            "Upfront payment required at confirmation.",
            "Cancellation policy: 100% refund for 21+ days prior."
          ]
        },
        {
          title: "Check-in and Checkout",
          content: ["Standard check-in time is 1400 hrs.", "Standard check-out time is 1100 hrs."]
        },
        {
          title: "Early Check-in and Check-out Policy",
          content: [
            "Accommodations regarding a late check-out/early check-in are subject to room availability and prior notice.",
            "Failure to comply with check-out time will result in additional charges. Half a day’s rent is charged if checkout is by 3 pm, and a full day’s rent if past this time."
          ]
        },
        {
          title: "Payment Policy",
          content: [
            "A valid credit card, cash deposit, or online transaction is required at booking.",
            "Upfront payment is required at booking confirmation.",
            "Rooms and prices are at management's discretion and depend on availability.",
            "Offto Resort reserves the right to change rates and services."
          ]
        },
        {
          title: "Cancellation Policy",
          content:
            "100% refund if canceled at least 21 days before check-in. 50% refund if canceled at least 15 days before check-in. No refund if canceled less than 15 days before check-in."
        },
        {
          title: "No Show Policy",
          content:
            "In case of no-show due to flight cancellation, road closure, or unforeseen natural calamities, the resort will issue a voucher valid for 6 months. In all other cases, refunds are at the discretion of management."
        }
      ]}
      roomType="masterbed"
      />
  );
};

export default Masterbed;

import React from "react";
import RoomDetails from "../ui_elements/RoomDetail";

const Masterbed = () => {
  return (
    <RoomDetails
      title="Twin Bed Room"
      image="./assets/rooms/ptl3.jpg"
      price="9000"
      description="Experience unparalleled comfort in our 650 sq.ft sanctuary featuring panoramic views and premium amenities."
      amenities={[
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
       roomType="twinbed"
    />
  );
};

export default Masterbed;

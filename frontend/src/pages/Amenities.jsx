import { FaWifi, FaUtensils, FaSpa, FaPaw, FaWheelchair, FaChild } from "react-icons/fa";

const amenities = [
  {
    icon: <FaWifi className="text-3xl text-white mb-3" />,
    title: "Accommodation Comforts",
    list: [
      "Wi-Fi",
      "Peaceful Environment",
      "TV Lounge",
      "Private balconies",
      "24/7 hot water",
    ],
  },
  {
    icon: <FaUtensils className="text-3xl text-white mb-3" />,
    title: "Culinary Experiences",
    highlight: true,
    list: [
      "Traditional and Western restaurant",
      "On demand breakfast dinner/Lunch",
      "Private BBQ facilities",
      "Local Food available",
      "Special diet menus",
    ],
  },
  {
    icon: <FaSpa className="text-3xl text-white mb-3" />,
    title: "Wellness Retreat",
    list: [
      "Booking Facility",
      "Local Guide Reservation",
      "Conference Hall",
      "Visitor Center"
    ],
  },
];

const Amenities = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Changed from h1 to h2 - assuming this is a section within a page */}
        <h2 className="text-4xl font-bold text-center text-gray-600 mb-4">
          Hotel Amenities & Services
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Experience unparalleled comfort and convenience during your stay
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {amenities.map((item, index) => (
            <div
              key={index}
              className={`bg-gray-900 p-6 rounded-xl shadow-lg transition-transform transform hover:-translate-y-2 ${
                item.highlight ? "border-2" : ""
              }`}
            >
              {item.icon}
              {/* Changed from h2 to h3 - now properly follows h2 */}
              <p className="text-xl font-semibold text-white mb-3">
                {item.title}
              </p>
              <ul className="space-y-2 text-white">
                {item.list.map((amenity, idx) => (
                  <li key={idx} className="border-b last:border-none py-2">
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
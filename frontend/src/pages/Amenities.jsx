


import { FaWifi, FaUtensils, FaSpa, FaPaw, FaWheelchair, FaChild } from "react-icons/fa";

const amenities = [
  {
    icon: <FaWifi className="text-3xl text-black mb-3" />,
    title: "Accommodation Comforts",
    list: [
      " Wi-Fi",
      "Peaceful Enviroment",
      "TV Lounge",
      "Private balconies",
      "24/7 hot water",
      
    ],
  },
  {
    icon: <FaUtensils className="text-3xl text-black mb-3" />,
    title: "Culinary Experiences",
    highlight: true,
    list: [
      "Traditional and Western restaurant",
      "On demand breakfast dinner/Lunch",
      "Private BBQ facilities",
      "local Food available ",
      "Special diet menus",
    ],
  },
  {
    icon: <FaSpa className="text-3xl text-black mb-3" />,
    title: "Wellness Retreat",
    list: [
      "Transport Facility",
      "Book your local guide",
      "Meeting Rooms",
      "Center to visit spots"
   
    ],
  },
];



const Amenities = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-600 mb-4">
          Hotel Amenities & Services
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Experience unparalleled comfort and convenience during your stay
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {amenities.map((item, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-lg transition-transform transform hover:-translate-y-2 ${
                item.highlight ? "border-2 border-gray-500" : ""
              }`}
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-gray-600 mb-3">
                {item.title}
              </h3>
              <ul className="space-y-2 text-gray-600">
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

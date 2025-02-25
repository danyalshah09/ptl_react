import { useState } from 'react';
import { Dialog } from '@headlessui/react';

export default function DineSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('breakfast');

  const menuCategories = {
    breakfast: [
      { name: 'Traditional Chapshuro', price: '$8.99', description: 'Savory meat-filled pastry' },
      { name: 'Hunza Walnut Pancakes', price: '$7.50', description: 'With local honey and fruits' },
    ],
    lunch: [
      { name: 'Yak Meat Stew', price: '$12.99', description: 'Slow-cooked with local spices' },
      { name: 'Mantoo Dumplings', price: '$10.50', description: 'Steamed dumplings with yogurt sauce' },
    ],
    dinner: [
      { name: 'Truffle Pasta', price: '$22.99', description: 'Handmade pasta with black truffle' },
      { name: 'Grilled Salmon', price: '$24.99', description: 'With lemon butter sauce' },
    ]
  };

  const reviews = [
    { author: 'Ali R.', text: 'Best traditional food with stunning mountain views!', rating: 5 },
    { author: 'Emma S.', text: 'Unforgettable dining experience', rating: 5 },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-96">
        <img 
                                    src="./assets/images/passu_cones.jpg"
                                    alt="Dining Area" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-serif mb-4">Authentic Flavors with Stunning Views</h1>
            <p className="text-xl">Experience Wakhi Cuisine at Passu Tourist Lodge</p>
          </div>
        </div>
      </div>

      {/* Cuisine Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-8">Our Cuisines</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {['Wakhi', 'Continental', 'Pakistani', 'Chinese'].map((cuisine) => (
              <div key={cuisine} className="p-4 bg-orange-100 rounded-lg">
                <h3 className="font-semibold">{cuisine}</h3>
                {cuisine === 'Wakhi' && <span className="text-xs text-orange-600">Local Specialty</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-4">Our Menu</h2>
            <div className="flex justify-center gap-4 mb-8">
              {Object.keys(menuCategories).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-2 rounded-full ${
                    activeTab === category ? 'bg-orange-600 text-white' : 'bg-gray-200'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {menuCategories[activeTab].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                    <p className="text-orange-600 font-bold">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reservation & Hours */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif mb-6">Traditional Wakhi Restaurent</h2>
            <p className="text-gray-700 leading-relaxed">
            Experience the rich heritage of Wakhi cuisine at our traditional restaurant, where time-honored recipes meet contemporary comfort. Delight in authentic flavors crafted from local ingredients, all served in an intimate setting that accommodates up to 40 guests. Whether you're enjoying a cozy meal, hosting a musical night, or organizing a meeting or seminar, our venue offers a warm and versatile ambiance perfect for every occasion.
      </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
              <p className="text-gray-600">Daily: 8:00 AM – 11:00 PM</p>
              <p className="mt-4 text-orange-600">Friday Special: 20% off on dinner</p>
            </div>
          </div>

          <div className="h-96 bg-gray-100 overflow-hidden">
           <img
           className='w-full h-full object-cover'
                                    src="./assets/images/ptl00.jpg"

           alt="" />

          </div>
        </div>
      </section>
{/* Western Restaurant Section */}
<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
    <div className="h-96 bg-gray-100 overflow-hidden rounded-lg">
      <img
              src="./assets/images/ptl_western_restaurent.jpg"
              alt="Western Restaurant"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex flex-col justify-center">
      <h2 className="text-3xl font-serif mb-6">Western Restaurant Experience</h2>
      <p className="text-gray-700 leading-relaxed">
        Indulge in our exquisite Western cuisine, featuring a perfect blend of classic flavors and contemporary dishes.
        Enjoy a cozy ambiance with stunning mountain views while savoring your meal.
      </p>
    </div>
  </div>
</section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="w-full mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-8">Guest Reviews</h2>
          <div className="w-full gap-8">
          <div className="elfsight-app-6ac20a8f-b939-48be-93ca-1598a88c42b8" data-elfsight-app-lazy></div>
          </div>
        </div>
      </section>

      {/* Reservation Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md bg-white rounded-xl p-8">
            <h3 className="text-2xl font-serif mb-6">Make Reservation</h3>
            <form className="space-y-4">
              <div>
                <label className="block mb-2">Date</label>
                <input type="date" className="w-full p-2 border rounded-lg" />
              </div>
              <div>
                <label className="block mb-2">Time</label>
                <input type="time" className="w-full p-2 border rounded-lg" />
              </div>
              <div>
                <label className="block mb-2">Guests</label>
                <select className="w-full p-2 border rounded-lg">
                  {[1,2,3,4,5,6].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'guest' : 'guests'}</option>
                  ))}
                </select>
              </div>
              <button 
                type="submit" 
                className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition"
              >
                Confirm Reservation
              </button>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
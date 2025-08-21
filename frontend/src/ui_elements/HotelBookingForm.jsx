import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const HotelBookingForm = ()=> {
  const [bookings, setBookings] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkin: "",
    checkout: "",
    category: "Master Bed",
    adults: 2,
    children: 0,
    rooms: 1,
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.bookings) {
      setBookings(location.state.bookings);
    }
  }, [location.state]);

  const roomPrices = {
    "Master Bed": 8000,
    "Twin Bed": 9000,
    "Triple Bed": 10000,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "adults" || name === "children" || name === "rooms" ? parseInt(value, 10) : value,
    });
  };

  const calculateNights = () => {
    const checkinDate = new Date(formData.checkin);
    const checkoutDate = new Date(formData.checkout);
    const nights = (checkoutDate - checkinDate) / (1000 * 60 * 60 * 24);
    return nights > 0 ? nights : 0;
  };

  const handleAddBooking = (e) => {
    e.preventDefault();

    const checkinDate = new Date(formData.checkin);
    const checkoutDate = new Date(formData.checkout);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!formData.checkin || !formData.checkout) {
      alert("Please select both check-in and check-out dates.");
      return;
    }

    if (checkinDate < today) {
      alert("Check-in date cannot be in the past.");
      return;
    }
    if (checkoutDate <= checkinDate) {
      alert("Check-out date must be after the check-in date.");
      return;
    }

    const nights = calculateNights();
    if (nights <= 0) {
      alert("The number of nights must be at least 1.");
      return;
    }

    const roomPrice = roomPrices[formData.category];
    const subtotal = nights * roomPrice * formData.rooms;

    const newBooking = {
      ...formData,
      nights,
      price: roomPrice,
      subtotal,
    };

    const updatedBookings = [...bookings, newBooking];
    setBookings(updatedBookings);

    setFormData({
      name: "",
      email: "",
      phone: "",
      checkin: "",
      checkout: "",
      category: "Master Bed",
      adults: 2,
      children: 0,
      rooms: 1,
    });

    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const handleViewCart = () => {
    setShowCart(!showCart);
  };

  const calculateTotalCost = () => {
    return bookings.reduce((total, booking) => total + booking.subtotal, 0);
  };

  const nights = calculateNights();

  return (
    <div className="bg-transparent p-0 py-10">
      <div className="w-full">
        {/* Cart Preview - Compact mobile design */}
        <div className="mb-4 flex flex-col gap-2">
          <button
            onClick={handleViewCart}
            className="w-full bg-blue-500 text-white py-2 px-3 rounded-md hover:bg-blue-600 text-sm transition-colors"
          >
            {showCart ? 'Hide Cart' : 'View Cart'} ({bookings.length})
          </button>
          {bookings.length > 0 && (
            <button
              onClick={() => navigate("/cart", { state: { bookings } })}
              className="w-full bg-orange-500 text-white py-2 px-3 rounded-md hover:bg-orange-600 text-sm transition-colors"
            >
              Proceed to Checkout
            </button>
          )}
        </div>

        {/* Notification - Made more mobile friendly */}
        {showNotification && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg animate-slideIn z-50 text-sm sm:text-base">
            ✅ Added to Cart!
          </div>
        )}

        {/* Cart Details - Compact mobile design */}
        {showCart && bookings.length > 0 && (
          <div className="bg-gray-50 p-3 rounded-md mb-4 border">
            <h3 className="text-sm font-semibold mb-2 text-gray-700">Cart Summary</h3>
            <div className="space-y-2">
                      {bookings.map((booking, index) => (
                <div key={index} className="bg-white p-2 rounded-md text-xs">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium">{booking.category}</div>
                      <div className="text-gray-500">
                        {booking.checkin} → {booking.checkout}
                      </div>
                      <div className="text-gray-500">
                        {booking.rooms} room(s) × {booking.nights} night(s)
                      </div>
                            </div>
                    <div className="font-medium">
                            {booking.subtotal} PKR
                </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-between items-center pt-2 border-t font-semibold text-sm">
                <span>Total:</span>
                <span>{calculateTotalCost()} PKR</span>
              </div>
            </div>
          </div>
        )}

        {/* Booking Form - Minimalist mobile design */}
        <form
          onSubmit={handleAddBooking}
          className="bg-white border border-gray-200 p-3 rounded-lg shadow-sm"
        >
          <h2 className="text-center text-orange-600 text-lg font-semibold mb-4">
            Book Your Stay
          </h2>
          <div className="space-y-3">
            {/* Personal Information - Compact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
            </div>

            {/* Booking Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Check-in</label>
              <input
                type="date"
                name="checkin"
                value={formData.checkin}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
            </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Check-out</label>
              <input
                type="date"
                name="checkout"
                value={formData.checkout}
                onChange={handleChange}
                min={formData.checkin || new Date().toISOString().split("T")[0]}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Room Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="Master Bed">Master Bed</option>
                <option value="Twin Bed">Twin Bed</option>
                <option value="Triple Bed">Triple Bed</option>
              </select>
            </div>

            {/* Occupancy Details */}
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Rooms</label>
              <input
                type="number"
                name="rooms"
                value={formData.rooms}
                onChange={handleChange}
                min="1"
                max="20"
                  className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Adults</label>
              <input
                type="number"
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                min="1"
                  className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Children</label>
              <input
                type="number"
                name="children"
                value={formData.children}
                onChange={handleChange}
                min="0"
                  className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

            {/* Nights Display */}
            {nights > 0 && (
              <div className="bg-orange-50 p-2 rounded-md text-center">
                <span className="text-sm text-orange-700 font-medium">
                  {nights} night(s) selected
                </span>
              </div>
            )}
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2.5 px-4 rounded-md hover:bg-orange-700 text-sm font-medium transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HotelBookingForm
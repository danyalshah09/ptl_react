import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function HotelBookingForm() {
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
    <div className="min-h-screen bg-gradient-to-br p-4">
      <div className="max-w-2xl mx-auto">
        {/* Cart Preview */}
        <div className="mb-8 mt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <button
            onClick={handleViewCart}
            className="w-full sm:w-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            {showCart ? 'Hide Cart' : 'View Cart'} ({bookings.length} items)
          </button>
          {bookings.length > 0 && (
            <button
              onClick={() => navigate("/cart", { state: { bookings } })}
              className="w-full sm:w-auto bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
            >
              Proceed to Checkout
            </button>
          )}
        </div>

        {showNotification && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-slideIn z-50">
            ✅ Added to Cart!
          </div>
        )}

        {/* Cart Details */}
        {showCart && bookings.length > 0 && (
          <div className="bg-white p-4 rounded-lg shadow-xl mb-8 overflow-hidden">
            <h3 className="text-xl font-bold mb-4">Cart Details</h3>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-2 text-left">Room</th>
                        <th className="px-4 py-2 text-left">Dates</th>
                        <th className="px-4 py-2 text-right">Price</th>
                        <th className="px-4 py-2 text-right">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((booking, index) => (
                        <tr key={index} className="border-t">
                          <td className="px-4 py-2">
                            <div className="font-semibold">{booking.category}</div>
                            <div className="text-sm text-gray-600">
                              {booking.rooms} room(s), {booking.nights} night(s)
                            </div>
                          </td>
                          <td className="px-4 py-2">
                            <div className="text-sm">{booking.checkin}</div>
                            <div className="text-sm">{booking.checkout}</div>
                          </td>
                          <td className="px-4 py-2 text-right">
                            {booking.price} PKR/night
                          </td>
                          <td className="px-4 py-2 text-right font-semibold">
                            {booking.subtotal} PKR
                          </td>
                        </tr>
                      ))}
                      <tr className="border-t">
                        <td colSpan="3" className="px-4 py-2 text-right font-bold">
                          Total:
                        </td>
                        <td className="px-4 py-2 text-right font-bold">
                          {calculateTotalCost()} PKR
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Booking Form */}
        <form
          onSubmit={handleAddBooking}
          className="bg-white p-4 sm:p-8 shadow-xl rounded-lg"
        >
          <h2 className="text-center text-orange-600 text-2xl sm:text-3xl font-bold mb-6">
            Book Your Perfect Stay
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Personal Information */}
            <div className="space-y-1">
              <label className="font-semibold text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-200 rounded-lg"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-200 rounded-lg"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-200 rounded-lg"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-gray-700">Room Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-200 rounded-lg"
              >
                <option value="Master Bed">Master Bed</option>
                <option value="Twin Bed">Twin Bed</option>
                <option value="Triple Bed">Triple Bed</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-gray-700">Check-in Date</label>
              <input
                type="date"
                name="checkin"
                value={formData.checkin}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                className="w-full p-3 border-2 border-gray-200 rounded-lg"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-gray-700">Check-out Date</label>
              <input
                type="date"
                name="checkout"
                value={formData.checkout}
                onChange={handleChange}
                min={formData.checkin || new Date().toISOString().split("T")[0]}
                className="w-full p-3 border-2 border-gray-200 rounded-lg"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-gray-700">Number of Nights</label>
              <input
                type="text"
                readOnly
                value={nights > 0 ? nights : "0"}
                className="w-full p-3 border-2 border-gray-200 rounded-lg bg-gray-100"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-gray-700">Number of Rooms</label>
              <input
                type="number"
                name="rooms"
                value={formData.rooms}
                onChange={handleChange}
                min="1"
                max="20"
                className="w-full p-3 border-2 border-gray-200 rounded-lg"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-gray-700">Adults</label>
              <input
                type="number"
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                min="1"
                className="w-full p-3 border-2 border-gray-200 rounded-lg"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-gray-700">Children</label>
              <input
                type="number"
                name="children"
                value={formData.children}
                onChange={handleChange}
                min="0"
                className="w-full p-3 border-2 border-gray-200 rounded-lg"
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800"
            >
              Add Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
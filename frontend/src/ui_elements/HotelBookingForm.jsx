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
    <div className="min-h-screen bg-gradient-to-br p-4">
      <div className="max-w-2xl mx-auto">
        {/* Cart Preview - Improved mobile responsiveness */}
        <div className="mb-6 mt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <button
            onClick={handleViewCart}
            className="w-full sm:w-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-sm sm:text-base"
          >
            {showCart ? 'Hide Cart' : 'View Cart'} ({bookings.length} items)
          </button>
          {bookings.length > 0 && (
            <button
              onClick={() => navigate("/cart", { state: { bookings } })}
              className="w-full sm:w-auto bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 text-sm sm:text-base mt-2 sm:mt-0"
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

        {/* Cart Details - Improved for small screens */}
        {showCart && bookings.length > 0 && (
          <div className="bg-white p-3 sm:p-4 rounded-lg shadow-xl mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Cart Details</h3>
            <div className="overflow-x-auto -mx-3 sm:mx-0">
              <div className="min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm">Room</th>
                        <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm">Dates</th>
                        <th className="px-2 sm:px-4 py-2 text-right text-xs sm:text-sm">Price</th>
                        <th className="px-2 sm:px-4 py-2 text-right text-xs sm:text-sm">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((booking, index) => (
                        <tr key={index} className="border-t">
                          <td className="px-2 sm:px-4 py-2">
                            <div className="font-semibold text-xs sm:text-sm">{booking.category}</div>
                            <div className="text-xs text-gray-600">
                              {booking.rooms} room(s), {booking.nights} night(s)
                            </div>
                          </td>
                          <td className="px-2 sm:px-4 py-2">
                            <div className="text-xs sm:text-sm">{booking.checkin}</div>
                            <div className="text-xs sm:text-sm">{booking.checkout}</div>
                          </td>
                          <td className="px-2 sm:px-4 py-2 text-right text-xs sm:text-sm">
                            {booking.price} PKR
                          </td>
                          <td className="px-2 sm:px-4 py-2 text-right font-semibold text-xs sm:text-sm">
                            {booking.subtotal} PKR
                          </td>
                        </tr>
                      ))}
                      <tr className="border-t">
                        <td colSpan="3" className="px-2 sm:px-4 py-2 text-right font-bold text-xs sm:text-sm">
                          Total:
                        </td>
                        <td className="px-2 sm:px-4 py-2 text-right font-bold text-xs sm:text-sm">
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

        {/* Booking Form - Improved mobile layout */}
        <form
          onSubmit={handleAddBooking}
          className="bg-white p-4 sm:p-8 shadow-xl rounded-lg w-[100%]"
        >
          <h2 className="text-center text-orange-600 text-xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Book Your Perfect Stay
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
            {/* Personal Information */}
            <div className="space-y-1">
              <label className="font-semibold text-gray-700 text-sm sm:text-base">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border-2 border-gray-200 rounded-lg text-sm sm:text-base"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-gray-700 text-sm sm:text-base">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border-2 border-gray-200 rounded-lg text-sm sm:text-base"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-gray-700 text-sm sm:text-base">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border-2 border-gray-200 rounded-lg text-sm sm:text-base"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-gray-700 text-sm sm:text-base">Room Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border-2 border-gray-200 rounded-lg text-sm sm:text-base"
              >
                <option value="Master Bed">Master Bed</option>
                <option value="Twin Bed">Twin Bed</option>
                <option value="Triple Bed">Triple Bed</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-gray-700 text-sm sm:text-base">Check-in Date</label>
              <input
                type="date"
                name="checkin"
                value={formData.checkin}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                className="w-full p-2 sm:p-3 border-2 border-gray-200 rounded-lg text-sm sm:text-base"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-gray-700 text-sm sm:text-base">Check-out Date</label>
              <input
                type="date"
                name="checkout"
                value={formData.checkout}
                onChange={handleChange}
                min={formData.checkin || new Date().toISOString().split("T")[0]}
                className="w-full p-2 sm:p-3 border-2 border-gray-200 rounded-lg text-sm sm:text-base"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-gray-700 text-sm sm:text-base">Number of Nights</label>
              <input
                type="text"
                readOnly
                value={nights > 0 ? nights : "0"}
                className="w-full p-2 sm:p-3 border-2 border-gray-200 rounded-lg bg-gray-100 text-sm sm:text-base"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-gray-700 text-sm sm:text-base">Number of Rooms</label>
              <input
                type="number"
                name="rooms"
                value={formData.rooms}
                onChange={handleChange}
                min="1"
                max="20"
                className="w-full p-2 sm:p-3 border-2 border-gray-200 rounded-lg text-sm sm:text-base"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-gray-700 text-sm sm:text-base">Adults</label>
              <input
                type="number"
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                min="1"
                className="w-full p-2 sm:p-3 border-2 border-gray-200 rounded-lg text-sm sm:text-base"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-gray-700 text-sm sm:text-base">Children</label>
              <input
                type="number"
                name="children"
                value={formData.children}
                onChange={handleChange}
                min="0"
                className="w-full p-2 sm:p-3 border-2 border-gray-200 rounded-lg text-sm sm:text-base"
              />
            </div>
          </div>

          <div className="mt-4 sm:mt-6">
            <button
              type="submit"
              className="w-full bg-black text-white py-2 sm:py-3 px-6 rounded-lg hover:bg-gray-800 text-sm sm:text-base"
            >
              Add Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HotelBookingForm
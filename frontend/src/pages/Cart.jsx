import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { bookings } = location.state || {};

  if (!bookings || bookings.length === 0) {
    return <div className="p-4 md:p-6 text-center">No bookings in the cart!</div>;
  }

  const handleNewBooking = () => {
    navigate("/masterbed", { state: { bookings } });
  };

  const handleClearCart = () => {
    navigate("/masterbed", { state: { bookings: [] } });
  };

  const calculateTotalCost = () => {
    return bookings.reduce((total, booking) => total + booking.subtotal, 0);
  };

  const handleProceedToPayment = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Format bookings data to ensure proper types
      const formattedBookings = bookings.map(booking => ({
        name: booking.name,
        email: booking.email,
        phone: booking.phone,
        checkin: new Date(booking.checkin).toISOString(),
        checkout: new Date(booking.checkout).toISOString(),
        category: booking.category,
        adults: Number(booking.adults),
        children: Number(booking.children),
        rooms: Number(booking.rooms),
        nights: Number(booking.nights),
        price: Number(booking.price),
        subtotal: Number(booking.subtotal)
      }));

      // console.log('Sending bookings:', formattedBookings);

      const apiUrl = 'https://ptl-react.onrender.com/api/bookings';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedBookings),
      });

      // console.log('Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        // console.error('Error response body:', errorText);
        throw new Error(`Server responded with status: ${response.status}. Details: ${errorText || 'No details provided'}`);
      }

      const data = await response.json();
      // console.log('Server response:', data);

      if (data.success) {
        // Show success modal
        setIsModalOpen(true);
        setTimeout(() => {
          navigate('/masterbed', { state: { bookings: [] } });
        }, 5000);
      } else {
        setError(data.message || 'Error processing booking. Please try again.');
      }
    } catch (error) {
      console.error('Error details:', error);
      setError(`Error: ${error.message || 'Unable to connect to server. Please try again later.'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 md:p-6">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 z-50">
          <div className="flex justify-center items-center mb-4">
            <div className="relative w-20 h-20">
              {/* Spinner circles */}
              <div className="absolute inset-0 border-4 border-t-orange-500 border-r-orange-300 border-b-orange-200 border-l-orange-400 rounded-full animate-spin"></div>
              <div className="absolute inset-2 border-4 border-t-blue-500 border-r-blue-300 border-b-blue-200 border-l-blue-400 rounded-full animate-spin animate-reverse"></div>
              <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="text-white font-medium text-lg">Processing Payment...</div>
          <div className="text-white text-sm mt-2">Please wait while we confirm your reservation</div>
        </div>
      )}

      <h2 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6">Your Cart</h2>
      <div className="bg-white p-3 md:p-4 shadow-md rounded">
        {/* Desktop View - Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="table-auto w-full mb-4">
            <thead>
              <tr>
                <th className="border px-2 py-2">Product</th>
                <th className="border px-2 py-2">Price</th>
                <th className="border px-2 py-2">Nights</th>
                <th className="border px-2 py-2">Rooms</th>
                <th className="border px-2 py-2">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td className="border px-2 py-2">
                    <strong>{booking.category}</strong>
                    <div>Name: {booking.name}</div>
                    <div>Email: {booking.email}</div>
                    <div>Phone: {booking.phone}</div>
                    <div>Check-in: {booking.checkin}</div>
                    <div>Check-out: {booking.checkout}</div>
                    <div>Adults: {booking.adults}</div>
                    <div>Children: {booking.children}</div>
                  </td>
                  <td className="border px-2 py-2">{booking.price}</td>
                  <td className="border px-2 py-2">{booking.nights}</td>
                  <td className="border px-2 py-2">{booking.rooms}</td>
                  <td className="border px-2 py-2">{booking.subtotal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View - Cards */}
        <div className="md:hidden space-y-4">
          {bookings.map((booking, index) => (
            <div key={index} className="border rounded p-3 mb-3">
              <div className="font-bold text-lg mb-2">{booking.category}</div>

              <div className="grid grid-cols-2 gap-1 mb-2 text-sm">
                <div>Name:</div>
                <div>{booking.name}</div>

                <div>Email:</div>
                <div className="truncate">{booking.email}</div>

                <div>Phone:</div>
                <div>{booking.phone}</div>

                <div>Check-in:</div>
                <div>{booking.checkin}</div>

                <div>Check-out:</div>
                <div>{booking.checkout}</div>

                <div>Adults:</div>
                <div>{booking.adults}</div>

                <div>Children:</div>
                <div>{booking.children}</div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-3 pt-2 border-t">
                <div className="text-sm">
                  <div>Price: {booking.price}</div>
                  <div>Nights: {booking.nights}</div>
                  <div>Rooms: {booking.rooms}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold">Subtotal:</div>
                  <div>{booking.subtotal} PKR</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-right font-bold text-lg my-4">
          Total Cost: {calculateTotalCost()} PKR
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded mt-3 mb-3 text-sm md:text-base">
            <p>{error}</p>
          </div>
        )}

        <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-between gap-3 md:gap-4">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full md:w-auto">
            <button
              onClick={handleNewBooking}
              className="bg-gray-500 text-white py-2 px-3 rounded hover:bg-gray-600 text-sm md:text-base flex-1 md:flex-none"
              disabled={isLoading}
            >
              Add New Booking
            </button>
            <button
              onClick={handleClearCart}
              className="bg-red-500 text-white py-2 px-3 rounded hover:bg-red-400 text-sm md:text-base flex-1 md:flex-none"
              disabled={isLoading}
            >
              Clear Cart
            </button>
          </div>
          <button
            onClick={handleProceedToPayment}
            className={`${isLoading ? 'bg-gray-400' : 'bg-orange-500 hover:bg-orange-600'} text-white py-2 px-3 rounded text-sm md:text-base w-full md:w-auto mt-2 md:mt-0 transition-colors duration-300`}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Proceed to Payment'}
          </button>
        </div>
      </div>

      {/* Modal for successful booking */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white p-5 md:p-8 rounded shadow-lg max-w-md mx-auto w-full">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-center">Reservation Successful</h3>
            <p className="text-center mt-3 md:mt-4 text-sm md:text-base">Your booking has been successfully processed. A confirmation email has been sent to your registered email address.</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

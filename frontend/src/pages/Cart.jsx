// Cart.jsx
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
    return <div className="p-6 text-center">No bookings in the cart!</div>;
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
      
      console.log('Sending bookings:', formattedBookings);
      
      // Use a fallback mechanism to try multiple endpoints
      let response;
      
      try {
        // First try the production endpoint
        response = await fetch('https://ptlpassu.vercel.app/api/bookings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formattedBookings),
        });
      } catch (primaryError) {
        console.log('Primary endpoint failed, trying backup:', primaryError);
        
        // If that fails, try the alternative URL (check both URL patterns)
        response = await fetch('https://passubackend.vercel.app/api/bookings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formattedBookings),
        });
      }
  
      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Server response:', data);
  
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
      setError(error.message || 'Error connecting to server. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Your Cart</h2>
      <div className="bg-white p-4 shadow-md">
        <table className="table-auto w-full mb-4">
          <thead>
            <tr>
              <th className="border px-4 py-2">Product</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Nights</th>
              <th className="border px-4 py-2">Rooms</th>
              <th className="border px-4 py-2">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">
                  <strong>{booking.category}</strong>
                  <div>Name: {booking.name}</div>
                  <div>Email: {booking.email}</div>
                  <div>Phone: {booking.phone}</div>
                  <div>Check-in: {booking.checkin}</div>
                  <div>Check-out: {booking.checkout}</div>
                  <div>Adults: {booking.adults}</div>
                  <div>Children: {booking.children}</div>
                </td>
                <td className="border px-4 py-2">{booking.price}</td>
                <td className="border px-4 py-2">{booking.nights}</td>
                <td className="border px-4 py-2">{booking.rooms}</td>
                <td className="border px-4 py-2">{booking.subtotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-right font-bold text-lg">
          Total Cost: {calculateTotalCost()} PKR
        </div>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4 mb-4">
            <p>{error}</p>
          </div>
        )}
        
        <div className="mt-6 flex justify-between gap-4">
          <div className="flex gap-4">
            <button
              onClick={handleNewBooking}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              disabled={isLoading}
            >
              Add New Booking
            </button>
            <button
              onClick={handleClearCart}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              disabled={isLoading}
            >
              Clear Cart
            </button>
          </div>
          <button 
            onClick={handleProceedToPayment} 
            className={`${isLoading ? 'bg-gray-400' : 'bg-orange-500 hover:bg-orange-600'} text-white py-2 px-4 rounded`}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Proceed to Payment'}
          </button>
        </div>
      </div>
      
      {/* Modal for successful booking */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-center">Reservation Successful</h3>
            <p className="text-center mt-4">Your booking has been successfully processed. A confirmation email has been sent to your registered email address.</p>
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
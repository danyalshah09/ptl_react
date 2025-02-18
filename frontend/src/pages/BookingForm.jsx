import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const BookingForm = () => {
  const { addToCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: "",
    checkin: "",
    checkout: "",
    roomType: "Master Bed",
    nights: 1,
  });

  const roomPrices = { "Master Bed": 10000, "Twin Bed": 9000, "Triple Bed": 8000 };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const price = roomPrices[formData.roomType];
    addToCart({ ...formData, price });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Book a Room</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" name="name" placeholder="Your Name" className="p-2 border rounded" onChange={handleChange} required />
        <input type="date" name="checkin" className="p-2 border rounded" onChange={handleChange} required />
        <input type="date" name="checkout" className="p-2 border rounded" onChange={handleChange} required />
        <select name="roomType" className="p-2 border rounded" onChange={handleChange}>
          <option value="Master Bed">Master Bed - 10,000</option>
          <option value="Twin Bed">Twin Bed - 9,000</option>
          <option value="Triple Bed">Triple Bed - 8,000</option>
        </select>
        <input type="number" name="nights" min="1" className="p-2 border rounded" onChange={handleChange} required />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;

// import { useState } from "react";
// import axios from "axios";

// const BookingForm = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         checkin: "",
//         checkout: "",
//         adults: "",
//         children: "",
//         rooms: "",
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post("http://localhost:5000/send-email", formData);
//             alert(response.data.message);
//         } catch (error) {
//             console.error("Error:", error);
//             alert("Failed to send email.");
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className="p-4 bg-white shadow-lg rounded-lg">
//             <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
//             <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//             <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
//             <input type="date" name="checkin" onChange={handleChange} required />
//             <input type="date" name="checkout" onChange={handleChange} required />
//             <input type="number" name="adults" placeholder="Adults" onChange={handleChange} required />
//             <input type="number" name="children" placeholder="Children" onChange={handleChange} />
//             <input type="number" name="rooms" placeholder="Rooms" onChange={handleChange} required />
//             <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4">Book Now</button>
//         </form>
//     );
// };

// export default BookingForm;

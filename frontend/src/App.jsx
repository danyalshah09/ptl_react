import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ThirdPartyScripts from "./components/ThirdPartyScripts";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Amenities from "./pages/Amenities";
import Gallery from "./pages/Gallery";
import Dine from "./pages/Dine";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Masterbed from "./pages/Masterbed";
import Triplebed from "./pages/Triplebed";
import Twinbed from "./pages/Twinbed";
import Cart from "./pages/Cart"; // Import the Cart component
import About from "./pages/About";
import Location from "./pages/Location";
function App() {
  return (
    <>
      <Router>
        <ThirdPartyScripts />
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} /> {/* Add this line */}
          <Route path="/home" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/dine" element={<Dine />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/masterbed" element={<Masterbed />} />
          <Route path="/twinbed" element={<Twinbed />} />
          <Route path="/triplebed" element={<Triplebed />} />
          <Route path="/cart" element={<Cart />} /> {/* Add Cart Route */}
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />

          </Routes>
        <Footer />
      </Router>
      </>

  );
}

export default App;

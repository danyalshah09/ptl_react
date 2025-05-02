import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";

// Lazy load components
const Home = lazy(() => import("./pages/Home"));
const Rooms = lazy(() => import("./pages/Rooms"));
const Amenities = lazy(() => import("./pages/Amenities"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Dine = lazy(() => import("./pages/Dine"));
const Contact = lazy(() => import("./pages/Contact"));
const Masterbed = lazy(() => import("./pages/Masterbed"));
const Triplebed = lazy(() => import("./pages/Triplebed"));
const Twinbed = lazy(() => import("./pages/Twinbed"));
const Cart = lazy(() => import("./pages/Cart"));
const About = lazy(() => import("./pages/About"));
const Location = lazy(() => import("./pages/Location"));

// Loading fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
  </div>
);

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/dine" element={<Dine />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/masterbed" element={<Masterbed />} />
            <Route path="/twinbed" element={<Twinbed />} />
            <Route path="/triplebed" element={<Triplebed />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/location" element={<Location />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </>
  );
}

export default App;

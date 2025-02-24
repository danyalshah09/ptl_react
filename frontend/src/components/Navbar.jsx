import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../../public/assets/logo.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  // Add scroll event listener for sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=36.4918&lon=74.8553&appid=55e9528c3c2564b58091de5170b028bf&units=metric`
        );
        
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);

  const renderWeather = () => {
    if (loading) return <div className="text-xs whitespace-nowrap animate-pulse bg-slate-400">⛅ Loading...</div>;
    if (error) return <div className="text-xs whitespace-nowrap text-red-500">🌡️ Weather</div>;

    return (
      <div className="flex items-center gap-1 border border-gray-500 rounded-full bg-white/30 px-2 py-1 backdrop-blur-sm">
        <img
          src={`http://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`}
          alt="Weather Icon"
          className="h-6 w-6 drop-shadow-sm"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <span className="text-lg font-medium text-orange-500 whitespace-nowrap">
          {Math.round(weather?.main?.temp)}°C
        </span>
      </div>
    );
  };

  return (
    <nav 
      className={`w-full transition-all duration-300 ${
        isSticky 
          ? 'fixed top-0 left-0 border-b border-gray-200 bg-white/95 backdrop-blur-sm shadow-md z-50' 
          : 'relative bg-white/80 backdrop-blur-sm border-b border-gray-200'
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-2 md:px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={logo} className={`transition-all duration-300 ${isSticky ? 'h-12' : 'h-16'} w-auto`} alt="PTL Logo" />
        </Link>

        {/* Mobile Right Section */}
        <div className="flex items-center gap-2 md:hidden">
          {renderWeather()}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div 
          className={`md:flex md:items-center md:w-auto ${
            isOpen 
              ? "absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg" 
              : "hidden"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:gap-2 lg:gap-8 ">
            <ul className="flex flex-col md:flex-row md:space-x-2 lg:space-x-8 rtl:space-x-reverse font-medium py-4 md:py-0">
              {["Home", "Rooms", "Amenities", "Gallery", "Location", "Dine", "Contact", "About"].map((item) => (
                <li key={item} className="relative group">
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="block md:inline-block text-gray-700 hover:text-orange-500 px-3 lg:px-2 py-2 transition-colors text-base lg:text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Desktop Weather */}
            <div className="hidden md:block min-w-fit">
              {renderWeather()}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
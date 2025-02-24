import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    if (loading) return <div className="text-sm animate-pulse">⛅ Loading...</div>;
    if (error) return <div className="text-sm text-red-500">🌡️ Weather</div>;

    return (
      <div className="flex items-center gap-2 bg-white/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
        <img
          src={`http://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`}
          alt="Weather Icon"
          className="h-8 w-8 drop-shadow-sm"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <span className="text-lg font-medium text-gray-700">
          {Math.round(weather?.main?.temp)}°C
        </span>
      </div>
    );
  };

  return (
    <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo.jpg" className="h-16 w-auto" alt="PTL Logo" />
        </Link>

        {/* Mobile Right Section */}
        <div className="flex items-center gap-4 md:hidden">
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
        <div className={`w-full md:flex md:w-auto ${isOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col md:flex-row md:items-center md:gap-8 w-full">
            <ul className="flex flex-col md:flex-row md:space-x-6 rtl:space-x-reverse font-medium py-4 md:py-0">
              {["Home", "Rooms", "Amenities", "Gallery","Location", "Dine", "Contact","About"].map((item) => (
                <li key={item} className="relative group">
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="flex items-center gap-1 text-gray-700 hover:text-orange-500 px-3 py-2 transition-colors"
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Desktop Weather */}
            <div className="md:ml-auto mt-4 md:mt-0">
              {renderWeather()}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
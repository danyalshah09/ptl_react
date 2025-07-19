import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTripadvisor } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap">
          {/* Address Section */}
          <div className="flex flex-col items-center text-center w-full sm:w-1/3 mb-6">
            <h3 className="text-2xl font-semibold mb-3">Address</h3>
            <address className="italic mb-2">Passu Gojal Hunza Gilgit-Baltistan</address>
            <address className="italic">Located near Passu Cones Viewpoint</address>
            <a href="mailto:ptlpassu@gmail.com" className="mt-3">
              <button className="bg-black text-white py-2 px-4 hover:bg-gray-700 rounded">Email Us</button>
            </a>
          </div>

          {/* Contact & Social Links */}
          <div className="flex flex-col items-center text-center w-full sm:w-1/3 mb-6">
            <h3 className="text-2xl font-semibold mb-3">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+923554477788" className="hover:text-orange-500">
                  <i className="fas fa-phone mr-2"></i> +923554477788
                </a>
              </li>
              <li>
                <a href="#map_section_container" className="hover:text-orange-500">
                  <i className="fas fa-map-marker-alt mr-2"></i> Location
                </a>
              </li>
            </ul>
            {/* Social Icons */}
            <div className="flex gap-4 mt-3">
  <a
    href="https://www.facebook.com/ptlpassu"
    className="text-gray-400 hover:text-[#1877F2] transition-colors"
    aria-label="Facebook"
  >
    <FaFacebook className="h-8 w-8" />
  </a>
  <a
    href="https://www.instagram.com/ptl_passu?igsh=NW9tYXVkaHozOHpu"
    className="text-gray-400 hover:text-[#E4405F] transition-colors"
    aria-label="Instagram"
  >
    <FaInstagram className="h-8 w-8" />
  </a>
  <a
    href="https://wa.me/+923554477788"
    className="text-gray-400 hover:text-[#25D366] transition-colors"
    aria-label="WhatsApp"
  >
    <FaWhatsapp className="h-8 w-8" />
  </a>
  <a
    href="#"
    className="text-gray-400 hover:text-[#34E0A1] transition-colors"
    aria-label="Tripadvisor"
  >
    <FaTripadvisor className="h-8 w-8" />
  </a>
</div>

          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center text-center w-full sm:w-1/3">
            <h3 className="text-2xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-orange-500">About Us</a></li>
              <li><a href="#contact" className="hover:text-orange-500">Contact Us</a></li>
              <li><a href="#privacy-policy" className="hover:text-orange-500">Privacy Policy</a></li>
              <li><a href="#sitemap" className="hover:text-orange-500">Sitemap</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p>Copyright &copy; 2024 All Rights Reserved by <a href="#" class="text-orange-500 underline hover:text-orange-700">QubaSoft</a>
          </p>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed z-10 bottom-24 right-5 w-16 h-16 rounded-full shadow-2xl bg-gradient-to-r from-green-400 to-green-600 hover:scale-110 transition-transform duration-300 ease-in-out">
        <a href="https://wa.me/923554477788" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp">
          <img src="https://cdn-icons-png.flaticon.com/512/220/220236.png" alt="WhatsApp Logo" className="w-10 h-10 mx-auto my-3" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

// components/sections/HeroSection/HeroSection.jsx
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import Button from '../ui_elements/Button';
import Section from "../pages/Section"

const HeroSection = ({ subtitle, onCTAClick, ctaText = 'Book Now' }) => {
  const subtitleRef = useRef(null);

  useEffect(() => {
    if (subtitleRef.current) {
      const chars = subtitleRef.current.querySelectorAll("span");

      gsap.fromTo(
        chars,
        {
          opacity: 0.2,
          color: "#ffffff",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 1), 0 0 0px white", // base black shadow + zero glow
        },
        {
          opacity: 1,
          color: "#ffffff",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 1), 0 0 8px white", // base shadow + white glow
          stagger: 0.05,
          ease: "power2.out",
          duration: 0.8,
        }
      );

    }
  }, []);

  const renderSubtitleWithSpans = (text) =>
    text.split("").map((char, index) => (
      <span key={index} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <Section className="hero-section parallax_section h-full mt-4 w-full">
      <div className="hero-content parallax1 flex flex-col items-center justify-start mx-auto h-[50vh] lg:h-[70vh] w-[85%] bg-contain bg-center bg-fixed bg-no-repeat bg-[url('/assets/images/ptl_old.jpg')] mb-4">
        {subtitle && (
          <p
            ref={subtitleRef}
            className="hero-subtitle font-dancing_script text-2xl sm:text-xl md:text-3xl mt-6 text-center py-2 text-white"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
          >
            {renderSubtitleWithSpans(subtitle)}
          </p>
        )}

        {onCTAClick && (
          <Button
            onClick={onCTAClick}
            className="hero-cta btn_book py-2 px-6 bg-gray-300 text-black-700 text-center mt-4 hover:bg-gray-400 hover:text-white"
            aria-label="Navigate to room booking section"
          >
            {ctaText}
          </Button>
        )}
      </div>
    </Section>
  );
};

HeroSection.propTypes = {
  subtitle: PropTypes.string,
  onCTAClick: PropTypes.func,
  ctaText: PropTypes.string,
};

export default HeroSection;

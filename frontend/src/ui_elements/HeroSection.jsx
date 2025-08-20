// components/sections/HeroSection/HeroSection.jsx
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import Button from "./Button";
import Section from "../pages/Section";
import { useGsapScrollAnimation } from "../pages/hooks/useGsapScrollAnimation";


const HeroSection = ({ subtitle, onCTAClick, ctaText = "Book Now" }) => {
  const subtitleRef = useRef(null);
  const buttonRef = useGsapScrollAnimation("right", { duration: 1.2 });
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

  // Parallax single-background version (rolled back)

  return (
    <Section className="hero-section parallax_section h-full mt-4 w-full">
      <div className="hero-content parallax1 flex flex-col items-center justify-start mx-auto h-[50vh] lg:h-[70vh] w-[95%] bg-contain bg-center bg-no-repeat bg-fixed bg-[url('/assets/images/ptl_old.jpg')] mb-4">
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
            ref={buttonRef}
            onClick={onCTAClick}
            className="text-gray-900 hover:bg-white border hover:border-gray-300 focus:outline-none bg-transparent border-black  font-medium rounded-sm  text-sm px-5 py-2.5 me-2 mb-2  "
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

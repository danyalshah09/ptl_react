// pages/Home/Home.jsx
import React, { useRef } from 'react';
import RoomCategories from '../ui_elements/RoomCategories';
import Facilities from '../ui_elements/Facilities';
import MapSection from '../ui_elements/Map';
import VideoSection from './Video';
import Places from '../ui_elements/Places';
import Intro from '../ui_elements/Intro';
import CarouselCustomArrows from '../ui_elements/CarouselCustomArrows';
import Section from './Section';
import HeroSection from '../ui_elements/HeroSection';
import { useScrollTo } from './hooks/useScrollTo';
import { useEffect } from 'react';
import { useGsapScrollAnimation } from "./hooks/useGsapScrollAnimation";

import gsap from 'gsap';
const Home = () => {
  const roomCategoriesRef = useRef(null);
  const titleRef = useGsapScrollAnimation("down", { duration: 1.2 });
  const buttonRef = useGsapScrollAnimation("left", { duration: 1.2 });

  const scrollTo = useScrollTo();
  const handleBookNowClick = () => {
    scrollTo(roomCategoriesRef, { block: 'start' });
  };

  return (
    <main className="home-page">
      <h1

      ref={titleRef}
 className='hero-title text-center text-4xl mt-4 mb-4'> Passu Touist Lodge</h1>
      <HeroSection
        subtitle="Experience Comfort and Serenity Under the Majestic Passu Cones"
        onCTAClick={handleBookNowClick}
        ref={buttonRef}
        ctaText="Book Now"
      />

      <Section className="intro-section" id="intro">
        <Intro />
      </Section>


      <Section
        ref={roomCategoriesRef}
        className="rooms-section"
        id="rooms"
        aria-label="Room categories and booking"
      >
        <RoomCategories />
      </Section>

      <Section className="facilities-section" id="facilities">
        <Facilities />
      </Section>

      <Section className="carousel-section" id="gallery">
        <CarouselCustomArrows />
      </Section>


      <Section className="video-section" id="video">
        <VideoSection />
      </Section>

      <Section className="map-section" id="location">
        <MapSection />
      </Section>

      <Section className="places-section" id="attractions">
        <Places />
      </Section>
    </main>
  );
};

export default Home;
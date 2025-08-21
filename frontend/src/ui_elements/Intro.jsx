import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsapScrollAnimation } from "../pages/hooks/useGsapScrollAnimation";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const sectionRef = useRef(null);
  const heading1Ref = useRef(null);
  const text1Ref = useRef(null);
  const heading2Ref = useRef(null);
  const text2Ref = useRef(null);
  const img3Ref = useRef(null);
  const text3Ref = useRef(null);
  const signatureRef = useGsapScrollAnimation("down", {
    duration: 1.6,
    distance: 40,
  });

  const paraRef = useGsapScrollAnimation("down", {
    duration: 1.6,
    distance: 40,
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section 1 animation
      const timeline1 = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      if (heading1Ref.current) {
        timeline1.from(heading1Ref.current, {
          x: -60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      }

      if (text1Ref.current) {
        timeline1.from(
          text1Ref.current,
          {
            x: -40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        );
      }

      // Section 2 animation
      const timeline2 = gsap.timeline({
        scrollTrigger: {
          trigger: heading2Ref.current,
          start: "top 80%",
        },
      });

      if (img3Ref.current) {
        timeline2.from(img3Ref.current, {
          x: -80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      }

      if (heading2Ref.current) {
        timeline2.from(
          heading2Ref.current,
          {
            x: 60,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6"
        );
      }

      if (text2Ref.current) {
        timeline2.from(
          text2Ref.current,
          {
            x: 60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        );
      }

      // Section 3 animation
      const timeline3 = gsap.timeline({
        scrollTrigger: {
          trigger: text3Ref.current,
          start: "top 80%",
        },
      });

      if (text3Ref.current) {
        timeline3.from(text3Ref.current, {
          x: -60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white text-gray-800">
      {/* Section 1 */}
      <div className="max-w-6xl mx-auto px-6 py-10 items-center">
        <div className="space-y-6">
          <h3
            ref={heading1Ref}
            className="text-4xl text-center lg:text-5xl font-bold tracking-tight"
          >
            Welcome to{" "}
            <span className="text-orange-700 ">Passu Tourist Lodge</span>
          </h3>
          <p
            ref={text1Ref}
            className="text-lg  leading-relaxed text-gray-600 text-center"
          >
            Experience the breathtaking beauty of the Passu Cones from our cozy
            lodge in the heart of the Karakoram Range. Nestled by the Hunza
            River, Passu Tourist Lodge offers the perfect blend of comfort,
            charm, and nature. Whether you seek adventure or a peaceful escape,
            your unforgettable journey begins here.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-start">
        <div ref={img3Ref}>
          <img
            src="./assets/images/guest.webp"
            alt="Passu Tourist Lodge"
            className="  object-contain w-full lg:w-[90%] shadow-md mx-auto"
          />
        </div>
        <div>
          <h1
            ref={heading2Ref}
            className="text-4xl py-4 font-bold tracking-tight"
          >
            Discover Tranquility in Hunza
          </h1>
          <p
            ref={text2Ref}
            className="text-lg text-gray-600 leading-relaxed text-justify"
          >
            Passu is a hidden gem in the Karakoram Range, famous for its
            striking Passu Cones, vast glaciers, and breathtaking mountain
            scenery. Staying at our lodge means waking up to stunning views and
            immersing yourself in the beauty and culture of Hunza. From guiding
            you through local attractions to ensuring comfort and care, our aim
            is to provide all the facilities our beloved guests deserve. We want
            your stay in Passu to be not just a visit, but a warm and memorable
            experience. Our lodge is designed to feel like your home away from
            home, blending comfort with the natural charm of the mountains.
            Whether you are here for adventure, relaxation, or cultural
            exploration, we strive to make your journey effortless and
            enjoyable. Every guest is part of our story, and we are dedicated to
            creating moments you will carry with you long after you leave Passu.
          </p>
          <span ref={signatureRef} className="signature-style block mt-6 text-4xl text-orange-700">
            "Come as guests and leave as family"
          </span>
        </div>
      </div>

      {/* Section 3 */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 items-center">
        <div>
          <p
            ref={text3Ref}
            className="text-lg text-gray-600 leading-relaxed text-justify"
          >
            Here, every moment feels special — from sipping warm tea while
            gazing at the snow-capped peaks to wandering through quiet village
            paths that carry the whispers of centuries-old traditions. The
            Karakoram is not just a backdrop but a living canvas that adds depth
            and meaning to your stay. Whether you are seeking adventure on
            winding trails, peace in the embrace of nature, or a closer
            connection to the rich local culture, our lodge is designed to make
            each experience memorable. Every sunrise brings a new story, every
            sunset paints the mountains in gold, and in between, you’ll find
            comfort, warmth, and the genuine hospitality that makes your journey
            unforgettable.
          </p>
        </div>
        <div ref={img3Ref}>
          <img
            src="./assets/images/demo.webp"
            alt="Passu Tourist Lodge"
            className="  object-cover w-full lg:w-[75%] shadow-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;

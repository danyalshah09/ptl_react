import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const paragraphs = gsap.utils.toArray(".intro-paragraph");
      const images = gsap.utils.toArray(".intro-img");
      const headings = gsap.utils.toArray(".intro-heading");

      headings.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play reverse play reverse", // 👈 repeat on scroll in/out
            },
          }
        );
      });

      paragraphs.forEach((el) => {
        gsap.fromTo(
          el,
          { x: -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });

      images.forEach((el) => {
        gsap.fromTo(
          el,
          { x: 60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section className="w-full bg-white intro-section" ref={sectionRef}>
      <div className="gap-12 items-center py-8 px-4 mx-auto max-w-5xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-12">
        <div className="font-light text-gray-500 sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold intro-heading">
            Welcome to Passu Tourist Lodge
          </h2>
          <p className="mb-4 intro-paragraph">
            Experience breathtaking views of the Passu Cones from our cozy lodge
            in the heart of the Karakoram Range. Whether you seek adventure or
            relaxation, our comfortable rooms and prime location make us the
            perfect choice.
          </p>
          <p className="intro-paragraph">
            Enjoy hiking, trekking, and exploring nearby valleys while
            experiencing top-notch hospitality.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img className="rounded-lg intro-img" src="./assets/images/ptl_dining.jpg" alt="Dining Area" />
          <img className="mt-4 lg:mt-10 rounded-lg intro-img" src="./assets/images/testimonial1.jpg" alt="Guest Testimonial" />
        </div>
      </div>

      <div className="gap-12 items-center py-8 px-4 mx-auto max-w-5xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-12">
        <div className="w-full lg:col-span-1">
          <img className="lg:w-[80%] mx-auto intro-img" src="./assets/images/ptl11.jpg" alt="Passu Tourist Lodge" />
        </div>
        <div className="font-light text-gray-500 sm:text-lg">
          <h2 className="mb-4 mt-4 text-4xl tracking-tight font-extrabold intro-heading">
            Discover Tranquility in Hunza
          </h2>
          <p className="mb-4 intro-paragraph">
            Wake up to stunning views and immerse yourself in the natural beauty
            of the Karakoram Range. Our lodge blends culture, nature, and comfort
            for an unforgettable stay.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;

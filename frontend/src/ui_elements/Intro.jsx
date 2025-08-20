import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const sectionRef = useRef(null);
  const heading1Ref = useRef(null);
  const text1Ref = useRef(null);
  const heading2Ref = useRef(null);
  const text2Ref = useRef(null);
  const img3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section 1 animation - only animate elements that exist
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
        timeline1.from(text1Ref.current, {
          x: -40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        }, "-=0.5");
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
        timeline2.from(heading2Ref.current, {
          x: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        }, "-=0.6");
      }

      if (text2Ref.current) {
        timeline2.from(text2Ref.current, {
          x: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        }, "-=0.4");
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white text-gray-800">
      {/* Section 1 */}
      <div className="max-w-6xl mx-auto px-6 py-10 items-center">
        <div className="space-y-6">
          <h3 ref={heading1Ref} className="text-4xl text-center lg:text-5xl font-bold tracking-tight">
            Welcome to{" "}
            <span className="text-orange-700 ">Passu Tourist Lodge</span>
          </h3>
          <p ref={text1Ref} className="text-lg  leading-relaxed text-gray-600 text-center">
          Experience the breathtaking beauty of the Passu Cones from our cozy lodge in the heart of the Karakoram Range. Nestled by the Hunza River, Passu Tourist Lodge offers the perfect blend of comfort, charm, and nature. Whether you seek adventure or a peaceful escape, your unforgettable journey begins here.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-start">
        <div ref={img3Ref}>
          <img
            src="./assets/images/testimonial1.jpg"
            alt="Passu Tourist Lodge"
            className="  object-contain w-full lg:w-[90%] shadow-md mx-auto"
          />
        </div>
        <div >
        <h1 ref={heading1Ref} className="text-4xl py-4 font-bold tracking-tight">
            Discover {" "}
          Tranquility
            in Hunza
          </h1>
          <p ref={text2Ref} className="text-lg text-gray-600 leading-relaxed text-justify">


            Wake up to stunning views and immerse yourself in the natural beauty
            of the Karakoram Range. Our lodge blends culture, nature, and comfort
            for an unforgettable stay.
            Wake up to stunning views and immerse yourself in the natural beauty
            of the Karakoram Range. Our lodge blends culture, nature, and comfort
            for an unforgettable stay.
            Wake up to stunning views and immerse yourself in the natural beauty
            of the Karakoram Range. Our lodge blends culture, nature, and comfort
            for an unforgettable stay.
            Wake up to stunning views and immerse yourself in the natural beauty
            of the Karakoram Range. Our lodge blends culture, nature, and comfort
            for an unforgettable stay.
            Wake up to stunning views and immerse yourself in the natural beauty
            of the Karakoram Range. Our lodge blends culture, nature, and comfort
            for an unforgettable stay.
          </p>
          <span className="signature-style block mt-6 text-4xl text-orange-700">
            "Come as guests and leave as family"
          </span>
        </div>
      </div>




  {/* Section 3 */}
  <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 items-center">

        <div >
          <p ref={text2Ref} className="text-lg text-gray-600 leading-relaxed text-justify">


            Wake up to stunning views and immerse yourself in the natural beauty
            of the Karakoram Range. Our lodge blends culture, nature, and comfort
            for an unforgettable stay.
            Wake up to stunning views and immerse yourself in the natural beauty
            of the Karakoram Range. Our lodge blends culture, nature, and comfort
            for an unforgettable stay.
            Wake up to stunning views and immerse yourself in the natural beauty
            of the Karakoram Range. Our lodge blends culture, nature, and comfort
            for an unforgettable stay.

          </p>
        </div>
        <div ref={img3Ref}>
          <img
            src="./assets/images/demo.png"
            alt="Passu Tourist Lodge"
            className="  object-cover w-full lg:w-[75%] shadow-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;

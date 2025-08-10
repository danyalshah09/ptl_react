import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsapScrollAnimation } from "../pages/hooks/useGsapScrollAnimation";


const Intro = () => {
  const sectionRef = useRef(null);
  const welcometxtRef = useGsapScrollAnimation("left", { duration: 2 });
  const welcomeImg1Ref = useGsapScrollAnimation("right", { duration: 1.2 });
  const welcomeImg2Ref = useGsapScrollAnimation("right", { duration: 1.2 });

  const discovertxtRef = useGsapScrollAnimation("right", { duration: 1.2 });
  const discoverImgRef = useGsapScrollAnimation("left", { duration: 1.2 });


  return (

   <section className="w-full bg-white intro-section" ref={sectionRef}>
      <div className="gap-12 items-center py-8 px-4 mx-auto max-w-5xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-12">
        <div className="font-light text-gray-500 sm:text-lg" ref={welcometxtRef}>
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
  <div className="relative group">
    <img
    ref={welcomeImg1Ref}
      className=" intro-img shadow-lg object-cover transform-gpu transition-transform duration-700 group-hover:scale-105
                 sm:h-56 md:h-64 lg:h-72 xl:h-100"
      src="./assets/images/ptl_dining.jpg"
      alt="Dining Area"
    />
  </div>
  <div className="relative group -mt-6 lg:mt-8">
    <img
    ref={welcomeImg2Ref}
      className="intro-img shadow-lg object-cover aspect-[4/3] transform-gpu transition-transform duration-700 group-hover:scale-105
                 sm:h-56 md:h-64 lg:h-72 xl:h-80"
      src="./assets/images/testimonial1.jpg"
      alt="Guest Testimonial"
    />
  </div>
</div>

      </div>

      <div className="gap-12 items-center py-8 px-4 mx-auto max-w-5xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-12">
        <div className="w-full lg:col-span-1" ref={discoverImgRef}>
          <img className="lg:w-[80%] mx-auto intro-img" src="./assets/images/ptl11.jpg" alt="Passu Tourist Lodge" />
        </div>
        <div className="font-light text-gray-500 sm:text-lg" ref={discovertxtRef}>
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

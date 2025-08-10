import { useRef } from 'react';
import { useGsapScroll } from './hooks/useGsapScroll';
import { useGsapScrollAnimation } from "./hooks/useGsapScrollAnimation";

export default function AboutUs() {
  const titleRef = useGsapScrollAnimation("left", { duration: 1.2 });
  const subtitleRef = useGsapScrollAnimation("down", { duration: 1.2 });
  const heritageRef = useGsapScrollAnimation("left", { duration: 1.2 });
  const imageRef = useGsapScrollAnimation("down", { duration: 2 });
  const whyTextRef = useGsapScrollAnimation("left",{ duration: 1.2 });
  const longImageRef = useGsapScrollAnimation("left", { duration: 1.2 });
  const rightImage1Ref = useGsapScrollAnimation("right", { duration: 1.2 });
  const rightImage2Ref = useGsapScrollAnimation("right", { duration: 1.2 });

  // const headerRef = useRef();
  // const subtitleRef = useRef();
  // const heritageRef = useRef();
  const statsRef = useRef();
  // const imageRef = useRef();
  // const longImageRef = useRef();
  // const rightImage1Ref = useRef();
  // const rightImage2Ref = useRef();
  // const whyTextRef = useRef();

  // useGsapScroll(headerRef, {
  //   from: { y: 100, opacity: 0 },
  //   to: { y: 0, opacity: 1, duration: 1 },
  // });

  // useGsapScroll(subtitleRef, {
  //   from: { x: -100, opacity: 0 },
  //   to: { x: 0, opacity: 1, duration: 2 },
  // });

  // useGsapScroll(heritageRef, {
  //   from: { x: -100, opacity: 0 },
  //   to: { x: 0, opacity: 1, duration: 1 },
  // });

  useGsapScroll(statsRef, {
    from: { scale: 0.5, opacity: 0 },
    to: { scale: 1, opacity: 1, duration: 0.8, stagger: 0.2 },
  });

  // useGsapScroll(imageRef, {
  //   from: { y: 100, opacity: 0 },
  //   to: { y: 0, opacity: 1, duration: 1 },
  // });

  // useGsapScroll(whyTextRef, {
  //   from: { y: 30, opacity: 0 },
  //   to: { y: 0, opacity: 1, duration: 0.8 },
  // });


  // useGsapScroll(longImageRef, {
  //   from: { x: -100, opacity: 0 },
  //   to: { x: 0, opacity: 1, duration: 1},
  // });


  // useGsapScroll(rightImage1Ref, {
  //   from: { x: 100, opacity: 0 },
  //   to: { x: 0, opacity: 1, duration: 1},
  // });



  // useGsapScroll(rightImage2Ref, {
  //   from: { x: 100, opacity: 0 },
  //   to: { x: 0, opacity: 1, duration: 1},
  // });

  return (
      <div className="bg-white">
        {/* Hero Section */}
       <section
        className="relative h-[600px] flex items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: "url('/assets/about/main/ptl_outside.webp')" }}
>
  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/30" />
  <div className="relative max-w-6xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl mb-6 leading-tight" ref={titleRef}>
      Passu Tourist Lodge
      <br />
            <span className="text-orange-300">Where Mountain Majesty Meets Modern Comfort</span>
    </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" ref={subtitleRef}>
      Nestled at the foot of the iconic Passu Cones, we've been curating unforgettable Himalayan experiences since 2015
    </p>
  </div>
</section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="border-l-4 border-orange-600 pl-6" ref={heritageRef}>
              <h2 className="text-4xl font-serif text-gray-900 mb-4">Our Heritage</h2>
                <p className="text-gray-600 leading-relaxed">
  Founded by local mountaineering experts, Passu Tourist Lodge was born from a vision to share the rich Wakhi culture with the world.
  What began in 1992 as a modest 5-room guesthouse has grown into a 25-room sustainable lodge, consistently ranked among Pakistan’s premier mountain retreats.
  The lodge proudly partners with leading tourism companies to enhance the experience for both domestic and international travelers.
</p>

              </div>

            <div className="grid grid-cols-2 gap-8" ref={statsRef}>
                {[
                  { number: '8+', label: 'Years of Excellence' },
                  { number: '10k+', label: 'Guests Hosted' },
                  { number: '95%', label: 'Guest Satisfaction' },
                { number: '100+', label: 'Tour Companies' }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 border rounded-lg">
                    <p className="text-3xl font-serif text-orange-600 mb-2">{stat.number}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <img
              src="/assets/about/main/ptl_backyard.webp"
              alt="Our History"
              ref={imageRef}
              className="shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              decoding="async"
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-8 py-4 rounded-lg shadow-md">
                <p className="text-lg text-black text-center">Since 1992.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          <div className="space-y-8" ref={whyTextRef}>
              <h2 className="text-3xl font-serif text-gray-900">The Passu Difference</h2>
              <div className="space-y-6">
                {[
                  "Prime location with 360° mountain views",
                  "Wakhi cuisine restaurant",
                  "Musical programs",
                  "Eco-certified sustainable operations",
                  "Quality service"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="relative group">
                <img
                ref={longImageRef}
                src="/assets/about/main/ptl_9.webp"
              alt="Lodge"
                className="h-full w-full object-cover rounded-xl transform-gpu will-change-transform group-hover:scale-105 transition-transform duration-500"

                loading="lazy"
                decoding="async"
                />
              <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-semibold">Classic Accommodations</p>
                  <p className="text-sm opacity-90">Traditional design meets modern comfort</p>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="relative group h-48">
                  <img
                  src="/assets/about/main/ptl_.webp"
              alt="Dining"
                  className="h-full w-full object-cover rounded-xl transform-gpu will-change-transform group-hover:scale-105 transition-transform duration-500"
                  ref={rightImage1Ref}
                  loading="lazy"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm">Peaceful Environment</p>
                  </div>
                </div>

                <div className="relative group h-48">
                  <img
                  src="/assets/about/main/welcome2.webp"
              alt="Activities"
                  className="h-full w-full object-cover rounded-xl transform-gpu will-change-transform group-hover:scale-105 transition-transform duration-500"
                  ref={rightImage2Ref}
                  loading="lazy"
                  decoding="async"
                  />
                <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm">Cultural Experiences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

import React from "react";

const Intro = () => {
  return (
    <section className="bg-white">
      <div className="gap-12 items-center py-8 px-4 mx-auto max-w-5xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-12">
        <div className="font-light text-gray-500 sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
            Welcome to Passu Tourist Lodge
          </h2>
          <p className="mb-4">
            Experience breathtaking views of the Passu Cones from our cozy lodge
            in the heart of the Karakoram Range. Whether you seek adventure or
            relaxation, our comfortable rooms and prime location make us the
            perfect choice.
          </p>
          <p>
            Enjoy hiking, trekking, and exploring nearby valleys while
            experiencing top-notch hospitality.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img className="w-full rounded-lg" src="./assets/images/ptl_dining.jpg" alt="Dining Area" />
          <img className="mt-4 w-full lg:mt-10 rounded-lg" src="./assets/images/testimonial1.jpg" alt="Guest Testimonial" />
        </div>
      </div>

      <div className="gap-12 items-center py-8 px-4 mx-auto max-w-5xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-12">
        <div className="w-full lg:col-span-1">
          <img className="lg:w-[80%] mx-auto" src="./assets/images/ptl11.jpg" alt="Passu Tourist Lodge" />
        </div>
        <div className="font-light text-gray-500 sm:text-lg">
          <h2 className="mb-4 mt-4 text-4xl tracking-tight font-extrabold">
            Discover Tranquility in Hunza
          </h2>
          <p className="mb-4">
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

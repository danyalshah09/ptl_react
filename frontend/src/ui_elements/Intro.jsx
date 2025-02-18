import React from "react";

export const Intro = () => {
  return (
    <section className="bg-white">
      {/* First Section */}
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
            Welcome to Passu Tourist Lodge
          </h2>
          <p className="mb-4">
            Looking for a serene retreat in Hunza with breathtaking views of the
            Passu Cones? Passu Tourist Lodge is your perfect choice. Nestled in
            the heart of the Karakoram Range, our lodge offers a unique
            experience that combines the awe-inspiring beauty of Passu with the
            comfort of well-appointed rooms. Whether you're seeking a peaceful
            escape or an adventure-filled stay, we provide an ideal haven for
            all travelers. Our lodge's prime location offers stunning views of
            the Passu Cones and surrounding glaciers. Guests can immerse
            themselves in the natural beauty, with opportunities for hiking,
            trekking, and exploring the nearby valleys. Each room is designed to
            ensure a comfortable and restful stay, making it an ideal base for
            your Hunza adventures.
          </p>
          <p>
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="./assets/images/ptl_dining.jpg"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full h-full lg:mt-10 rounded-lg"
            src="./assets/images/testimonial1.jpg"
            alt="office content 2"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="w-full lg:col-span-1">
          <img
            className="w-[90%] mx-auto"
            src="./assets/images/ptl11.jpg"
            alt="Passu Tourist Lodge"
          />
        </div>
        <div className="font-light text-gray-500 sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
            Discover Tranquility in the Heart of Hunza
          </h2>
          <p className="mb-4">
            Our lodge offers more than just a place to stay. It’s a gateway to
            the majestic beauty of the Karakoram Range. Each morning, wake up to
            breathtaking views of the Passu Cones and experience the hospitality
            that makes your stay unforgettable.
          </p>
          <p>
            Join us for an authentic experience, blending culture, nature, and
            comfort, all in one place.
          </p>
        </div>
      </div>
    </section>
  );
};

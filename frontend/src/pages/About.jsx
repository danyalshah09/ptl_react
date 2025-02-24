import { Leaf, Mountain, Diamond } from 'lucide-react';

export default function AboutUs() {
    return (
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="./assets/rooms/ptl_outside.jpg"
              alt="Passu Lodge"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/30" />
          </div>
          
          <div className="relative max-w-6xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl  mb-6 leading-tight">
              Passu Tourist Lodge
              <br />
              <span className="text-orange-300 ">Where Mountain Majesty Meets Modern Comfort</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Nestled at the foot of the iconic Passu Cones, we've been curating unforgettable Himalayan experiences since 2015
            </p>
          </div>
        </section>
  
        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="border-l-4 border-orange-600 pl-6">
                <h2 className="text-3xl font-serif text-gray-900 mb-4">Our Heritage</h2>
                <p className="text-gray-600 leading-relaxed">
                  Founded by local mountaineering experts, Passu Tourist Lodge emerged from a passion to share 
                  the Wakhi culture with the world. What began as a modest 5-room guesthouse has evolved into 
                  a 25-room sustainable lodge, consistently rated among Pakistan's top mountain retreats.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                {[
                  { number: '8+', label: 'Years of Excellence' },
                  { number: '10k+', label: 'Guests Hosted' },
                  { number: '95%', label: 'Guest Satisfaction' },
                  { number: '15', label: 'Cultural Experiences' }
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
              src="./assets/rooms/ptl_backyard.jpg"
              alt="Our History"
                className=" shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-8 py-4 rounded-lg shadow-md">
                <p className="text-lg text-black text-center">Since 1992.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Mission & Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl  text-gray-900 mb-4">Our Guiding Principles</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The foundation of every decision we make at Passu Tourist Lodge
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
               {
                icon: <Leaf className="w-6 h-6 text-black" />,
                title: 'Sustainable Stewardship',
                description: 'Solar-powered facility · Zero single-use plastics · Local sourcing'
              },
              {
                icon: <Mountain className="w-6 h-6 text-black" />,
                title: 'Cultural Preservation',
                description: 'Wakhi architecture · Traditional cuisine · Craft workshops'
              },
              {
                icon: <Diamond className="w-6 h-6 text-black" />,
                title: 'Luxurious Simplicity',
                description: 'Modern amenities · Handcrafted furnishings · Personalized service'
              }
              ].map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-6">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
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
              src="./assets/about/ptl_9.jpg"
              alt="Lodge"
                  className="h-full w-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 rounded-xl" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="font-semibold">Classic Accommodations</p>
                  <p className="text-sm opacity-90">Traditional design meets modern comfort</p>
                </div>
              </div>
              
              <div className="grid gap-6">
                <div className="relative group h-48">
                  <img
              src="./assets/about/ptl_.jpg"
              alt="Dining"
                    className="h-full w-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 rounded-xl" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm">Peaceful Enviroment</p>
                  </div>
                </div>
                
                <div className="relative group h-48">
                  <img
              src="./assets/about/welcome2.jpg"
              alt="Activities"
                    className="h-full w-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 rounded-xl" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
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
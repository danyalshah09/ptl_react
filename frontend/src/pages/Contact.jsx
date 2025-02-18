import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCommentDots } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-800 max-w-2xl mx-auto">
            Reach out to us for inquiries, collaborations, or any assistance you need.
          </p>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            {[
              { Icon: FaPhone, title: "Direct Line", detail: "+923554477788", note: "Available 24/7 for urgent inquiries" },
              { Icon: FaEnvelope, title: "Email Support", detail: "ptlpassu@gmail.com", note: "Typically responds within 2 hours" },
              { Icon: FaMapMarkerAlt, title: "Headquarters", detail: "Passu Gojal Hunza, Gilgit-Baltistan", note: "Get Directions →" }
            ].map(({ Icon, title, detail, note }, idx) => (
              <div key={idx} className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 bg-gray-100 p-4 rounded-xl">
                    <Icon className="h-8 w-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
                    <p className="text-lg text-gray-300 hover:text-[#E96138] transition-colors cursor-pointer">
                      {detail}
                    </p>
                    <p className="mt-3 text-sm text-gray-400">{note}</p>
                  </div>
                </div>
              </div>
            ))}

           
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-10 rounded-2xl shadow-lg">
            <form className="space-y-8">
              {[
                { id: "name", label: "Full Name", type: "text", placeholder: "Full Name" },
                { id: "email", label: "Email Address", type: "email", placeholder: "email" }
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-lg font-medium text-gray-300 mb-3">{label}</label>
                  <input
                    type={type}
                    id={id}
                    className="w-full px-5 py-3 text-lg bg-gray-700 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-[#E96138] focus:border-transparent transition-all"
                    placeholder={placeholder}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-300 mb-3">Your Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-5 py-3 text-lg bg-gray-700 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-[#E96138] focus:border-transparent transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#E96138] text-white py-4 px-8 rounded-xl text-lg font-semibold hover:bg-opacity-80 transition-all flex items-center justify-center gap-3"
              >
                <FaCommentDots className="h-6 w-6" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

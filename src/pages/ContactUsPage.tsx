import { Helmet } from 'react-helmet';
import React, { useState } from 'react';

const ContactPage = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleContactClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: 'url("/uploads/contactusbg3.jpg")',  // Path to your background image
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.7)', // Darken the image
            }}
          ></div>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Contact Us
          </h1>
          <p
            className="text-lg text-white mb-6 max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Choose how you'd like to contact us:
          </p>
          <button
            onClick={handleContactClick}
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            Contact Options
          </button>
        </div>
      </section>

      {/* Contact Options Section */}
      {showOptions && (
        <section className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white shadow-lg rounded-lg p-6 w-80 animate-slide-in">
            <h2 className="text-2xl font-semibold mb-4 text-center">Contact Options</h2>
            <div className="space-y-4">
              <a
                href="tel:+1234567890"
                className="block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition text-center"
              >
                Call Us
              </a>
              <a
                href="mailto:example@example.com"
                className="block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition text-center"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ContactPage;
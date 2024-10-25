import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "../Button";

export function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="bg-white font-graphik mx-auto px-4 py-16 md:py-24">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl text-gray-900 mb-4">Contact Us</h1>
        <div className="max-w-2xl mx-auto">
          <p className="hidden md:block text-xl text-gray-600 mb-2">
            Most calendars are designed for teams.
          </p>
          <p className="md:hidden text-xl text-gray-600 mb-2">
            Most calendars are <br /> designed for teams.
          </p>
          <p className="hidden md:block text-xl text-gray-600">
            Slate is designed for freelancers
          </p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="md:hidden flex justify-center space-x-6 mb-16">
        <a href="#" className="text-blue-500">
          <span className="sr-only">Twitter</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        </a>
        <a href="#" className="text-blue-500">
          <span className="sr-only">Facebook</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
        <a href="#" className="text-blue-500">
          <span className="sr-only">LinkedIn</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>

      {/* Contact Details */}
      <div className="md:hidden grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        <div className="flex items-start space-x-2">
          <MapPin className="w-8 h-8 text-blue-600 mb-1 ml-3" />
          <p className="text-gray-600 text-sm text-left ">
            6386 Spring St undefined Anchorage, <br /> Georgia 12473 United
            States
          </p>
        </div>
        <div className="flex items-start space-x-2">
          <Phone className="w-8 h-8 text-blue-600 mb-1 ml-3" />
          <p className="text-gray-600 text-sm">(843) 555-0130</p>
        </div>
        <div className="flex items-start space-x-2">
          <Mail className="w-8 h-8 text-blue-600 mb-1 ml-3" />
          <p className="text-gray-600 text-sm">willie.jennings@example.com</p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Contact Form */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 w-full md:p-8 max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-full bg-gray-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-full bg-gray-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows="6"
                className="w-full px-4 py-3 rounded-sm bg-gray-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0"
                required
              ></textarea>
            </div>
            <Button className="w-full max-w-[145px] md:w-[172px] ml-0 md:ml-2 hover:bg-blue-600">
              Send
            </Button>
          </form>
        </div>

        {/* Contact Information and Map */}
        <div className="space-y-8">
          {/* Contact Details */}
          <div className="hidden md:block grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center text-center">
              <MapPin className="w-4 h-4 text-blue-600 mb-1" />
              <p className="text-gray-600 text-sm">
                6386 Spring St undefined Anchorage, Georgia 12473 United States
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Phone className="w-4 h-4 text-blue-600 mb-1" />
              <p className="text-gray-600 text-sm">(843) 555-0130</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Mail className="w-4 h-4 text-blue-600 mb-1" />
              <p className="text-gray-600 text-sm">
                willie.jennings@example.com
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="hidden md:flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093706!2d144.95592331531686!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f43b77c9%3A0xb1f9d3b2dc4201a6!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1632428388273!5m2!1sen!2sau"
              allowFullScreen=""
              loading="lazy"
              className="w-[400px] h-[316px] flex items-center"
            />
          </div>

          {/* Social Media Links */}
          <div className="hidden md:block flex justify-center space-x-6">
            <a href="#" className="text-blue-500">
              <span className="sr-only">Twitter</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" className="text-blue-500">
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="text-blue-500">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

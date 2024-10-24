import { MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#282c4b] text-white py-8 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Pages Column */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-4 md:mb-6">Pages</h3>
            <ul className="space-y-3 md:space-y-4">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">Product</a></li>
              <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>

          {/* Tomothy Column */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-4 md:mb-6">Tomothy</h3>
            <ul className="space-y-3 md:space-y-4">
              <li><a href="#" className="hover:text-gray-300">Eleanor Edwards</a></li>
              <li><a href="#" className="hover:text-gray-300">Ted Robertson</a></li>
              <li><a href="#" className="hover:text-gray-300">Annette Russell</a></li>
              <li><a href="#" className="hover:text-gray-300">Jennie Mckinney</a></li>
              <li><a href="#" className="hover:text-gray-300">Gloria Richards</a></li>
            </ul>
          </div>

          {/* Jane Black Column */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-4 md:mb-6">Jane Black</h3>
            <ul className="space-y-3 md:space-y-4">
              <li><a href="#" className="hover:text-gray-300">Philip Jones</a></li>
              <li><a href="#" className="hover:text-gray-300">Product</a></li>
              <li><a href="#" className="hover:text-gray-300">Colleen Russell</a></li>
              <li><a href="#" className="hover:text-gray-300">Marvin Hawkins</a></li>
              <li><a href="#" className="hover:text-gray-300">Bruce Simmmons</a></li>
            </ul>
          </div>

          {/* Contact Info & Social Media */}
          <div className="space-y-6 text-center md:text-left">
            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <MapPin size={20} />
                <span className="text-sm md:text-base">7480 Mockingbird Hill undefined</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Phone size={20} />
                <span className="text-sm md:text-base">(239) 555-0108</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:opacity-80">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="#" className="hover:opacity-80">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                </svg>
              </a>
              <a href="#" className="hover:opacity-80">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
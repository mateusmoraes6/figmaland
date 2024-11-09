import { useState, useEffect } from "react";
import figmalandLogo from "../../assets/images/brands/figmaland-logo.png";
import twitter from "../../assets/images/socialmedia/twitter.png";
import facebook from "../../assets/images/socialmedia/facebook.png";
import linkedin from "../../assets/images/socialmedia/linkedin.png";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const mainSection = document.querySelector("section");
      if (mainSection) {
        const mainHeight = mainSection.offsetHeight;
        setIsScrolled(window.scrollY > mainHeight - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 right-0 z-20 transition-all duration-300 
            ${isScrolled ? "bg-dark-Background" : "bg-transparent"}
            ${isMenuOpen ? "bg-dark-Background" : ""}`}
    >
      <div className="flex items-center justify-between py-4 px-6">
        <div>
          <img
            src={figmalandLogo}
            alt="Figma Land Logo"
            className="w-[120px] md:w-[200px] h-auto"
          />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-xs text-white font-medium hover:underline"
          >
            Home
          </a>
          <a
            href="#"
            className="text-xs text-white font-medium hover:underline"
          >
            Product
          </a>
          <a
            href="#"
            className="text-xs text-white font-medium hover:underline"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-xs text-white font-medium hover:underline"
          >
            About
          </a>
          <a
            href="#"
            className="text-xs text-white font-medium hover:underline"
          >
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-white">
            <img src={twitter} alt="Twitter" className="w-[30px]" />
          </a>
          <a href="#" className="text-white">
            <img src={facebook} alt="Facebook" className="w-[30px]" />
          </a>
          <a href="#" className="text-white">
            <img src={linkedin} alt="LinkedIn" className="w-[30px]" />
          </a>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-4 pt-2 pb-4 space-y-4 bg-dark-Background">
          <a
            href="#"
            className="block text-sm text-white font-medium hover:bg-blue-500 rounded p-2"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-sm text-white font-medium hover:bg-blue-500 rounded p-2"
          >
            Product
          </a>
          <a
            href="#"
            className="block text-sm text-white font-medium hover:bg-blue-500 rounded p-2"
          >
            Pricing
          </a>
          <a
            href="#"
            className="block text-sm text-white font-medium hover:bg-blue-500 rounded p-2"
          >
            About
          </a>
          <a
            href="#"
            className="block text-sm text-white font-medium hover:bg-blue-500 rounded p-2"
          >
            Contact
          </a>

          <div className="flex items-center space-x-4 pt-4">
            <a href="#" className="text-white">
              <img src={twitter} alt="Twitter" className="w-[25px]" />
            </a>
            <a href="#" className="text-white">
              <img src={facebook} alt="Facebook" className="w-[25px]" />
            </a>
            <a href="#" className="text-white">
              <img src={linkedin} alt="LinkedIn" className="w-[25px]" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

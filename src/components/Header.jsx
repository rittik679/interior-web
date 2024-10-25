import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu open/close

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the mobile menu open/close
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ease-in-out ${
        isScrolled ? "px-4 py-1 shadow-md" : "px-10 py-5"
      } `}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          🏠
        </div>
        {/* Hamburger Menu Icon for mobile */}
        <div className="lg:hidden">
          <button
            className="text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:space-x-6 lg:items-center lg:block`}
        >
          <Link to="/" className="block lg:inline-block text-lg text-gray-800 hover:text-gray-500">
            Home
          </Link>
          <Link to="/about" className="block lg:inline-block text-lg text-gray-800 hover:text-gray-500">
            About
          </Link>
          <Link to="/service" className="block lg:inline-block text-lg text-gray-800 hover:text-gray-500">
            Service
          </Link>
          <Link to="/contact" className="block lg:inline-block text-lg text-gray-800 hover:text-gray-500">
            Contact
          </Link>
        </nav>

        {/* Call to Action Button */}
        <div className="hidden lg:block">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
            Contact Now
          </button>
        </div>
      </div>

      {/* Mobile Menu for Contact Button */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4">
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg">
            Contact Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

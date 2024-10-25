import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm">
            We are a leading company providing excellent services in various fields. Our goal is to deliver quality and value to our clients.
          </p>
        </div>

        {/* Navigation Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/services" className="hover:text-gray-400">Services</Link></li>
            <li><Link to="/projects" className="hover:text-gray-400">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li><span>Phone: (123) 456-7890</span></li>
            <li><span>Email: info@company.com</span></li>
            <li><span>Address: 123 Main St, City, Country</span></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <i className="fab fa-facebook"></i> Facebook
            </Link>
            <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i> Twitter
            </Link>
            <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i> Instagram
            </Link>
            <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <i className="fab fa-linkedin"></i> LinkedIn
            </Link>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

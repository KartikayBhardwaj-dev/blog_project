import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For controlling mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/" className="text-2xl font-light text-gray-900">
            BLOG & MORE
          </NavLink>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/about" className="text-gray-500 hover:text-black">
            About
          </NavLink>
          <NavLink to="/signin" className="text-gray-500 hover:text-black">
            Login
          </NavLink>
          <NavLink to="/contact" className="text-gray-500 hover:text-black">
            Contact
          </NavLink>
          <NavLink to="/blogpost" className="text-gray-500 hover:text-black">
            Blog Post's
          </NavLink>
        </div>

        {/* Sign In / Sign Up Buttons (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <NavLink to="/signin" className="text-gray-500 hover:text-black">
            Sign In
          </NavLink>
          <NavLink to="/signup" className="text-gray-500 hover:text-black">
            Sign Up
          </NavLink>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-black focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <NavLink
            to="/about"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/login"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Login
          </NavLink>
          <NavLink
            to="/contact"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/blogpost"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Blog Post's
          </NavLink>
          <NavLink
            to="/signin"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Sign In
          </NavLink>
          <NavLink
            to="/signup"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default CustomNavbar;
import React from "react";
import { ModeToggle } from "../shared/darkmode";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center py-4">
      <nav className="w-3/4 bg-transparent backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-full px-8 py-4 shadow-lg dark:shadow-xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              Brand
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium"
            >
              Contact
            </a>
          </div>

          <ModeToggle />

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

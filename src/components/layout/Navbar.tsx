import React from "react";
import { ModeToggle } from "../shared/darkmode";
import { Button } from "../ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center py-4">
      <nav className="w-[90%] bg-transparent backdrop-blur-xl border border-black/10 dark:border-white/30 rounded-full px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Button
              asChild
              className="dark:bg-transparent hover:bg-black cursor-pointer"
            >
              <Link className="h-[100%]" href="/">
                <img
                  className="h-13 w-45"
                  src="/images/new-logo-5.png"
                  alt=""
                />
              </Link>
            </Button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium"
            >
              Contact
            </a>
          </div>

          <ModeToggle />

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
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

"use client";

import React, { useState, useEffect } from "react";
import { ModeToggle } from "../shared/darkmode";
import { Button } from "../ui/button";
import Link from "next/link";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when at top of page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", controlNavbar);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full flex justify-center pb-4 z-20 transition-transform duration-300 ease-in-out ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <nav
        className="w-full bg-transparent backdrop-blur-sm border border-black/10 dark:border-white/30 px-8 py-4"
        style={{
          borderBottomLeftRadius: "30px",
          borderBottomRightRadius: "30px",
        }}
      >
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
          <div className="hidden md:flex flex-1 justify-end items-center space-x-8 mr-8">
            <a
              href="#"
              className="text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-bold text-md"
            >
              Partners
            </a>
            <a
              href="#"
              className="text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-bold text-md"
            >
              Awards
            </a>
            <a
              href="#"
              className="text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-bold text-md"
            >
              Events
            </a>
            <a
              href="#"
              className="text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-bold text-md"
            >
              Careers
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

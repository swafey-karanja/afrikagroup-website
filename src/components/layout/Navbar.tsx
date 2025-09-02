"use client";

import React, { useState, useEffect } from "react";
import { ModeToggle } from "../shared/darkmode";
import { Button } from "../ui/button";
import Link from "next/link";
import { X } from "lucide-react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  // Close sidebar when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: { key: string }) => {
      if (e.key === "Escape") {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <div
        className={`fixed top-0 left-0 w-full flex justify-center pb-4 z-50 transition-transform duration-600 ease-in-out ${
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

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex flex-1 justify-end items-center space-x-8">
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
              <ModeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleSidebar}
              className="md:hidden p-2 text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
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

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-transparent backdrop-blur-lg shadow-2xl z-50 transform transition-transform duration-600 ease-in-out md:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          borderTopLeftRadius: "clamp(20px, 8vw, 60px)",
          borderBottomLeftRadius: "clamp(20px, 8vw, 60px)",
        }}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between py-2 px-4 border-b border-[#fcb11b] dark:border-gray-700">
            <h2 className="text-xl font-bold text-white dark:text-white">
              Menu
            </h2>
            <button
              onClick={closeSidebar}
              className="py-2 text-white dark:text-white dark:hover:text-gray-200 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-4 py-4">
            <div className="space-y-2">
              <a
                href="#"
                onClick={closeSidebar}
                className="block text-lg font-semibold text-white hover:text-[#fcb11b] dark:hover:text-[#fcb11b] transition-colors duration-200 py-2 border-b border-[#fcb11b] dark:border-gray-800"
              >
                Partners
              </a>
              <a
                href="#"
                onClick={closeSidebar}
                className="block text-lg font-semibold text-white hover:text-[#fcb11b] dark:hover:text-[#fcb11b] transition-colors duration-200 py-2 border-b border-[#fcb11b] dark:border-gray-800"
              >
                Awards
              </a>
              <a
                href="#"
                onClick={closeSidebar}
                className="block text-lg font-semibold text-white hover:text-[#fcb11b] dark:hover:text-[#fcb11b] transition-colors duration-200 py-2 border-b border-[#fcb11b] dark:border-gray-800"
              >
                Events
              </a>
              <a
                href="#"
                onClick={closeSidebar}
                className="block text-lg font-semibold text-white hover:text-[#fcb11b] dark:hover:text-[#fcb11b] transition-colors duration-200 py-2 border-b border-[#fcb11b] dark:border-gray-800"
              >
                Careers
              </a>
            </div>
          </nav>

          {/* Sidebar Footer */}
          <div className="p-6 border-t border-[#fcb11b] dark:border-white">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white dark:text-white">Theme</span>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

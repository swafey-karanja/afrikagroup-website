"use client";

import { useState, useEffect } from "react";

export default function ScrollAnimatedCircle() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);

  // Circle calculations - increased size
  const radius = 380;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      // Increase the multiplier to make drawing more sensitive to scroll
      setScrollProgress(Math.min(Math.max(progress * 1.5, 0), 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Make the animation more responsive to scroll changes
  useEffect(() => {
    const timer = setTimeout(() => {
      // Increase the interpolation factor for faster response
      setCurrentProgress(
        currentProgress + (scrollProgress - currentProgress) * 0.5 // Increased from 0.1
      );
    }, 16);

    return () => clearTimeout(timer);
  }, [scrollProgress, currentProgress]);

  // Calculate stroke dasharray
  const drawLength = circumference * currentProgress;
  const gapLength = circumference - drawLength;
  const strokeDasharray = `${drawLength} ${gapLength}`;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-[#fcb11b]/20 z-50">
        <div
          className="h-full bg-[#fcb11b] transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress * 100}%` }} // Fixed this line
        />
      </div>

      {/* Circle container - increased size */}
      <div className="fixed top-[1500px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] flex items-center justify-center pointer-events-none">
        {/* SVG with larger viewBox */}
        <svg
          className="w-full h-full transform -rotate-90"
          viewBox="0 0 800 800"
        >
          <circle
            className="circle-path transition-all duration-100 ease-out"
            cx="400"
            cy="400"
            r={radius}
            fill="none"
            stroke="#fcb11b"
            strokeWidth="30"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
          />
        </svg>
      </div>

      {/* Custom CSS for circle animation */}
      <style jsx>{`
        .circle-path {
          transition: stroke-dasharray 0.1s ease-out; /* Reduced from 1s for faster response */
        }
      `}</style>
    </div>
  );
}

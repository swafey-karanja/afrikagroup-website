"use client";

import React, { ReactNode } from "react";
import styles from "../../../styles/Hero.module.css";

interface HeroProps {
  height?: string;
  title?: string | ReactNode;
  subtitle?: string | ReactNode;
  description?: string | ReactNode;
  showProgressBar?: boolean;
  ctaPrimary?: ReactNode;
  ctaSecondary?: ReactNode;
  showScrollIndicator?: boolean;
  customContent?: ReactNode;
  /**
   * Container background - only affects the hero content area
   * Use 'transparent' to let the global background show through
   * @default "transparent"
   */
  containerBackground?: string;
  /**
   * Additional styling for the hero container
   */
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  height = "min-h-screen",
  title = (
    <>
      Africanising
      <span
        className={`mx-4 text-[#fcb11b] ${styles["animate-spin-glow"]} inline-block`}
        style={{ animationDelay: "1.2s" }}
      >
        •
      </span>
      iGaming
    </>
  ),
  subtitle = "Driving iGaming Business to Africa.",
  description = "Strategic solutions for iGaming growth, optimization, and expansion.",
  showProgressBar = true,
  ctaPrimary = (
    <button className="group relative px-8 py-4 bg-[#fcb11b] text-black cursor-pointer dark:text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-orange-400 hover:scale-105">
      <span className="relative z-10">Get Started</span>
      <div className="absolute inset-0 bg-white dark:bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      <span className="absolute inset-0 z-10 flex items-center justify-center text-black dark:text-white opacity-0 group-hover:opacity-100 font-bold transition-opacity duration-300">
        Get Started
      </span>
    </button>
  ),
  ctaSecondary = (
    <button className="group relative px-8 py-4 border-2 border-black cursor-pointer dark:border-white text-black dark:text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:border-orange-500 hover:scale-105">
      <span className="relative z-10 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
        Learn More
      </span>
      <div className="absolute inset-0 bg-[#fcb11b] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
    </button>
  ),
  showScrollIndicator = true,
  customContent,
  containerBackground = "transparent",
  className = "",
}) => {
  return (
    <div className={`relative ${height} ${containerBackground} ${className}`}>
      {/* Main Content Container */}
      <div
        className={`relative z-20 flex items-center justify-center ${
          height === "min-h-screen" ? "min-h-screen" : "h-full"
        } px-4`}
      >
        <div className="text-center max-w-5xl mx-auto w-full">
          {/* Custom content takes precedence if provided */}
          {customContent ? (
            customContent
          ) : (
            <>
              {/* Enhanced Animated Title */}
              <h1 className="text-6xl md:text-8xl font-bold text-black dark:text-white mb-6 relative">
                {title}
              </h1>

              <div className="relative mb-8">
                {subtitle && (
                  <p
                    className={`text-xl md:text-3xl font-bold text-gray-700 dark:text-gray-300 mb-4 ${styles["animate-fade-in-up"]}`}
                  >
                    {subtitle}
                  </p>
                )}
                {description && (
                  <p
                    className={`text-xl text-gray-700 dark:text-gray-300 mb-4 ${styles["animate-fade-in-up"]}`}
                  >
                    {description}
                  </p>
                )}
                {showProgressBar && (
                  <div className="relative h-2 w-48 mx-auto overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-[#fcb11b] via-white to-orange-400 ${styles["animate-progress-wave"]}`}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent ${styles["animate-shimmer"]}`}
                    />
                  </div>
                )}
              </div>

              {/* Animated CTA Buttons */}
              {(ctaPrimary || ctaSecondary) && (
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
                  {ctaPrimary}
                  {ctaSecondary}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && height === "min-h-screen" && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-[#fcb11b] rounded-full flex justify-center">
            <div
              className={`w-1 h-3 bg-[#fcb11b] rounded-full mt-2 ${styles["animate-pulse"]}`}
            />
          </div>
          <p className="text-[#fcb11b] text-sm mt-2 font-medium">Scroll</p>
        </div>
      )}
    </div>
  );
};

export default Hero;

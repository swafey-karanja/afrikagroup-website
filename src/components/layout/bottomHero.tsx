"use client";

import React, { ReactNode, useEffect, useState } from "react";
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
  containerBackground?: string;
  className?: string;
}

const BottomHero: React.FC<HeroProps> = ({
  height = "min-h-screen",
  title = (
    <>
      Africanising
      <br />
      <span
        className={`text-[#fcb11b] ${styles["animate-spin-glow"]} inline-block`}
        style={{ animationDelay: "1.2s" }}
      >
        iGaming
      </span>
    </>
  ),
  subtitle = "Bringing next-level innovation to gaming, fintech & blockchain",
  description = "Strategic solutions for iGaming growth, optimization, and expansion.",
  showProgressBar = true,
  showScrollIndicator = true,
  customContent,
  containerBackground = "transparent",
  className = "",
}) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Hero Section - this creates the fixed effect */}
      <div
        className={`sticky bottom-0 h-screen overflow-hidden ${containerBackground} ${className}`}
        // style={{
        //   background:
        //     "linear-gradient(135deg, #4338ca 0%, #3b82f6 25%, #06b6d4  75%, #10b981 100%)",
        // }}
      >
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large circle on the right */}
          {/* <div
            className="absolute -right-32 top-1/2 transform -translate-y-1/2 w-96 h-96 rounded-full"
            style={{
              background:
                "linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(16, 185, 129, 0.4) 100%)",
              filter: "blur(1px)",
            }}
          /> */}

          {/* Bottom right curved shape */}
          {/* <div
            className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full"
            style={{
              background:
                "linear-gradient(225deg, rgba(16, 185, 129, 0.2) 0%, rgba(6, 182, 212, 0.3) 100%)",
              filter: "blur(2px)",
            }}
          /> */}
        </div>

        {/* Main Content Container */}
        <div
          className={`relative z-20 flex items-center justify-between ${
            height === "min-h-screen" ? "min-h-screen" : "h-full"
          } px-8 md:px-16 lg:px-24`}
        >
          {/* Left side - Main Title */}
          <div
            className="flex-1 max-w-4xl"
            style={{
              transform: `translateY(${Math.max(0, offsetY * -0.3)}px)`,
              opacity: Math.max(0.3, 1 - offsetY / 800),
            }}
          >
            {customContent ? (
              customContent
            ) : (
              <>
                <h1 className="text-8xl md:text-9xl lg:text-[12rem] text-black dark:text-white mb-6 leading-[0.85] tracking-tight">
                  {title}
                </h1>
              </>
            )}
          </div>

          {/* Right side - Subtitle/Description */}
          <div
            className="flex-1 max-w-md ml-8 self-end pb-20"
            style={{
              transform: `translateY(${Math.max(0, offsetY * -0.2)}px)`,
              opacity: Math.max(0.2, 1 - offsetY / 600),
            }}
          >
            {subtitle && (
              <p className="text-xl md:text-2xl font-medium text-black dark:text-white mb-4 leading-relaxed">
                {subtitle}
              </p>
            )}

            {showProgressBar && (
              <div
                className="relative h-2 w-48 overflow-hidden rounded-full bg-white/20 mt-8"
                style={{
                  transform: `translateY(${Math.max(0, offsetY * -0.1)}px)`,
                  opacity: Math.max(0.1, 1 - offsetY / 400),
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#fcb11b] via-white to-orange-400 animate-pulse" />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                  style={{
                    animation: "shimmer 2s infinite",
                  }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Scroll Indicator */}
        {showScrollIndicator && height === "min-h-screen" && (
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20"
            style={{ opacity: Math.max(0, 1 - offsetY / 300) }}
          >
            <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
            </div>
            <p className="text-white/60 text-sm mt-2 font-medium">Scroll</p>
          </div>
        )}
      </div>

      {/* Spacer to allow scroll distance for the sticky effect */}
      {/* <div className="h-screen bg-transparent pointer-events-none"></div> */}

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </>
  );
};

export default BottomHero;

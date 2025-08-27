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

const Hero: React.FC<HeroProps> = ({
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
  const [offsetY, setOffsetY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);

      setOffsetY(scrollTop);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransitioning = scrollProgress > 0.5;

  return (
    <>
      <div
        className={`sticky top-0 bottom-0 h-screen overflow-hidden ${containerBackground} ${className}`}
      >
        <div className="absolute inset-0 overflow-hidden"></div>

        <div
          className={`relative z-20 flex items-center justify-between ${
            height === "min-h-screen" ? "min-h-screen" : "h-full"
          } px-8 md:px-16 lg:px-24`}
        >
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
                <div className="relative">
                  <h1
                    className={`text-8xl md:text-9xl lg:text-[12rem] text-black dark:text-white mb-6 leading-[0.85] tracking-tight transition-all duration-1000 ${
                      isTransitioning
                        ? "opacity-0 transform -translate-y-10"
                        : "opacity-100"
                    }`}
                  >
                    {title}
                  </h1>

                  {description && (
                    <p
                      className={`text-xl md:text-2xl font-medium text-black dark:text-white mb-4 leading-relaxed transition-all duration-1000 ${
                        isTransitioning
                          ? "opacity-0 transform -translate-y-10"
                          : "opacity-100"
                      }`}
                    >
                      {description}
                    </p>
                  )}
                </div>

                {/* Final Transformation Section */}
                <div className="absolute inset-0 z-50">
                  <div>
                    <h1
                      className={`text-[4rem] md:text-[5rem] lg:text-[6rem] text-black font-bold dark:text-white mb-6 leading-[0.85] tracking-tight transition-all duration-1000 ${
                        scrollProgress > 0.85
                          ? "opacity-100 transform translate-y-0"
                          : "opacity-0 transform translate-y-10"
                      }`}
                    >
                      we are committed
                      <br />
                      <span
                        className={`text-[#fcb11b] ${styles["animate-spin-glow"]} inline-block mt-5`}
                      >
                        We aim for progress.
                      </span>
                    </h1>

                    {description && (
                      <p
                        className={`text-xl md:text-2xl font-medium text-black dark:text-white py-10 leading-relaxed transition-all duration-1000 ${
                          scrollProgress > 0.85
                            ? "opacity-100 transform translate-y-0"
                            : "opacity-0 transform translate-y-10"
                        }`}
                      >
                        {description}
                      </p>
                    )}
                  </div>
                </div>

                {(ctaPrimary || ctaSecondary) && (
                  <div
                    className={`flex flex-col sm:flex-row gap-4 mt-16 transition-all duration-1000 ${
                      isTransitioning
                        ? "opacity-0 transform translate-y-5"
                        : "opacity-100"
                    }`}
                    style={{
                      transform: `translateY(${Math.max(
                        0,
                        offsetY * -0.05
                      )}px)`,
                    }}
                  >
                    {ctaPrimary}
                    {ctaSecondary}
                  </div>
                )}
              </>
            )}
          </div>

          <div
            className="flex-1 max-w-md ml-8 self-end pb-20"
            style={{
              transform: `translateY(${Math.max(0, offsetY * -0.2)}px)`,
              opacity: Math.max(0.2, 1 - offsetY / 600),
            }}
          >
            <div>
              {subtitle && (
                <p
                  className={`text-xl md:text-2xl font-medium text-black dark:text-white mb-4 leading-relaxed transition-all duration-1000 ${
                    isTransitioning
                      ? "opacity-0 transform translate-y-5"
                      : "opacity-100"
                  }`}
                >
                  {subtitle}
                </p>
              )}

              {showProgressBar && (
                <div
                  className={`relative h-2 w-48 overflow-hidden rounded-full mt-10 bg-white/20 transition-all duration-1000 ${
                    isTransitioning ? "opacity-30" : "opacity-100"
                  }`}
                  style={{
                    transform: `translateY(${Math.max(0, offsetY * -0.1)}px)`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#fcb11b] via-white to-orange-400 animate-pulse" />
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    style={{ animation: "shimmer 2s infinite" }}
                  />
                </div>
              )}
            </div>

            {/* Final Transformation Section */}
            <div>
              {subtitle && (
                <p
                  className={`text-xl md:text-2xl font-medium text-black dark:text-white mb-4 leading-relaxed transition-all duration-1000 ${
                    scrollProgress > 0.85
                      ? "opacity-100 transform translate-y-0"
                      : "opacity-0 transform translate-y-10"
                  }`}
                >
                  {subtitle}
                </p>
              )}

              {showProgressBar && (
                <div
                  className={`relative h-2 w-48 overflow-hidden rounded-full bg-white/20 transition-all mt-10 duration-1000 ${
                    scrollProgress > 0.85
                      ? "opacity-100 transform translate-y-0"
                      : "opacity-0 transform translate-y-10"
                  }`}
                  style={{
                    transform: `translateY(${Math.max(0, offsetY * -0.1)}px)`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#fcb11b] via-white to-orange-400 animate-pulse" />
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    style={{ animation: "shimmer 2s infinite" }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {showScrollIndicator && height === "min-h-screen" && (
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20 transition-all duration-1000"
            style={{
              opacity: Math.max(0, 1 - offsetY / 300),
              transform: `translateX(-50%) ${
                isTransitioning ? "translateY(20px)" : ""
              }`,
            }}
          >
            <div className="w-6 h-10 border-2 border-black/60 dark:border-white/60 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-black/60 dark:bg-white/60 rounded-full mt-2 animate-pulse" />
            </div>
            <p className="text-black/60 dark:text-white/60 text-sm mt-2 font-medium">
              Scroll
            </p>
          </div>
        )}
      </div>

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

export default Hero;

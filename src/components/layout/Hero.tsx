"use client";

import React, { useEffect, useState, ReactNode } from "react";
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
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`relative ${height} overflow-hidden bg-blue-100 dark:bg-black`}
    >
      {/* All existing animated background elements remain unchanged */}
      <div
        className={`absolute inset-0 bg-gradient-to-tr from-transparent via-green-500/20 to-transparent ${styles["animate-chip-sweep"]}`}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-tr from-transparent via-red-500/20 to-transparent ${styles["animate-chip-sweep-reverse"]}`}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-bl from-yellow-400/10 via-transparent to-green-600/30 ${styles["animate-jackpot-pulse"]}`}
      />
      <div
        className={`absolute inset-0 bg-gradient-radial from-red-600/40 via-transparent to-transparent ${styles["animate-roulette-spin"]}`}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent ${styles["animate-table-drift"]}`}
      />
      <div
        className={`absolute inset-0 bg-gradient-conic from-transparent via-yellow-500/20 to-red-600/20 ${styles["animate-wheel-spin"]}`}
      />
      <div
        className={`absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-radial from-red-500/80 to-red-700/40 rounded-full border-2 border-white/30 ${styles["animate-chip-float"]}`}
      />
      <div
        className={`absolute top-3/5 right-1/3 w-12 h-12 bg-gradient-radial from-green-600/70 to-green-800/40 rounded-full border-2 border-yellow-300/40 ${styles["animate-chip-float"]} ${styles["animate-delay-2s"]}`}
      />
      <div
        className={`absolute bottom-1/3 left-2/5 w-20 h-20 bg-gradient-radial from-blue-600/60 to-blue-800/30 rounded-full border-2 border-white/20 ${styles["animate-chip-float"]} ${styles["animate-delay-4s"]}`}
      />
      <div
        className={`absolute top-1/6 right-1/4 w-14 h-14 bg-gradient-radial from-purple-600/70 to-purple-800/40 rounded-full border-2 border-gold/30 ${styles["animate-chip-float"]} ${styles["animate-delay-3s"]}`}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-br from-transparent via-yellow-400/15 to-transparent w-[200%] h-[200%] ${styles["animate-gold-shimmer"]}`}
      />
      <div
        className={`absolute top-[15%] left-[15%] right-[15%] h-[25%] bg-gradient-to-r from-green-600/15 via-red-600/25 to-green-600/15 blur-md ${styles["animate-casino-glow"]}`}
      />
      <div
        className={`absolute top-1/2 left-1/3 w-32 h-8 bg-gradient-to-r from-red-600/40 to-black/60 ${styles["animate-card-flip"]}`}
      />
      <div
        className={`absolute bottom-1/4 right-1/4 w-8 h-32 bg-gradient-to-b from-green-600/40 to-black/60 ${styles["animate-card-flip"]} ${styles["animate-delay-1s"]}`}
      />
      <div
        className={`absolute top-[20%] right-[20%] w-2 h-2 bg-[#fcb11b] rounded-full shadow-[0_0_25px_rgba(255,215,0,0.8)] ${styles["animate-coin-sparkle"]}`}
      />
      <div
        className={`absolute bottom-1/5 left-[20%] w-3 h-3 bg-[#fcb11b] rounded-full shadow-[0_0_20px_rgba(255,215,0,0.6)] ${styles["animate-coin-sparkle"]} ${styles["animate-delay-2s"]}`}
      />
      <div
        className={`absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-[#fcb11b] rounded-full shadow-[0_0_15px_rgba(255,215,0,0.7)] ${styles["animate-coin-sparkle"]} ${styles["animate-delay-5s"]}`}
      />
      <div
        className={`absolute inset-0 bg-gradient-conic from-red-600/10 via-black/20 to-red-600/10 ${styles["animate-roulette-wheel"]}`}
      />
      <div
        className={`absolute top-1/3 left-1/5 w-24 h-4 bg-gradient-to-r from-green-500/50 to-red-500/50 ${styles["animate-dice-roll"]}`}
      />
      <div
        className={`absolute bottom-1/3 right-1/5 w-4 h-24 bg-gradient-to-b from-red-500/50 to-green-500/50 ${styles["animate-dice-roll"]} ${styles["animate-delay-3s"]}`}
      />

      {/* Enhanced Parallax Background Elements */}
      <div
        className="absolute inset-0 opacity-20"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div
          className={`absolute top-20 left-10 w-32 h-32 bg-[#fcb11b] rounded-full blur-xl ${styles["animate-float"]}`}
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        />
        <div
          className={`absolute top-40 right-20 w-24 h-24 bg-white rounded-full blur-lg ${styles["animate-float-reverse"]}`}
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        />
        <div
          className={`absolute bottom-32 left-1/4 w-20 h-20 bg-orange-400 rounded-full blur-md ${styles["animate-float"]}`}
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        />
        <div
          className={`absolute top-60 left-1/2 w-28 h-28 bg-orange-300/40 rounded-full blur-2xl ${styles["animate-pulse-slow"]}`}
          style={{ animationDelay: "3s" }}
        />
        <div
          className={`absolute bottom-40 right-1/3 w-16 h-16 bg-white/50 rounded-full blur-lg ${styles["animate-float-reverse"]}`}
          style={{ animationDelay: "1.5s", animationDuration: "6s" }}
        />
      </div>

      {/* Color Wave Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute -top-1/2 -left-1/2 w-[200%] h-[200%] from-orange-500/30 via-transparent to-transparent opacity-60 ${styles["bg-gradient-radial"]} ${styles["animate-rotate-slow"]}`}
        />
        <div
          className={`absolute -bottom-1/2 -right-1/2 w-[200%] h-[200%] from-white/20 via-transparent to-transparent opacity-40 ${styles["bg-gradient-radial"]} ${styles["animate-rotate-reverse"]}`}
        />
      </div>

      {/* Enhanced Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Original Shapes */}
        <div
          className={`absolute top-1/4 left-1/4 w-4 h-4 bg-[#fcb11b] opacity-60 ${styles["animate-geometric-float"]}`}
          style={{
            transform: `translateY(${scrollY * -0.3}px) rotate(${
              scrollY * 0.1
            }deg)`,
          }}
        />
        <div
          className={`absolute top-1/3 right-1/3 w-6 h-6 border-2 border-white opacity-40 ${styles["animate-scale-pulse"]}`}
          style={{
            transform: `translateY(${scrollY * -0.4}px) scale(${
              1 + Math.sin(scrollY * 0.01) * 0.2
            })`,
          }}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-3 h-16 bg-[#fcb11b] opacity-50 ${styles["animate-sway"]}`}
          style={{
            transform: `translateY(${scrollY * -0.2}px) rotate(${
              Math.sin(scrollY * 0.01) * 10
            }deg)`,
          }}
        />
        <div
          className={`absolute top-1/2 left-1/6 w-8 h-2 bg-white opacity-30 ${styles["animate-stretch"]}`}
          style={{ transform: `translateY(${scrollY * -0.35}px)` }}
        />
        <div
          className={`absolute bottom-1/3 left-2/3 w-5 h-5 bg-orange-300 rounded-full opacity-50 ${styles["animate-orbit"]}`}
          style={{ transform: `translateY(${scrollY * -0.25}px)` }}
        />

        {/* Additional Geometric Shapes */}
        <div
          className={`absolute top-16 left-1/3 w-6 h-6 bg-white rotate-45 opacity-40 ${styles["animate-diamond-spin"]}`}
          style={{ transform: `translateY(${scrollY * -0.3}px) rotate(45deg)` }}
        />
        <div
          className={`absolute top-3/4 right-1/6 w-8 h-8 border-2 border-orange-300 rounded-full opacity-60 ${styles["animate-ring-pulse"]}`}
          style={{ transform: `translateY(${scrollY * -0.45}px)` }}
        />
        <div
          className={`absolute top-1/6 right-1/2 w-10 h-3 bg-[#fcb11b] opacity-30 ${styles["animate-bar-slide"]}`}
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        />
        <div
          className={`absolute bottom-1/6 left-1/5 w-4 h-12 bg-white/70 opacity-40 ${styles["animate-pillar-sway"]}`}
          style={{ transform: `translateY(${scrollY * -0.35}px)` }}
        />
        <div
          className={`absolute top-2/5 left-3/4 w-7 h-7 bg-orange-400 opacity-50 ${styles["animate-hexagon"]}`}
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            transform: `translateY(${scrollY * -0.28}px)`,
          }}
        />
        <div
          className={`absolute bottom-2/5 right-1/5 w-6 h-6 bg-white border-2 border-orange-300 opacity-45 ${styles["animate-square-morph"]}`}
          style={{ transform: `translateY(${scrollY * -0.4}px)` }}
        />
        <div
          className={`absolute top-3/5 left-1/12 w-5 h-20 from-[#fcb11b] to-transparent opacity-35 ${styles["animate-tower-grow"]}`}
        />
        <div
          className={`absolute bottom-1/5 right-2/3 w-9 h-9 bg-orange-300/60 rounded-full opacity-50 ${styles["animate-bubble-float"]}`}
          style={{ transform: `translateY(${scrollY * -0.5}px)` }}
        />

        {/* Cross-Screen Animation Elements */}
        <div className="absolute top-1/4 left-0 w-full h-full pointer-events-none">
          <div
            className={`absolute top-0 w-4 h-4 bg-[#fcb11b] opacity-70 ${styles["animate-cross-screen-1"]}`}
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          />
          <div
            className={`absolute top-8 w-6 h-6 border-2 border-white rounded-full opacity-60 ${styles["animate-cross-screen-2"]}`}
            style={{ animationDelay: "1s" }}
          />
          <div
            className={`absolute top-16 w-5 h-5 bg-[#fcb11b]opacity-80 ${styles["animate-cross-screen-3"]}`}
            style={{ animationDelay: "2s" }}
          />
          <div
            className={`absolute top-24 w-8 h-2 bg-white opacity-50 ${styles["animate-cross-screen-4"]}`}
            style={{ animationDelay: "3s" }}
          />
          <div
            className={`absolute top-32 w-3 h-8 bg-orange-300 opacity-60 ${styles["animate-cross-screen-5"]}`}
            style={{ animationDelay: "4s" }}
          />
        </div>

        <div className="absolute bottom-1/4 left-0 w-full h-full pointer-events-none">
          <div
            className={`absolute bottom-0 w-6 h-6 bg-white/80 rounded-full opacity-70 ${styles["animate-cross-screen-reverse-1"]}`}
          />
          <div
            className={`absolute bottom-8 w-4 h-12 bg-[#fcb11b] opacity-60 ${styles["animate-cross-screen-reverse-2"]}`}
            style={{ animationDelay: "1.5s" }}
          />
          <div
            className={`absolute bottom-16 w-7 h-7 bg-[#fcb11b] opacity-75 ${styles["animate-cross-screen-reverse-3"]}`}
            style={{
              clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
              animationDelay: "2.5s",
            }}
          />
          <div
            className={`absolute bottom-24 w-10 h-3 bg-white opacity-55 ${styles["animate-cross-screen-reverse-4"]}`}
            style={{ animationDelay: "3.5s" }}
          />
        </div>

        {/* Mid-Screen Diagonal Sweeps */}
        <div className="absolute top-1/2 left-0 w-full h-full pointer-events-none">
          <div
            className={`absolute top-0 w-5 h-5 bg-[#fcb11b] opacity-65 ${styles["animate-diagonal-sweep-1"]}`}
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          />
          <div
            className={`absolute top-0 w-8 h-8 border-2 border-white opacity-50 ${styles["animate-diagonal-sweep-2"]}`}
            style={{ animationDelay: "2s" }}
          />
          <div
            className={`absolute top-0 w-6 h-6 bg-orange-300 rounded-full opacity-70 ${styles["animate-diagonal-sweep-3"]}`}
            style={{ animationDelay: "4s" }}
          />
        </div>

        {/* Animated Lines */}
        <div
          className={`absolute top-20 left-0 w-full h-px from-transparent via-[#fcb11b] to-transparent ${styles["animate-line-sweep"]}`}
        />
        <div
          className={`absolute top-40 left-0 w-full h-px from-transparent via-white to-transparent ${styles["animate-line-sweep-reverse"]}`}
          style={{ animationDelay: "2s" }}
        />
        <div
          className={`absolute bottom-32 left-0 w-full h-px from-transparent via-[#fcb11b] to-transparent ${styles["animate-line-sweep"]}`}
          style={{ animationDelay: "4s" }}
        />

        {/* Thick Animated Bars */}
        <div
          className={`absolute top-60 left-0 w-full h-1 from-[#fcb11b] via-transparent to-orange-500 opacity-80 ${styles["animate-thick-bar-sweep"]}`}
        />
        <div
          className={`absolute bottom-60 left-0 w-full h-2 from-white via-transparent to-white opacity-60 ${styles["animate-thick-bar-sweep-reverse"]}`}
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Main Content Container */}
      <div
        className={`relative z-10 flex items-center justify-center ${
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
      {height === "min-h-screen" && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#fcb11b] rounded-full flex justify-center">
            <div
              className={`w-1 h-3 bg-[#fcb11b] rounded-full mt-2 ${styles["animate-pulse"]}`}
            />
          </div>
          <p className="text-[#fcb11b] text-sm mt-2 font-medium">Scroll</p>
        </div>
      )}

      {/* Enhanced Animated Border Lines */}
      <div
        className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#fcb11b] to-transparent ${styles["animate-border-flow"]}`}
      />
      <div
        className={`absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white to-transparent ${styles["animate-border-flow-reverse"]}`}
      />
      <div
        className={`absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-transparent via-[#fcb11b] to-transparent ${styles["animate-border-flow-vertical"]}`}
      />
      <div
        className={`absolute right-0 top-0 w-2 h-full bg-gradient-to-b from-transparent via-white to-transparent ${styles["animate-border-flow-vertical-reverse"]}`}
      />

      {/* Corner Accents */}
      <div
        className={`absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-[#fcb11b] ${styles["animate-corner-glow"]}`}
      />
      <div
        className={`absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 dark:border-white border-[#fcb11b] ${styles["animate-corner-glow"]}`}
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className={`absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-[#fcb11b] ${styles["animate-corner-glow"]}`}
        style={{ animationDelay: "1s" }}
      />
      <div
        className={`absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 dark:border-white border-[#fcb11b] ${styles["animate-corner-glow"]}`}
        style={{ animationDelay: "1.5s" }}
      />
    </div>
  );
};

export default Hero;

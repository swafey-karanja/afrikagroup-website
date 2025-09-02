"use client";

import React, { useEffect, useState } from "react";
import styles from "../../../styles/Hero.module.css";
import { Button } from "../ui/button";
import Link from "next/link";

// Define hero content types
export interface HeroContent {
  type: "text" | "video" | "custom";
  title?: string;
  subtitle?: string;
  description?: string;
  highlightWord?: string;
  videoSrc?: string;
  videoTitle?: string;
  videoDescription?: string;
  customContent?: React.ReactNode;
  showScrollIndicator?: boolean;
  ctaButton?: {
    text: string;
    href: string;
    variant?: "default" | "outline" | "secondary";
  };
}

interface AnimatedCasinoBackgroundProps {
  /**
   * Whether to enable parallax scrolling effects
   * @default true
   */
  enableParallax?: boolean;
  /**
   * Background color class for the container
   * @default "bg-blue-100 dark:bg-black"
   */
  backgroundColor?: string;
  videoBackground?: string;
  /**
   * Opacity of the entire background effect
   * @default "opacity-100"
   */
  opacity?: string;
  /**
   * Whether the background should be fixed position (covers entire viewport)
   * @default false
   */
  fixed?: boolean;
  /**
   * Z-index for the background
   * @default "z-0"
   */
  zIndex?: string;
  /**
   * Whether to show integrated hero section
   * @default false
   */
  showHero?: boolean;
  /**
   * Hero content configuration
   */
  heroContent?: HeroContent;
  /**
   * Whether to show integrated footer section
   * @default false
   */
  showFooter?: boolean;
}

// Default hero content
const defaultHeroContent: HeroContent = {
  type: "text",
  title: "Africanising",
  highlightWord: "iGaming",
  description:
    "Strategic solutions for iGaming growth, optimization, and expansion.",
  subtitle: "Bringing next-level innovation to gaming, fintech & blockchain",
  showScrollIndicator: true,
};

const AnimatedCasinoBackground: React.FC<AnimatedCasinoBackgroundProps> = ({
  enableParallax = true,
  backgroundColor = "bg-blue-100 dark:bg-black",
  opacity = "opacity-100",
  fixed = false,
  zIndex = "z-0",
  showHero = false,
  heroContent = defaultHeroContent,
  showFooter = false,
  videoBackground,
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!enableParallax) return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);

      setScrollY(scrollTop);
      setScrollProgress(progress);
    };

    checkMobile();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, [enableParallax]);

  const containerClasses = fixed
    ? `fixed inset-0 ${zIndex} ${opacity} ${backgroundColor} overflow-hidden`
    : `absolute inset-0 ${zIndex} ${opacity} ${backgroundColor} overflow-hidden`;

  // Calculate hero and footer visibility
  const heroVisibility = Math.max(0, 1 - scrollY / 800);
  const heroParallax = scrollY * (isMobile ? 0.1 : 0.2);

  const footerProgress = Math.max(0, scrollProgress - 0.6) / 0.4;
  const footerVisibility = Math.min(1, footerProgress);

  return (
    <div className={containerClasses}>
      {/* Casino-themed animated sweeps and gradients */}
      <div
        className={`absolute inset-0 bg-gradient-to-bl from-yellow-400/10 via-transparent to-green-600/30 ${styles["animate-jackpot-pulse"]}`}
      />
      <div
        className={`absolute inset-0 bg-gradient-conic from-transparent via-yellow-500/20 to-red-600/20 ${styles["animate-wheel-spin"]}`}
      />

      {/* Floating casino chips */}
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

      {/* Playing cards animation */}
      <div
        className={`absolute top-1/2 left-1/3 w-32 h-8 bg-gradient-to-r from-red-600/40 to-black/60 ${styles["animate-card-flip"]}`}
      />
      <div
        className={`absolute bottom-1/4 right-1/4 w-8 h-32 bg-gradient-to-b from-green-600/40 to-black/60 ${styles["animate-card-flip"]} ${styles["animate-delay-1s"]}`}
      />

      {/* Coin sparkles */}
      <div
        className={`absolute top-[20%] right-[20%] w-2 h-2 bg-[#fcb11b] rounded-full shadow-[0_0_25px_rgba(255,215,0,0.8)] ${styles["animate-coin-sparkle"]}`}
      />
      <div
        className={`absolute bottom-1/5 left-[20%] w-3 h-3 bg-[#fcb11b] rounded-full shadow-[0_0_20px_rgba(255,215,0,0.6)] ${styles["animate-coin-sparkle"]} ${styles["animate-delay-2s"]}`}
      />
      <div
        className={`absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-[#fcb11b] rounded-full shadow-[0_0_15px_rgba(255,215,0,0.7)] ${styles["animate-coin-sparkle"]} ${styles["animate-delay-5s"]}`}
      />

      {/* Roulette wheel and dice effects */}
      <div
        className={`absolute inset-0 bg-gradient-conic from-red-600/10 via-black/20 to-red-600/10 ${styles["animate-roulette-wheel"]}`}
      />
      <div
        className={`absolute top-1/3 left-1/5 w-24 h-4 bg-gradient-to-r from-green-500/50 to-red-500/50 ${styles["animate-dice-roll"]}`}
      />
      <div
        className={`absolute bottom-1/3 right-1/5 w-4 h-24 bg-gradient-to-b from-red-500/50 to-green-500/50 ${styles["animate-dice-roll"]} ${styles["animate-delay-3s"]}`}
      />

      {/* Parallax background elements */}
      {enableParallax && (
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
      )}

      {/* Color wave overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute -top-1/2 -left-1/2 w-[200%] h-[200%] from-orange-500/30 via-transparent to-transparent opacity-60 ${styles["bg-gradient-radial"]} ${styles["animate-rotate-slow"]}`}
        />
        <div
          className={`absolute -bottom-1/2 -right-1/2 w-[200%] h-[200%] from-white/20 via-transparent to-transparent opacity-40 ${styles["bg-gradient-radial"]} ${styles["animate-rotate-reverse"]}`}
        />
      </div>

      {/* Floating geometric shapes with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Original Shapes */}
        <div
          className={`absolute top-1/4 left-1/4 w-4 h-4 bg-[#fcb11b] opacity-60 ${styles["animate-geometric-float"]}`}
          style={
            enableParallax
              ? {
                  transform: `translateY(${scrollY * -0.3}px) rotate(${
                    scrollY * 0.1
                  }deg)`,
                }
              : {}
          }
        />
        <div
          className={`absolute top-1/3 right-1/3 w-6 h-6 border-2 border-white opacity-40 ${styles["animate-scale-pulse"]}`}
          style={
            enableParallax
              ? {
                  transform: `translateY(${scrollY * -0.4}px) scale(${
                    1 + Math.sin(scrollY * 0.01) * 0.2
                  })`,
                }
              : {}
          }
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-3 h-16 bg-[#fcb11b] opacity-50 ${styles["animate-sway"]}`}
          style={
            enableParallax
              ? {
                  transform: `translateY(${scrollY * -0.2}px) rotate(${
                    Math.sin(scrollY * 0.01) * 10
                  }deg)`,
                }
              : {}
          }
        />
        <div
          className={`absolute top-1/2 left-1/6 w-8 h-2 bg-white opacity-30 ${styles["animate-stretch"]}`}
          style={
            enableParallax
              ? { transform: `translateY(${scrollY * -0.35}px)` }
              : {}
          }
        />
        <div
          className={`absolute bottom-1/3 left-2/3 w-5 h-5 bg-orange-300 rounded-full opacity-50 ${styles["animate-orbit"]}`}
          style={
            enableParallax
              ? { transform: `translateY(${scrollY * -0.25}px)` }
              : {}
          }
        />

        {/* Additional Geometric Shapes */}
        <div
          className={`absolute top-16 left-1/3 w-6 h-6 bg-white rotate-45 opacity-40 ${styles["animate-diamond-spin"]}`}
          style={
            enableParallax
              ? { transform: `translateY(${scrollY * -0.3}px) rotate(45deg)` }
              : {}
          }
        />
        <div
          className={`absolute top-3/4 right-1/6 w-8 h-8 border-2 border-orange-300 rounded-full opacity-60 ${styles["animate-ring-pulse"]}`}
          style={
            enableParallax
              ? { transform: `translateY(${scrollY * -0.45}px)` }
              : {}
          }
        />
        <div
          className={`absolute top-1/6 right-1/2 w-10 h-3 bg-[#fcb11b] opacity-30 ${styles["animate-bar-slide"]}`}
          style={
            enableParallax
              ? { transform: `translateY(${scrollY * -0.2}px)` }
              : {}
          }
        />
        <div
          className={`absolute bottom-1/6 left-1/5 w-4 h-12 bg-white/70 opacity-40 ${styles["animate-pillar-sway"]}`}
          style={
            enableParallax
              ? { transform: `translateY(${scrollY * -0.35}px)` }
              : {}
          }
        />
        <div
          className={`absolute top-2/5 left-3/4 w-7 h-7 bg-orange-400 opacity-50 ${styles["animate-hexagon"]}`}
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            ...(enableParallax
              ? { transform: `translateY(${scrollY * -0.28}px)` }
              : {}),
          }}
        />
        <div
          className={`absolute bottom-2/5 right-1/5 w-6 h-6 bg-white border-2 border-orange-300 opacity-45 ${styles["animate-square-morph"]}`}
          style={
            enableParallax
              ? { transform: `translateY(${scrollY * -0.4}px)` }
              : {}
          }
        />
        <div
          className={`absolute top-3/5 left-1/12 w-5 h-20 from-[#fcb11b] to-transparent opacity-35 ${styles["animate-tower-grow"]}`}
        />
        <div
          className={`absolute bottom-1/5 right-2/3 w-9 h-9 bg-orange-300/60 rounded-full opacity-50 ${styles["animate-bubble-float"]}`}
          style={
            enableParallax
              ? { transform: `translateY(${scrollY * -0.5}px)` }
              : {}
          }
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
            className={`absolute top-16 w-5 h-5 bg-[#fcb11b] opacity-80 ${styles["animate-cross-screen-3"]}`}
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

      {/* Animated Border Lines */}
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

      {/* ENHANCED HERO SECTION INTEGRATION */}
      {showHero && videoBackground && (
        <div className="relative w-full h-screen overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-10"
          >
            <source src={videoBackground} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay (optional: darken video for better text contrast) */}
          {/* <div className="absolute inset-0 bg-black/40"></div> */}

          {/* Hero Content */}
          <div
            className="relative z-20 flex items-center justify-center h-full"
            style={{
              opacity: heroVisibility,
              transform: `translateY(${heroParallax}px)`,
            }}
          >
            <div className="w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 pointer-events-auto">
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                {/* Hero Content */}
                <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
                  <div className="relative">
                    <h1 className="text-7xl lg:text-8xl xl:text-9xl 2xl:text-[12rem] text-white mb-4 sm:mb-6 leading-[0.85] tracking-tight transition-all duration-700">
                      {heroContent.title}
                      <br />
                    </h1>
                    <p className="text-base px-24 md:px-0 sm:text-xl md:text-2xl lg:text-4xl font-medium text-white mb-4 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                      {heroContent.description}
                    </p>

                    {heroContent.ctaButton && (
                      <div className="mt-8">
                        <Button
                          asChild
                          className="bg-[#fcb11b] hover:bg-[#fcb11b]/90 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                        >
                          <Link href={heroContent.ctaButton.href}>
                            {heroContent.ctaButton.text}
                          </Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Hero Sidebar */}
                <div className="flex-1 w-full max-w-md mt-8 lg:ml-8 text-center lg:text-left flex flex-col items-center lg:items-start justify-center lg:self-end">
                  <p className="text-lg sm:text-xl md:text-2xl font-medium text-white mb-4 leading-relaxed">
                    {heroContent.subtitle}
                  </p>
                  {/* <div className="relative h-2 w-32 sm:w-48 overflow-hidden rounded-full mt-6 sm:mt-10 bg-white/20 mx-auto lg:mx-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#fcb11b] via-white to-orange-400 animate-pulse" />
                  </div> */}
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            {heroContent.showScrollIndicator && (
              <div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
                style={{ opacity: Math.max(0, 1 - scrollY / 300) }}
              >
                <div className="w-6 h-10 border-2 border-[#fcb11b] rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-[#fcb11b] rounded-full mt-2 animate-pulse" />
                </div>
                {/* <p className="text-[#fcb11b] text-sm mt-2 ml--2 font-medium">
                  Scroll
                </p> */}
              </div>
            )}
          </div>
        </div>
      )}

      {showHero && !videoBackground && (
        <div
          className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
          style={{
            opacity: heroVisibility,
            transform: `translateY(${heroParallax}px)`,
          }}
        >
          <div className="w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 pointer-events-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
              {/* Hero Content */}
              <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
                <div className="relative">
                  <h1 className="text-7xl lg:text-8xl xl:text-9xl 2xl:text-[12rem] text-black dark:text-white mb-4 sm:mb-6 leading-[0.85] tracking-tight transition-all duration-700">
                    {heroContent.title}
                    <br />
                    <span
                      className={`text-[#fcb11b] ${styles["animate-spin-glow"]} inline-block`}
                      style={{ animationDelay: "1.2s" }}
                    >
                      {heroContent.highlightWord}
                    </span>
                  </h1>
                  <p className="text-base px-16 md:px-0 sm:text-xl md:text-2xl lg:text-4xl font-medium text-black dark:text-white mb-4 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    {heroContent.description}
                  </p>

                  {heroContent.ctaButton && (
                    <div className="mt-8">
                      <Button
                        asChild
                        className="bg-[#fcb11b] hover:bg-[#fcb11b]/90 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                      >
                        <Link href={heroContent.ctaButton.href}>
                          {heroContent.ctaButton.text}
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              {/* Hero Sidebar */}
              <div className="flex-1 w-full max-w-md mt-8 lg:ml-8 text-center lg:text-left flex flex-col items-center lg:items-start justify-center lg:self-end">
                <p className="text-lg sm:text-xl md:text-2xl font-medium text-black dark:text-white mb-4 leading-relaxed">
                  {heroContent.subtitle}
                </p>
                <div className="relative h-2 w-32 sm:w-48 overflow-hidden rounded-full mt-6 sm:mt-10 bg-white/20 mx-auto lg:mx-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#fcb11b] via-white to-orange-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          {heroContent.showScrollIndicator && (
            <div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
              style={{ opacity: Math.max(0, 1 - scrollY / 300) }}
            >
              <div className="w-6 h-10 border-2  border-[#fcb11b] rounded-full flex justify-center">
                <div className="w-1 h-3 bg-[#fcb11b] rounded-full mt-2 animate-pulse" />
              </div>
              {/* <p className="text-black/60 dark:text-white/60 text-sm mt-2 font-medium">
                Scroll
              </p> */}
            </div>
          )}
        </div>
      )}

      {/* FOOTER SECTION INTEGRATION */}
      {showFooter && (
        <div
          className="absolute inset-0 z-15 flex items-center justify-center pointer-events-none bg-[#fcb11b]/70"
          style={{
            opacity: footerVisibility,
            transform: `translateY(${(1 - footerVisibility) * 100}px)`,
            backdropFilter: footerVisibility > 0.1 ? "blur(90px)" : "none",
          }}
        >
          <div className="w-full mx-auto container pointer-events-auto">
            <div className="relative z-10 gap-16 flex items-center justify-center">
              {/* Logo and Branding */}
              <div className=" text-center lg:text-left">
                <div className="mb-8">
                  <img
                    className="h-80 w-auto mx-auto lg:mx-0"
                    src="/images/new-logo-5.png"
                    alt="Company Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimatedCasinoBackground;

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
  // New video-related props
  videoBackground?: {
    src: string;
    poster?: string;
    loop?: boolean;
    muted?: boolean;
    autoplay?: boolean;
    overlay?: boolean;
    overlayOpacity?: number;
    overlayColor?: string;
  };
  // Control what content to show
  showTextContent?: boolean;
  showVideoBackground?: boolean;
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
    <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#fcb11b] text-black cursor-pointer dark:text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-orange-400 hover:scale-105 text-sm sm:text-base">
      <span className="relative z-10">Get Started</span>
      <div className="absolute inset-0 bg-white dark:bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      <span className="absolute inset-0 z-10 flex items-center justify-center text-black dark:text-white opacity-0 group-hover:opacity-100 font-bold transition-opacity duration-300">
        Get Started
      </span>
    </button>
  ),
  ctaSecondary = (
    <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-black cursor-pointer dark:border-white text-black dark:text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:border-orange-500 hover:scale-105 text-sm sm:text-base">
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
  // New props with defaults
  videoBackground,
  showTextContent = true,
  showVideoBackground = false,
}) => {
  const [offsetY, setOffsetY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);

      setOffsetY(scrollTop);
      setScrollProgress(progress);
    };

    checkMobile();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const isTransitioning = scrollProgress > 0.5;

  // Responsive parallax values
  const parallaxMultiplier = isMobile ? 0.15 : 0.3;
  const opacityDivisor = isMobile ? 400 : 800;

  // Video background configuration
  const videoConfig = {
    loop: videoBackground?.loop ?? true,
    muted: videoBackground?.muted ?? true,
    autoplay: videoBackground?.autoplay ?? true,
    poster: videoBackground?.poster,
    overlay: videoBackground?.overlay ?? true,
    overlayOpacity: videoBackground?.overlayOpacity ?? 0.3,
    overlayColor: videoBackground?.overlayColor ?? "black",
  };

  return (
    <>
      <div
        className={`sticky top-0 bottom-0 h-screen overflow-hidden ${containerBackground} ${className}`}
      >
        {/* Video Background */}
        {showVideoBackground && videoBackground?.src && (
          <>
            <video
              className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
                videoLoaded ? "opacity-100" : "opacity-0"
              }`}
              autoPlay={videoConfig.autoplay}
              loop={videoConfig.loop}
              muted={videoConfig.muted}
              poster={videoConfig.poster}
              onLoadedData={() => setVideoLoaded(true)}
              onCanPlay={() => setVideoLoaded(true)}
            >
              <source src={videoBackground.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video Overlay */}
            {videoConfig.overlay && (
              <div
                className="absolute inset-0 z-10"
                style={{
                  backgroundColor: videoConfig.overlayColor,
                  opacity: videoConfig.overlayOpacity,
                }}
              />
            )}

            {/* Loading placeholder for video */}
            {!videoLoaded && (
              <div className="absolute inset-0 bg-gray-900 z-5 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-[#fcb11b] border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </>
        )}

        {/* Background overlay for non-video mode */}
        {!showVideoBackground && (
          <div className="absolute inset-0 overflow-hidden"></div>
        )}

        <div
          className={`relative ${
            showVideoBackground ? "z-20" : "z-20"
          } flex flex-col lg:flex-row items-center justify-center lg:justify-between ${
            height === "min-h-screen" ? "min-h-screen" : "h-full"
          } px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-8 lg:py-0`}
        >
          {/* Main Content */}
          <div
            className={`flex-1 w-full max-w-4xl text-center lg:text-left flex flex-col items-center lg:items-start justify-center mt-40 md:mt-0 ${
              showVideoBackground ? "text-white" : ""
            }`}
            style={{
              transform: `translateY(${Math.max(
                0,
                offsetY * -parallaxMultiplier
              )}px)`,
              opacity: Math.max(0.3, 1 - offsetY / opacityDivisor),
            }}
          >
            {customContent ? (
              customContent
            ) : (
              <>
                {showTextContent && (
                  <div className="relative">
                    <h1
                      className={`text-7xl lg:text-8xl xl:text-9xl 2xl:text-[12rem] ${
                        showVideoBackground
                          ? "text-white drop-shadow-2xl"
                          : "text-black dark:text-white"
                      } mb-4 sm:mb-6 leading-[0.85] tracking-tight transition-all duration-1000 ${
                        isTransitioning
                          ? "opacity-0 transform -translate-y-10"
                          : "opacity-100"
                      }`}
                    >
                      {title}
                    </h1>

                    {description && (
                      <p
                        className={`text-base px-12 md:px-0 sm:text-lg md:text-xl lg:text-2xl font-medium ${
                          showVideoBackground
                            ? "text-white drop-shadow-lg"
                            : "text-black dark:text-white"
                        } mb-4 leading-relaxed transition-all duration-1000 max-w-2xl mx-auto lg:mx-0 ${
                          isTransitioning
                            ? "opacity-0 transform -translate-y-10"
                            : "opacity-100"
                        }`}
                      >
                        {description}
                      </p>
                    )}
                  </div>
                )}

                {/* Final Transformation Section */}
                {showTextContent && (
                  <div className="absolute inset-0 z-50">
                    <div>
                      <h1
                        className={`text-4xl lg:text-8xl ${
                          showVideoBackground
                            ? "text-white drop-shadow-2xl"
                            : "text-black dark:text-white"
                        } font-bold mb-4 sm:mb-6 leading-[0.85] tracking-tight transition-all duration-1000 ${
                          scrollProgress > 0.85
                            ? "opacity-100 transform translate-y-0"
                            : "opacity-0 transform translate-y-10"
                        }`}
                      >
                        we are committed
                        <br />
                        <span
                          className={`text-[#fcb11b] ${styles["animate-spin-glow"]} inline-block mt-2 sm:mt-5`}
                        >
                          We aim for progress.
                        </span>
                      </h1>

                      {description && (
                        <p
                          className={`text-base sm:text-lg md:text-xl lg:text-2xl font-medium ${
                            showVideoBackground
                              ? "text-white drop-shadow-lg"
                              : "text-black dark:text-white"
                          } py-6 sm:py-10 leading-relaxed transition-all duration-1000 max-w-2xl mx-auto lg:mx-0 ${
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
                )}
              </>
            )}
          </div>

          {/* Sidebar Content */}
          <div
            className={`flex-1 w-full max-w-md mt-8 lg:mt-0 lg:ml-8 text-center lg:text-left flex flex-col items-center lg:items-start justify-center lg:self-end lg:pb-20 ${
              showVideoBackground ? "text-white" : ""
            }`}
            style={{
              transform: `translateY(${Math.max(0, offsetY * -0.2)}px)`,
              opacity: Math.max(0.2, 1 - offsetY / 600),
            }}
          >
            <div>
              {subtitle && (
                <p
                  className={`text-lg sm:text-xl md:text-2xl font-medium ${
                    showVideoBackground
                      ? "text-white drop-shadow-lg"
                      : "text-black dark:text-white"
                  } mb-4 leading-relaxed transition-all duration-1000 ${
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
                  className={`relative h-2 w-32 sm:w-48 overflow-hidden rounded-full mt-6 sm:mt-10 ${
                    showVideoBackground ? "bg-white/20" : "bg-white/20"
                  } transition-all duration-1000 mx-auto lg:mx-0 ${
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

            {/* Final Transformation Section for Sidebar */}
            <div>
              {subtitle && (
                <p
                  className={`text-lg sm:text-xl md:text-2xl font-medium ${
                    showVideoBackground
                      ? "text-white drop-shadow-lg"
                      : "text-black dark:text-white"
                  } mb-4 leading-relaxed transition-all duration-1000 ${
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
                  className={`relative h-2 w-32 sm:w-48 overflow-hidden rounded-full ${
                    showVideoBackground ? "bg-white/20" : "bg-white/20"
                  } transition-all mt-6 sm:mt-10 duration-1000 mx-auto lg:mx-0 ${
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
            className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20 transition-all duration-1000"
            style={{
              opacity: Math.max(0, 1 - offsetY / 300),
              transform: `translateX(-50%) ${
                isTransitioning ? "translateY(20px)" : ""
              }`,
            }}
          >
            <div
              className={`w-5 h-8 sm:w-6 sm:h-10 border-2 ${
                showVideoBackground
                  ? "border-white/60"
                  : "border-black/60 dark:border-white/60"
              } rounded-full flex justify-center`}
            >
              <div
                className={`w-1 h-2 sm:h-3 ${
                  showVideoBackground
                    ? "bg-white/60"
                    : "bg-black/60 dark:bg-white/60"
                } rounded-full mt-1 sm:mt-2 animate-pulse`}
              />
            </div>
            <p
              className={`${
                showVideoBackground
                  ? "text-white/60"
                  : "text-black/60 dark:text-white/60"
              } text-xs sm:text-sm mt-2 font-medium`}
            >
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

        @media (max-width: 640px) {
          .animate-bounce {
            animation-duration: 2s;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;

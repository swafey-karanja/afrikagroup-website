"use client";

import { useState, useEffect } from "react";

export default function ScrollGeometricBackground() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate shape properties based on scroll progress
  const opacity = scrollProgress;
  const scale = 0.3 + scrollProgress * 0.7; // Scale from 30% to 100%
  const rotation = scrollProgress * 180; // Rotate up to 180 degrees
  const translateY = (1 - scrollProgress) * 50; // Move up as user scrolls

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Shooting stars animations - vertical movement */}
      <div className="absolute inset-0">
        {/* Shooting star 1 */}
        <div
          className="absolute w-1 h-1 bg-orange-300 rounded-full animate-pulse opacity-70"
          style={{
            top: "-5%",
            left: "15%",
            animation: "shootingStar1 4s linear infinite",
          }}
        >
          <div className="absolute w-0.5 h-20 bg-gradient-to-b from-orange-300 to-transparent -translate-x-0.5 -translate-y-20"></div>
        </div>

        {/* Shooting star 2 */}
        <div
          className="absolute w-1 h-1 bg-amber-200 rounded-full animate-pulse opacity-60"
          style={{
            top: "-8%",
            left: "35%",
            animation: "shootingStar2 5s linear infinite 1s",
          }}
        >
          <div className="absolute w-0.5 h-16 bg-gradient-to-b from-amber-200 to-transparent -translate-x-0.5 -translate-y-16"></div>
        </div>

        {/* Shooting star 3 */}
        <div
          className="absolute w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse opacity-80"
          style={{
            top: "-6%",
            left: "55%",
            animation: "shootingStar3 4.5s linear infinite 2s",
          }}
        >
          <div className="absolute w-0.5 h-24 bg-gradient-to-b from-orange-400 to-transparent -translate-x-0.5 -translate-y-24"></div>
        </div>

        {/* Shooting star 4 */}
        <div
          className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-pulse opacity-50"
          style={{
            top: "-4%",
            left: "75%",
            animation: "shootingStar4 6s linear infinite 3s",
          }}
        >
          <div className="absolute w-0.5 h-18 bg-gradient-to-b from-yellow-300 to-transparent -translate-x-0.5 -translate-y-18"></div>
        </div>

        {/* Shooting star 5 */}
        <div
          className="absolute w-0.5 h-0.5 bg-orange-200 rounded-full animate-pulse opacity-40"
          style={{
            top: "-3%",
            left: "85%",
            animation: "shootingStar5 5.5s linear infinite 4s",
          }}
        >
          <div className="absolute w-0.5 h-12 bg-gradient-to-b from-orange-200 to-transparent -translate-x-0.5 -translate-y-12"></div>
        </div>

        {/* Shooting star 6 */}
        <div
          className="absolute w-1 h-1 bg-amber-300 rounded-full animate-pulse opacity-65"
          style={{
            top: "-7%",
            left: "5%",
            animation: "shootingStar6 4.2s linear infinite 0.5s",
          }}
        >
          <div className="absolute w-0.5 h-22 bg-gradient-to-b from-amber-300 to-transparent -translate-x-0.5 -translate-y-22"></div>
        </div>

        {/* Shooting star 7 */}
        <div
          className="absolute w-1 h-1 bg-orange-500 rounded-full animate-pulse opacity-75"
          style={{
            top: "-5%",
            left: "25%",
            animation: "shootingStar7 3.8s linear infinite 1.5s",
          }}
        >
          <div className="absolute w-0.5 h-20 bg-gradient-to-b from-orange-500 to-transparent -translate-x-0.5 -translate-y-20"></div>
        </div>

        {/* Shooting star 8 */}
        <div
          className="absolute w-0.5 h-0.5 bg-yellow-200 rounded-full animate-pulse opacity-45"
          style={{
            top: "-4%",
            left: "45%",
            animation: "shootingStar8 5.2s linear infinite 2.5s",
          }}
        >
          <div className="absolute w-0.5 h-14 bg-gradient-to-b from-yellow-200 to-transparent -translate-x-0.5 -translate-y-14"></div>
        </div>

        {/* Shooting star 9 */}
        <div
          className="absolute w-1 h-1 bg-amber-400 rounded-full animate-pulse opacity-55"
          style={{
            top: "-6%",
            left: "65%",
            animation: "shootingStar9 4.7s linear infinite 3.5s",
          }}
        >
          <div className="absolute w-0.5 h-18 bg-gradient-to-b from-amber-400 to-transparent -translate-x-0.5 -translate-y-18"></div>
        </div>

        {/* Shooting star 10 */}
        <div
          className="absolute w-1 h-1 bg-orange-300 rounded-full animate-pulse opacity-60"
          style={{
            top: "-8%",
            left: "95%",
            animation: "shootingStar10 4.3s linear infinite 4.5s",
          }}
        >
          <div className="absolute w-0.5 h-16 bg-gradient-to-b from-orange-300 to-transparent -translate-x-0.5 -translate-y-16"></div>
        </div>
      </div>

      {/* Main geometric shape */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute top-1/2 left-1/2 transform"
          style={{
            opacity,
            transform: `translate(-50%, calc(-50% + ${translateY}px)) scale(${scale}) rotate(${rotation}deg)`,
            transition: "none",
          }}
        >
          {/* Hexagonal geometric shape */}
          <div className="relative">
            {/* Main hexagon - covers full viewport */}
            <div
              className="w-screen h-[200vh] border-8 border-orange-300 rotate-0"
              style={{
                clipPath:
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            />

            {/* Inner hexagon */}
            <div
              className="absolute top-16 left-16 right-16 bottom-16 border-4 border-amber-400"
              style={{
                clipPath:
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            />

            {/* Center hexagon */}
            <div
              className="absolute top-32 left-32 right-32 bottom-32 bg-gradient-to-br from-orange-400/50 to-amber-400/30 border-2 border-orange-200/50"
              style={{
                clipPath:
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            />

            {/* Decorative dots around the shape - positioned for larger viewport */}
            <div className="absolute -top-8 left-1/2 w-4 h-4 bg-orange-300 rounded-full transform -translate-x-1/2" />
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-amber-400 rounded-full transform -translate-y-1/2" />
            <div className="absolute -bottom-8 left-1/2 w-4 h-4 bg-orange-400 rounded-full transform -translate-x-1/2" />
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-amber-300 rounded-full transform -translate-y-1/2" />
          </div>
        </div>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes shootingStar1 {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(400vh);
            opacity: 0;
          }
        }

        @keyframes shootingStar2 {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          15% {
            opacity: 0.6;
          }
          85% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(400vh);
            opacity: 0;
          }
        }

        @keyframes shootingStar3 {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          12% {
            opacity: 0.8;
          }
          88% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(400vh);
            opacity: 0;
          }
        }

        @keyframes shootingStar4 {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          8% {
            opacity: 0.5;
          }
          92% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(400vh);
            opacity: 0;
          }
        }

        @keyframes shootingStar5 {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          5% {
            opacity: 0.4;
          }
          95% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(400vh);
            opacity: 0;
          }
        }

        @keyframes shootingStar6 {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          12% {
            opacity: 0.65;
          }
          88% {
            opacity: 0.65;
          }
          100% {
            transform: translateY(400vh);
            opacity: 0;
          }
        }

        @keyframes shootingStar7 {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          15% {
            opacity: 0.75;
          }
          85% {
            opacity: 0.75;
          }
          100% {
            transform: translateY(400vh);
            opacity: 0;
          }
        }

        @keyframes shootingStar8 {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 0.45;
          }
          90% {
            opacity: 0.45;
          }
          100% {
            transform: translateY(400vh);
            opacity: 0;
          }
        }

        @keyframes shootingStar9 {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          8% {
            opacity: 0.55;
          }
          92% {
            opacity: 0.55;
          }
          100% {
            transform: translateY(400vh);
            opacity: 0;
          }
        }

        @keyframes shootingStar10 {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          12% {
            opacity: 0.6;
          }
          88% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(400vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

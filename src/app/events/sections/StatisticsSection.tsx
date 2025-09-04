"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Users,
  Calendar,
  MapPin,
  Award,
  TrendingUp,
  Globe,
  Building,
  Zap,
} from "lucide-react";

// Statistics data
const statistics = [
  {
    id: 1,
    icon: Users,
    value: 25000,
    suffix: "+",
    label: "Total Attendees",
    description: "Professionals joined our events",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: 2,
    icon: Calendar,
    value: 150,
    suffix: "+",
    label: "Events Hosted",
    description: "Successful events organized",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 3,
    icon: Globe,
    value: 85,
    suffix: "+",
    label: "Countries Reached",
    description: "Global community presence",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 4,
    icon: Building,
    value: 500,
    suffix: "+",
    label: "Partner Companies",
    description: "Industry collaborations",
    color: "from-orange-500 to-red-600",
  },
];

// Counter animation hook
const useCountAnimation = (targetValue: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(targetValue * progress));
        animationId = requestAnimationFrame(animate);
      } else {
        setCount(targetValue);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isVisible, targetValue, duration]);

  return { ref, count, isVisible };
};

interface StatCardProps {
  stat: (typeof statistics)[0];
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ stat, index }) => {
  const { ref, count, isVisible } = useCountAnimation(stat.value);
  const IconComponent = stat.icon;

  return (
    <div
      ref={ref}
      className={`relative group ${
        isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Main Card */}
      <div className="relative bg-white/70 dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
        {/* Background Gradient */}
        <div
          className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-br ${stat.color} opacity-10 rounded-full`}
        ></div>

        {/* Icon */}
        <div
          className={`inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br ${stat.color} rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
        >
          <IconComponent className="w-4 h-4 text-white" />
        </div>

        {/* Counter Display */}
        <div className="relative z-10">
          <div className="flex items-baseline mb-2">
            <span className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-[#fcb11b] transition-colors duration-300">
              {count.toLocaleString()}
            </span>
            <span className="text-xl lg:text-2xl font-bold text-[#fcb11b] ml-1">
              {stat.suffix}
            </span>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-[#fcb11b] transition-colors duration-300">
            {stat.label}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {stat.description}
          </p>
        </div>

        {/* Hover Accent */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#fcb11b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

const StatisticsSection: React.FC = () => {
  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {statistics.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-black dark:text-white text-md font-medium mb-6">
            Ready to be part of our next milestone?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-[#fcb11b] hover:bg-[#e6a016] text-black font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#fcb11b]/25 hover:scale-105">
              Join Our Next Event
              <Calendar className="w-5 h-5 ml-2" />
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/20 text-white hover:border-[#fcb11b] hover:text-[#fcb11b] font-semibold rounded-xl transition-all duration-200">
              Become a Partner
              <Building className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default StatisticsSection;

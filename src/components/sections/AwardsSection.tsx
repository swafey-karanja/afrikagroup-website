"use client";

import React, { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";

const AwardsSection = () => {
  const [activeSection, setActiveSection] = useState<number | null>(1);

  const services = [
    {
      id: 1,
      number: "01",
      title: "Elephant Award",
      description: "BiG Africa Summit - 2024",
      image: "/images/award-1.jpg",
    },
    {
      id: 2,
      number: "02",
      title: "Silver Award - Digital News Category",
      description: "Digitally Fit Awards - 2025",
      image: "/images/award-2.jpg",
    },
  ];

  return (
    <div className="">
      <div className="container px-4 md:px-6 py-8 mx-auto">
        {/* Header */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-[#fcb11b]">Awards</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#fcb11b]"></div>
        </div>

        {/* Services List */}
        <div className="divide-y divide-gray-200 dark:divide-gray-800 py-6">
          {services.map((service) => (
            <div key={service.id} className="relative">
              {/* Service Header */}
              <div
                className={`py-12 px-6 cursor-pointer transition-all duration-500 hover:bg-gray-100/30 dark:hover:bg-gray-900/70 ${
                  activeSection === service.id
                    ? "bg-gray-50/30 dark:bg-gray-900/70"
                    : ""
                }`}
                onClick={() =>
                  setActiveSection(
                    activeSection === service.id ? null : service.id
                  )
                }
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-8">
                    {/* Number Badge */}
                    <div className="flex items-center space-x-4">
                      <span className="text-lg text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-600 rounded-full px-4 py-2 min-w-[60px] text-center">
                        {service.number}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#fcb11b] transition-transform duration-300 ${
                          activeSection === service.id ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold">
                      {service.title}
                    </h2>
                  </div>

                  {/* Plus Icon */}
                  <Plus
                    className={`w-8 h-8 text-black dark:text-white transition-all duration-300 ${
                      activeSection === service.id
                        ? "rotate-45 text-[#fcb11b]"
                        : ""
                    }`}
                  />
                </div>
              </div>

              {/* Expanded Content */}
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out mb-6 p-3 ${
                  activeSection === service.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-12 ml-20">
                  <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Service Items */}
                    <div className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                        {service.description}
                      </p>
                    </div>

                    {/* Service Image */}
                    <div className="relative">
                      <div className="rounded-lg overflow-hidden flex items-center justify-center">
                        {/* Placeholder for actual image */}
                        <img
                          src={service.image}
                          alt=""
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease-out;
          }
        `}</style>
      </div>
    </div>
  );
};

export default AwardsSection;

"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from "lucide-react";

const BlogCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const partners = [
    {
      id: 1,
      title: "iGaming Afrika",
      image: "/images/iGaming.png",
      website: "https://igamingafrika.com/",
      color: "#18a05e",
    },
    {
      id: 2,
      title: "iGaming Afrika Summit",
      image: "/images/iGaming Summit.png",
      website: "https://summits.igamingafrika.com/",
      color: "#151f28",
    },
    {
      id: 3,
      title: "iGaming consult",
      image: "/images/iGaming consult.png",
      website: "https://igamingconsult.africa/",
      color: "#220c3d",
    },
    {
      id: 4,
      title: "iGaming Amerika",
      image: "/images/igamingamerika.png",
      website: "https://igamingamerika.com/",
      color: "#e60026",
    },
    {
      id: 5,
      title: "iGaming Europa",
      image: "/images/igamingeuropa.png",
      website: "https://igamingeuropa.com/",
      color: "#013398",
    },
    {
      id: 6,
      title: "Afriadz",
      image: "/images/afriadz.png",
      website: "https://afriadz.com/",
      color: "#f9943b",
    },
    {
      id: 7,
      title: "Gamblers association Kenya",
      image: "/images/gamblersassociation.png",
      // website: "#",
      color: "#81b636",
    },
  ];

  const maxIndex = partners.length - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white/40 backdrop-blur-xl dark:bg-black/40 rounded-2xl">
      <div className="w-full">
        {/* Header */}
        <div className="container px-4 md:px-6 mx-auto mb-12">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Our partners
              </h2>
              <div className="w-20 h-1 bg-[#fcb11b]"></div>
            </div>
            <div className="flex items-center gap-4">
              {/* Navigation Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className="w-10 h-10 bg-white dark:bg-gray-800 dark:hover:bg-[#fcb11b] border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
                <button
                  onClick={nextSlide}
                  disabled={currentIndex === maxIndex}
                  className="w-10 h-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 dark:hover:bg-[#fcb11b] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
              </div>
              <button
                className="px-6 py-2 bg-gray-900 dark:bg-gray-800 text-white rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-[#fcb11b] transition-colors flex items-center gap-2"
                onClick={() => window.open("/news", "_blank")}
              >
                View all partners
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="w-full overflow-hidden">
          {/* Carousel Track */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${currentIndex * 25}% + ${
                currentIndex === 0
                  ? "max(1rem, calc((100vw - 1600px) / 2 + 1.5rem))"
                  : "0px"
              }))`,
            }}
          >
            {partners.map((item, index) => (
              <div
                key={item.id}
                className="flex-shrink-0 px-3"
                style={{
                  width: `25%`,
                  marginLeft: index === 0 && currentIndex === 0 ? "0" : "0",
                  marginRight:
                    index === partners.length - 1 && currentIndex === maxIndex
                      ? "max(1rem, calc((100vw - 1200px) / 2 + 1.5rem))"
                      : "0",
                }}
              >
                <div
                  className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg dark:hover:shadow-gray-800/20 transition-all duration-300 cursor-pointer group"
                  style={{
                    backgroundColor: item.color, // Light mode dynamic background
                  }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-600"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <button
                      onClick={() => {
                        if (item.website) {
                          window.open(item.website, "_blank");
                        }
                      }}
                      disabled={!item.website}
                      className={`text-md font-medium flex items-center group/btn transition-transform duration-600 cursor-pointer ${
                        item.website
                          ? "text-white"
                          : "text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      View more details
                      <ArrowRight
                        className={`ml-1 w-6 h-6 transition-transform duration-600 transform
                          ${
                            item.website
                              ? "scale-75 group-hover:scale-100 group-hover:translate-x-2"
                              : ""
                          }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;

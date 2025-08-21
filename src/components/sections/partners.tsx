"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from "lucide-react";

const BlogCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const newsItems = [
    {
      id: 1,
      title: "iGaming Afrika",
      image: "/images/iGaming.png",
    },
    {
      id: 2,
      title: "iGaming Afrika Summit",
      image: "/images/iGaming Summit.png",
    },
    {
      id: 3,
      title: "iGaming consult",
      image: "/images/iGaming consult.png",
    },
    {
      id: 4,
      title: "iGaming Amerika",
      image: "/images/igamingamerika.png",
    },
    {
      id: 5,
      title: "iGaming Europa",
      image: "/images/igamingeuropa.png",
    },
    {
      id: 6,
      title: "Afriadz",
      image: "/images/afriadz.png",
    },
  ];

  const itemsPerView = 4;
  const maxIndex = Math.max(0, newsItems.length - itemsPerView);

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
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-950">
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
              <button
                className="px-6 py-2 bg-gray-900 dark:bg-gray-800 text-white rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
                onClick={() => window.open("/news", "_blank")}
              >
                View all partners
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Navigation Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className="w-10 h-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>

                <button
                  onClick={nextSlide}
                  disabled={currentIndex === maxIndex}
                  className="w-10 h-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="w-full overflow-hidden">
          {/* Carousel Track */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${
                currentIndex * (100 / itemsPerView)
              }% + ${currentIndex === 0 ? "1rem" : "0px"}))`,
              paddingLeft: currentIndex === 0 ? "1rem" : "0",
            }}
          >
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="w-full flex-shrink-0 px-3"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg dark:hover:shadow-gray-800/20 transition-all duration-300 cursor-pointer group">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <button className="text-[#fcb11b] hover:text-[#e6a018] text-sm font-medium flex items-center group/btn transition-colors">
                      View more details
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index
                    ? "bg-[#fcb11b] w-8"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;

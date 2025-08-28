"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from "lucide-react";

const BlogCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSlidesToShow(1);
        setIsMobile(true);
      } else if (width < 768) {
        setSlidesToShow(1);
        setIsMobile(true);
      } else if (width < 1024) {
        setSlidesToShow(2);
        setIsMobile(false);
      } else {
        // Original desktop behavior - show 4 slides
        setSlidesToShow(4);
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset current index when slides to show changes
  useEffect(() => {
    const maxPossibleIndex = Math.max(0, partners.length - slidesToShow);
    if (currentIndex > maxPossibleIndex) {
      setCurrentIndex(maxPossibleIndex);
    }
  }, [slidesToShow, currentIndex, partners.length]);

  const maxIndex = Math.max(0, partners.length - slidesToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  const getSlideWidth = () => {
    return 100 / slidesToShow;
  };

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="w-full">
        {/* Header */}
        <div className="container px-4 md:px-6 mx-auto mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                <span className="text-[#fcb11b]">Our</span> partners
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-[#fcb11b]"></div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Navigation Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white dark:bg-gray-800 dark:hover:bg-[#fcb11b] border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-300" />
                </button>
                <button
                  onClick={nextSlide}
                  disabled={currentIndex >= maxIndex}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 dark:hover:bg-[#fcb11b] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-300" />
                </button>
              </div>

              <button
                className="flex-1 sm:flex-none px-4 sm:px-6 py-2 bg-gray-900 dark:bg-gray-800 text-white rounded-full text-xs sm:text-sm font-medium hover:bg-gray-800 dark:hover:bg-[#fcb11b] transition-colors flex items-center justify-center gap-2"
                onClick={() => window.open("/news", "_blank")}
              >
                <span className="hidden sm:inline">View all partners</span>
                <span className="sm:hidden">View all</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>

          {/* Mobile Pagination Dots */}
          {isMobile && maxIndex > 0 && (
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-[#fcb11b] w-4"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Carousel Container */}
        <div className="w-full overflow-hidden">
          {/* Carousel Track */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform:
                slidesToShow === 4
                  ? `translateX(calc(-${currentIndex * 25}% + ${
                      currentIndex === 0
                        ? "max(1rem, calc((100vw - 1600px) / 2 + 1.5rem))"
                        : "0px"
                    }))`
                  : `translateX(-${currentIndex * getSlideWidth()}%)`,
            }}
          >
            {partners.map((item, index) => (
              <div
                key={item.id}
                className="flex-shrink-0 px-2 sm:px-3"
                style={{
                  width: slidesToShow === 4 ? `25%` : `${getSlideWidth()}%`,
                  marginLeft:
                    index === 0 && currentIndex === 0 && slidesToShow === 4
                      ? "0"
                      : "0",
                  marginRight:
                    index === partners.length - 1 &&
                    currentIndex === maxIndex &&
                    slidesToShow === 4
                      ? "max(1rem, calc((100vw - 1200px) / 2 + 1.5rem))"
                      : "0",
                }}
              >
                <div
                  className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg dark:hover:shadow-gray-800/20 transition-all duration-300 cursor-pointer group h-full"
                  style={{
                    backgroundColor: item.color,
                  }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 sm:h-60 md:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-600"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6">
                    <h3 className="text-sm sm:text-base font-semibold text-white mb-3 sm:mb-4 line-clamp-2">
                      {item.title}
                    </h3>

                    <button
                      onClick={() => {
                        if (item.website) {
                          window.open(item.website, "_blank");
                        }
                      }}
                      disabled={!item.website}
                      className={`text-xs sm:text-sm lg:text-md font-medium flex items-center group/btn transition-transform duration-600 cursor-pointer ${
                        item.website
                          ? "text-white hover:text-gray-200"
                          : "text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      <span className="hidden sm:inline">
                        View more details
                      </span>
                      <span className="sm:hidden">View details</span>
                      <ArrowRight
                        className={`ml-1 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-transform duration-600 transform  ${
                          item.website
                            ? "scale-75 group-hover:scale-100 group-hover:translate-x-2"
                            : ""
                        }`}
                      />
                      {/* <ArrowRight
                        className={`ml-1 w-6 h-6 transition-transform duration-600 transform
                          ${
                            item.website
                              ? "scale-75 group-hover:scale-100 group-hover:translate-x-2"
                              : ""
                          }`}
                      /> */}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Swipe Indicator */}
        {isMobile && partners.length > 1 && (
          <div className="text-center mt-4 text-xs text-gray-500 dark:text-gray-400">
            <span>Swipe to see more partners</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogCarousel;

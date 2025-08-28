"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const EventGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Architecture", "Branding", "Design", "Web Design"];

  const portfolioItems = [
    {
      id: 1,
      category: "Branding",
      title: "Minimal Brand Identity",
      image: "/gallery/001.jpg",
      description:
        "A sophisticated brand identity system with clean typography and elegant design elements.",
      featured: false,
    },
    {
      id: 2,
      category: "Architecture",
      title: "Modern Architecture",
      image: "/gallery/002.jpg",
      description:
        "Contemporary architectural design with glass facades and minimalist aesthetics.",
      featured: true,
    },
    {
      id: 3,
      category: "Branding",
      title: "Grand Canyon Project",
      image: "/gallery/003.jpg",
      description:
        "Nature-inspired branding with organic shapes and earth tones.",
      featured: false,
    },
    {
      id: 4,
      category: "Web Design",
      title: "Power Up Your Drive",
      image: "/gallery/004.jpg",
      description:
        "Dynamic web interface design with bold typography and engaging user experience.",
      featured: false,
    },
    {
      id: 5,
      category: "Design",
      title: "Transforming Brands",
      image: "/gallery/005.jpg",
      description: "Editorial design showcasing brand transformation stories.",
      featured: false,
    },
    {
      id: 6,
      category: "Architecture",
      title: "Urban Planning",
      image: "/gallery/006.jpg",
      description:
        "Sustainable urban development with focus on community spaces.",
      featured: false,
    },
  ];

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="w-full py-6">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-[#fcb11b]">Image</span> Gallery
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#fcb11b]"></div>
        </div>

        {/* Filter Dropdown Navigation */}
        <div className="flex justify-start py-3">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex bg-[#fcb11b] items-center gap-2 px-4 py-1 text-md font-medium text-black dark:text-white border rounded-lg">
              Filter: {activeFilter}
              <ChevronDown className="w-3 h-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
              {filters.map((filter) => (
                <DropdownMenuItem
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`cursor-pointer text-sm py-1 ${
                    activeFilter === filter
                      ? "bg-[#fcb11b] text-white"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {filter}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-lg bg-gray-900 hover:shadow-2xl
              }`}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 bg-[#fcb11b] text-white text-sm font-medium rounded-full mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Minimal Info Bar */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-4 bg-gradient-to-t from-black/90 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Subtle Border Effect */}
              <div className="absolute inset-0 border border-gray-800 rounded-lg group-hover:border-red-500/30 transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventGallery;

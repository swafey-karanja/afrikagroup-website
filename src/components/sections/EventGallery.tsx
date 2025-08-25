"use client";

import React, { useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Users,
} from "lucide-react";

const EventGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const events = [
    {
      id: 1,
      category: "summit",
      title: "BiG Africa Summit 2024",
      date: "March 15, 2024",
      location: "Nairobi, Kenya",
      attendees: "500+",
      images: [
        "/images/event-1-1.jpg",
        "/images/event-1-2.jpg",
        "/images/event-1-3.jpg",
        "/images/event-1-4.jpg",
      ],
    },
    {
      id: 2,
      category: "awards",
      title: "Digitally Fit Awards 2025",
      date: "January 20, 2025",
      location: "Lagos, Nigeria",
      attendees: "300+",
      images: [
        "/images/event-2-1.jpg",
        "/images/event-2-2.jpg",
        "/images/event-2-3.jpg",
      ],
    },
    {
      id: 3,
      category: "conference",
      title: "iGaming Afrika Conference",
      date: "November 8, 2024",
      location: "Cape Town, South Africa",
      attendees: "800+",
      images: [
        "/images/event-3-1.jpg",
        "/images/event-3-2.jpg",
        "/images/event-3-3.jpg",
        "/images/event-3-4.jpg",
        "/images/event-3-5.jpg",
      ],
    },
    {
      id: 4,
      category: "networking",
      title: "Industry Networking Night",
      date: "December 12, 2024",
      location: "Accra, Ghana",
      attendees: "150+",
      images: ["/images/event-4-1.jpg", "/images/event-4-2.jpg"],
    },
  ];

  const filters = [
    { key: "all", label: "All Events" },
    { key: "summit", label: "Summits" },
    { key: "awards", label: "Awards" },
    { key: "conference", label: "Conferences" },
    { key: "networking", label: "Networking" },
  ];

  const filteredEvents =
    activeFilter === "all"
      ? events
      : events.filter((event) => event.category === activeFilter);

  const allImages = filteredEvents.flatMap((event) =>
    event.images.map((image) => ({
      ...event,
      image,
    }))
  );

  const openLightbox = (imageData, imageIndex) => {
    setSelectedImage({ ...imageData, imageIndex });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction) => {
    if (!selectedImage) return;

    const currentIndex = allImages.findIndex(
      (img) => img.image === selectedImage.image && img.id === selectedImage.id
    );

    let newIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % allImages.length;
    } else {
      newIndex = currentIndex === 0 ? allImages.length - 1 : currentIndex - 1;
    }

    setSelectedImage({ ...allImages[newIndex], imageIndex: newIndex });
  };

  return (
    <div className="bg-[#fffbf0] backdrop-blur-xl dark:bg-black">
      <div className="container px-4 md:px-6 py-8 mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-[#fcb11b]">Event</span> Gallery
          </h2>
          <div className="w-20 h-1 bg-[#fcb11b] mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            Explore moments from our exciting events, summits, and conferences
            across Africa and beyond.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? "bg-[#fcb11b] text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="space-y-16">
          {filteredEvents.map((event) => (
            <div key={event.id} className="group">
              {/* Event Info Header */}
              {/* <div className="mb-8 bg-[#fff6dc] dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {event.title}
                </h3>
                <div className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#fcb11b]" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#fcb11b]" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#fcb11b]" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>
              </div> */}

              {/* Images Grid */}
              <div
                className={`grid gap-4 ${
                  event.images.length === 1
                    ? "grid-cols-1 max-w-2xl"
                    : event.images.length === 2
                    ? "grid-cols-1 md:grid-cols-2"
                    : event.images.length === 3
                    ? "grid-cols-1 md:grid-cols-3"
                    : event.images.length === 4
                    ? "grid-cols-2 md:grid-cols-4"
                    : "grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
                }`}
              >
                {event.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className={`relative overflow-hidden rounded-xl cursor-pointer group/image transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl ${
                      imageIndex === 0 && event.images.length > 2
                        ? "md:col-span-2 md:row-span-2"
                        : ""
                    }`}
                    onClick={() =>
                      openLightbox({ ...event, image }, imageIndex)
                    }
                  >
                    <div className="relative">
                      {/* Placeholder for actual image */}
                      <div
                        className={`bg-gradient-to-br from-orange-300/30 to-yellow-300/30 dark:from-orange-800/30 dark:to-yellow-800/30 ${
                          imageIndex === 0 && event.images.length > 2
                            ? "h-80 md:h-96"
                            : "h-40 md:h-48"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${event.title} - Image ${imageIndex + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback for missing images
                            e.target.style.display = "none";
                            e.target.parentElement.innerHTML = `
                              <div class="w-full h-full flex items-center justify-center">
                                <div class="text-center text-gray-400 dark:text-gray-600">
                                  <div class="w-16 h-16 mx-auto mb-2 rounded-full bg-[#fcb11b]/20 flex items-center justify-center">
                                    <div class="w-8 h-8 rounded-full bg-[#fcb11b]"></div>
                                  </div>
                                  <p class="text-sm">Event Photo</p>
                                </div>
                              </div>
                            `;
                          }}
                        />
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/30 transition-all duration-300 flex items-center justify-center">
                        <div className="transform scale-0 group-hover/image:scale-100 transition-all duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                          <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-7xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateLightbox("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => navigateLightbox("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `
                      <div class="w-96 h-96 bg-gray-800 rounded-lg flex items-center justify-center">
                        <div class="text-center text-gray-400">
                          <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-[#fcb11b]/20 flex items-center justify-center">
                            <div class="w-10 h-10 rounded-full bg-[#fcb11b]"></div>
                          </div>
                          <p>Event Photo</p>
                        </div>
                      </div>
                    `;
                  }}
                />

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {selectedImage.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {selectedImage.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {selectedImage.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventGallery;

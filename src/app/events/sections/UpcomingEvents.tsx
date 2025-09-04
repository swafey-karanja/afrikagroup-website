"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react";

// Event type
interface Event {
  id: number;
  title: string;
  date: string;
  endDate: string;
  location: string;
  description: string;
  website: string;
  color: string;
}

// EventCard props type
interface EventCardProps {
  event: Event;
}

// Sample event data
const events = [
  {
    id: 1,
    title: "iGaming AFRIKA 2026",
    date: "2026-07-27",
    endDate: "2026-07-31",
    location: "Sarit Center Expo",
    description:
      "Join industry leaders, innovators, and decision-makers at the premier event shaping the future of iGaming across the African continent. iGaming AFRIKA 2026 is the essential platform for networking, discovering cutting-edge technologies, and gaining invaluable insights into the fastest-growing iGaming market in Africa.",
    website: "www.igamingafrika.com",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 2,
    title: "Tech Innovation Summit 2025",
    date: "2025-09-15",
    endDate: "2025-09-17",
    location: "Silicon Valley Convention Center",
    description:
      "Explore the latest breakthroughs in AI, blockchain, and emerging technologies. Connect with industry pioneers, discover revolutionary solutions, and shape the future of technology across Africa and beyond.",
    website: "www.techinnovationsummit.com",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: 3,
    title: "Digital Marketing Expo",
    date: "2025-10-05",
    endDate: "2025-10-07",
    location: "Cape Town International Center",
    description:
      "Master cutting-edge marketing strategies from experts who've scaled brands globally. Perfect networking opportunity for marketers, entrepreneurs, and digital innovators looking to dominate the African market.",
    website: "www.digitalmarketingexpo.co.za",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 4,
    title: "Fintech Revolution Conference",
    date: "2025-11-12",
    endDate: "2025-11-14",
    location: "Lagos Business District",
    description:
      "Discover the future of financial technology in Africa. Connect with fintech pioneers, investors, and innovators reshaping how Africans bank, invest, and transact in the digital economy.",
    website: "www.fintechrevolution.ng",
    color: "from-orange-500 to-red-600",
  },
];

interface CountdownProps {
  targetDate: string | number | Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor(
          (difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
        );
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ months, days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-2 mb-6">
      <div className="bg-[#fcb11b] text-black dark:text-white px-3 py-2 rounded-lg font-bold text-sm min-w-[60px] text-center">
        <div>{timeLeft.months}</div>
        <div className="text-xs">Mon</div>
      </div>
      <div className="bg-[#fcb11b] text-black dark:text-white px-3 py-2 rounded-lg font-bold text-sm min-w-[60px] text-center">
        <div>{timeLeft.days}</div>
        <div className="text-xs">Days</div>
      </div>
      <div className="bg-[#fcb11b] text-black dark:text-white px-3 py-2 rounded-lg font-bold text-sm min-w-[60px] text-center">
        <div>{timeLeft.hours}</div>
        <div className="text-xs">Hrs</div>
      </div>
      <div className="bg-[#fcb11b] text-black dark:text-white px-3 py-2 rounded-lg font-bold text-sm min-w-[60px] text-center">
        <div>{timeLeft.minutes}</div>
        <div className="text-xs">Mins</div>
      </div>
      <div className="bg-[#fcb11b] text-black dark:text-white px-3 py-2 rounded-lg font-bold text-sm min-w-[60px] text-center">
        <div>{timeLeft.seconds}</div>
        <div className="text-xs">Secs</div>
      </div>
    </div>
  );
};

// Format date range
const formatDateRange = (
  startDate: string | number | Date,
  endDate: string | number | Date
) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const startDay = start.getDate();
  const endDay = end.getDate();
  const month = start.toLocaleDateString("en-US", { month: "long" });
  const year = start.getFullYear();

  if (startDay === endDay) {
    return `${startDay} ${month}, ${year}`;
  }

  return `${startDay} - ${endDay} ${month}, ${year}`;
};

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="flex items-center justify-center min-h-[500px] px-4">
      <div className="flex flex-col lg:flex-row items-center gap-8 space-x-16 max-w-6xl w-full">
        {/* Left side - Event cards visual */}
        <div className="relative flex-shrink-0">
          <div className="relative">
            {/* Background card */}
            <div
              className={`w-72 h-96 bg-gradient-to-br ${event.color} rounded-3xl shadow-2xl transform rotate-6 opacity-80`}
            ></div>

            {/* Main card */}
            <div
              className={`absolute top-0 left-0 w-72 h-96 bg-gradient-to-br ${event.color} rounded-3xl shadow-2xl flex flex-col items-center justify-center text-white transform -rotate-2 border-4 border-white/20`}
            >
              <div className="text-center px-6">
                {/* Logo placeholder */}
                <div className="w-16 h-16 bg-white/20 rounded-full mb-4 mx-auto flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-2 leading-tight">
                  {event.title.split(" ").slice(0, 2).join(" ")}
                </h3>
                <h4 className="text-lg font-semibold mb-8 opacity-90">
                  {event.title.split(" ").slice(2).join(" ")}
                </h4>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-center text-sm font-medium opacity-90">
                    {event.website}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Event details */}
        <div className="flex-1 text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">{event.title}</h2>

          {/* Countdown timer */}
          <Countdown targetDate={event.date} />

          {/* Description */}
          <p className="text-md text-black dark:text-white mb-8 font-medium leading-relaxed max-w-2xl">
            {event.description}
          </p>

          {/* Event details */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center dark:text-[#fcb11b] text-black">
              <Calendar className="w-5 h-5 mr-3" />
              <span className="text-md font-semibold">
                Date: {formatDateRange(event.date, event.endDate)}
              </span>
            </div>
            <div className="flex items-center dark:text-[#fcb11b] text-black">
              <MapPin className="w-5 h-5 mr-3" />
              <span className="text-md font-semibold">
                Location: {event.location}
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-[#fcb11b] hover:bg-[#e6a016] text-black dark:text-white font-bold py-4 px-12 rounded-xl text-md transition-all duration-200 hover:shadow-lg hover:shadow-[#fcb11b]/25 hover:scale-105 active:scale-95">
            Find out more
          </button>
        </div>
      </div>
    </div>
  );
};

const UpcomingEventsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start from 1 (first real slide)
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Create extended array with clones for infinite effect
  const extendedEvents = [
    events[events.length - 1], // Last item clone at the beginning
    ...events,
    events[0], // First item clone at the end
  ];

  const goToSlide = (
    slideIndex: React.SetStateAction<number>,
    withTransition = true
  ) => {
    setIsTransitioning(withTransition);
    setCurrentSlide(slideIndex);
  };

  const nextSlide = () => {
    goToSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    goToSlide(currentSlide - 1);
  };

  // Handle infinite loop logic
  useEffect(() => {
    if (currentSlide === 0) {
      // If we're at the clone of the last item, jump to the real last item
      setTimeout(() => goToSlide(events.length, false), 700);
    } else if (currentSlide === events.length + 1) {
      // If we're at the clone of the first item, jump to the real first item
      setTimeout(() => goToSlide(1, false), 700);
    }
  }, [currentSlide]);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 8 seconds

    return () => clearInterval(timer);
  }, [currentSlide]);

  // Get the actual slide index for indicators (accounting for clones)
  const getActualSlideIndex = () => {
    if (currentSlide === 0) return events.length - 1;
    if (currentSlide === events.length + 1) return 0;
    return currentSlide - 1;
  };

  return (
    <section className="container mx-auto flex flex-col px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="text-[#fcb11b]">Upcoming</span> Events
        </h2>
        <div className="w-16 sm:w-20 h-1 bg-[#fcb11b]"></div>
      </div>

      {/* Carousel Container */}
      <div className="flex-1 relative overflow-hidden">
        <div
          className={`flex h-full ${
            isTransitioning
              ? "transition-transform duration-700 ease-in-out"
              : ""
          }`}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {extendedEvents.map((event, index) => (
            <div key={`${event.id}-${index}`} className="w-full flex-shrink-0">
              <EventCard event={event} />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 dark:bg-[#fcb11b]/50 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 dark:bg-[#fcb11b]/50 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center space-x-3 py-8">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index + 1)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === getActualSlideIndex()
                ? "bg-[#fcb11b] scale-125"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-[#fcb11b] rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-[#fcb11b]/50 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-white/20 rounded-full animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

export default UpcomingEventsCarousel;

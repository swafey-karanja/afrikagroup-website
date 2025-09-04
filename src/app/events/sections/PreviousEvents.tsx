"use client";

import React, { useState, useEffect, useRef } from "react";
import { Calendar, MapPin, Users, Award, Camera } from "lucide-react";

// Sample past events data
const pastEvents = [
  {
    id: 1,
    title: "Tech Innovation Summit 2024",
    date: "2024-11-15",
    location: "Silicon Valley Convention Center",
    recap:
      "Over 5,000 attendees explored groundbreaking AI technologies and networked with industry pioneers from across the globe.",
    highlights: "250+ speakers, 50+ countries represented",
    image: "/api/placeholder/400/250",
    attendees: "5,000+",
  },
  {
    id: 2,
    title: "Digital Marketing Masterclass",
    date: "2024-10-22",
    location: "Online Event",
    recap:
      "Marketing professionals from 80+ countries learned cutting-edge strategies that generated over $2M in combined revenue for attendees.",
    highlights: "80+ countries, $2M+ revenue impact",
    image: "/api/placeholder/400/250",
    attendees: "3,200+",
  },
  {
    id: 3,
    title: "Startup Pitch Championship",
    date: "2024-09-08",
    location: "Downtown Innovation Hub",
    recap:
      "Witnessed 20 promising startups compete for $500K in funding, with 8 companies securing investment deals on the spot.",
    highlights: "$500K funding awarded, 8 deals closed",
    image: "/api/placeholder/400/250",
    attendees: "800+",
  },
  {
    id: 4,
    title: "UX/UI Design Workshop Series",
    date: "2024-08-12",
    location: "Creative Arts Center",
    recap:
      "Designers enhanced their skills through hands-on workshops, with 95% of participants reporting improved portfolio quality.",
    highlights: "95% skill improvement rate",
    image: "/api/placeholder/400/250",
    attendees: "450+",
  },
  {
    id: 5,
    title: "Blockchain & Web3 Expo",
    date: "2024-07-18",
    location: "Tech District Arena",
    recap:
      "Explored the decentralized future with 150+ Web3 projects showcased and $10M+ in new partnerships formed.",
    highlights: "150+ projects, $10M+ partnerships",
    image: "/api/placeholder/400/250",
    attendees: "4,500+",
  },
  {
    id: 6,
    title: "Sustainable Business Forum",
    date: "2024-06-25",
    location: "Green Business Center",
    recap:
      "Companies shared sustainable practices that collectively reduced carbon footprint by 40% while maintaining profitability.",
    highlights: "40% carbon reduction achieved",
    image: "/api/placeholder/400/250",
    attendees: "1,200+",
  },
];

// Format date to readable format
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Format date for timeline marker
const formatTimelineDate = (
  dateString: string
): { month: string; year: string } => {
  const date = new Date(dateString);
  return {
    month: date.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
    year: date.getFullYear().toString(),
  };
};

// Intersection Observer Hook for animations
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

interface EventTimelineItemProps {
  event: (typeof pastEvents)[0];
  index: number;
}

const EventTimelineItem: React.FC<EventTimelineItemProps> = ({
  event,
  index,
}) => {
  const { ref, isVisible } = useIntersectionObserver();
  const isLeft = index % 2 === 0;
  const timelineDate = formatTimelineDate(event.date);

  return (
    <div
      ref={ref}
      className={`relative flex items-center w-full mb-16 last:mb-0 ${
        isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center w-full">
        {isLeft ? (
          <>
            {/* Left Content */}
            <div className="w-5/12 pr-8">
              <EventContent event={event} isLeft={true} />
            </div>

            {/* Timeline Center */}
            <div className="w-2/12 flex justify-center">
              <TimelineMarker date={timelineDate} />
            </div>

            {/* Right Empty */}
            <div className="w-5/12"></div>
          </>
        ) : (
          <>
            {/* Left Empty */}
            <div className="w-5/12"></div>

            {/* Timeline Center */}
            <div className="w-2/12 flex justify-center">
              <TimelineMarker date={timelineDate} />
            </div>

            {/* Right Content */}
            <div className="w-5/12 pl-8">
              <EventContent event={event} isLeft={false} />
            </div>
          </>
        )}
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex items-start w-full">
        <div className="flex flex-col items-center mr-6 flex-shrink-0">
          <TimelineMarker date={timelineDate} />
        </div>
        <div className="flex-1">
          <EventContent event={event} isLeft={true} />
        </div>
      </div>
    </div>
  );
};

interface TimelineMarkerProps {
  date: { month: string; year: string };
}

const TimelineMarker: React.FC<TimelineMarkerProps> = ({ date }) => (
  <div className="relative flex flex-col items-center">
    {/* Date Badge */}
    <div className="bg-[#fcb11b] text-black px-3 py-2 rounded-lg text-xs font-bold text-center mb-2 shadow-lg">
      <div className="leading-none">{date.month}</div>
      <div className="leading-none">{date.year}</div>
    </div>

    {/* Timeline Dot */}
    <div className="w-6 h-6 bg-[#fcb11b] rounded-full shadow-lg relative z-10"></div>

    {/* Timeline Line */}
    <div className="w-0.5 h-16 bg-gray-300 dark:bg-gray-600 absolute top-12 -z-10"></div>
  </div>
);

interface EventContentProps {
  event: (typeof pastEvents)[0];
  isLeft: boolean;
}

const EventContent: React.FC<EventContentProps> = ({ event, isLeft }) => (
  <div
    className={`bg-white/70 dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 group ${
      isLeft ? "lg:ml-auto" : "lg:mr-auto"
    } max-w-md`}
  >
    {/* Event Image */}
    <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <Camera className="w-12 h-12 text-gray-400 dark:text-gray-500" />
      </div>
      <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs font-medium">
        {event.attendees} attendees
      </div>
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[#fcb11b]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    {/* Content */}
    <div className="p-6">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-[#fcb11b] transition-colors duration-200 leading-tight">
          {event.title}
        </h3>
      </div>

      {/* Event Details */}
      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-1.5 text-[#fcb11b]" />
          {formatDate(event.date)}
        </div>
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-1.5 text-[#fcb11b]" />
          {event.location}
        </div>
      </div>

      {/* Event Recap */}
      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
        {event.recap}
      </p>

      {/* Highlights */}
      <div className="flex items-center justify-between">
        <div className="flex items-center text-xs text-[#fcb11b] font-medium">
          <Award className="w-3 h-3 mr-1" />
          {event.highlights}
        </div>
        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
          <Users className="w-3 h-3 mr-1" />
          {event.attendees}
        </div>
      </div>
    </div>
  </div>
);

const PastEventsTimeline: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200 relative overflow-hidden">
      <div className="container mx-auto relative">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="text-[#fcb11b]">Past</span> Events
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#fcb11b]"></div>
          <p className="text-lg text-black dark:text-white mx-auto my-3 font-medium">
            Reflecting on memorable moments and successful gatherings that
            brought our community together
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Main Timeline Line (Desktop only) */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-0.5 h-full w-2 bg-gradient-to-b from-[#fcb11b] via-gray-300 dark:via-gray-600 to-[#fcb11b] opacity-100"></div>

          {/* Timeline Items */}
          <div className="space-y-0 py-8">
            {pastEvents.map((event, index) => (
              <EventTimelineItem key={event.id} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-32 left-8 w-1 h-1 bg-[#fcb11b] rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-64 right-12 w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-16 w-1 h-1 bg-[#fcb11b] rounded-full opacity-50 animate-pulse delay-2000"></div>

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

export default PastEventsTimeline;

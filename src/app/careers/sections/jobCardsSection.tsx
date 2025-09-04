"use client";

import { useState } from "react";
import {
  ChevronRightIcon,
  MapPinIcon,
  ClockIcon,
  Building,
} from "lucide-react";

// Types
interface JobBadge {
  text: string;
  type: "location" | "employment" | "work-type";
  icon?: "map" | "clock" | "building";
}

interface Job {
  id: string;
  title: string;
  badges: JobBadge[];
  description: string;
  category: string;
}

interface JobCategory {
  id: string;
  name: string;
  count: number;
}

// Sample data
const jobCategories: JobCategory[] = [
  { id: "all", name: "All positions", count: 17 },
  { id: "engineering", name: "Engineering", count: 7 },
  { id: "product", name: "Product", count: 3 },
  { id: "design", name: "Design", count: 1 },
  { id: "operation", name: "Operation", count: 4 },
  { id: "marketing", name: "Marketing", count: 2 },
];

const jobs: Job[] = [
  {
    id: "1",
    title: "Full-Stack Developers",
    category: "engineering",
    badges: [
      { text: "Tartu", type: "location", icon: "map" },
      { text: "Full-time", type: "employment", icon: "clock" },
    ],
    description:
      "Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
  },
  {
    id: "2",
    title: "Application developer (react native)",
    category: "engineering",
    badges: [
      { text: "Tartu", type: "location", icon: "map" },
      { text: "Full-time", type: "employment", icon: "clock" },
    ],
    description:
      "Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
  },
  {
    id: "3",
    title: "Senior Product designer",
    category: "design",
    badges: [
      { text: "Hybrid", type: "work-type", icon: "building" },
      { text: "Tallinn", type: "location", icon: "map" },
      { text: "Full-time", type: "employment", icon: "clock" },
    ],
    description:
      "Since 2019 we've worked on 30+ major projects from 8 different industries that are being used by 500,000+ users and 1000+ businesses from 70+ different countries. Need full-cycle product development or an improvement cycle? Let's talk!",
  },
  {
    id: "4",
    title: "Product Manager",
    category: "product",
    badges: [
      { text: "Remote", type: "work-type", icon: "building" },
      { text: "Netherlands", type: "location", icon: "map" },
      { text: "Full-time", type: "employment", icon: "clock" },
    ],
    description:
      "If you are PM and you eager to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features. 30+ major projects from 8 different industries that are being used by 500,000+ users and 1000+ businesses from 70+ different countries.",
  },
  {
    id: "5",
    title: "Senior Software Engineer",
    category: "engineering",
    badges: [
      { text: "Remote", type: "work-type", icon: "building" },
      { text: "Full-time", type: "employment", icon: "clock" },
    ],
    description:
      "Join our team of experienced engineers working on cutting-edge solutions. You'll be responsible for architecting scalable systems and mentoring junior developers while collaborating with cross-functional teams.",
  },
  {
    id: "6",
    title: "Marketing Specialist",
    category: "marketing",
    badges: [
      { text: "Tallinn", type: "location", icon: "map" },
      { text: "Part-time", type: "employment", icon: "clock" },
    ],
    description:
      "We're looking for a creative marketing specialist to help grow our brand presence. You'll work on digital campaigns, content strategy, and help us reach new audiences through innovative marketing approaches.",
  },
];

// Badge component
const JobBadge = ({ badge }: { badge: JobBadge }) => {
  const getIcon = () => {
    switch (badge.icon) {
      case "map":
        return <MapPinIcon className="w-3 h-3" />;
      case "clock":
        return <ClockIcon className="w-3 h-3" />;
      case "building":
        return <Building className="w-3 h-3" />;
      default:
        return null;
    }
  };

  const getBadgeColor = () => {
    switch (badge.type) {
      case "location":
        return "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800";
      case "employment":
        return "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800";
      case "work-type":
        return "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700";
    }
  };

  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getBadgeColor()}`}
    >
      {getIcon()}
      {badge.text}
    </span>
  );
};

// Job card component
const JobCard = ({ job }: { job: Job }) => {
  return (
    <div className="bg-white/70 dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 hover:shadow-md dark:hover:shadow-lg transition-all duration-200 hover:border-gray-200 dark:hover:border-gray-700 group">
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-[#fcb11b] dark:group-hover:text-[#fcb11b] transition-colors">
            {job.title}
          </h3>

          <div className="flex flex-wrap gap-2 mb-4">
            {job.badges.map((badge, index) => (
              <JobBadge key={index} badge={badge} />
            ))}
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {job.description}
          </p>
        </div>
      </div>
    </div>
  );
};

// Main careers component
const CareersPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredJobs =
    activeCategory === "all"
      ? jobs
      : jobs.filter((job) => job.category === activeCategory);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-[#fcb11b]">Open</span> Positions
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#fcb11b]"></div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white/70 dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 sticky top-8">
              <nav className="space-y-2">
                {jobCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex justify-between items-center ${
                      activeCategory === category.id
                        ? "bg-[#fcb11b]/20 text-[#fcb11b] dark:text-[#fcb11b]/80 border-l-4 border-[#fcb11b] dark:border-[#fcb11b]/50"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    <span>{category.name}</span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        activeCategory === category.id
                          ? "bg-[#fcb11b]/20 dark:bg-[#fcb11b]/20 text-gray-400"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {category.count}
                    </span>
                  </button>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  We are always seeking talented individuals! In case you cannot
                  find your desired position here, please send us your LinkedIn
                  profile and give us your contact information. We will be in
                  touch.
                </p>
                <button className="w-full px-4 py-2 bg-[#fcb11b]/90 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                  Share your LinkedIn profile
                </button>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            {/* Job grid */}
            <div className="grid gap-6">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 dark:text-gray-600 mb-4">
                  <Building className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  No positions found
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Try selecting a different category or check back later for new
                  opportunities.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;

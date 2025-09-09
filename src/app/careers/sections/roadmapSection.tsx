"use client";

import { useState } from "react";

// Types
interface HiringStep {
  id: string;
  step: number;
  title: string;
  description: string;
  isActive?: boolean;
}

// Sample data
const defaultHiringSteps: HiringStep[] = [
  {
    id: "1",
    step: 1,
    title: "Send your application",
    description:
      "Submit your resume and cover letter through our online portal. Make sure to highlight your relevant experience and skills.",
    isActive: true,
  },
  {
    id: "2",
    step: 2,
    title: "Application Review",
    description:
      "Our HR team carefully reviews your application and matches your qualifications with our current openings.",
  },
  {
    id: "3",
    step: 3,
    title: "Preliminary Interview",
    description:
      "Initial conversation with our recruiting team to discuss your background, interests, and mutual fit for the role.",
  },
  {
    id: "4",
    step: 4,
    title: "Technical Assessment",
    description:
      "Demonstrate your technical skills through a practical assessment or coding challenge relevant to the position.",
  },
  {
    id: "5",
    step: 5,
    title: "Team Interview",
    description:
      "Meet with your potential teammates and direct manager to discuss collaboration, work style, and team dynamics.",
  },
  {
    id: "6",
    step: 6,
    title: "Interview with our CEO",
    description:
      "Final conversation with leadership to ensure cultural alignment and discuss your long-term career goals with us.",
  },
  {
    id: "7",
    step: 7,
    title: "Reference Check",
    description:
      "We'll contact your provided references to verify your experience and get insights into your work style.",
  },
  {
    id: "8",
    step: 8,
    title: "Job Offer",
    description:
      "Congratulations! We'll present you with a competitive offer package and discuss next steps for onboarding.",
  },
];

// Individual step component
interface StepItemProps {
  step: HiringStep;
  isLast: boolean;
  index: number;
}

const StepItem = ({ step, isLast, index }: StepItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div className="relative">
      {/* Connecting line */}
      {!isLast && (
        <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-16 bg-white/70 dark:bg-gray-700 top-16 z-0" />
      )}

      {/* Step container */}
      <div
        className={`flex items-start gap-8 ${
          isEven ? "flex-row" : "flex-row-reverse"
        } lg:gap-12`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Content - Left or Right side */}
        <div
          className={`flex-1 ${
            isEven ? "text-right lg:pr-4" : "text-left lg:pl-4"
          } lg:block hidden`}
        >
          <div
            className={`bg-white/70 dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 transition-all duration-300 ${
              isHovered
                ? "shadow-md scale-[1.02] border-blue-200 dark:border-[#fcb11b]"
                : ""
            }`}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>

        {/* Step number circle */}
        <div className="relative z-10 flex-shrink-0">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
              step.isActive
                ? "bg-[#fcb11b] text-white shadow-lg shadow-blue-600/25"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700"
            } ${
              isHovered && !step.isActive
                ? "border-blue-300 dark:border-blue-600 scale-110"
                : ""
            } ${
              isHovered && step.isActive
                ? "scale-110 shadow-xl shadow-blue-600/30"
                : ""
            }`}
          >
            {step.step}
          </div>
        </div>

        {/* Empty space for alternating layout */}
        <div className="flex-1 lg:block hidden" />
      </div>

      {/* Mobile content - Always below the circle */}
      <div className="lg:hidden mt-4 ml-4">
        <div
          className={`bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 transition-all duration-300 ${
            isHovered ? "shadow-md border-blue-200 dark:border-blue-800" : ""
          }`}
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {step.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
};

// Main timeline component
interface HiringProcessTimelineProps {
  steps?: HiringStep[];
  title?: string;
  subtitle?: string;
  closingMessage?: string;
  className?: string;
}

const RoadMapSection = ({
  steps = defaultHiringSteps,
  closingMessage = "Start a new journey!",
  className = "",
}: HiringProcessTimelineProps) => {
  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-[#fcb11b]">Our Hiring</span> Process
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#fcb11b]"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <StepItem
                key={step.id}
                step={step}
                isLast={index === steps.length - 1}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Closing message */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#fcb11b] to-purple-600 rounded-full mb-6 animate-pulse">
            <span className="text-3xl">🤝</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {closingMessage}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Ready to join our team? We can't wait to meet you and learn about
            your unique talents.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoadMapSection;

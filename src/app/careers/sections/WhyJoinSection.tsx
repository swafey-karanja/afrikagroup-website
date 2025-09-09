"use client";

import Image from "next/image";

// Types
interface WorkBenefit {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

// Sample data
const workBenefits: WorkBenefit[] = [
  {
    id: "1",
    title: "Company Values",
    description:
      "We believe in transparency, innovation, and putting our people first. Our core values guide every decision we make.",
    imageUrl:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Team collaboration representing company values",
  },
  {
    id: "2",
    title: "Friendly Atmosphere",
    description:
      "Join a welcoming team where collaboration thrives and every voice is heard. We foster an inclusive environment for all.",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Colleagues having a friendly conversation",
  },
  {
    id: "3",
    title: "Work-life Balance",
    description:
      "Flexible working arrangements and comprehensive wellness programs help you maintain a healthy balance between work and life.",
    imageUrl:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Person working flexibly with a laptop outdoors",
  },
  {
    id: "4",
    title: "Everyday Growth",
    description:
      "Continuous learning opportunities, mentorship programs, and career development paths to help you reach your full potential.",
    imageUrl:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Professional development and learning environment",
  },
  {
    id: "5",
    title: "Competitive Benefits",
    description:
      "Comprehensive health coverage, retirement plans, and performance bonuses that recognize and reward your contributions.",
    imageUrl:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Benefits and compensation package visualization",
  },
  {
    id: "6",
    title: "Innovation Culture",
    description:
      "Work with cutting-edge technologies and contribute to groundbreaking projects that make a real impact in the industry.",
    imageUrl:
      "https://images.unsplash.com/photo-1585399058947-f68f9db58e5f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Modern office with innovative technology setup",
  },
  {
    id: "7",
    title: "Global Opportunities",
    description:
      "Access to international projects and the possibility to work with diverse teams across multiple time zones and cultures.",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Global team collaboration across different locations",
  },
  {
    id: "8",
    title: "Social Impact",
    description:
      "Be part of meaningful projects that contribute to positive social and environmental change in communities worldwide.",
    imageUrl:
      "https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Team working on social impact initiatives",
  },
];

// Individual card component
const WorkBenefitCard = ({ benefit }: { benefit: WorkBenefit }) => {
  return (
    <div className="group bg-white/70 dark:bg-gray-900 rounded-md shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden ">
      {/* Image container with rounded top corners */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={benefit.imageUrl}
          alt={benefit.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Subtle overlay for better text contrast if needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="px-2 py-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#fcb11b] dark:group-hover:text-[#fcb11b] transition-colors duration-200">
          {benefit.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          {benefit.description}
        </p>
      </div>
    </div>
  );
};

// Main component
interface WhyWorkWithUsProps {
  benefits?: WorkBenefit[];
  title?: string;
  subtitle?: string;
  maxItems?: number;
  className?: string;
}

const WhyJoinSection = ({
  benefits = workBenefits,
  maxItems,
  className = "",
}: WhyWorkWithUsProps) => {
  const displayedBenefits = maxItems ? benefits.slice(0, maxItems) : benefits;

  return (
    <section className={`py-6 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-[#fcb11b]">Why work</span> with us
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#fcb11b]"></div>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayedBenefits.map((benefit) => (
            <WorkBenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;

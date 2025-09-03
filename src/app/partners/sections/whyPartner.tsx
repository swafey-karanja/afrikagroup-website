import React from "react";
import { Heart, Star, Shield, Zap } from "lucide-react";

export default function PartnershipSection() {
  const partnershipReasons = [
    {
      id: 1,
      title: "Innovation",
      badge: "ACCELERATE GROWTH",
      description:
        "Access cutting-edge technology and collaborative innovation that drives market leadership.",
      icon: Heart,
      bgColor: "bg-teal-500",
      textColor: "text-white",
    },
    {
      id: 2,
      title: "Expertise",
      badge: "PROVEN RESULTS",
      description:
        "Leverage decades of industry experience and specialized knowledge for guaranteed success.",
      icon: Star,
      bgColor: "bg-gray-900",
      textColor: "text-white",
    },
    {
      id: 3,
      title: "Scale",
      badge: "EXPAND REACH",
      description:
        "Tap into our extensive network and infrastructure to amplify your market presence.",
      icon: Shield,
      bgColor: "bg-yellow-500",
      textColor: "text-white",
    },
    {
      id: 4,
      title: "Support",
      badge: "24/7 COMMITMENT",
      description:
        "Receive dedicated partnership support and resources to ensure mutual long-term success.",
      icon: Zap,
      bgColor: "bg-gray-800",
      textColor: "text-white",
    },
  ];

  return (
    <section className="pt-30 px-4">
      <div className="container mx-auto">
        <div className=" mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="text-[#fcb11b]">Why partner</span> with us
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-[#fcb11b]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnershipReasons.map((reason) => {
            const IconComponent = reason.icon;

            return (
              <div
                key={reason.id}
                className={`${reason.bgColor} ${reason.textColor} p-8 rounded-2xl relative overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl`}
              >
                {/* Badge */}
                <div className="inline-block bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-6 uppercase tracking-wide">
                  {reason.badge}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4">{reason.title}</h3>
                  <p className="text-sm leading-relaxed opacity-90 mb-6">
                    {reason.description}
                  </p>
                </div>

                {/* Icon */}
                <div className="absolute bottom-6 right-6">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-white bg-opacity-5 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white bg-opacity-5 rounded-full"></div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <button className="bg-[#fcb11b] text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
            Start Partnership Discussion
          </button>
        </div>
      </div>
    </section>
  );
}

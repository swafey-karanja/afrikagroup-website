"use client";

import React, { useState } from "react";

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

const accordionData: AccordionItem[] = [
  {
    id: 1,
    title: "What is Afrika Group?",
    content:
      "Afrika Group is a group of companies focused on driving iGaming businesses across Africa. We are committed to placing our mission at the forefront of our operations to reshape the iGaming industry.",
  },
  {
    id: 2,
    title: "Which brands are behind Afrika Group?",
    content:
      "Afrika Group encompasses several standout brands, including iGaming AFRIKA, which provides the latest news in casino, sportsbook, and lottery; iGaming AFRIKA Summit 2026, which is Africa’s mega gaming event, designed to unite the entire gaming industry players across the world in one place—the stunning city of Nairobi, Kenya between 4-6 May 2026; iGaming Consult Africa, a premier consultancy that supports market growth for sports betting and casino ventures; and AfriAdz Affiliates, a leading marketplace that connects operators with affiliates.",
  },
  {
    id: 3,
    title: "Which markets do you serve?",
    content:
      "We serve the African markets, specifically focusing on the iGaming sector, including casino, sportsbook, and lottery businesses.",
  },
  {
    id: 4,
    title: "Which industries can benefit from your services?",
    content:
      "The iGaming sector—including sports betting, casinos, and lotteries—can benefit significantly from our services. Additionally, businesses seeking to acquire gaming licenses in multiple countries across the continent and as well those keen to connect with affiliates and enhance their market presence can also take advantage of our expertise.",
  },
  {
    id: 5,
    title: "Do you work with international businesses?",
    content:
      "Yes, we are open to working with international businesses looking to enter or expand in the African iGaming market, providing the necessary expertise and local insights.",
  },
  {
    id: 6,
    title: "Can small businesses benefit from your services?",
    content:
      "Absolutely! Small businesses can benefit from our services through tailored consultancy, access to the latest market information, and connections with affiliates, enabling them to grow and compete in the iGaming industry.",
  },
  {
    id: 7,
    title: "How do you help businesses grow?",
    content:
      "We assist businesses in growth through strategic consultancy, fostering connections between operators and affiliates, delivering up-to-date industry insights, and creating new market opportunities tailored to their specific needs.",
  },
];

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" w-full py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-[#fcb11b]">Frequently</span> asked questions
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#fcb11b]"></div>
        </div>
        <ul className="py-6">
          {accordionData.map((item, index) => (
            <li key={item.id} className="relative">
              {/* Title button */}
              <button
                className={`w-full flex justify-between items-center py-4 text-left text-base font-semibold transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-gray-50/30 dark:bg-gray-900/70 text-[#fcb11b]"
                    : "text-gray-900 dark:text-white hover:bg-gray-100/30 dark:hover:bg-gray-900/70"
                }`}
                onClick={() => toggleAccordion(index)}
              >
                {item.title}

                {/* Animated icon */}
                <span
                  className={`relative w-6 h-4 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-[-90deg]" : ""
                  }`}
                >
                  <span
                    className={`absolute top-0 right-0 h-0.5 bg-gray-800 dark:bg-gray-200 rounded transition-all duration-300 ${
                      activeIndex === index
                        ? "w-2/3 rotate-[-45deg] translate-y-1"
                        : "w-2/5"
                    }`}
                  ></span>
                  <span
                    className={`absolute top-1/2 right-0 h-0.5 bg-gray-800 dark:bg-gray-200 rounded transition-opacity duration-200 ${
                      activeIndex === index ? "opacity-0" : "w-3/5 opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`absolute bottom-0 right-0 h-0.5 bg-gray-800 dark:bg-gray-200 rounded transition-all duration-300 ${
                      activeIndex === index
                        ? "w-2/3 rotate-[45deg] -translate-y-1"
                        : "w-4/5"
                    }`}
                  ></span>
                </span>
              </button>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? "max-h-96 opacity-100 p-6"
                    : "max-h-0 opacity-0 p-0"
                }`}
              >
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                  {item.content}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

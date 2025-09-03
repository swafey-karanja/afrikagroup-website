"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const PartnersGrid = () => {
  const partners = [
    {
      id: 1,
      title: "iGaming Afrika",
      image: "/images/iGaming.png",
      website: "https://igamingafrika.com/",
      color: "#18a05e",
    },
    {
      id: "empty-1",
      empty: true, // 👈 marker for an empty slot
      image: "",
      title: "",
    },
    {
      id: "empty-2",
      empty: true, // 👈 marker for an empty slot
      image: "",
      title: "",
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
      id: "empty-3",
      empty: true, // 👈 marker for an empty slot
      image: "",
      title: "",
    },
    {
      id: 4,
      title: "iGaming Amerika",
      image: "/images/igamingamerika.png",
      website: "https://igamingamerika.com/",
      color: "#e60026",
    },
    {
      id: "empty-4",
      empty: true, // 👈 marker for an empty slot
      image: "",
      title: "",
    },
    {
      id: 5,
      title: "iGaming Europa",
      image: "/images/igamingeuropa.png",
      website: "https://igamingeuropa.com/",
      color: "#013398",
    },
    {
      id: "empty-7",
      empty: true, // 👈 marker for an empty slot
      image: "",
      title: "",
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
      color: "#81b636",
    },

    {
      id: 8,
      title: "iGaming Europa",
      image: "/images/igamingeuropa.png",
      website: "https://igamingeuropa.com/",
      color: "#013398",
    },
    {
      id: "empty-5",
      empty: true, // 👈 marker for an empty slot
      image: "",
      title: "",
    },
    {
      id: 9,
      title: "Afriadz",
      image: "/images/afriadz.png",
      website: "https://afriadz.com/",
      color: "#f9943b",
    },
    {
      id: 10,
      title: "Gamblers association Kenya",
      image: "/images/gamblersassociation.png",
      color: "#81b636",
    },
  ];

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                <span className="text-[#fcb11b]">Our</span> partners
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-[#fcb11b]"></div>
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {partners.map((partner, index) =>
            partner.empty ? (
              <div
                key={partner.id}
                className="hidden lg:block aspect-square rounded-2xl"
              />
            ) : (
              <div
                key={partner.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 
                 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1 aspect-square"
                style={{ backgroundColor: partner.color }}
                onClick={() => {
                  if (partner.website) window.open(partner.website, "_blank");
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <Image
                    src={partner.image}
                    alt={partner.title}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                    fill
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <h3 className="text-white font-semibold text-sm sm:text-base leading-tight max-w-[calc(100%-2rem)]">
                    {partner.title}
                  </h3>
                  {partner.website && (
                    <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default PartnersGrid;

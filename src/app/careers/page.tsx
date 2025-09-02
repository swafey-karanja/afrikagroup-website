import Footer from "@/components/layout/Footer";
import AnimatedCasinoBackground, {
  HeroContent,
} from "@/components/shared/background";
import ScrollGeometricBackground from "@/components/shared/pageBackground";
import React from "react";
import CareersSection from "./sections/jobCardsSection";
import WhyWorkWithUs from "./sections/whyJoinUsSection";
import RoadmapSection from "./sections/roadmapSection";

const careersPage = () => {
  // Define hero content for homepage
  const aboutPageHero: HeroContent = {
    type: "video",
    videoSrc: "/videos/background-1.mp4",
    title: "Careers",
    description: "Join our evergrowing team",
    showScrollIndicator: true,
    ctaButton: {
      text: "Learn More",
      href: "/our-story",
    },
  };
  return (
    <>
      <AnimatedCasinoBackground
        fixed={true}
        enableParallax={true}
        backgroundColor=""
        showHero={true}
        heroContent={aboutPageHero}
        showFooter={true}
        videoBackground="/videos/background-2.mp4"
      />
      <div
        className="bg-[#fffaeb]/40 backdrop-blur-xl dark:bg-black/40 overflow-hidden w-full h-auto relative z-20"
        style={{
          borderTopLeftRadius: "clamp(20px, 8vw, 60px)",
          borderTopRightRadius: "clamp(20px, 8vw, 60px)",
          borderBottomRightRadius: "clamp(20px, 8vw, 60px)",
          borderBottomLeftRadius: "clamp(20px, 8vw, 60px)",
          minHeight: "500vh",
        }}
      >
        <ScrollGeometricBackground />
        <div className="relative z-50 pt-20">
          <WhyWorkWithUs />
          <CareersSection />
          <RoadmapSection />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default careersPage;

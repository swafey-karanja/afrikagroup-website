import Footer from "@/components/layout/Footer";
import AnimatedCasinoBackground, {
  HeroContent,
} from "@/components/shared/background";
import ScrollAnimatedCircle from "@/components/shared/pageBackground";
import React from "react";
import UpcomingEvents from "./sections/UpcomingEvents";
import PastEventsTimeline from "./sections/PreviousEvents";
import StatisticsSection from "./sections/StatisticsSection";

const eventsPage = () => {
  const eventsPageHero: HeroContent = {
    title: "Events",
    description:
      "Discover inspiring conferences, workshops, and networking opportunities happening worldwide.",
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
        heroContent={eventsPageHero}
        showFooter={true}
        imageBackground="/images/image-bg-3.jpg"
      />
      <div
        className="bg-[#fffaeb]/40 backdrop-blur-xl dark:bg-black/40 overflow-hidden w-full h-full relative z-20"
        style={{
          borderTopLeftRadius: "clamp(20px, 8vw, 60px)",
          borderTopRightRadius: "clamp(20px, 8vw, 60px)",
          borderBottomRightRadius: "clamp(20px, 8vw, 60px)",
          borderBottomLeftRadius: "clamp(20px, 8vw, 60px)",
          minHeight: "500vh",
        }}
      >
        <ScrollAnimatedCircle />
        <div className="relative z-50 pt-20 space-y-20">
          <UpcomingEvents />
          <PastEventsTimeline />
          <StatisticsSection />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default eventsPage;

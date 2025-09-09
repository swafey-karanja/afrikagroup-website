// page.tsx

import BrandCarousel from "@/components/sections/Brands";
import EventGallery from "@/components/sections/EventGallery";
import Footer from "@/components/layout/Footer";
import AnimatedCasinoBackground, {
  HeroContent,
} from "@/components/shared/background";
import ScrollAnimatedCircle from "@/components/shared/pageBackground";
import AwardsSection from "@/components/sections/AwardsSection";
import FaqSection from "@/components/sections/FaqSection";

export default function Home() {
  // Define hero content for homepage
  const homepageHero: HeroContent = {
    title: "Africanising",
    highlightWord: "iGaming",
    description:
      "Strategic solutions for iGaming growth, optimization, and expansion.",
    subtitle: "Bringing next-level innovation to gaming, fintech & blockchain",
    showScrollIndicator: true,
    ctaButton: {
      text: "Get Started",
      href: "/contact",
    },
  };

  return (
    <>
      {/* Enhanced Background with Dynamic Hero */}
      <AnimatedCasinoBackground
        fixed={true}
        enableParallax={true}
        backgroundColor="bg-[#ffedca] dark:bg-black/60"
        opacity="opacity-100"
        showHero={true}
        heroContent={homepageHero}
        showFooter={true}
      />
      {/* Main Content Container - Hero and Footer are now handled by UnifiedParallaxBackground */}
      <div
        className="bg-[#fffaeb]/40 backdrop-blur-xl dark:bg-black/40 overflow-hidden w-full h-auto relative z-20"
        style={{
          borderTopLeftRadius: "clamp(20px, 8vw, 60px)",
          borderTopRightRadius: "clamp(20px, 8vw, 60px)",
          borderBottomLeftRadius: "clamp(20px, 8vw, 60px)",
          borderBottomRightRadius: "clamp(20px, 8vw, 60px)",
          minHeight: "300vh",
        }}
      >
        <ScrollAnimatedCircle />

        <div className="relative z-50 pt-20">
          <BrandCarousel />
          <AwardsSection />
          <EventGallery />
          <FaqSection />
          <Footer />
        </div>
      </div>
    </>
  );
}

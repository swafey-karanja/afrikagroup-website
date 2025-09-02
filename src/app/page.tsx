// page.tsx
import ScrollGeometricBackground from "@/components/shared/pageBackground";
import BlogCarousel from "@/components/sections/partners";
import AwardsSection from "@/components/sections/awards";
import EventGallery from "@/components/sections/EventGallery";
import Accordion from "@/components/sections/faqSection";
import Footer from "@/components/layout/Footer";
import AnimatedCasinoBackground, {
  HeroContent,
} from "@/components/shared/background";

export default function Home() {
  // Define hero content for homepage
  const homepageHero: HeroContent = {
    type: "text",
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
        backgroundColor="bg-[#ffedca] dark:bg-black"
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
        <ScrollGeometricBackground />

        <div className="relative z-50 pt-20">
          <BlogCarousel />
          <AwardsSection />
          <EventGallery />
          <Accordion />
          <Footer />
        </div>
      </div>
    </>
  );
}

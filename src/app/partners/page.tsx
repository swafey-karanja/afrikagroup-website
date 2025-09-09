import Footer from "@/components/layout/Footer";
import AnimatedCasinoBackground, {
  HeroContent,
} from "@/components/shared/background";
// import ScrollGeometricBackground from "@/components/shared/pageBackground";
import React from "react";
import ScrollAnimatedCircle from "@/components/shared/pageBackground";
import PartnershipSection from "./sections/WhyPartnerSection";
import OpeningTextSections from "./sections/OpeningTextSections";
import Partners from "./sections/Partners";

const partnersPage = () => {
  const partnersPageHero: HeroContent = {
    title: "Our Partners",
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
        heroContent={partnersPageHero}
        showFooter={true}
        imageBackground="/images/image-bg-1.jpg"
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
        <ScrollAnimatedCircle />
        <div className="relative z-50 pt-20">
          <OpeningTextSections />
          <PartnershipSection />
          <Partners />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default partnersPage;

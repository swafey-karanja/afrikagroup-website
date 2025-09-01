// page.tsx
import ScrollGeometricBackground from "@/components/shared/pageBackground";
import BlogCarousel from "@/components/sections/partners";
import AwardsSection from "@/components/sections/awards";
import EventGallery from "@/components/sections/EventGallery";
import Accordion from "@/components/sections/faqSection";
import Hero from "@/components/layout/Hero";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <div
        className="bg-[#fffaeb]/20 backdrop-blur-xl dark:bg-black/40 overflow-hidden w-full h-auto relative z-20"
        style={{
          borderTopLeftRadius: "clamp(20px, 8vw, 60px)",
          borderTopRightRadius: "clamp(20px, 8vw, 60px)",
          borderBottomRightRadius: "clamp(20px, 8vw, 60px)",
          borderBottomLeftRadius: "clamp(20px, 8vw, 60px)",
        }}
      >
        <ScrollGeometricBackground />

        <div className="z-30">
          <BlogCarousel />
          <AwardsSection />
          <EventGallery />
          <Accordion />
        </div>
        <Footer />
      </div>
    </>
  );
}

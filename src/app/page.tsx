import ScrollGeometricBackground from "@/components/shared/pageBackground";
import BlogCarousel from "@/components/sections/partners";
import AwardsSection from "@/components/sections/awards";
import EventGallery from "@/components/sections/EventGallery";
import Accordion from "@/components/sections/faqSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div
      className="bg-[#fffaeb]/20 backdrop-blur-xl dark:bg-black/40 relative overflow-hidden w-full"
      style={{
        borderTopLeftRadius: "clamp(20px, 8vw, 60px)",
        borderTopRightRadius: "clamp(20px, 8vw, 60px)",
        borderBottomRightRadius: "clamp(20px, 8vw, 60px)",
        borderBottomLeftRadius: "clamp(20px, 8vw, 60px)",
        // margin: "clamp( 2vw, 1rem)",
      }}
    >
      <ScrollGeometricBackground />
      <div className="relative z-10">
        <div className="">
          <BlogCarousel />
          <AwardsSection />
          <EventGallery />
          <Accordion />
        </div>
        <Footer />
      </div>
    </div>
  );
}

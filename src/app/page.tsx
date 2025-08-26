import Hero from "@/components/layout/Hero";
import BlogCarousel from "@/components/sections/partners";
import AwardsSection from "@/components/sections/awards";
import EventGallery from "@/components/sections/EventGallery";
import Accordion from "@/components/sections/faqSection";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <BlogCarousel />
      <AwardsSection />
      <EventGallery />
      <Accordion />
    </div>
  );
}

import Hero from "@/components/layout/Hero";
import BlogCarousel from "@/components/sections/partners";
import AwardsSection from "@/components/sections/awards";
import EventGallery from "@/components/sections/EventGallery";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <BlogCarousel />
      <AwardsSection />
      <EventGallery />
    </div>
  );
}

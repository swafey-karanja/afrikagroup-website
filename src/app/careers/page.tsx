import Hero from "@/components/layout/Hero";
import ScrollGeometricBackground from "@/components/shared/pageBackground";
import React from "react";

const careersPage = () => {
  return (
    <>
      <Hero
        showTextContent={true}
        showVideoBackground={true}
        videoBackground={{
          src: "/videos/background-1.mp4",
          overlay: true,
          overlayOpacity: 0.6,
        }}
        title="Your Custom Title"
        subtitle="Your subtitle over video"
      />
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
          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default careersPage;

import Hero from "@/components/layout/Hero";
import React from "react";

const brandsPage = () => {
  return (
    <div>
      <Hero
        height="h-[60vh]"
        customContent={
          <div className="text-center">
            <h1 className="text-4xl font-bold">Completely Custom</h1>
            <p>Your custom content here</p>
            <button>Custom Button</button>
          </div>
        }
      />
    </div>
  );
};

export default brandsPage;

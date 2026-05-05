import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import TestimonialsCTASection from "./components/TestimonialsCTASection";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{backgroundColor: 'var(--color-background)'}} className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsCTASection />
      <Footer />
    </div>
  );
}

export default App;
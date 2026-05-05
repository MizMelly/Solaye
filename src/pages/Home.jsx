import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import TestimonialsCTASection from "../components/TestimonialsCTASection";

const Home = () => {
  return (
    <div style={{ backgroundColor: 'var(--color-background)' }} className="min-h-screen">   
        <Hero />
        <StatsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsCTASection />
    </div>
  );
}

export default Home;
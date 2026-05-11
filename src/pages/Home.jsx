import Hero from "../components/Hero";
import Ecosystem from "../components/Ecosystem";
import HowItWorksSection from "../components/HowItWorksSection";
import TractionSection from "../components/TractionSection";
import WellnessSection from "../components/WellnessSection";
import BlogHighlights from "../components/BlogHighlights";

const Home = () => {
  return (
    <div style={{ backgroundColor: 'var(--color-background)' }} className="min-h-screen">   
        <Hero />
        <Ecosystem />
            <HowItWorksSection />
        <TractionSection />
        <WellnessSection />
        <BlogHighlights />
     
    </div>
  );
}

export default Home;
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Health from "./pages/Health";
import Wellness from "./pages/Wellness";
import ContactSection from "./pages/ContactSection";
// import Resources from "./pages/Resources";
// import Contact from "./pages/Contact";

function App() {
  return (
    <div
      style={{ backgroundColor: "var(--color-background)" }}
      className="min-h-screen"
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* Uncomment when pages exist */}
      <Route path="/about" element={<AboutPage />} /> 
      <Route path="/health" element={<Health />} />
      <Route path="/wellness" element={<Wellness />} />
        <Route path="/contact" element={<ContactSection />} />
        {/* <Route path="/resources" element={<Resources />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
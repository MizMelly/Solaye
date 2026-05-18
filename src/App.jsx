import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutUsPage";
import Health from "./pages/Health";
import Wellness from "./pages/Wellness";
import CommunitySection from "./pages/CommunitySection";
import ImpactSection from "./pages/ImpactSection";
import PartnersSection from "./pages/PartnersSection";
import ContactSection from "./pages/ContactSection";

import Blog from "./pages/Blog";
import BlogPost from "./pages/CreateBlog";
import Admin from "./pages/Admin";

function App() {
  return (
    <div
      style={{ backgroundColor: "var(--color-background)" }}
      className="min-h-screen"
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/health" element={<Health />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/community" element={<CommunitySection />} />
        <Route path="/impact" element={<ImpactSection />} />
        <Route path="/partners" element={<PartnersSection />} />
        <Route path="/contact" element={<ContactSection />} />

        {/* BLOG ROUTES */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
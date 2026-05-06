import React from "react";
import { motion } from "framer-motion";
import storyImg from "../assets/about-care.jpg";

const AboutPage = () => {
  return (
    <>
      {/* STORY SECTION */}
      <section
  style={{ backgroundColor: "#f7f3ed" }}
  className="px-6 md:px-16 py-24 md:py-15"
>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

    {/* LEFT */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-w-lg"
    >
      <p className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-[#5e6f5a] mb-6">
        About Solayo Africa
      </p>

      <h1 className="text-4xl md:text-5xl lg:text-[56px] font-serif leading-[1.1] text-[#1d2a1d] mb-8">
        A trusted maternal health ecosystem.
      </h1>

      <p className="text-sm md:text-base leading-relaxed text-[#4f5a47]">
        Solayo Africa is building a trusted maternal health ecosystem designed to support
         women from pregnancy to postpartum through accessible, affordable and continuous care solutions.
      </p>
    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex justify-center md:justify-end"
    >
      <div className="w-full max-w-105 rounded-3xl overflow-hidden shadow-md">
        <img
          src={storyImg}
          alt="Mother with newborn"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>

  </div>
</section>

      {/* MISSION */}
      <section
  style={{ backgroundColor: "#f7f1e3" }}
  className="px-6 md:px-16 py-24 md:py-32 border-t border-[#e5d9c8]"
>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="max-w-5xl mx-auto"
  >
    {/* LABEL */}
    <p className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-[#5e6f5a] mb-8">
      THE MISSION
    </p>

    {/* HEADLINE */}
    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-serif leading-[1.15] text-[#1d2a1d] mb-10 max-w-3xl">
      To make trusted maternal care feel as close as a text to a friend.
    </h2>

    {/* BODY TEXT */}
    <p className="text-sm md:text-base lg:text-lg leading-relaxed text-[#4f5a47] max-w-2xl">
      Across the continent, 1 in 4 mothers will give birth without skilled support.
      Information is scarce, judgement is loud, and clinics can be hours away.
      Solayo meets mothers where they already are quietly, in the chat app they
      open dozens of times a day with answers, reminders and a route to real
      human care when it matters.
    </p>
  </motion.div>
</section>

      {/* BELIEFS */}
      <section
  style={{ backgroundColor: "#f7f3ed" }}
  className="px-6 md:px-16 py-24 md:py-32 border-t border-[#e5d9c8]"
>
  <div className="max-w-6xl mx-auto">

    {/* HEADER */}

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <p className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-[#5e6f5a] mb-6">
        WHAT WE BELIEVE
      </p>

      <h2 className="text-4xl md:text-5xl lg:text-[56px] font-serif leading-[1.15] text-[#1d2a1d] max-w-3xl">
        Four quiet principles that shape every message Solayo sends.
      </h2>
    </motion.div>

    {/* CARDS */}
    <div className="grid md:grid-cols-2 gap-6">

      {[
        ["01", "Mothers first", "Every decision starts with the woman holding her phone at 3 a.m."],
        ["02", "Clinically grounded", "AI is the interface. Midwives and doctors are the foundation."],
        ["03", "Quietly powerful", "We replace anxiety with calm. Distance with closeness."],
        ["04", "Built for here", "African contexts, languages, foods, beliefs and realities."]
      ].map(([num, title, desc]) => (
        <motion.div
          key={num}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#f1f1ee] border border-[#e2ded4] rounded-2xl p-8 md:p-10"
        >
          <div className="text-[#5e6f5a] text-sm mb-4">{num}</div>

          <h3 className="text-xl md:text-2xl font-serif text-[#1d2a1d] mb-3">
            {title}
          </h3>

          <p className="text-sm md:text-base text-[#4f5a47] leading-relaxed">
            {desc}
          </p>
        </motion.div>
      ))}

    </div>

  </div>

  {/* PARTNER SECTION */}
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="max-w-5xl mx-auto mt-24"
  >
    <div className="bg-[#d4e8d4] rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">

      <div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-[#1d2a1d] mb-4">
          Partner with us
        </h2>

        <p className="text-sm md:text-base lg:text-lg text-[#2f3f35] max-w-md">
          We work with clinics and NGOs improving maternal care.
        </p>
      </div>

      <a
        href="#contact"
        className="bg-[#1f3a2e] hover:bg-[#162a22] transition-colors text-white px-8 py-4 rounded-full font-medium"
      >
        Get in touch
      </a>

    </div>
  </motion.div>
</section>
    </>
  );
};

export default AboutPage;
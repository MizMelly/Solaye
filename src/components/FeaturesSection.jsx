import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "24/7 instant support",
    description:
      "Ask Solayo anything — symptoms, supplements, anxieties. Medically-sound answers, day or night",
    badge: "01",
  },
  {
    title: "Personalised journey",
    description:
      "From your first positive test to your baby's milestones — guidance that adapts to your week.",
    badge: "02",
  },
  {
    title: "Trusted professionals",
    description:
      "AI-guided, but every protocol is reviewed by midwives, doulas and OB-GYNs you can trust.",
    badge: "03",
  },
  {
    title: "On WhatsApp",
    description:
      "No new app. No waiting rooms. Just open the chat you already use every day.",
    badge: "04",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const FeaturesSection = () => {
  return (
    <section style={{ backgroundColor: "#f7f3ed" }} className="px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="grid gap-10 xl:grid-cols-[1.35fr_1fr] items-start">
          <div className="max-w-2xl">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#5e6f5a] mb-3">
              Your care, your way
            </p>

            <h2 className="text-3xl md:text-4xl font-serif leading-snug text-[#1d2a1d]">
              Everything you need to feel held — in one familiar chat.
            </h2>
          </div>

          <p className="text-sm text-[#4f5a47] max-w-xl">
            We built Solayo to be the friend, midwife and night-time-Google every mother deserves. Quietly, calmly, always there.
          </p>
        </div>

        {/* FEATURES */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(63, 89, 58, 0.15)",
              }}
              className="rounded-3xl bg-white border border-[#f1ede7] p-7 shadow-sm transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-full bg-[#e7f1e3] flex items-center justify-center text-xs font-semibold text-[#3f593a] mb-5">
                {feature.badge}
              </div>

              <h3 className="text-lg font-semibold text-[#1f2e1f] mb-2">
                {feature.title}
              </h3>

              <p className="text-xs md:text-sm leading-relaxed text-[#556856]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturesSection;
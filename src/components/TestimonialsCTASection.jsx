import React from "react";
import { motion } from "framer-motion";

const TestimonialsCTASection = () => {
  return (
    <section className="px-6 md:px-16 py-20 bg-[#f7f3ed]">

      <div className="max-w-5xl mx-auto space-y-16">

        {/* TESTIMONIAL */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#5e6f5a] mb-6">
            From mothers like you
          </p>

          <blockquote className="text-3xl md:text-4xl font-serif leading-[1.3] text-[#1d2a1d] mb-5">
            “Solayo felt like having a calm, knowledgeable aunty in my pocket.
            I stopped panicking at 2 a.m. — I just opened WhatsApp.”
          </blockquote>

          <p className="text-xs md:text-sm text-[#4f5a47]">
            — Adaeze, first-time mom · Lagos
          </p>
        </motion.div>

        {/* CTA CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="relative bg-[#3f5f47] rounded-[28px] px-8 md:px-16 py-12 md:py-14 overflow-hidden"
        >

          {/* background shapes (unchanged) */}
          <div className="absolute -left-20 -bottom-17.5 w-64 h-64 bg-[#6e8b6b] rounded-full opacity-40"></div>
          <div className="absolute -right-15 -top-12.5 w-56 h-56 bg-[#8fa89a] rounded-full opacity-50"></div>

          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight mb-4 tracking-tight">
              Ready to meet Solayo?
            </h2>

            <p className="text-sm md:text-base text-[#dfe7dc] mb-8">
              It takes thirty seconds to start. Your future self — and your baby — will thank you.
            </p>

            <div className="flex flex-wrap items-center gap-4">

              <button className="px-6 py-3 rounded-full bg-white text-[#2f4a36] text-sm font-medium hover:scale-[1.03] transition">
                Start on WhatsApp
              </button>

              <button className="px-6 py-3 rounded-full border border-[#cfe0d2] text-white text-sm hover:bg-white/10 transition">
                Learn our story
              </button>

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default TestimonialsCTASection;
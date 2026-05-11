import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero-mother.jpg";

const Hero = () => {
  return (
    <section className="px-6 md:px-16 pt-10 md:pt-15 pb-16 overflow-hidden bg-(--color-background)">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-lg"
        >

          {/* Heading */}
  <h1 className="font-display text-3xl md:text-5xl leading-[1.05] text-(--color-foreground)">
  Safe delivery.{" "}
  <span className="italic text-(--color-primary)">
    Smarter
  </span>
  <br />
  maternal care.
</h1>

          {/* Text */}
          <p className="mt-7 text-[18px] leading-[1.8] text-(--color-muted-foreground)">
            AI-powered health support, trusted wellness products, and community
            care for every stage of motherhood built for African women, on the
            platforms they already use.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
             <a
            href="https://wa.me/c/8131059543"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-(--color-primary) text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 font-medium text-sm hover:opacity-90 transition"
          >
              Get started on WhatsApp →
            </a>

             <a
              href="/health"
              className="px-7 py-3.5 rounded-full border border-[#d8d1c7] bg-white text-(--color-foreground) text-sm hover:bg-[#f5f1eb] transition"
            >
              Explore Solayo Health
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.4 }}
  className="relative flex justify-center"
>

  {/* FRAME WRAPPER (controls overall size) */}
  <div className="relative w-90 md:w-105 h-120 md:h-140">

    {/* Outer light frame */}
    <div className="absolute inset-0 bg-[#E9E3F5] rounded-[40px]" />

    {/* Inner purple frame */}
    <div className="absolute inset-4.5 bg-[#D6C7F5] rounded-[36px]" />

    {/* Yellow circle (bottom-left) */}
    <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#F4C542] rounded-full z-0" />

    {/* Purple circle (top-right) */}
    <div className="absolute top-4 right-4 w-20 h-20 bg-[#CBB6F5] rounded-full z-0" />

    {/* Image card */}
    <div className="absolute inset-9 bg-[#f3e7d0] rounded-[28px] p-3 shadow-xl z-10">
      <img
        src={heroImg}
        alt="Pregnant woman"
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>

    {/* Chat bubble */}
    <div className="absolute bottom-6 right-2 bg-white rounded-2xl shadow-xl px-4 py-3 w-60 text-sm z-20">
      <p className="text-xs text-gray-400 mb-1">
        Susan · Solayo
      </p>
      <p className="text-gray-700 leading-relaxed">
        "How are you feeling today, Mama? Any cravings or worries I can help with?"
      </p>
    </div>

  </div>
</motion.div>
      </div>
    </section>
  );
};

export default Hero;
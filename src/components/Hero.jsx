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
            <button className="px-7 py-3.5 rounded-full bg-(--color-primary) text-white font-medium text-sm shadow-sm hover:opacity-90 transition">
              Get started on WhatsApp →
            </button>

            <button className="px-7 py-3.5 rounded-full border bg-white text-(--color-foreground) text-sm hover:opacity-90 transition">
              Explore our solutions
            </button>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
          className="relative flex justify-center items-center"
        >

          {/* Background frame */}
          <div className="absolute inset-0 bg-[#EDE7F6] rounded-[40px]"></div>

          {/* Floating shapes */}
          <div className="absolute top-6 left-6 w-[92%] h-[92%] bg-(--color-accent) rounded-[42px]"></div>
          <div className="absolute -top-6 right-6 w-28 h-28 bg-[#D6C7F5] rounded-full opacity-80"></div>
          <div className="absolute -bottom-6 left-10 w-24 h-24 bg-(--color-accent) rounded-full opacity-90"></div>

          {/* Image card */}
          <div className="relative z-10 rounded-4xl p-5 shadow-xl bg-[#f3e7d0]">
            <img
              src={heroImg}
              alt="Pregnant woman"
              className="rounded-[28px] object-cover w-95 md:w-110"
            />
          </div>

          {/* Chat bubble */}
          <div className="absolute bottom-6 right-6 bg-white rounded-2xl shadow-xl px-4 py-3 max-w-xs text-sm z-20">
            <p className="text-xs text-gray-400 mb-1">
              Susan · Solayo
            </p>
            <p className="text-gray-700 leading-relaxed">
              "How are you feeling today, Mama? Any cravings or worries I can help with?"
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero-mother.jpg";

const Hero = () => {
  return (
    <section
      style={{ backgroundColor: "var(--color-background)" }}
      className="px-6 md:px-16 pt-20 md:pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="max-w-xl"
        >

          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-muted-foreground)",
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm mb-8"
          >
            <span
              style={{ backgroundColor: "var(--color-primary)" }}
              className="w-2 h-2 rounded-full"
            ></span>
            Maternal care, reimagined for Africa
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.5, ease: "easeOut" }}
            style={{ color: "var(--color-foreground)" }}
            className="text-[32px] md:text-[52px] leading-[1.1] font-serif tracking-tight"
          >
            Trusted maternal care,
            <br />
            <span
              style={{ color: "var(--color-primary)" }}
              className="italic block mt-2"
            >
              right on WhatsApp.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
            style={{ color: "var(--color-muted-foreground)" }}
            className="mt-7 text-[17px] leading-relaxed"
          >
            Sóláyò is an AI-guided companion backed by midwives, doulas and doctors
            supporting you from your first positive test through your baby's earliest milestones.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              style={{
                backgroundColor: "var(--color-primary)",
                color: "var(--color-primary-foreground)",
              }}
              className="px-7 py-3.5 rounded-full flex items-center gap-2 font-medium text-sm shadow-sm hover:scale-105 transition"
            >
              Start chatting →
            </button>

            <button
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-foreground)",
                backgroundColor: "var(--color-card)",
              }}
              className="border px-7 py-3.5 rounded-full text-sm hover:scale-105 transition"
            >
              Join the community
            </button>
          </motion.div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >

          {/* Floating background shapes */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            style={{ backgroundColor: "var(--color-accent)" }}
            className="absolute top-10 left-10 w-[90%] h-[90%] rounded-[42px]"
          ></motion.div>

          <motion.div
            animate={{ y: [0, 18, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            style={{ backgroundColor: "var(--color-lilac)" }}
            className="absolute w-28 h-28 rounded-full -top-10 right-4 opacity-80"
          ></motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            style={{ backgroundColor: "var(--color-sun)" }}
            className="absolute w-24 h-24 rounded-full -bottom-8 left-6 opacity-90"
          ></motion.div>

          {/* IMAGE */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 rounded-4xl p-4 shadow-xl"
            style={{ backgroundColor: "#f3e7d0" }}
          >
            <img
              src={heroImg}
              alt="Pregnant woman"
              className="rounded-[24px] object-cover w-95 md:w-110"
            />
          </motion.div>

          {/* CHAT BUBBLE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }}
            style={{
              backgroundColor: "var(--color-card)",
              color: "var(--color-foreground)",
            }}
            className="absolute bottom-6 right-6 rounded-2xl shadow-lg p-4 max-w-xs text-sm z-20"
          >
            <p
              style={{ color: "var(--color-muted-foreground)" }}
              className="text-xs mb-1"
            >
              Susan · Solayo
            </p>
            <p className="leading-relaxed">
              "How are you feeling today, Mama? Any cravings or worries I can help with?"
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
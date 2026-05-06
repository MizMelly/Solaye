import React from "react";
import { motion } from "framer-motion";

const WellnessSection = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardAnim = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-[#e7e3dc] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-[0.25em] uppercase text-[#6b7280] mb-6"
          >
            Solayo Wellness
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-[clamp(2.5rem,4.5vw,3.8rem)] leading-[1.1] text-[#1f2937] mb-6"
          >
            Supporting mothers with everyday solutions.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[16px] leading-[1.7] text-[#4b5563] mb-8 max-w-md"
          >
            From nutrition to comfort, our wellness products are designed to
            support women daily — through pregnancy, postpartum and beyond.
          </motion.p>

          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="bg-[#5b3a82] text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
          >
            Shop wellness →
          </motion.button>
        </motion.div>

        {/* Right Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          {[
            { name: "MamaPap™", color: "#cfc3da" },
            { name: "Mama Start", color: "#e7d39a" },
            { name: "Mama Grow", color: "#cfc3da" },
            { name: "CalmMist™", color: "#e7d39a" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={cardAnim}
              whileHover={{ y: -8, scale: 1.03 }}
              className="rounded-4xl h-45 flex items-end p-6 cursor-pointer"
              style={{ backgroundColor: item.color }}
            >
              <p className="font-serif text-lg text-[#1f2937]">
                {item.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WellnessSection;
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

       {/* CTA SECTION */}
<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  className="mt-24"
>
  <div className="relative bg-[#5b3a82] rounded-[40px] px-8 md:px-16 py-16 overflow-hidden">

    {/* Background Circles */}
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 0.2 }}
      transition={{ duration: 1 }}
      className="absolute -bottom-20 -left-20 w-75 h-75 bg-[#e7d39a] rounded-full"
    />

    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 0.2 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="absolute -top-20 -right-10 w-62.5 h-62.5 bg-white rounded-full"
    />

    {/* Content */}
    <div className="relative z-10 max-w-2xl">
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] leading-[1.2] text-white mb-6"
      >
        Start your maternal care journey today.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-white/80 text-[16px] mb-8"
      >
        It takes thirty seconds to start on WhatsApp.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex flex-wrap gap-4"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-[#e7e3dc] text-[#1f2937] px-6 py-3 rounded-full text-sm font-medium"
        >
          Get started on WhatsApp
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="border border-white/40 text-white px-6 py-3 rounded-full text-sm font-medium"
        >
          About Solayo
        </motion.button>
      </motion.div>

    </div>
  </div>
</motion.div>
    </section>
   
  );
};

export default WellnessSection;
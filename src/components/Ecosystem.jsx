import React from "react";
import { motion } from "framer-motion";

const Ecosystem = () => {

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
    hidden: { opacity: 0, y: 50, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="px-6 md:px-16 py-20 bg-(--color-background)">
      <div className="max-w-7xl mx-auto">

        {/* Top + Heading + Text */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-[0.25em] text-(--color-muted-foreground) mb-6"
          >
            WHAT WE DO
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.15] text-(--color-foreground) max-w-3xl"
          >
            An integrated maternal care ecosystem.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-[17px] leading-[1.7] text-(--color-muted-foreground) max-w-2xl"
          >
            Solayo Africa supports women from pregnancy to postpartum through three connected
            solutions designed to make care accessible, continuous and affordable.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 grid md:grid-cols-3 gap-8"
        >

          {[
            {
              tag: "PLATFORM",
              title: "Solayo Health",
              desc: "Digital maternal care powered by AI, consultations and referrals — right on WhatsApp.",
            },
            {
              tag: "PRODUCTS",
              title: "Solayo Wellness",
              desc: "Nutrition and comfort products designed for maternal health and everyday nourishment.",
            },
            {
              tag: "OUTREACH",
              title: "Solayo Community",
              desc: "Grassroots outreach, education and support programs that meet women where they are.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={cardAnim}
              whileHover={{ y: -10, scale: 1.03 }}
              className="p-8 rounded-[24px] border bg-white/70 backdrop-blur cursor-pointer transition"
            >
              <p className="text-xs tracking-[0.25em] text-(--color-primary) mb-4">
                {item.tag}
              </p>

              <h3 className="font-display text-xl text-(--color-foreground) mb-4">
                {item.title}
              </h3>

              <p className="text-[15px] leading-[1.7] text-(--color-muted-foreground) mb-6">
                {item.desc}
              </p>

              <button className="text-(--color-primary) text-sm font-medium hover:underline">
                Learn more →
              </button>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default Ecosystem;
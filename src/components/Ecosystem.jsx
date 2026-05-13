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

  const cards = [
    {
      tag: "PLATFORM",
      title: "Solayo Health",
      desc: "Digital maternal care powered by AI, consultations and referrals right on WhatsApp.",
      link: "/health",
    },
    {
      tag: "PRODUCTS",
      title: "Solayo Wellness",
      desc: "Nutrition and comfort products designed for maternal health and everyday nourishment.",
      link: "/wellness",
    },
    {
      tag: "OUTREACH",
      title: "Solayo Community",
      desc: "Grassroots outreach, education and support programs that meet women where they are.",
      link: "/community",
    },
  ];

  return (
    <section className="px-6 md:px-16 py-20 bg-(--color-background)">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.p
            variants={fadeUp}
            className="text-[11px] tracking-[0.25em] uppercase text-(--color-muted-foreground) mb-5"
          >
            WHAT WE DO
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] text-(--color-foreground) max-w-3xl"
          >
            An integrated maternal care ecosystem.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-[15px] md:text-[16px] leading-[1.7] text-(--color-muted-foreground) max-w-2xl"
          >
            Solayo Africa supports women from pregnancy to postpartum through three connected solutions.
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
          {cards.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              variants={cardAnim}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group p-8 bg-(--color-primary) border border-white/10 transition shadow-sm hover:shadow-xl"
            >
              <p className="text-[11px] tracking-[0.25em] uppercase text-white/70 mb-4">
                {item.tag}
              </p>

              <h3 className="font-display text-[26px] leading-[1.2] text-white mb-4">
                {item.title}
              </h3>

              <p className="text-[15px] leading-[1.7] text-white/80 mb-8">
                {item.desc}
              </p>

              <div className="inline-flex items-center text-sm font-medium text-[#f4d77d] group-hover:translate-x-1 transition">
                Learn more →
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Ecosystem;
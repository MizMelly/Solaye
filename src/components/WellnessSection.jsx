import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// images
import mamaPapImg from "../assets/mamapap.jpeg";
import giftBoxImg from "../assets/afterbirth-package.jpeg";
import calmMistImg from "../assets/calmist.jpeg";

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

  const products = [
    {
      name: "MamaPap™",
      image: mamaPapImg,
      color: "#d8c9ea",
    },
    {
      name: "After Birth Gift Package",
      image: giftBoxImg,
      color: "#efe0a8",
    },
    {
      name: "CalmMist™",
      image: calmMistImg,
      color: "#d8c9ea",
    },
  ];

  return (
    <section className="bg-(--color-background) py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.p
            variants={fadeUp}
            className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-(--color-muted-foreground) mb-6"
          >
            SOLAYO WELLNESS
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl md:text-5xl leading-[1.05] text-(--color-foreground) mb-6"
          >
            Supporting mothers with{" "}
            <span className="italic text-(--color-primary)">
              everyday solutions.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[18px] leading-[1.8] text-(--color-muted-foreground) mb-8 max-w-lg"
          >
            From nutrition to comfort, our wellness products are
            thoughtfully designed to support women through pregnancy,
            postpartum, and recovery.
          </motion.p>

          {/* UPDATED BUTTON */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.04 }}
          >
            <Link
              to="/wellness"
              className="inline-flex px-7 py-3.5 rounded-full bg-(--color-primary) text-white font-medium text-sm shadow-sm hover:opacity-90 transition"
            >
              Shop wellness →
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >

          {/* LARGE CARD */}
          <motion.div
            variants={cardAnim}
            whileHover={{ y: -6 }}
            className="sm:col-span-2 overflow-hidden rounded-4xl border border-[#ddd6cb] bg-white"
          >
            <div
              style={{ backgroundColor: products[0].color }}
              className="h-72 p-5 flex items-center justify-center"
            >
              <img
                src={products[0].image}
                alt={products[0].name}
                className="w-full h-full object-contain object-center rounded-[24px]"
              />
            </div>

            <div className="p-6">
              <p className="font-display text-2xl text-(--color-foreground)">
                {products[0].name}
              </p>
            </div>
          </motion.div>

          {/* SMALL CARDS */}
          {products.slice(1).map((item, i) => (
            <motion.div
              key={i}
              variants={cardAnim}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-4xl border border-[#ddd6cb] bg-white"
            >
              <div
                style={{ backgroundColor: item.color }}
                className="h-56 p-4 flex items-center justify-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain object-center rounded-2xl"
                />
              </div>

              <div className="p-5">
                <p className="font-display text-lg text-(--color-foreground)">
                  {item.name}
                </p>
              </div>
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
        <div className="relative bg-(--color-primary) rounded-[40px] px-8 md:px-16 py-16 overflow-hidden">

          {/* Background Circles */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.18 }}
            transition={{ duration: 1 }}
            className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#efe0a8] rounded-full"
          />

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute -top-20 -right-10 w-60 h-60 bg-white rounded-full"
          />

          {/* CONTENT */}
          <div className="relative z-10 max-w-2xl">

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-display text-3xl md:text-5xl leading-[1.1] text-white mb-6"
            >
              Start your maternal care journey today.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white/80 text-[18px] leading-[1.7] mb-8"
            >
              It takes less than a minute to begin on WhatsApp.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="https://wa.me/c/8131059543"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="bg-white text-(--color-foreground) px-7 py-3.5 rounded-full text-sm font-medium"
              >
                Get started on WhatsApp
              </motion.a>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/about"
                  className="inline-flex border border-white/40 text-white px-7 py-3.5 rounded-full text-sm font-medium"
                >
                  About Solayo
                </Link>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WellnessSection;
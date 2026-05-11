import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// add your images here
import mamaPapImg from "../assets/mamapap.jpeg";
import giftBoxImg from "../assets/afterbirth-package.jpeg";
import calmMistImg from "../assets/calmist.jpeg";

const WellnessSection = () => {
  const products = [
    {
      title: "MamaPap™",
      desc: "Fortified nutrition blend for maternal health.",
      bg: "#d9caea",
      image: mamaPapImg,
    },
    {
      title: "After Birth Gift Package",
      desc: "Thoughtfully curated recovery essentials for new mothers.",
      bg: "#efe0a8",
      image: giftBoxImg,
    },
    {
      title: "CalmMist™",
      desc: "Comfort and relief support for relaxation and recovery.",
      bg: "#d9caea",
      image: calmMistImg,
    },
  ];

  const benefits = [
    "Improved nutrition",
    "Increased energy",
    "Convenience",
    "Affordable care support",
  ];

  return (
    <>
      {/* HERO + PRODUCTS */}
      <section className="px-6 md:px-16 py-16 md:py-24 bg-(--color-background)">
        <div className="max-w-7xl mx-auto">

          {/* HERO */}
          <div className="max-w-5xl mb-24">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-(--color-muted-foreground) mb-6"
            >
              SOLAYO WELLNESS
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-5xl leading-[1.05] text-(--color-foreground)"
            >
              Nourishing women through{" "}
              <span className="italic text-(--color-primary)">
                every stage.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-7 max-w-3xl text-[18px] leading-[1.8] text-(--color-muted-foreground)"
            >
              Solayo Wellness develops nutrition-focused and comfort-driven
              products designed to support women through pregnancy,
              postpartum, and beyond.
            </motion.p>

            <motion.div
                          initial={{ opacity: 0, y: 24 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1, delay: 0.4 }}
                          className="mt-10"
                        >
                          <Link
                            to="/contact"
                            className="inline-flex items-center rounded-full bg-(--color-primary) px-7 py-3 text-sm md:text-base font-medium text-white hover:opacity-90 transition"
                          >
                            Order now →
                          </Link>
                        </motion.div>
    
          </div>

          {/* PRODUCTS */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-(--color-muted-foreground) mb-8"
            >
              OUR PRODUCTS
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-4xl border border-[#d8d1c7] bg-white"
                >

                  {/* IMAGE AREA */}
                  <div
  style={{ backgroundColor: product.bg }}
  className="h-72 flex items-center justify-center p-7"
>
  <div className="w-full h-full rounded-[28px] bg-white/40 backdrop-blur-sm overflow-hidden flex items-center justify-center shadow-sm">
    
    <img
      src={product.image}
      alt={product.title}
      className="max-h-full max-w-full object-contain"
    />

  </div>
</div>

                  {/* CONTENT */}
                  <div className="px-7 py-7">
                    <h3 className="font-display text-2xl text-(--color-foreground) mb-3">
                      {product.title}
                    </h3>

                    <p className="text-[16px] leading-[1.7] text-(--color-muted-foreground)">
                      {product.desc}
                    </p>
                  </div>

                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-6 md:px-16 py-16 md:py-24 bg-(--color-background)">
        <div className="max-w-7xl mx-auto">

          <div className="max-w-5xl mb-14">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-(--color-muted-foreground) mb-6"
            >
              BENEFITS
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-5xl leading-[1.05] text-(--color-foreground)"
            >
              Designed for the way mothers{" "}
              <span className="italic text-(--color-primary)">
                actually live.
              </span>
            </motion.h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-[28px] border border-[#d8d1c7] bg-white px-7 py-8"
              >
                <p className="font-display text-xl text-(--color-foreground)">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

        <div className="w-full h-28 bg-white" />
    </>
  );
};

export default WellnessSection;
import React from "react";
import { motion } from "framer-motion";

const WellnessSection = () => {
  const products = [
    {
      title: "MamaPap™",
      desc: "Fortified nutrition blend for maternal health.",
      bg: "#d9caea",
    },
    {
      title: "Mama Start Pap",
      desc: "Early-stage nutrition support.",
      bg: "#efe0a8",
    },
    {
      title: "Mama Grow Pap",
      desc: "Advanced pregnancy and postpartum nourishment.",
      bg: "#d9caea",
    },
    {
      title: "Functional Cookies",
      desc: "Wellness support solutions, on the go.",
      bg: "#efe0a8",
    },
    {
      title: "CalmMist™",
      desc: "Comfort and relief support.",
      bg: "#d9caea",
    },
    {
      title: "Curated Gift Boxes",
      desc: "Thoughtful packages for new mothers.",
      bg: "#efe0a8",
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

            <motion.button
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-10 px-7 py-3.5 rounded-full bg-(--color-primary) text-white font-medium text-sm shadow-sm hover:opacity-90 transition"
            >
              Order now →
            </motion.button>
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

                  {/* TOP BLOCK */}
                  <div
                    style={{ backgroundColor: product.bg }}
                    className="h-72 flex items-end px-7 pb-8"
                  >
                    <h3 className="font-display text-2xl leading-[1.15] text-(--color-foreground)">
                      {product.title}
                    </h3>
                  </div>

                  {/* CONTENT */}
                  <div className="px-7 py-7">
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

          {/* BENEFITS GRID */}
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
    </>
  );
};

export default WellnessSection;
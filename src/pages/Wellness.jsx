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
      {/* WELLNESS HERO + PRODUCTS */}
      <section className="bg-[#f4f1eb] px-6 md:px-16 py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* HERO */}
          <div className="max-w-5xl mb-24">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-[#5e6f5a] mb-6"
            >
              Solayo Wellness
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-[56px] font-serif leading-[1.1] text-[#1d2a1d] mb-8"
            >
              Nourishing women through{" "}
              <span className="italic text-[#6b3fa0]">
                every stage.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-sm md:text-base leading-relaxed text-[#4f5a47] max-w-2xl"
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
              className="mt-10 inline-flex items-center justify-center rounded-full bg-[#5f3788] px-8 py-4 text-white font-semibold hover:bg-[#4f2d73]"
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
              className="text-[10px] uppercase tracking-[0.35em] text-[#7a766d] mb-6"
            >
              Our Products
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#f8f6f1] rounded-3xl border border-[#d9d3c7] overflow-hidden"
                >

                  {/* TOP BLOCK */}
                  <div
                    style={{ backgroundColor: product.bg }}
                    className="h-72 flex items-end px-7 pb-8"
                  >
                    <h3 className="text-lg md:text-xl font-serif text-[#1d2a1d]">
                      {product.title}
                    </h3>
                  </div>

                  {/* CONTENT */}
                  <div className="p-7">
                    <p className="text-sm md:text-base text-[#4f5a47] leading-relaxed">
                      {product.desc}
                    </p>
                  </div>

                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="bg-[#f4f1eb] px-6 md:px-16 py-16 md:py-24 border-t border-[#e5ded2]">
        <div className="max-w-7xl mx-auto">

          <div className="max-w-4xl mb-14">
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.35em] text-[#7a766d] mb-6"
            >
              Benefits
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-5xl text-[#1d2a1d] leading-[1.1]"
            >
              Designed for the way mothers actually live.
            </motion.h2>
          </div>

          {/* BENEFITS GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#f8f6f1] rounded-3xl border border-[#d9d3c7] px-7 py-8"
              >
                <p className="text-lg md:text-xl font-serif text-[#1d2a1d]">
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
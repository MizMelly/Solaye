import React from "react";
import { motion } from "framer-motion";

const ImpactSection = () => {
  const metrics = [
    { value: "1,750+", label: "Active users" },
    { value: "50+", label: "Consultations" },
    { value: "₦200K+", label: "Consultation revenue" },
    { value: "₦500K+", label: "Product sales" },
    { value: "100K+", label: "Reach" },
  ];

  const sdgs = [
    { title: "SDG 3", subtitle: "Good Health and Well-being" },
    { title: "SDG 5", subtitle: "Gender Equality" },
    { title: "SDG 10", subtitle: "Reduced Inequalities" },
  ];

  return (
    <section className="bg-(--color-background) text-(--color-foreground)">

      {/* ================= IMPACT ================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 md:py-28">

        <p className="eyebrow mb-6">
          Impact
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="display-xl max-w-5xl text-balance"
        >
          Driving measurable maternal{" "}
          <span className="italic text-(--color-primary)">
            health outcomes.
          </span>
        </motion.h2>

        {/* PROBLEM + APPROACH */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">

          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="card-soft p-8 md:p-10"
          >
            <p className="eyebrow mb-5">
              The Problem
            </p>

            <p className="text-[18px] md:text-[20px] leading-[1.8] text-(--color-muted-foreground)">
              Maternal healthcare gaps continue to affect millions of women due
              to limited access, poor nutrition, and lack of continuous support.
            </p>
          </motion.div>

          {/* Approach */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            viewport={{ once: true }}
            className="bg-[#f4efe5] border border-[#ddd7e8] rounded-4xl p-8 md:p-10"
          >
            <p className="eyebrow mb-5">
              Our Approach
            </p>

            <p className="text-[18px] md:text-[20px] leading-[1.8] text-(--color-muted-foreground)">
              Solayo addresses these challenges by combining technology,
              products, and community engagement into one connected ecosystem.
            </p>
          </motion.div>

        </div>
      </div>

      {/* ================= METRICS ================= */}
      <section className="bg-[#eadcf8] py-20 md:py-24">

        <div className="max-w-7xl mx-auto px-6 md:px-16">

          <p className="eyebrow text-[#6b4b87] mb-6">
            Metrics
          </p>

          <motion.h3
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="display-lg text-[#3f2954] mb-12"
          >
            By the numbers.
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">

            {metrics.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="bg-[#f8f3fb] rounded-3xl px-7 py-8"
              >

                <h4 className="font-display text-[42px] md:text-[48px] leading-none tracking-[-0.03em] text-(--color-primary)">
                  {item.value}
                </h4>

                <p className="mt-4 text-[15px] md:text-[16px] leading-[1.7] text-[#6b5b79]">
                  {item.label}
                </p>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= SDG ================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 md:py-28">

        <p className="eyebrow mb-6">
          SDG Alignment
        </p>

        <motion.h3
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="display-lg max-w-4xl mb-14 text-balance"
        >
          Aligned with the goals that matter most.
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {sdgs.map((sdg, index) => (
            <motion.div
              key={sdg.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="card-soft px-8 py-10 min-h-45 flex flex-col justify-center"
            >

              <h4 className="font-display text-[42px] md:text-[48px] leading-none tracking-[-0.03em] text-(--color-primary)">
                {sdg.title}
              </h4>

              <p className="mt-5 text-[17px] leading-[1.7] text-(--color-muted-foreground)">
                {sdg.subtitle}
              </p>

            </motion.div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default ImpactSection;
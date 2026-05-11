import React from "react";
import { motion } from "framer-motion";

const ImpactSection = () => {
  const metrics = [
    { value: "17,500+", label: "Active users" },
    { value: "50,000+", label: "Consultations" },
    { value: "₦200,000+", label: "Consultation revenue" },
    { value: "100,000+", label: "Reach" },
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

        <p className="eyebrow mb-5">
          Impact
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-display text-[2.4rem] md:text-[3.4rem] leading-[1.1] max-w-4xl"
        >
          Driving measurable maternal{" "}
          <span className="italic text-(--color-primary)">
            health outcomes.
          </span>
        </motion.h2>

        {/* PROBLEM + APPROACH */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-14">

          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="card-soft p-7 md:p-9"
          >
            <p className="eyebrow mb-4">The Problem</p>

            <p className="text-[16px] md:text-[17px] leading-[1.7] text-(--color-muted-foreground)">
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
            className="bg-[#f4efe5] border border-[#ddd7e8] rounded-4xl p-7 md:p-9"
          >
            <p className="eyebrow mb-4">Our Approach</p>

            <p className="text-[16px] md:text-[17px] leading-[1.7] text-(--color-muted-foreground)">
              Solayo addresses these challenges by combining technology,
              products, and community engagement into one connected ecosystem.
            </p>
          </motion.div>

        </div>
      </div>

      {/* ================= METRICS ================= */}
      <section className="bg-[#eadcf8] py-20 md:py-24">

        <div className="max-w-7xl mx-auto px-6 md:px-16">

          <p className="eyebrow text-[#6b4b87] mb-5">
            Metrics
          </p>

          <h3 className="font-display text-[2rem] md:text-[2.6rem] leading-[1.1] text-[#3f2954] mb-10">
            By the numbers.
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">

            {metrics.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="bg-[#f8f3fb] rounded-3xl px-6 py-7"
              >

                <h4 className="font-display text-[32px] md:text-[36px] leading-none text-(--color-primary)">
                  {item.value}
                </h4>

                <p className="mt-3 text-[14px] md:text-[15px] leading-[1.6] text-[#6b5b79]">
                  {item.label}
                </p>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= SDG ================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 md:py-28">

        <p className="eyebrow mb-5">
          SDG Alignment
        </p>

        <h3 className="font-display text-[2rem] md:text-[2.6rem] leading-[1.1] max-w-3xl mb-12">
          Aligned with the goals that matter most.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {sdgs.map((sdg, index) => (
            <motion.div
              key={sdg.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="card-soft px-7 py-8 min-h-40 flex flex-col justify-center"
            >

              <h4 className="font-display text-[32px] md:text-[36px] text-(--color-primary)">
                {sdg.title}
              </h4>

              <p className="mt-4 text-[15px] leading-[1.6] text-(--color-muted-foreground)">
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
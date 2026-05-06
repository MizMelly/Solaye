import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TractionSection = () => {
  const stats = [
    { value: 1750, suffix: "+", label: "Maternal platform users" },
    { value: 3800, suffix: "+", label: "Community members" },
    { value: 25, suffix: "+", label: "Outreach programs" },
    { value: 100000, suffix: "+", label: "People reached" },
    { value: 500000, prefix: "₦", suffix: "+", label: "Product sales (2 months)" },
    { value: 50, suffix: "+", label: "Consultations completed" },
  ];

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
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
      transition: { duration: 0.6 },
    },
  };

  // Count up component
  const CountUp = ({ end, prefix = "", suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 1500;
      const increment = end / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, [end]);

    return (
      <>
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </>
    );
  };

  return (
    <section className="bg-[#cfc3da] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-[0.25em] uppercase text-[#6b5a86] mb-6"
          >
            Traction
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-[clamp(2.4rem,4.5vw,3.6rem)] leading-[1.1] text-[#3d2b56] mb-14 max-w-2xl"
          >
            Growing impact across communities.
          </motion.h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardAnim}
              whileHover={{ y: -8, scale: 1.03 }}
              className="rounded-[26px] bg-[#e9e3ef] p-7"
            >
              <h3 className="font-serif text-3xl md:text-4xl text-[#4b2e73] mb-2">
                <CountUp
                  end={stat.value}
                  prefix={stat.prefix || ""}
                  suffix={stat.suffix || ""}
                />
              </h3>

              <p className="text-[15px] text-[#6b5a86] leading-[1.6]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TractionSection;
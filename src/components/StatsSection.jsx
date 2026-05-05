import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 334, suffix: "", label: "per 100K maternal mortality rate" },
  { value: 36, suffix: "%", label: "of births happen at home" },
  { value: 30, suffix: "%", label: "lack access to maternal care" },
  { value: 24, suffix: "/7", label: "support — every moment" },
];

// 🔥 Counter hook
const useCountUp = (end, duration = 1500) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const animate = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animate();
  }, [end, duration]);

  return count;
};

const StatsSection = () => {
  return (
    <section
      style={{ backgroundColor: "#e8f4e6" }}
      className="px-6 md:px-16 py-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#5f7561] mb-3">
            Why Solayo exists
          </p>

          <h2 className="text-2xl md:text-3xl font-serif leading-snug text-[#213426]">
            Maternal care across Africa is still a story of distance and silence.
          </h2>
        </motion.div>

        {/* STATS */}
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {stats.map((stat, index) => {
            const count = useCountUp(stat.value);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-3xl bg-white/90 border border-white shadow-sm p-6"
              >
                <p className="text-2xl md:text-3xl font-serif font-semibold text-[#27422e] leading-none">
                  {count}
                  {stat.suffix}
                </p>

                <p className="mt-2 text-xs md:text-sm text-[#556b55] leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
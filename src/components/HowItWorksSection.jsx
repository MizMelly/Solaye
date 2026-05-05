import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Say hi on WhatsApp",
    description: "Tap the link, share a few details, and meet Susan — your Solayo companion.",
  },
  {
    number: "02",
    title: "Get your care plan",
    description: "Personal check-ins, reminders and answers tuned to your stage of motherhood.",
  },
  {
    number: "03",
    title: "Stay supported",
    description: "Escalate to a real professional anytime, and join a community of mothers like you.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HowItWorksSection = () => {
  return (
    <section style={{ backgroundColor: "#f7f1e3" }} className="px-6 md:px-16 py-24">

      <div className="max-w-7xl mx-auto grid md:grid-cols-[1.1fr_1.4fr] gap-6 items-start">

        {/* LEFT CONTENT (bigger + tighter) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#5e6f5a] mb-4">
            How it works
          </p>

          <h2 className="text-4xl md:text-5xl font-serif leading-[1.05] text-[#1d2a1d] mb-3">
            Three small <br />
            steps. One big <br />
            difference.
          </h2>

          <p className="text-sm md:text-base text-[#4f5a47] leading-snug">
            No downloads. No forms. No waiting rooms. Just <br />
            open WhatsApp.
          </p>
        </motion.div>

        {/* RIGHT STEPS (closer + animated) */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-3"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={item}
              whileHover={{
                y: -6,
                boxShadow: "0 18px 35px rgba(63, 89, 58, 0.15)",
              }}
              className="rounded-3xl bg-white border border-[#f0ebe5] p-5 shadow-sm transition-all duration-300"
            >
              <div className="flex gap-4">

                <span className="text-lg font-serif font-semibold text-[#3a634f]">
                  {step.number}
                </span>

                <div>
                  <h3 className="text-lg font-serif text-[#1f2e1f] mb-1">
                    {step.title}
                  </h3>

                  <p className="text-xs md:text-sm leading-relaxed text-[#556856]">
                    {step.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
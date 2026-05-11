import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Join via WhatsApp",
    description: "Open a chat no app, no forms, no waiting room.",
  },
  {
    number: "02",
    title: "Get personal guidance",
    description: "Stage-based support, triage and reminders tuned to you.",
  },
  {
    number: "03",
    title: "Access care, products & pros",
    description: "Book consults, order wellness products, escalate when needed.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="px-6 md:px-16 py-24 bg-[#f7f1e3]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_1.5fr] gap-16 items-start">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.25em] uppercase text-(--color-muted-foreground) mb-6">
            How it works
          </p>

          <h2 className="font-display text-[clamp(2.5rem,5vw,3.8rem)] leading-[1.1] text-(--color-foreground) mb-6">
            Three simple <br /> steps.
          </h2>

          <p className="text-[16px] leading-[1.7] text-(--color-muted-foreground) max-w-sm">
            No downloads. No forms. Just open WhatsApp.
          </p>
        </motion.div>

        {/* RIGHT */}
        <div className="space-y-6">

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start gap-6 p-6 md:p-7 rounded-[28px] border border-(--color-border) bg-white/60 backdrop-blur-sm"
            >
              {/* Number */}
              <span className="font-display text-2xl text-(--color-primary)">
                {step.number}
              </span>

              {/* Content */}
              <div>
                <h3 className="font-display text-[20px] text-(--color-foreground) mb-1">
                  {step.title}
                </h3>

                <p className="text-[15px] leading-[1.6] text-(--color-muted-foreground)">
                  {step.description}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
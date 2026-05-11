import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SolayoHealthHero = () => {
  const features = [
    [
      "01",
      "AI maternal assistant",
      "Chat or voice — get clear, calm answers anytime you need them.",
    ],
    [
      "02",
      "Symptom triage",
      "Understand what’s normal, what needs rest, and when to seek care.",
    ],
    [
      "03",
      "Daily stage guidance",
      "Personalized guidance based on your pregnancy or postpartum stage.",
    ],
    [
      "04",
      "Consultation booking",
      "Speak with vetted midwives, doulas and OB-GYNs when needed.",
    ],
    [
      "05",
      "Facility referrals",
      "Connected to trusted clinics and primary health centers near you.",
    ],
    [
      "06",
      "Voice & local language",
      "Designed for how women across Africa actually speak and understand care.",
    ],
  ];

  const steps = [
    ["01", "Start on WhatsApp"],
    ["02", "Get personalized maternal guidance"],
    ["03", "Connect with healthcare professionals when needed"],
  ];

  const audience = [
    "Women trying to conceive",
    "Pregnant women",
    "Postpartum mothers",
  ];

  return (
    <>
      {/* HERO + FEATURES */}
      <section className="bg-(--color-background) px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">

          {/* HERO CONTENT */}
          <div className="max-w-6xl">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-(--color-muted-foreground) mb-6"
            >
              SOLAYO HEALTH · CARE PLATFORM
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-5xl font-display font-normal leading-[1.05] tracking-[-0.03em] text-(--color-foreground) text-3xl md:text-5xl lg:text-[56px]"
            >
              Accessible maternal care,
              <br />
              <span className="italic text-(--color-primary)">
                anytime, anywhere.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-8 max-w-2xl text-[18px] leading-[1.8] text-(--color-muted-foreground)"
            >
              Solayo Health is a WhatsApp-based maternal care platform supporting women from pregnancy through postpartum.
              Using AI chat and voice, we provide calm guidance, symptom support, and seamless access to trusted healthcare professionals when needed.
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
                Start using Solayo Health →
              </Link>
            </motion.div>
          </div>

          {/* FEATURES */}
          <div className="mt-20 md:mt-24">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-(--color-muted-foreground) mb-8"
            >
              FEATURES
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {features.map(([number, title, description], index) => (
                <motion.div
                  key={number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl border border-[#e6ddd0] p-8 md:p-10"
                >

                  <div className="mb-6">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#e9def8] text-(--color-primary) font-display text-lg">
                      {number}
                    </span>
                  </div>

                  <h3 className="font-display text-lg md:text-xl text-(--color-foreground) mb-3">
                    {title}
                  </h3>

                  <p className="text-[18px] leading-[1.8] text-(--color-muted-foreground) max-w-md">
                    {description}
                  </p>

                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS + WHO IT'S FOR */}
      <section className="bg-(--color-background) px-6 md:px-16 py-20 md:py-24 border-t border-[#e6ddd0]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* HOW IT WORKS */}
          <div>

            <p className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-(--color-muted-foreground) mb-6">
              HOW IT WORKS
            </p>

            <h2 className="font-display text-3xl md:text-5xl text-(--color-foreground) mb-8 leading-[1.1]">
              Three simple steps to feel supported.
            </h2>

            <div className="space-y-4">
              {steps.map(([number, title], index) => (
                <div
                  key={number}
                  className="bg-white rounded-3xl border border-[#e6ddd0] px-6 md:px-8 py-6 flex items-center gap-5"
                >
                  <span className="font-display text-2xl md:text-3xl text-(--color-primary)">
                    {number}
                  </span>

                  <p className="text-[18px] leading-[1.8] text-(--color-foreground)">
                    {title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* WHO IT'S FOR */}
          <div>

            <p className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-(--color-muted-foreground) mb-6">
              WHO IT'S FOR
            </p>

            <h2 className="font-display text-3xl md:text-5xl text-(--color-foreground) mb-8 leading-[1.1]">
              Built for every stage of motherhood.
            </h2>

            <div className="space-y-4">
              {audience.map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-3xl border border-[#e6ddd0] px-6 md:px-8 py-6 flex items-center gap-4"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-(--color-primary)" />

                  <p className="text-[18px] leading-[1.8] text-(--color-foreground)">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

  <div className="w-full h-28  bg-[#fffdfb]" />
    </>
    

  );
};

export default SolayoHealthHero;
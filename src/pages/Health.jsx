import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SolayoHealthHero = () => {
  const features = [
    [
      "01",
      "AI maternal assistant",
      "Chat or voice — get clear, calm answers any time of day.",
    ],
    [
      "02",
      "Symptom triage",
      "Know when to rest, when to call, when to go in.",
    ],
    [
      "03",
      "Daily stage guidance",
      "Personalized to your week of pregnancy or postpartum stage.",
    ],
    [
      "04",
      "Consultation booking",
      "Speak with vetted midwives, doulas and OB-GYNs.",
    ],
    [
      "05",
      "Facility referrals",
      "Connected to clinics and PHCs in your area.",
    ],
    [
      "06",
      "Voice & local language",
      "Built for how women across Africa actually talk.",
    ],
  ];

  const steps = [
    ["01", "Start on WhatsApp"],
    ["02", "Receive personalized maternal guidance"],
    ["03", "Get connected to professionals when needed"],
  ];

  const audience = [
    "Pregnant women",
    "Women trying to conceive",
    "Postpartum mothers",
  ];

  return (
    <>
      {/* HERO + FEATURES */}
      <section className="bg-[#f7f3ed] px-6 md:px-16 py-15 md:py-15">
        <div className="max-w-7xl mx-auto">
          
          {/* HERO CONTENT */}
          <div className="max-w-6xl">
            
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-[#4a5a76] mb-6"
            >
              SOLAYO HEALTH · PLATFORM
            </motion.p>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-5xl font-serif font-normal leading-[1.1] tracking-[-0.03em] text-[#1b231d] text-4xl md:text-5xl lg:text-[56px]"
            >
              Accessible maternal care,
              <br />
              <span className="italic text-[#6b3fa0]">
                anytime, anywhere.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-8 max-w-2xl text-sm md:text-base leading-relaxed text-[#4b5563]"
            >
              Solayo Health is a WhatsApp-based maternal care platform
              providing continuous support to women from pregnancy to
              postpartum. Through AI-powered chat and voice, we deliver
              guidance, triage, and access to real healthcare professionals.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-10"
            >
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-[#6b3fa0] px-7 py-3 text-sm md:text-base font-medium text-white transition-colors duration-300 hover:bg-[#5b348a]"
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
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-[#4a5a76] mb-8"
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
                  className="bg-white rounded-3xl border border-[#ddd4ea] p-8 md:p-10"
                >
                  
                  <div className="mb-6">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#e9def8] text-[#6b3fa0] font-serif text-lg leading-none">
                      {number}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg md:text-xl text-[#1b231d] mb-3">
                    {title}
                  </h3>

                  <p className="text-sm md:text-base text-[#4b5563] leading-relaxed max-w-md">
                    {description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS + WHO IT'S FOR */}
      <section className="bg-[#f7f3ed] px-6 md:px-16 py-20 md:py-24 border-t border-[#e6ddd0]">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* HOW IT WORKS */}
            <div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-[#4a5a76] mb-6"
              >
                HOW IT WORKS
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="font-serif text-3xl md:text-5xl text-[#1b231d] mb-8 leading-[1.1]"
              >
                Three steps to feel held.
              </motion.h2>

              <div className="space-y-4">
                {steps.map(([number, title], index) => (
                  <motion.div
                    key={number}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl border border-[#ddd4ea] px-6 md:px-8 py-6 flex items-center gap-5"
                  >
                    <span className="font-serif text-2xl md:text-3xl leading-none text-[#6b3fa0]">
                      {number}
                    </span>

                    <p className="text-sm md:text-base leading-relaxed text-[#1b231d]">
                      {title}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* WHO IT'S FOR */}
            <div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-[#4a5a76] mb-6"
              >
                WHO IT'S FOR
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="font-serif text-3xl md:text-5xl text-[#1b231d] mb-8 leading-[1.1]"
              >
                Built for every stage.
              </motion.h2>

              <div className="space-y-4">
                {audience.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl border border-[#ddd4ea] px-6 md:px-8 py-6 flex items-center gap-4"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6b3fa0] shrink-0" />

                    <p className="text-sm md:text-base leading-relaxed text-[#1b231d]">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <Link
                  to="/partners"
                  className="inline-flex items-center text-sm md:text-base text-[#6b3fa0] font-medium hover:opacity-80 transition-opacity"
                >
                  Partner with us →
                </Link>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default SolayoHealthHero;
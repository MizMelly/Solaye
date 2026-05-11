import React from "react";
import { motion } from "framer-motion";

const CommunitySection = () => {
  const services = [
    {
      title: "Maternal health outreach",
      desc: "Bringing care directly to underserved communities.",
    },
    {
      title: "Community education",
      desc: "Workshops on nutrition, antenatal care and postpartum wellbeing.",
    },
    {
      title: "Health camps & screenings",
      desc: "Pop-up access to checks and consultations.",
    },
    {
      title: "PHC & NGO partnerships",
      desc: "Working alongside trusted local providers.",
    },
  ];

  const stats = [
    {
      number: "25+",
      label: "Outreach programs",
    },
    {
      number: "100K+",
      label: "People reached",
    },
    {
      number: "3,800+",
      label: "Community members",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="bg-(--color-background) px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">

          <div className="max-w-5xl">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="eyebrow mb-6"
            >
              SOLAYO COMMUNITY · OUTREACH
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="display-xl max-w-4xl text-(--color-foreground)"
            >
              Building trust through{" "}
              <span className="italic text-(--color-primary)">
                community.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-8 max-w-3xl text-[18px] leading-[1.8] text-(--color-muted-foreground)"
            >
              Solayo Community drives awareness, education, and grassroots
              engagement to ensure women receive early and continuous maternal
              care support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <a
                href="https://chat.whatsapp.com/L5TshSaNgfVHGuEXY5mvwk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-(--color-primary) px-7 py-4 text-white text-sm font-medium hover:opacity-90 transition"
              >
                Join community →
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-(--color-background) px-6 md:px-16 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="eyebrow mb-8"
          >
            WHAT WE DO
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-[#f8f7f5] border border-[#ddd7e8] rounded-4xl p-9 md:p-10"
              >

                <h3 className="font-display text-[30px] leading-[1.15] text-(--color-foreground)">
                  {item.title}
                </h3>

                <p className="mt-5 text-[17px] leading-[1.8] text-(--color-muted-foreground) max-w-lg">
                  {item.desc}
                </p>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-[#eadcf8] px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="eyebrow mb-6 text-[#6b4b87]"
          >
            OUR IMPACT
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="display-lg max-w-4xl text-[#3f2954]"
          >
            Reach that compounds, month after month.
          </motion.h2>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">

            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-[#f8f3fb] rounded-4xl px-7 py-8"
              >

                <h3 className="font-display text-[52px] leading-none text-(--color-primary)">
                  {item.number}
                </h3>

                <p className="mt-4 text-[17px] text-[#6b5b79]">
                  {item.label}
                </p>

              </motion.div>
            ))}

          </div>
        </div>
      </section>
        <div className="w-full h-28 bg-white" />
    </>
  );
};

export default CommunitySection;
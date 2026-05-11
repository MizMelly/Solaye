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
    { number: "25+", label: "Outreach programs" },
    { number: "100K+", label: "People reached" },
    { number: "3,800+", label: "Community members" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="bg-(--color-background) px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="eyebrow mb-6"
            >
              SOLAYO COMMUNITY · OUTREACH
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-display text-[2.6rem] md:text-[3.8rem] leading-[1.05] text-(--color-foreground)"
            >
              Building trust through{" "}
              <span className="italic text-(--color-primary)">
                community.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-6 max-w-2xl text-[16px] md:text-[17px] leading-[1.7] text-(--color-muted-foreground)"
            >
              Solayo Community drives awareness, education, and grassroots engagement
              to ensure women receive early and continuous maternal care support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-10"
            >
              <a
                href="https://chat.whatsapp.com/L5TshSaNgfVHGuEXY5mvwk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-(--color-primary) px-6 py-3 text-white text-sm font-medium hover:opacity-90 transition"
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

          <p className="eyebrow mb-8">WHAT WE DO</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {services.map((item, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                className="bg-white border border-[#ddd7e8] rounded-3xl p-7 md:p-8"
              >
                <h3 className="font-display text-[22px] md:text-[24px] leading-[1.2] text-(--color-foreground)">
                  {item.title}
                </h3>

                <p className="mt-4 text-[15px] md:text-[16px] leading-[1.6] text-(--color-muted-foreground)">
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

          <p className="eyebrow mb-6 text-[#6b4b87]">OUR IMPACT</p>

          <h2 className="font-display text-[2.2rem] md:text-[3.2rem] leading-[1.1] text-[#3f2954]">
            Reach that compounds, month after month.
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-[#f8f3fb] rounded-3xl px-6 py-7"
              >
                <h3 className="font-display text-[40px] md:text-[48px] leading-none text-(--color-primary)">
                  {item.number}
                </h3>

                <p className="mt-3 text-[15px] text-[#6b5b79]">
                  {item.label}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      <div className="w-full h-20 bg-[#fffdfb]" />
    </>
  );
};

export default CommunitySection;
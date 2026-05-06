import React from "react";
import { motion } from "framer-motion";
import storyImg from "../assets/about-care.jpg";

const AboutPage = () => {
  return (
    <>
      {/* STORY SECTION */}
      <section
        style={{ backgroundColor: "#f7f3ed" }}
        className="px-6 md:px-16 py-15 md:py-32"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-lg"
          >
            <p className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-[#5e6f5a] mb-6">
              About Solayo Africa
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-serif leading-[1.1] text-[#1d2a1d] mb-8">
              A trusted maternal health{" "}
              <span className="italic text-(--color-primary)">
                ecosystem.
              </span>
            </h1>

            <p className="text-sm md:text-base leading-relaxed text-[#4f5a47]">
              Solayo Africa is building a trusted maternal health ecosystem designed to support
              women from pregnancy to postpartum through accessible, affordable and continuous care solutions.
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-full max-w-105 rounded-3xl overflow-hidden shadow-md">
              <img
                src={storyImg}
                alt="Mother with newborn"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* SOLAYO SECTIONS */}
      <section className="bg-[#e9e2d3] px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">

          {[ 
            {
              title: "Solayo Health",
              text: "Digital care platform on WhatsApp.",
              delay: 0.8,
            },
            {
              title: "Solayo Wellness",
              text: "Nutrition and comfort product solutions.",
              delay: 0.9,
            },
            {
              title: "Solayo Community",
              text: "Outreach and engagement on the ground.",
              delay: 1,
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: card.delay }}
              viewport={{ once: true }}
              className="bg-[#f4f1eb] rounded-3xl border border-[#d9d3c7] p-8 md:p-10"
            >
              <h3 className="text-lg md:text-xl font-serif text-[#1d2a1d] mb-4">
                {card.title}
              </h3>
              <p className="text-sm md:text-base text-[#4f5a47] leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* VISION + PRINCIPLES */}
      <section className="bg-[#f7f3ed] px-6 md:px-16 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">

          {/* VISION */}
          <div className="text-center mb-16">
            <p className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-[#7a766d] mb-6">
              Vision
            </p>

            <h2 className="font-serif text-3xl md:text-5xl lg:text-[56px] leading-[1.2] text-[#1d2a1d] max-w-4xl mx-auto">
              To become Africa's leading maternal health ecosystem.
            </h2>
          </div>

          {/* BELIEFS */}
          <div className="mb-12">
            <p className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-[#7a766d] mb-6">
              What we believe
            </p>

            <h3 className="font-serif text-2xl md:text-4xl lg:text-[48px] leading-[1.2] text-[#1d2a1d] max-w-3xl">
              Four quiet principles that shape every message Solayo sends.
            </h3>
          </div>

          {/* PRINCIPLES GRID */}
          <div className="grid md:grid-cols-2 gap-6">

            {[
              {
                number: "01",
                title: "Mothers first",
                text: "Every decision starts with the woman holding her phone at 3 a.m.",
              },
              {
                number: "02",
                title: "Clinically grounded",
                text: "AI is the interface. Midwives and doctors are the foundation.",
              },
              {
                number: "03",
                title: "Quietly powerful",
                text: "We replace anxiety with calm. Distance with closeness.",
              },
              {
                number: "04",
                title: "Built for here",
                text: "African contexts, languages, foods, beliefs and realities.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#f4f1eb] rounded-3xl border border-[#d9d3c7] p-8 md:p-10"
              >
                <p className="text-lg font-serif text-[#6b5e7a] mb-4">
                  {item.number}
                </p>
                <h4 className="font-serif text-xl text-[#1d2a1d] mb-3">
                  {item.title}
                </h4>
                <p className="text-sm md:text-base text-[#4f5a47]">
                  {item.text}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
<section className="bg-[#e9e2d3] px-6 md:px-16 py-20 md:py-28">
  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="mb-16 max-w-4xl">
      <p className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-[#7a766d] mb-6">
        The Team
      </p>

      <h2 className="font-serif text-3xl md:text-5xl lg:text-[56px] leading-[1.2] text-[#1d2a1d] mb-6">
        A small, careful team — clinicians, builders and mothers.
      </h2>

      <p className="text-sm md:text-base text-[#4f5a47] max-w-2xl">
        Spread across Lagos, Nairobi, Accra and Johannesburg, united by one quiet conviction:
        maternal care should feel close, not clinical.
      </p>
    </div>

    {/* TEAM GRID */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {[
        {
          initials: "AO",
          name: "Adaeze Okonkwo",
          role: "CO-FOUNDER & CEO",
          desc: "Public health strategist with a decade across Lagos and Nairobi clinics.",
        },
        {
          initials: "TB",
          name: "Tunde Bakare",
          role: "CO-FOUNDER & CTO",
          desc: "Building calm, conversational AI that meets mothers where they already are.",
        },
        {
          initials: "AY",
          name: "Dr. Amina Yusuf",
          role: "MEDICAL DIRECTOR",
          desc: "OB-GYN and FMCOG fellow guiding every clinical protocol behind Solayo.",
        },
        {
          initials: "ZD",
          name: "Zanele Dube",
          role: "LEAD MIDWIFE",
          desc: "20+ years supporting mothers from positive test through the toddler years.",
        },
        {
          initials: "KM",
          name: "Kwame Mensah",
          role: "HEAD OF DESIGN",
          desc: "Crafts the quiet, unhurried feel of every Solayo conversation.",
        },
        {
          initials: "FD",
          name: "Fatou Diallo",
          role: "COMMUNITY LEAD",
          desc: "Hosts our WhatsApp circles and listens to mothers across 7 countries.",
        },
      ].map((member, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 + index * 0.1 }}
          viewport={{ once: true }}
          className="bg-[#f4f1eb] rounded-3xl border border-[#d9d3c7] p-6 md:p-8 flex gap-4 items-start"
        >
          {/* INITIALS */}
          <div className="w-12 h-12 rounded-full bg-[#e1dbe8] flex items-center justify-center font-serif text-[#6b5e7a]">
            {member.initials}
          </div>

          {/* TEXT */}
          <div>
            <h4 className="font-serif text-lg text-[#1d2a1d]">
              {member.name}
            </h4>

            <p className="text-[11px] tracking-wide uppercase text-[#7a766d] mb-2">
              {member.role}
            </p>

            <p className="text-sm text-[#4f5a47] leading-relaxed">
              {member.desc}
            </p>
          </div>
        </motion.div>
      ))}

    </div>
  </div>
</section>
    </>
  );
};

export default AboutPage;
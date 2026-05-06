import React from "react";
import { motion } from "framer-motion";
import storyImg from "../assets/about-care.jpg";

import adaImage from "../assets/dammy potratit.png";
import tundeImage from "../assets/15.png";
import aminaImage from "../assets/16.png";
import zaneleImage from "../assets/ekundayo.jpeg";
import kwameImage from "../assets/kwame.jpg";
import fatouImage from "../assets/fatou.jpg";

const AboutPage = () => {
  const team = [
    {
      image: adaImage,
      name: "Adaeze Okonkwo",
      role: "CO-FOUNDER & CEO",
      desc: "Public health strategist with a decade across Lagos and Nairobi clinics.",
    },
    {
      image: tundeImage,
      name: "Tunde Bakare",
      role: "CO-FOUNDER & CTO",
      desc: "Building calm, conversational AI that meets mothers where they already are.",
    },
    {
      image: aminaImage,
      name: "Dr. Amina Yusuf",
      role: "MEDICAL DIRECTOR",
      desc: "OB-GYN and FMCOG fellow guiding every clinical protocol behind Solayo.",
    },
    {
      image: zaneleImage,
      name: "Zanele Dube",
      role: "LEAD MIDWIFE",
      desc: "20+ years supporting mothers from positive test through the toddler years.",
    },
    {
      image: kwameImage,
      name: "Kwame Mensah",
      role: "HEAD OF DESIGN",
      desc: "Crafts the quiet, unhurried feel of every Solayo conversation.",
    },
    {
      image: fatouImage,
      name: "Fatou Diallo",
      role: "COMMUNITY LEAD",
      desc: "Hosts our WhatsApp circles and listens to mothers across 7 countries.",
    },
  ];

  return (
    <>
      {/* STORY SECTION */}
      <section
        style={{ backgroundColor: "#f7f3ed" }}
        className="px-6 md:px-16 py-15 md:py-15"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

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
            { title: "Solayo Health", text: "Digital care platform on WhatsApp." },
            { title: "Solayo Wellness", text: "Nutrition and comfort product solutions." },
            { title: "Solayo Community", text: "Outreach and engagement on the ground." },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#f4f1eb] rounded-3xl border border-[#d9d3c7] p-8 md:p-10"
            >
              <h3 className="text-lg md:text-xl font-serif text-[#1d2a1d] mb-4">
                {card.title}
              </h3>
              <p className="text-sm md:text-base text-[#4f5a47]">
                {card.text}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="bg-[#e9e2d3] px-6 md:px-16 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16 max-w-4xl">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#7a766d] mb-6">
              The Team
            </p>

            <h2 className="font-serif text-3xl md:text-5xl text-[#1d2a1d] mb-6">
              A small, careful team — clinicians, builders and mothers.
            </h2>

            <p className="text-[#4f5a47] max-w-2xl">
              Spread across Africa, united by one conviction: maternal care should feel close, not clinical.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#f4f1eb] rounded-3xl border border-[#d9d3c7] p-6 md:p-8 flex gap-4 items-center"
              >
                <div className="w-14 h-14 rounded-full overflow-hidden shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-serif text-lg text-[#1d2a1d]">
                    {member.name}
                  </h4>

                  <p className="text-[11px] uppercase tracking-wide text-[#7a766d] mb-1">
                    {member.role}
                  </p>

                  <p className="text-sm text-[#4f5a47]">
                    {member.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER CTA (RESTORED) */}
      <section className="bg-[#f7f3ed] px-6 md:px-16 pb-16 md:pb-24 -mt-10 md:-mt-20">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="bg-[#e8daf8] border border-[#d8c8eb] rounded-3xl md:rounded-4xl px-6 md:px-16 py-10 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
          >
            <div className="max-w-3xl">
              <h2 className="font-serif text-3xl md:text-5xl text-[#40284f] mb-5">
                Want to partner with us?
              </h2>

              <p className="text-[#6b3f83] text-base md:text-xl">
                We collaborate with clinics, NGOs and researchers across Africa.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#5f3788] px-8 py-4 text-white font-semibold hover:bg-[#4f2d73]"
            >
              Get in touch
            </a>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default AboutPage;
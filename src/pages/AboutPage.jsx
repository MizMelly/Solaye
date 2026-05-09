import React from "react";
import { motion } from "framer-motion";
import storyImg from "../assets/about-care.jpg";

import dammyImage from "../assets/Damilola Oladiipo.png";
import georgeImage from "../assets/George Odiana.png";
import theresaImage from "../assets/Theresa Oyewole.png";
import oluwatoniImage from "../assets/Oluwatoni Ruth.jpg";
import itunuImage from "../assets/Itunu Ijila.png";
import oloruntobaImage from "../assets/Oloruntoba Goodness.jpeg";
import edeboImage from "../assets/Edebo Ojo.jpg";

const AboutPage = () => {
  const team = [
    {
      image: dammyImage,
      name: "Dammy Oladiipo",
      role: "CEO & FOUNDER",
      desc: "Project Manager, 10+ years social enterprise development.",
    },
    {
      image: georgeImage,
      name: "George Odiana",
      role: "CO-FOUNDER & CTO",
      desc: "Tech innovator and product strategist.",
    },
    {
      image: theresaImage,
      name: "Theresa Oyewole",
      role: "COO - SOLAYO WELLNESS",
      desc: "Community builder and medical marketing expert.",
    },
    {
      image: oluwatoniImage,
      name: "Oluwatoni Ruth",
      role: "COO - SOLAYO HEALTH",
      desc: "General Medicine & Sexual Reproductive Health.",
    },
    {
      image: itunuImage,
      name: "Itunu Ijila",
      role: "HEAD OF TECHNOLOGY - SOLAYO HEALTH",
      desc: "AI Engineer & Machine Learning Specialist.",
    },
    {
      image: oloruntobaImage,
      name: "Oloruntoba Goodness",
      role: "NUTRITION SPECIALIST - SOLAYO WELLNESS",
      desc: "Registered Nutritionist and Dietitian.",
    },
    {
      image: edeboImage,
      name: "Edebo-Ojo Ammeh (RN)",
      role: "COMMUNITY MANAGER - SOLAYO COMMUNITY",
      desc: "Registered Nurse, with focus on sexaul reproductive health.",
    }
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
      {/* Eyebrow (match Hero style) */}
      <p className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-(--color-muted-foreground) mb-6">
        About Solayo Africa
      </p>

      {/* Heading (MATCH HERO FONT SYSTEM) */}
      <h1 className="font-display text-3xl md:text-5xl lg:text-[56px] leading-[1.05] text-(--color-foreground) mb-8">
        A trusted maternal health{" "}
        <span className="italic text-(--color-primary)">
          ecosystem.
        </span>
      </h1>

      {/* Body text (MATCH HERO TEXT SYSTEM) */}
      <p className="text-[18px] leading-[1.8] text-(--color-muted-foreground)">
        Solayo Africa is building a trusted maternal health ecosystem designed to support women from pregnancy through postpartum with accessible, affordable, and continuous care.
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
      <section className="bg-(--color-background) px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">

          {[
            {
              title: "Solayo Health",
              text: "A WhatsApp-based maternal care platform offering continuous support.",
            },
            {
              title: "Solayo Wellness",
              text: "Nutrition and comfort-focused products for maternal wellbeing.",
            },
            {
              title: "Solayo Community",
              text: "On-the-ground outreach, education, and engagement programs.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-[#e6ddd0] p-8 md:p-10"
            >
              <h3 className="text-lg md:text-xl font-display text-(--color-foreground) mb-4">
                {card.title}
              </h3>

              <p className="text-[18px] leading-[1.8] text-(--color-muted-foreground)">
                {card.text}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="bg-(--color-background) px-6 md:px-16 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16 max-w-4xl">

            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-(--color-muted-foreground) mb-6">
              The Team
            </p>

            <h2 className="font-display text-3xl md:text-5xl text-(--color-foreground) mb-6 leading-[1.1]">
              A small, thoughtful team of clinicians, builders, and mothers.
            </h2>

            <p className="text-[18px] leading-[1.8] text-(--color-muted-foreground) max-w-2xl">
              Spread across Africa, united by one belief: maternal care should feel close, not clinical.
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
                className="bg-white rounded-3xl border border-[#e6ddd0] p-6 md:p-8 flex gap-4 items-center"
              >
                <div className="w-14 h-14 rounded-full overflow-hidden shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-display text-lg text-(--color-foreground)">
                    {member.name}
                  </h4>

                  <p className="text-[11px] uppercase tracking-wide text-(--color-muted-foreground) mb-1">
                    {member.role}
                  </p>

                  <p className="text-[18px] leading-[1.8] text-(--color-muted-foreground)">
                    {member.desc}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* PARTNER CTA */}
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

        <h2 className="font-display text-3xl md:text-5xl text-[#40284f] mb-5">
          Want to partner with us?
        </h2>

        <p className="text-[#6b3f83] text-base md:text-xl">
          We collaborate with clinics, NGOs, researchers, and maternal health programs across Africa.
        </p>

      </div>

      <a
        href="/contact"
        className="inline-flex items-center justify-center rounded-full bg-[#5f3788] px-8 py-4 text-white font-semibold hover:bg-[#4f2d73] transition"
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
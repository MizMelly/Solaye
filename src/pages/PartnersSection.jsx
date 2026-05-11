import React from "react";

function PartnersSection() {
  const partners = [
    {
      title: "Hospitals",
      description:
        "Extend continuous care to your patients between visits.",
    },
    {
      title: "Primary Healthcare Centres",
      description:
        "Reach more women with stage-based digital support.",
    },
    {
      title: "NGOs",
      description:
        "Run outreach programs powered by Solayo's tools and team.",
    },
    {
      title: "Corporate organizations",
      description:
        "Sponsor maternal health impact at scale.",
    },
  ];

  return (
    <section className="bg-(--color-background) px-6 md:px-16 py-16 md:py-24">

      {/* HEADER */}
      <div className="max-w-4xl">

        <p className="eyebrow mb-5">
          Partners
        </p>

        <h2 className="font-display text-[2.4rem] md:text-[3.6rem] leading-[1.05] text-(--color-foreground)">
          Our{" "}
          <span className="italic text-(--color-primary)">
            partners.
          </span>
        </h2>

        <p className="mt-6 max-w-2xl text-[16px] md:text-[17px] leading-[1.7] text-(--color-muted-foreground)">
          Solayo grows through partnership. We collaborate across the maternal
          health ecosystem to make care closer, kinder and more affordable.
        </p>

      </div>

      {/* CARDS */}
      <div className="mt-14 grid gap-6 md:grid-cols-2">

        {partners.map((item, index) => (
          <div
            key={index}
            className="rounded-3xl border border-[#e6ddd0] bg-[#fffdfb] p-8 md:p-9 transition hover:shadow-sm"
          >
            <h3 className="font-display text-[22px] md:text-[26px] leading-[1.2] text-(--color-foreground)">
              {item.title}
            </h3>

            <p className="mt-4 text-[15px] md:text-[16px] leading-[1.7] text-(--color-muted-foreground)">
              {item.description}
            </p>
          </div>
        ))}

      </div>

      {/* CTA SECTION */}
      <div className="mt-20 rounded-[32px] bg-[#ddd0ee] px-8 py-12 md:px-14 md:py-14">

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* TEXT */}
          <div className="max-w-xl">

            <h3 className="font-display text-[2.2rem] md:text-[3rem] leading-[1.1] text-[#3d2352]">
              Become a partner.
            </h3>

            <p className="mt-5 text-[16px] md:text-[17px] leading-[1.7] text-[#6d557f]">
              Tell us about your organization and the mothers you serve —
              we'll find a way to work together.
            </p>

          </div>

          {/* BUTTON */}
          <div>
            <button className="rounded-full bg-[#5d2d91] px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-90">
              Get in touch →
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}

export default PartnersSection;
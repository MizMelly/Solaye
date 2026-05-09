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
    <section className="bg-(--color-background) px-6 py-16 md:px-12 lg:px-20">

      {/* HEADER */}
      <div className="max-w-4xl">

        <p className="mb-6 text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-(--color-muted-foreground)">
          Partners
        </p>

        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-(--color-foreground)">
          Our{" "}
          <span className="italic text-(--color-primary)">
            partners.
          </span>
        </h2>

        <p className="mt-8 max-w-3xl text-[18px] md:text-xl leading-[1.8] text-(--color-muted-foreground)">
          Solayo grows through partnership. We collaborate across the maternal health ecosystem
          to make care closer, kinder and more affordable.
        </p>

      </div>

      {/* CARDS */}
      <div className="mt-20 grid gap-6 md:grid-cols-2">

        {partners.map((item, index) => (
          <div
            key={index}
            className="rounded-4xl border border-[#e6ddd0] bg-white p-10 transition hover:shadow-sm"
          >
            <h3 className="font-display text-2xl md:text-3xl text-(--color-foreground)">
              {item.title}
            </h3>

            <p className="mt-6 text-[18px] leading-[1.8] text-(--color-muted-foreground)">
              {item.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default PartnersSection;
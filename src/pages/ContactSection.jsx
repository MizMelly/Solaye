import React from "react";

function ContactSection() {
  return (
    <section className="bg-(--color-background) px-6 py-10 md:px-12 lg:px-20">
      <div className="grid gap-10 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="mb-6 text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-(--color-muted-foreground)">
              Contact
            </p>

            <h1 className="max-w-xl font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] text-(--color-foreground)">
              Say hello.
              <br />
              We're listening.
            </h1>

            <p className="mt-8 max-w-xl text-[18px] leading-[1.8] text-(--color-muted-foreground)">
              Whether you're a mother with a question, a clinician who shares our mission,
              or a journalist telling the story of African maternal health we'd love to hear from you.
            </p>
          </div>

          {/* CARDS */}
          <div className="mt-12 space-y-5">

            {/* WHATSAPP */}
            <div className="flex items-center justify-between rounded-3xl border border-[#d9d3e8] bg-white p-6">
              <div>
                <h3 className="font-display text-xl md:text-2xl text-(--color-foreground)">
                  WhatsApp Solayo
                </h3>

                <p className="mt-2 text-[18px] leading-[1.6] text-(--color-muted-foreground)">
                  The fastest way to meet Susan and try the experience.
                </p>
              </div>

              <a
                href="https://wa.me/c/8131059543"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] font-medium text-(--color-primary) hover:opacity-80 transition"
              >
                Open chat →
              </a>
            </div>

            {/* COMMUNITY */}
            <div className="flex items-center justify-between rounded-3xl border border-[#d9d3e8] bg-white p-6">
              <div>
                <h3 className="font-display text-xl md:text-2xl text-(--color-foreground)">
                  Join the community
                </h3>

                <p className="mt-2 text-[18px] leading-[1.6] text-(--color-muted-foreground)">
                  A circle of mothers, midwives and curious dads.
                </p>
              </div>

              <a
                href="https://chat.whatsapp.com/L5TshSaNgfVHGuEXY5mvwk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] font-medium text-(--color-primary) hover:opacity-80 transition"
              >
                Join group →
              </a>
            </div>

            {/* EMAIL */}
            <div className="flex items-center justify-between rounded-3xl border border-[#d9d3e8] bg-white p-6">
              <div>
                <h3 className="font-display text-xl md:text-2xl text-(--color-foreground)">
                  Email the team
                </h3>

                <p className="mt-2 text-[18px] leading-[1.6] text-(--color-muted-foreground)">
                  Press, partnerships, careers — we read every note.
                </p>
              </div>

              <a
                href="mailto:hello@solayo.africa"
                className="text-[16px] font-medium text-(--color-primary) hover:opacity-80 transition"
              >
                hello@solayo.africa →
              </a>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="rounded-4xl border border-[#d9d3e8] bg-white p-8 md:p-12">
          <h2 className="font-display text-3xl md:text-5xl text-(--color-foreground)">
            Send us a note
          </h2>

          <form className="mt-10 space-y-8">

            {/* NAME + EMAIL */}
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-3 block text-sm text-(--color-muted-foreground)">
                  Your name
                </label>

                <input
                  type="text"
                  placeholder="Adaeze Okafor"
                  className="h-14 w-full rounded-2xl border border-[#d9d3e8] bg-(--color-background) px-5 text-lg outline-none placeholder:text-gray-400 focus:border-(--color-primary)"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm text-(--color-muted-foreground)">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="h-14 w-full rounded-2xl border border-[#d9d3e8] bg-(--color-background) px-5 text-lg outline-none placeholder:text-gray-400 focus:border-(--color-primary)"
                />
              </div>
            </div>

            {/* SELECT */}
            <div>
              <label className="mb-3 block text-sm text-(--color-muted-foreground)">
                I'm reaching out as
              </label>

              <select className="h-14 w-full rounded-2xl border border-[#d9d3e8] bg-(--color-background) px-5 text-lg outline-none focus:border-(--color-primary)">
                <option>A mother / mother-to-be</option>
                <option>Clinician</option>
                <option>Journalist</option>
                <option>Partner</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="mb-3 block text-sm text-(--color-muted-foreground)">
                Your message
              </label>

              <textarea
                rows={6}
                placeholder="Tell us what's on your mind..."
                className="w-full rounded-2xl border border-[#d9d3e8] bg-(--color-background) p-5 text-lg outline-none placeholder:text-gray-400 focus:border-(--color-primary)"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="flex h-16 w-full items-center justify-center bg-(--color-primary) text-lg font-semibold text-white transition hover:opacity-90"
            >
              Send message
            </button>

            <p className="text-center text-sm text-(--color-muted-foreground)">
              We reply within two working days. Your details stay between us.
            </p>

          </form>
        </div>
      </div>

      {/* BOTTOM INFO SECTION */}
      <div className="mt-16 rounded-4xl bg-[#e8d8f7] px-8 py-10 md:px-16 md:py-14">
        <div className="grid gap-10 md:grid-cols-3">

          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-(--color-primary)">
              Headquarters
            </p>

            <p className="text-2xl font-display text-(--color-foreground)">
              Lagos, Nigeria
            </p>
          </div>

          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-(--color-primary)">
              Hours
            </p>

            <div className="space-y-2 text-2xl font-display text-(--color-foreground)">
              <p>Solayo on WhatsApp: 24/7</p>
              <p>Team replies: Mon–Fri, 9am–6pm WAT</p>
            </div>
          </div>

          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-(--color-primary)">
              For urgent care
            </p>

            <p className="text-2xl font-display text-(--color-foreground)">
              Solayo is not a substitute for emergency services. Please contact your local provider.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;
import React from "react";
import logo from "../assets/Logo-P.png";

const Footer = () => {
  return (
    <footer className="bg-[#f7f1e3] px-6 md:px-16 py-16 border-t border-[#e6e1d7]">
      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-[#e6e1d7]">

          {/* LEFT - BRAND */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-6">
        <img
          src={logo}
          alt="Solayo logo"
          className="h-5 md:h-8 w-auto object-contain"
        />
      </div>

            <p className="text-sm leading-relaxed text-[#5b6653] max-w-sm">
              Trusted maternal care on WhatsApp. AI-guided,
              professional-backed, built for African mothers — from
              positive test to the toddler years.
            </p>
          </div>

          {/* MIDDLE */}
          <div>
            <p className="text-[11px] tracking-[0.35em] uppercase text-[#7a8574] mb-5">
              Explore
            </p>

            <ul className="space-y-2">
              <li><a className="text-sm text-[#5b6653] hover:text-[#3f5f47] transition">Home</a></li>
              <li><a className="text-sm text-[#5b6653] hover:text-[#3f5f47] transition">About</a></li>
              <li><a className="text-sm text-[#5b6653] hover:text-[#3f5f47] transition">Resources</a></li>
              <li><a className="text-sm text-[#5b6653] hover:text-[#3f5f47] transition">Contact</a></li>
            </ul>
          </div>

          {/* RIGHT */}
          <div>
            <p className="text-[11px] tracking-[0.35em] uppercase text-[#7a8574] mb-5">
              Connect
            </p>

            <ul className="space-y-2">
              <li><a className="text-sm text-[#5b6653] hover:text-[#3f5f47] transition">WhatsApp Solayo</a></li>
              <li><a className="text-sm text-[#5b6653] hover:text-[#3f5f47] transition">Join the Community</a></li>
              <li>
                <a
                  href="mailto:hello@solayo.africa"
                  className="text-sm text-[#5b6653] hover:text-[#3f5f47] transition"
                >
                  hello@solayo.africa
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-xs text-[#7a8574]">
          <p>© 2026 Solayo. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Made with care for mothers across Africa.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
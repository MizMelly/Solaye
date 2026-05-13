import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo-P.png";

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#f7f1e3] border-t border-[#dddddd] px-6 md:px-12 lg:px-20 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-16 pb-14 border-b border-[#d9d9d9]">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-1">
            <NavLink to="/" className="inline-block mb-6">
              <img
                src={logo}
                alt="Solayo Logo"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </NavLink>

            <p className="text-[15px] leading-8 text-[#6b6b6b] max-w-sm mb-10">
              Trusted maternal care on WhatsApp. AI-guided,
              professional-backed, built for African mothers from
              positive test to the toddler years.
            </p>

            <div className="space-y-2 mb-8">
              <p className="text-[15px] font-medium text-[#111111]">
                Phone: +254 20 8780082
              </p>
              <p className="text-[15px] font-medium text-[#111111]">
                Email: hello@solayo.africa
              </p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4 mb-10">
              <a
                href="https://instagram.com/solayoafrica"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#d7d7d7] text-[#444444] hover:bg-black hover:text-white transition"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="https://linkedin.com/company/solayoafrica"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#d7d7d7] text-[#444444] hover:bg-black hover:text-white transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={16} />
              </a>

              <a
                href="https://x.com/solayoafrica"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#d7d7d7] text-[#444444] hover:bg-black hover:text-white transition"
                aria-label="X"
              >
                <FaXTwitter size={16} />
              </a>

              <a
                href="https://facebook.com/solayoafrica"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#d7d7d7] text-[#444444] hover:bg-black hover:text-white transition"
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </a>
            </div>

            <p className="text-[14px] leading-7 text-[#8a8a8a]">
              © 2026 Solayo. All rights reserved.
              <br />
              Made with care for mothers across Africa.
            </p>
          </div>

          {/* ABOUT US */}
          <div>
            <h4 className="text-[16px] font-semibold text-[#111111] mb-5">
              About Us
            </h4>
            <div className="w-full h-px bg-[#cfcfcf] mb-6" />

            <ul className="space-y-4">
              <li>
                <NavLink
                  to="/about"
                  className="text-[15px] text-[#666666] hover:text-black transition"
                >
                  About Solayo
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/community"
                  className="text-[15px] text-[#666666] hover:text-black transition"
                >
                  Community
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className="text-[15px] text-[#666666] hover:text-black transition"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-[15px] text-[#666666] hover:text-black transition"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* OUR WORK */}
          <div>
            <h4 className="text-[16px] font-semibold text-[#111111] mb-5">
              Our Work
            </h4>
            <div className="w-full h-px bg-[#cfcfcf] mb-6" />

            <ul className="space-y-4">
              <li>
                <NavLink
                  to="/health"
                  className="text-[15px] text-[#666666] hover:text-black transition"
                >
                  Health
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/wellness"
                  className="text-[15px] text-[#666666] hover:text-black transition"
                >
                  Wellness
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/impact"
                  className="text-[15px] text-[#666666] hover:text-black transition"
                >
                  Impact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/partners"
                  className="text-[15px] text-[#666666] hover:text-black transition"
                >
                  Partners
                </NavLink>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="text-[20px] md:text-[24px] font-semibold text-[#111111] mb-4">
              Stay Updated (Email List)
            </h4>

            <p className="text-[15px] leading-7 text-[#555555] mb-6 max-w-sm">
              Join our email list to get updates on maternal health
              resources, stories, and new features.
            </p>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full h-14 px-5 border border-[#d4d4d4] bg-white text-[15px] outline-none focus:border-black transition"
              />

              <button
                type="submit"
                className="bg-black text-white h-14 px-10 text-[15px] font-semibold hover:bg-[#222222] transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <NavLink
            to="/privacy-policy"
            className="text-[15px] text-[#8a8a8a] hover:text-black transition"
          >
            Privacy Policy
          </NavLink>

          <NavLink
            to="/transparency"
            className="text-[15px] text-[#8a8a8a] hover:text-black transition"
          >
            Transparency & Accountability
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
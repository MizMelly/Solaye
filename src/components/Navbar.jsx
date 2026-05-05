import React, { useState } from "react";
import logo from "../assets/Logo-P.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-6 md:px-12 py-4 flex items-center justify-between border-b border-[#e8e4db] sticky top-0 z-50 backdrop-blur bg-[#e9e6df]/80">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Solayo logo"
          className="h-5 md:h-8 w-auto object-contain"
        />
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-8 font-medium text-sm text-[#4a4a4a]">
        <li className="px-4 py-2 rounded-full bg-[#e6efdf] text-[#26422f] cursor-pointer hover:opacity-90 transition">
          Home
        </li>
        <li className="cursor-pointer hover:opacity-70 transition">About</li>
        <li className="cursor-pointer hover:opacity-70 transition">Resources</li>
        <li className="cursor-pointer hover:opacity-70 transition">Contact</li>
      </ul>

      {/* CTA (Desktop) */}
      <div className="hidden md:block">
        <button className="bg-[#3f6b4f] text-white px-6 py-2 rounded-full flex items-center gap-2 hover:opacity-90 transition font-medium text-sm">
          Start on WhatsApp
          <span>→</span>
        </button>
      </div>

      {/* Hamburger (Mobile) */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1"
      >
        <span className="w-6 h-0.5 bg-[#26422f]"></span>
        <span className="w-6 h-0.5 bg-[#26422f]"></span>
        <span className="w-6 h-0.5 bg-[#26422f]"></span>
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-[#e9e6df] border-b border-[#e8e4db] px-6 py-6 flex flex-col gap-4 md:hidden">

          <span className="font-medium text-[#26422f]">Home</span>
          <span className="text-[#4a4a4a]">About</span>
          <span className="text-[#4a4a4a]">Resources</span>
          <span className="text-[#4a4a4a]">Contact</span>

          <button className="mt-4 bg-[#3f6b4f] text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 font-medium text-sm">
            Start on WhatsApp →
          </button>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
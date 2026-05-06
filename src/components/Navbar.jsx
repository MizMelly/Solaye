import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo-P.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-6 md:px-12 py-4 flex items-center justify-between border-b border-(--color-border) sticky top-0 z-50 backdrop-blur bg-background/80">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src={logo}
          alt="Solayo logo"
          className="h-7 md:h-8 w-auto object-contain"
        />
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-10 font-medium text-sm text-(--color-muted-foreground)">

        <li>
          <Link
            to="/"
            className="px-4 py-2 rounded-full bg-[#EDE7F6] text-(--color-primary)"
          >
            Home
          </Link>
        </li>
        
        <li>
          <Link to="/about" className="hover:text-(--color-foreground) transition">
            Health
          </Link>
        </li>
        
        <li>
          <Link to="/about" className="hover:text-(--color-foreground) transition">
            Wellness
          </Link>
        </li>
        
        <li>
          <Link to="/about" className="hover:text-(--color-foreground) transition">
            Community
          </Link>
        </li>
        
        <li>
          <Link to="/about" className="hover:text-(--color-foreground) transition">
            Impact
          </Link>
        </li>

        <li>
          <Link to="/about" className="hover:text-(--color-foreground) transition">
            About
          </Link>
        </li>

        <li>
          <Link to="/resources" className="hover:text-(--color-foreground) transition">
            Partners
          </Link>
        </li>

        <li>
          <Link to="/contact" className="hover:text-(--color-foreground) transition">
            Contact
          </Link>
        </li>

      </ul>

      {/* CTA */}
      <div className="hidden md:block">
        <a
  href="https://wa.me/c/8131059543"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-(--color-primary) text-white px-6 py-2 rounded-full flex items-center gap-2 hover:opacity-90 transition font-medium text-sm shadow-sm"
>
  Start on WhatsApp →
</a>
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1"
      >
        <span className="w-6 h-0.5 bg-(--color-foreground)"></span>
        <span className="w-6 h-0.5 bg-(--color-foreground)"></span>
        <span className="w-6 h-0.5 bg-(--color-foreground)"></span>
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-(--color-background) border-b border-(--color-border) px-6 py-6 flex flex-col gap-4 md:hidden">

          <Link to="/" className="font-medium text-(--color-primary)">
            Home
          </Link>

          <Link to="/about" className="text-(--color-muted-foreground)">
            About
          </Link>

          <Link to="/resources" className="text-(--color-muted-foreground)">
            Resources
          </Link>

          <Link to="/contact" className="text-(--color-muted-foreground)">
            Contact
          </Link>
<a
  href="https://wa.me/c/8131059543"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 bg-(--color-primary) text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 font-medium text-sm hover:opacity-90 transition"
>
  Start on WhatsApp →
</a>

        </div>
      )}

    </nav>
  );
};

export default Navbar;
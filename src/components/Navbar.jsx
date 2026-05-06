import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/Logo-P.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Health", path: "/health" },
    { name: "Wellness", path: "/wellness" },
    { name: "Community", path: "/community" },
    { name: "Impact", path: "/impact" },
    { name: "About", path: "/about" },
    { name: "Partners", path: "/partners" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full px-6 md:px-12 py-4 flex items-center justify-between border-b border-(--color-border) sticky top-0 z-50 backdrop-blur bg-background/80">

      {/* Logo */}
      <NavLink to="/" className="flex items-center gap-2">
        <img src={logo} alt="Solayo logo" className="h-7 md:h-8" />
      </NavLink>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-6 font-medium text-sm text-(--color-muted-foreground) relative">

        {links.map((link) => (
          <li key={link.path} className="relative">
            <NavLink
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `relative z-10 px-4 py-2 rounded-full transition ${
                  isActive ? "text-(--color-primary)" : "hover:text-(--color-foreground)"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {/* Sliding background */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-[#EDE7F6] rounded-full z-[-1]"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}

                  {link.name}
                </>
              )}
            </NavLink>
          </li>
        ))}

      </ul>

      {/* CTA */}
      <div className="hidden md:block">
        <a
          href="https://wa.me/254208780082"
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

          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 rounded-full bg-[#EDE7F6] text-(--color-primary)"
                  : "hover:text-(--color-foreground)"
              }
            >
              {link.name}
            </NavLink>
          ))}

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
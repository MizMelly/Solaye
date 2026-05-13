import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/Logo-P.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const mainLinks = [
    { name: "Home", path: "/" },
    { name: "Health", path: "/health" },
    { name: "Wellness", path: "/wellness" },
    { name: "Blog", path: "/blog" },
  ];

  const groupedLinks = [
    {
      title: "Community",
      items: [
        { name: "Community", path: "/community" },
        { name: "Impact", path: "/impact" },
      ],
    },
    {
      title: "About",
      items: [
        { name: "About", path: "/about" },
        { name: "Partners", path: "/partners" },
        { name: "Contact", path: "/contact" },
      ],
    },
  ];

  return (
    <nav className="w-full px-6 md:px-12 py-4 flex items-center justify-between border-b border-(--color-border) sticky top-0 z-50 backdrop-blur bg-background/80">

      {/* Logo */}
      <NavLink to="/" className="flex items-center gap-2">
        <img
  src={logo}
  alt="Solayo logo"
  className="h-8 md:h-9 w-auto max-w-35 object-contain"
/>
      </NavLink>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-3 font-medium text-sm text-(--color-muted-foreground) relative">

        {/* Main Links */}
        {mainLinks.map((link) => (
          <li key={link.path} className="relative">
            <NavLink
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `relative z-10 px-4 py-2 rounded-full transition ${
                  isActive
                    ? "text-(--color-primary)"
                    : "hover:text-(--color-foreground)"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-[#EDE7F6] rounded-full z-[-1]"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                      }}
                    />
                  )}

                  {link.name}
                </>
              )}
            </NavLink>
          </li>
        ))}

        {/* Dropdown Groups */}
        {groupedLinks.map((group, index) => (
          <li key={index} className="relative group">

            <button className="px-4 py-2 rounded-full hover:text-(--color-foreground) transition flex items-center gap-1">
              {group.title}
              <span className="text-xs">⌄</span>
            </button>

            {/* Dropdown */}
            <div className="absolute top-full left-0 mt-3 w-56 rounded-3xl border border-(--color-border) bg-white shadow-xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

              {group.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-2xl text-sm transition ${
                      isActive
                        ? "bg-[#EDE7F6] text-(--color-primary)"
                        : "hover:bg-[#f7f4fb] hover:text-(--color-foreground)"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

            </div>
          </li>
        ))}

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
        <div className="absolute top-full left-0 w-full bg-(--color-background) border-b border-(--color-border) px-6 py-6 flex flex-col gap-5 md:hidden">

          {/* Main Links */}
          {mainLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-3 rounded-2xl bg-[#EDE7F6] text-(--color-primary)"
                  : "px-4 py-3 rounded-2xl hover:bg-[#f7f4fb]"
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Grouped Links */}
          {groupedLinks.map((group, index) => (
            <div key={index} className="border-t border-(--color-border) pt-4">

              <p className="px-4 mb-2 text-[11px] uppercase tracking-[0.25em] text-(--color-muted-foreground)">
                {group.title}
              </p>

              <div className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "px-4 py-3 rounded-2xl bg-[#EDE7F6] text-(--color-primary)"
                        : "px-4 py-3 rounded-2xl hover:bg-[#f7f4fb]"
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>

            </div>
          ))}

          {/* CTA */}
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
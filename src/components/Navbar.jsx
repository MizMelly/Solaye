import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Logo-P.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const groupedLinks = [
    {
      title: "ABOUT US",
      items: [
        { name: "About", path: "/about" },
        { name: "Community", path: "/community" },
        { name: "Blog", path: "/blog" },
      ],
    },
    {
      title: "OUR WORK",
      items: [
        { name: "Health", path: "/health" },
        { name: "Wellness", path: "/wellness" },
      ],
    },
    {
      title: "GET INVOLVED",
      items: [
        { name: "Impact", path: "/impact" },
        { name: "Partners", path: "/partners" },
      ],
    },
  ];

  const toggleDropdown = (title) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-(--color-border) bg-white/95 backdrop-blur-md">

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex items-center justify-between px-10 lg:px-16 h-24">

        {/* LEFT */}
        <div className="flex items-center">

          {/* Logo */}
          <NavLink
            to="/"
            className="pr-8 mr-8 border-r border-[#ddd7e8] shrink-0"
          >
            <img
              src={logo}
              alt="Solayo logo"
              className="h-10 w-auto object-contain"
            />
          </NavLink>

          {/* Nav Links */}
          <div className="flex items-center gap-2">

            {groupedLinks.map((group) => (
              <div
                key={group.title}
                className="relative group"
              >

                <button className="flex items-center gap-2 px-5 py-3 text-[15px] font-medium tracking-wide text-(--color-foreground) hover:text-(--color-primary) transition uppercase">

                  {group.title}

                  <span className="text-[10px] mt-px">
                    ⌄
                  </span>

                </button>

                {/* Dropdown */}
                <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

                  <div className="w-60 rounded-3xl border border-(--color-border) bg-white shadow-xl p-3">

                    {group.items.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                          `block px-5 py-3 rounded-2xl text-sm transition ${
                            isActive
                              ? "bg-[#efe7fb] text-(--color-primary)"
                              : "hover:bg-[#f7f4fb] text-(--color-foreground)"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}

                  </div>

                </div>

              </div>
            ))}

            {/* CONTACT */}
            <NavLink
              to="/contact"
              className="px-5 py-3 text-[15px] font-medium tracking-wide uppercase text-(--color-foreground) hover:text-(--color-primary) transition"
            >
              CONTACT US
            </NavLink>

          </div>

        </div>

        {/* CTA */}
        <a
          href="https://wa.me/c/8131059543"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-(--color-primary) text-white px-8 h-24 flex items-center text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition"
        >
          Start
        </a>

      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden">

        {/* Top Bar */}
        <div className="flex items-center justify-between h-20 border-b border-[#ece7f2]">

          {/* Logo */}
          <NavLink
            to="/"
            className="pl-5"
          >
            <img
              src={logo}
              alt="Solayo logo"
              className="h-8 w-auto object-contain"
            />
          </NavLink>

          {/* Right */}
          <div className="flex items-center h-full">

            {/* CTA */}
            <a
              href="https://wa.me/c/8131059543"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-(--color-primary) text-white px-6 h-full flex items-center text-sm font-semibold uppercase tracking-wide"
            >
              Start
            </a>

            {/* Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="w-20 h-full flex items-center justify-center"
            >

              <div className="relative w-7 h-7">

                <span
                  className={`absolute left-0 top-1/2 w-7 h-0.5 bg-(--color-foreground) transition-all duration-300 ${
                    open
                      ? "rotate-45"
                      : "-translate-y-2"
                  }`}
                />

                <span
                  className={`absolute left-0 top-1/2 w-7 h-0.5 bg-(--color-foreground) transition-all duration-300 ${
                    open
                      ? "opacity-0"
                      : "opacity-100"
                  }`}
                />

                <span
                  className={`absolute left-0 top-1/2 w-7 h-0.5 bg-(--color-foreground) transition-all duration-300 ${
                    open
                      ? "-rotate-45"
                      : "translate-y-2"
                  }`}
                />

              </div>

            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        <AnimatePresence>

          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-(--color-background)"
            >

              {/* Dropdown Sections */}
              {groupedLinks.map((group) => (
                <div
                  key={group.title}
                  className="border-b border-[#ece7f2]"
                >

                  <button
                    onClick={() => toggleDropdown(group.title)}
                    className="w-full flex items-center justify-between px-6 py-6 text-left text-[16px] font-medium uppercase tracking-wide text-(--color-foreground)"
                  >

                    {group.title}

                    <span
                      className={`transition-transform duration-300 ${
                        activeDropdown === group.title
                          ? "rotate-180"
                          : ""
                      }`}
                    >
                      ⌄
                    </span>

                  </button>

                  <AnimatePresence>

                    {activeDropdown === group.title && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pb-4"
                      >

                        {group.items.map((item) => (
                          <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={() => {
                              setOpen(false);
                              setActiveDropdown(null);
                            }}
                            className={({ isActive }) =>
                              `block px-10 py-4 text-[15px] ${
                                isActive
                                  ? "text-(--color-primary)"
                                  : "text-(--color-muted-foreground)"
                              }`
                            }
                          >
                            {item.name}
                          </NavLink>
                        ))}

                      </motion.div>
                    )}

                  </AnimatePresence>

                </div>
              ))}

              {/* CONTACT */}
              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className="block px-6 py-6 text-[16px] font-medium uppercase tracking-wide text-(--color-foreground)"
              >
                CONTACT US
              </NavLink>

            </motion.div>
          )}

        </AnimatePresence>

      </div>

    </nav>
  );
};

export default Navbar;
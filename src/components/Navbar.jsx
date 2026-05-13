import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
    <nav className="sticky top-0 z-50 border-b border-(--color-border) bg-background/90 backdrop-blur-lg">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        {/* NAV CONTENT */}
        <div className="h-18 flex items-center justify-between">

          {/* LOGO */}
          <NavLink to="/" className="flex items-center shrink-0">
            <img
              src={logo}
              alt="Solayo logo"
              className="h-8 md:h-9 w-auto object-contain"
            />
          </NavLink>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center gap-2 text-sm font-medium text-(--color-muted-foreground)">

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
                          className="absolute inset-0 bg-[#efe7fb] rounded-full z-[-1]"
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

            {/* DROPDOWNS */}
            {groupedLinks.map((group, index) => (
              <li key={index} className="relative group">

                <button className="px-4 py-2 rounded-full flex items-center gap-1 hover:text-(--color-foreground) transition">
                  {group.title}
                  <span className="text-[10px] mt-px">⌄</span>
                </button>

                <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="w-56 rounded-3xl border border-(--color-border) bg-white shadow-xl p-3">

                    {group.items.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                          `block px-4 py-3 rounded-2xl text-sm transition ${
                            isActive
                              ? "bg-[#efe7fb] text-(--color-primary)"
                              : "hover:bg-[#f7f4fb] hover:text-(--color-foreground)"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}

                  </div>
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
              className="bg-(--color-primary) text-white px-5 py-2.5 rounded-full flex items-center gap-2 hover:opacity-90 transition text-sm font-medium"
            >
              Start on WhatsApp →
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-11 h-11 rounded-full border border-(--color-border) flex items-center justify-center bg-white"
          >
            <div className="flex flex-col gap-1">
              <span
                className={`w-5 h-0.5 bg-(--color-foreground) transition ${
                  open ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-(--color-foreground) transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-(--color-foreground) transition ${
                  open ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-(--color-border) bg-(--color-background)"
          >

            <div className="px-5 py-6 flex flex-col gap-6">

              {/* MAIN LINKS */}
              <div className="flex flex-col gap-2">
                {mainLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-2xl text-sm font-medium transition ${
                        isActive
                          ? "bg-[#efe7fb] text-(--color-primary)"
                          : "hover:bg-[#f7f4fb]"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              {/* GROUPED LINKS */}
              {groupedLinks.map((group, index) => (
                <div key={index}>

                  <p className="mb-3 px-2 text-[11px] uppercase tracking-[0.25em] text-(--color-muted-foreground)">
                    {group.title}
                  </p>

                  <div className="flex flex-col gap-2">
                    {group.items.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `px-4 py-3 rounded-2xl text-sm font-medium transition ${
                            isActive
                              ? "bg-[#efe7fb] text-(--color-primary)"
                              : "hover:bg-[#f7f4fb]"
                          }`
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
                className="mt-2 bg-(--color-primary) text-white h-13 rounded-full flex items-center justify-center text-sm font-medium hover:opacity-90 transition"
              >
                Start on WhatsApp →
              </a>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;
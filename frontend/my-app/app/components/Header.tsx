"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md">
      {/* Top info bar */}
      <div className="bg-[#0A1931] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between">
          <span>contact@cynarissolutions.com</span>
          <span>+91 98765 43210 • India</span>
        </div>
      </div>

      {/* Main navbar */}
      <div className="backdrop-blur-xl bg-white/70">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-semibold text-[#0A1931]"
            onClick={() => setMenuOpen(false)}
          >
            Cynaris Solutions
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex gap-8 text-sm font-medium text-[#0A1931]">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-blue-600 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            className="md:hidden text-[#0A1931]"
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <nav className="md:hidden bg-white/95 backdrop-blur-xl shadow-lg">
            <ul className="flex flex-col gap-4 px-6 py-6 text-[#0A1931] font-medium">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block hover:text-blue-600 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

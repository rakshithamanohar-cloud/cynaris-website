"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-32">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-white/80 backdrop-blur-2xl border border-borderLight px-8 py-16 shadow-soft">
          <div className="grid gap-12 md:grid-cols-3 text-textDim">

            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold text-textDark mb-4">
                Cynaris Solutions
              </h3>
              <p className="text-sm leading-relaxed">
                Technology and talent solutions helping organizations scale,
                modernize, and lead in a digital-first world.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-sm font-semibold text-textDark mb-4">
                Company
              </h4>
              <ul className="space-y-2 text-sm">
                {["Home", "About", "Services", "Careers"].map((item) => (
                  <li key={item}>
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="hover:text-textDark transition"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-textDark mb-4">
                Contact
              </h4>
              <p className="text-sm">
                contact@cynarissolutions.com
              </p>
              <p className="text-sm mt-2">
                Bangalore, India
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-xs text-muted">
        © {new Date().getFullYear()} Cynaris Solutions. All rights reserved.
      </div>
    </footer>
  );
}

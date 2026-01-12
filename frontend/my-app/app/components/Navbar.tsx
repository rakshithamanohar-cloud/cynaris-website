"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 w-full z-50"
    >
      {/* Floating container */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 rounded-full bg-navy/70 backdrop-blur-xl border border-ice/10 px-8 shadow-lg">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Cynaris Solutions"
              width={130}
              height={36}
              priority
            />
          </Link>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ice/80">
            <Link href="/" className="hover:text-primary transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-primary transition">
              About
            </Link>
            <Link href="/services" className="hover:text-primary transition">
              Services
            </Link>
            <Link href="/careers" className="hover:text-primary transition">
              Careers
            </Link>

            {/* CTA */}
            <Link
              href="/contact"
              className="ml-2 rounded-full bg-gradient-to-r from-primary to-lavender px-5 py-2 text-sm font-semibold text-navy hover:opacity-90 transition"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}

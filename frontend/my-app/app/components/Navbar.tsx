"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Cynaris Solutions"
            width={140}
            height={40}
            priority
          />
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-[#0A1931]">
          <Link href="/services" className="hover:text-[#5B3FD1] transition">
            Services
          </Link>
          <Link href="/about" className="hover:text-[#5B3FD1] transition">
            About
          </Link>
          <Link href="/careers" className="hover:text-[#5B3FD1] transition">
            Careers
          </Link>
          <Link
            href="/contact"
            className="rounded-md bg-[#5B3FD1] px-4 py-2 text-white hover:bg-[#4A35B8] transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}

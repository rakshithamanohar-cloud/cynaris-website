"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Cynaris Solutions"
            width={150}
            height={40}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/services" className="hover:text-blue-600">Services</Link>
          <Link href="/case-studies" className="hover:text-blue-600">
            Case Studies
          </Link>
          <Link href="/careers" className="hover:text-blue-600">Careers</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
        >
          Talk to Us
        </Link>
      </div>
    </header>
  );
}

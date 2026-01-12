"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
           <h1 className="text-5xl md:text-[64px] font-semibold leading-[1.1] tracking-tight mb-6 text-[#0A1931]">
              Transforming <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
  Technology
</span>
              & Talent
            </h1>

            <p className="max-w-xl text-[17px] leading-relaxed text-[#4A5568] mb-10">
              Cynaris Solutions partners with organizations to deliver scalable
              technology solutions and high-impact digital experiences.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link
                href="/services"
                className="rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3 text-sm font-medium text-white hover:opacity-90 transition"
              >
                Explore Services
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-borderLight px-7 py-3 text-sm font-medium text-textDark hover:bg-black/5 transition"
              >
                Talk to Us
              </Link>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <Image
              src="/robot-wave1.png"
              alt="Abstract visual"
              width={600}
              height={600}
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* ================= WHY ================= */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-[32px] font-semibold tracking-tight mb-4 text-textDark">
              Why Cynaris Solutions
            </h2>
            <p className="max-w-3xl mx-auto text-textDim">
              We combine deep technical expertise, agile practices, and a
              people-first mindset.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Enterprise-grade solutions",
              "Agile & scalable delivery",
              "Global talent pool",
              "Client-centric approach",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl bg-white/80 backdrop-blur-md border border-borderLight p-8 text-center shadow-soft hover:shadow-glow transition"
              >
                <p className="font-medium text-textDark">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="py-28 bg-ice">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-[32px] font-semibold tracking-tight mb-4 text-textDark">
              Our Capabilities
            </h2>
            <p className="max-w-2xl mx-auto text-textDim">
              Designed to help organizations modernize and scale.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Staff Augmentation",
              "Custom Software Development",
              "Digital Transformation",
              "Scaled Agile Implementation",
              "Research & Development",
              "Offshore Delivery Center",
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl bg-white/90 backdrop-blur-md border border-borderLight p-8 shadow-soft hover:shadow-glow transition"
              >
                <h3 className="text-lg font-semibold mb-3 text-textDark">
                  {service}
                </h3>
                <p className="text-sm mb-6 text-textDim">
                  High-impact solutions built for long-term value.
                </p>
                <Link
                  href="/services"
                  className="text-sm font-medium text-primary hover:underline underline-offset-4"
                >
                  Learn more →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-36">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[32px] font-semibold tracking-tight mb-6 text-textDark">
            Ready to build something impactful?
          </h2>
          <p className="mb-10 text-textDim">
            Partner with Cynaris Solutions to accelerate your digital journey.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-gradient-to-r from-primary to-accent px-8 py-3 text-sm font-medium text-white hover:opacity-90 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>

    </div>
  );
}

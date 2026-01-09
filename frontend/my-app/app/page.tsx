"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[90vh] flex items-center text-white">
        {/* subtle overlay */}
        <div className="absolute inset-0 bg-black/30" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-6xl mx-auto px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Transforming <br />
            <span className="text-[#B3CFE5]">Technology</span> & Talent
          </h1>

          <p className="max-w-2xl text-lg text-white/80 mb-10">
            Cynaris Solutions partners with organizations to deliver scalable
            technology solutions, agile transformation, and high-impact digital
            experiences.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link
              href="/services"
              className="rounded-lg bg-[#5B3FD1] px-6 py-3 text-sm font-semibold text-white hover:bg-[#4A35B8] transition"
            >
              Explore Services
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition"
            >
              Talk to Us
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ================= WHY CYNARIS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#0A1931] mb-4">
            Why Cynaris Solutions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We combine deep technical expertise, agile practices, and a
            people-first mindset to help businesses grow faster.
          </p>
        </motion.div>

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
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-white p-6 border shadow-sm text-center hover:shadow-md transition"
            >
              <p className="font-medium text-gray-800">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES PREVIEW ================= */}
      <section className="bg-[#F6FAFD] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0A1931] mb-4">
              Our Capabilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Designed to help organizations modernize, scale, and stay ahead in
              a digital-first world.
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-[#0A1931] mb-3">
                  {service}
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  High-impact solutions built with quality, scalability, and
                  long-term value in mind.
                </p>
                <Link
                  href="/services"
                  className="text-sm font-medium text-[#5B3FD1] hover:text-[#4A35B8] transition"
                >
                  Learn more →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E1A5E] to-[#5B3FD1]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to build something impactful?
          </h2>
          <p className="text-white/80 mb-10">
            Partner with Cynaris Solutions to accelerate your digital journey.
          </p>

          <Link
            href="/contact"
            className="inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-[#2E1A5E] hover:bg-gray-100 transition"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

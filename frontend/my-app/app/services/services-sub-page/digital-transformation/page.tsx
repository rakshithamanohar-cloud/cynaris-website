"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function DigitalTransformationPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
        {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-6">
        <Link href="/services" className="hover:underline">
          Services
        </Link>{" "}
        / Digital Transformation Services
      </p>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-6 text-textDark"
      >
        Digital Transformation Services
      </motion.h1>

      <p className="text-textDim max-w-3xl mb-14 leading-relaxed">
        In today’s digital age, transformation isn’t just an option — it’s a
        necessity. Cynaris Solutions delivers comprehensive digital
        transformation services that help businesses adapt, evolve, and thrive
        in a rapidly changing technological landscape.
      </p>

      {/* Core Sections */}
      <section className="space-y-12">
        <div>
          <h2 className="text-xl font-semibold mb-3 text-textDark">
            Adapt and Evolve with Confidence
          </h2>
          <p className="text-textDim">
            We empower organizations to embrace new technologies, streamline
            operations, and unlock growth opportunities — ensuring agility and
            long-term competitiveness.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-textDark">
            Holistic Approach to Transformation
          </h2>
          <p className="text-textDim">
            Digital transformation goes beyond technology. We take an end-to-end
            approach, rethinking processes, customer engagement, and value
            creation to deliver measurable business outcomes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-textDark">
            Enhance Customer Experiences
          </h2>
          <p className="text-textDim">
            We design seamless, personalized, and engaging digital experiences
            that strengthen customer relationships and drive loyalty.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-textDark">
            Unlock Operational Efficiency
          </h2>
          <p className="text-textDim">
            Through automation, cloud adoption, and data-driven insights, we
            eliminate inefficiencies and help your teams focus on strategic
            growth initiatives.
          </p>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-8 text-textDark">
          Our Service Offerings
        </h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {[
            {
              title: "Digital Strategy Development",
              text: "Clear and actionable digital strategies aligned with your business goals.",
            },
            {
              title: "Cloud Adoption & Migration",
              text: "Secure, scalable cloud solutions optimized for performance and flexibility.",
            },
            {
              title: "Process Automation & Optimization",
              text: "Automation of workflows to improve efficiency, accuracy, and cost savings.",
            },
            {
              title: "Data Analytics & AI Integration",
              text: "Advanced analytics and AI-driven insights to support smarter decisions.",
            },
            {
              title: "Customer Experience Transformation",
              text: "Seamless and personalized customer journeys across all digital touchpoints.",
            },
            {
              title: "Legacy System Modernization",
              text: "Upgrading outdated systems to modern, scalable, and secure platforms.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-borderLight p-6 bg-white/80 backdrop-blur shadow-soft"
            >
              <h3 className="font-semibold mb-2 text-textDark">
                {item.title}
              </h3>
              <p className="text-sm text-textDim">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="mt-20 max-w-3xl">
        <h2 className="text-xl font-semibold mb-3 text-textDark">
          Let’s Transform Together
        </h2>
        <p className="text-textDim">
          Whether you’re starting fresh or optimizing existing systems, Cynaris
          Solutions is your partner in building a future-ready digital business.
        </p>
      </section>

      {/* Bubble CTA */}
      <div className="mt-16">
        <Link
          href="/contact"
          className="
            inline-flex items-center justify-center
            rounded-full px-10 py-4
            text-sm font-medium text-primary
            backdrop-blur-md bg-white/10
            border border-primary/40
            shadow-lg
            hover:bg-white/20 hover:border-primary
            transition-all duration-300
          "
        >
          Contact Us →
        </Link>
      </div>
    </main>
  );
}

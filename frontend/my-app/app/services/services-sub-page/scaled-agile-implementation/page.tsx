"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ScaledAgileImplementationPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
        {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-6">
        <Link href="/services" className="hover:underline">
          Services
        </Link>{" "}
        / Scaled Agile Implementation
      </p>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-6 text-textDark"
      >
        Scaled Agile Implementation
      </motion.h1>

      <p className="text-textDim max-w-3xl mb-14 leading-relaxed">
        In today’s fast-paced business environment, agility is no longer optional.
        We help enterprises scale Agile practices effectively to drive innovation,
        adaptability, and consistent value delivery across the organization.
      </p>

      {/* Content Sections */}
      <section className="space-y-12">
        <div>
          <h2 className="text-xl font-semibold mb-3 text-textDark">
            Agility at Scale
          </h2>
          <p className="text-textDim">
            Scaling Agile across an enterprise requires more than team-level
            adoption. We enable organization-wide collaboration, transparency,
            and efficiency so you can respond rapidly to market changes and
            customer needs.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-textDark">
            Customized Agile Frameworks
          </h2>
          <p className="text-textDim">
            Every organization is unique. We tailor Agile frameworks such as
            SAFe, Scrum, or hybrid models to align with your culture, structure,
            and strategic goals.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-textDark">
            Accelerated Delivery & Continuous Improvement
          </h2>
          <p className="text-textDim">
            Our approach focuses on delivering the right value at the right time,
            enabling faster releases while continuously improving processes and
            outcomes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-textDark">
            Enterprise-Wide Transformation
          </h2>
          <p className="text-textDim">
            Agile at scale is a cultural shift. We work closely with leadership
            and teams to embed collaboration, flexibility, and customer focus
            across the enterprise.
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
              title: "Agile Framework Implementation",
              text: "Implementation of SAFe, Scrum, or custom Agile frameworks tailored to enterprise needs.",
            },
            {
              title: "Enterprise Agile Coaching",
              text: "Hands-on coaching to help teams and leaders adopt Agile practices sustainably.",
            },
            {
              title: "Agile Transformation Roadmap",
              text: "A clear, structured roadmap to guide your organization through Agile adoption at scale.",
            },
            {
              title: "Continuous Delivery & DevOps Integration",
              text: "Integrating DevOps and Continuous Delivery to accelerate releases and improve quality.",
            },
            {
              title: "Metrics & Performance Tracking",
              text: "Defining KPIs and tracking performance to ensure Agile transformation delivers results.",
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
          Let’s Scale Agile Together
        </h2>
        <p className="text-textDim">
          Whether you’re beginning your Agile journey or optimizing existing
          practices, Cynaris Solutions is here to help you scale with confidence.
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

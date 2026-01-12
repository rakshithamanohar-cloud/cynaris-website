"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Enterprise Digital Transformation",
      industry: "Technology & Services",
      result: "40% faster delivery",
      description:
        "Modernized legacy systems and introduced agile practices to improve scalability and speed.",
    },
    {
      title: "Agile at Scale Implementation",
      industry: "Finance",
      result: "30% productivity gain",
      description:
        "Implemented SAFe framework across multiple teams to improve collaboration and delivery.",
    },
    {
      title: "Custom Platform Development",
      industry: "Healthcare",
      result: "99.9% system uptime",
      description:
        "Built a secure, scalable platform tailored to client workflows and compliance needs.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl font-extrabold text-[#0A1931] mb-4">
          Case Studies
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Real-world examples of how Cynaris Solutions helps organizations
          transform, scale, and succeed.
        </p>
      </motion.div>

      {/* Case Studies Grid */}
      <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-2xl bg-white p-8 shadow-sm border hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-[#0A1931] mb-2">
              {item.title}
            </h2>

            <p className="text-sm text-gray-500 mb-3">
              Industry: {item.industry}
            </p>

            <p className="text-gray-600 text-sm mb-4">
              {item.description}
            </p>

            <p className="text-sm font-medium text-[#5B3FD1] mb-6">
              Outcome: {item.result}
            </p>

            <Link
              href="/contact"
              className="text-sm font-semibold text-[#2E1A5E] hover:underline"
            >
              Discuss a similar project →
            </Link>
          </motion.div>
        ))}
      </section>
    </div>
  );
}

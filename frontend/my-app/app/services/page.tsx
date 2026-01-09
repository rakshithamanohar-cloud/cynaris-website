"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Staff Augmentation",
      description:
        "Flexible staffing solutions that help organizations quickly scale their teams with highly skilled professionals.",
      link: "/services/staff-augmentation",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Custom Software Development",
      description:
        "End-to-end software development tailored to business needs, ensuring scalability and performance.",
      link: "/services/custom-software-development",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Scaled Agile Implementation",
      description:
        "Enterprise-wide agile transformation to improve collaboration, speed, and delivery outcomes.",
      link: "/services/scaled-agile-implementation",
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Digital Transformation Services",
      description:
        "Modernizing systems, processes, and experiences to help businesses stay competitive.",
      link: "/services/digital-transformation",
      color: "from-orange-500 to-amber-500",
    },
    {
      title: "Research and Development",
      description:
        "Innovation-driven R&D services to explore emerging technologies and accelerate breakthroughs.",
      link: "/services/research-and-development",
      color: "from-indigo-500 to-violet-500",
    },
    {
      title: "Offshore Delivery Center",
      description:
        "Cost-effective offshore teams delivering quality, scalability, and operational efficiency.",
      link: "/services/offshore-delivery-center",
      color: "from-rose-500 to-red-500",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-gray-900 mb-6"
        >
          Our Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-3xl mx-auto"
        >
          At Cynaris Solutions, we deliver innovative, scalable, and secure
          technology services that help businesses transform and grow in a
          digital-first world.
        </motion.p>
      </div>

      {/* Services Grid */}
      <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl p-[2px] hover:-translate-y-1 transition-transform"
          >
            {/* Gradient Border */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-90`}
            />

            {/* Card */}
            <div className="relative h-full rounded-2xl bg-white p-7 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <motion.div whileHover={{ x: 6 }}>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  Learn More <span className="ml-1">→</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";


export default function CustomSoftwareDevelopmentPage() {
  return (
    <main className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[320px_1fr] gap-14">

        {/* ===== RIGHT: PAGE CONTENT ===== */}
        <div>
          {/* Breadcrumb */}
          <p className="text-sm text-gray-500 mb-6">
            <Link href="/services" className="hover:underline">
              Services
            </Link>{" "}
            / Custom Software Development
          </p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold mb-6 text-textDark"
          >
            Custom Software Development
          </motion.h1>

          <p className="text-textDim max-w-3xl mb-14 leading-relaxed">
            At Cynaris Solutions, we believe your business deserves more than
            off-the-shelf solutions. We design and build custom software that
            aligns precisely with your vision, processes, and growth goals.
          </p>

          {/* Content Sections */}
          <section className="space-y-12">
            <div>
              <h2 className="text-xl font-semibold mb-3 text-textDark">
                Tailored Solutions for Unique Challenges
              </h2>
              <p className="text-textDim">
                No two businesses are alike. Our custom software solutions are
                built around your specific requirements, workflows, and
                objectives — ensuring perfect alignment with your operational
                needs.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-textDark">
                End-to-End Development Expertise
              </h2>
              <p className="text-textDim">
                From ideation to deployment, we manage the entire development
                lifecycle. Our solutions are scalable, secure, and architected
                for long-term success.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-textDark">
                Agile and Adaptive Development
              </h2>
              <p className="text-textDim">
                We use agile methodologies to stay responsive to change,
                allowing your software to evolve alongside your business and
                market demands.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-textDark">
                Integration and Interoperability
              </h2>
              <p className="text-textDim">
                Our custom solutions integrate seamlessly with your existing
                platforms such as CRM, ERP, and other business-critical systems,
                ensuring smooth data flow and operational efficiency.
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
                  title: "Custom Application Development",
                  text: "Enterprise-grade and bespoke applications built to solve complex business challenges with scalability and security.",
                },
                {
                  title: "Software Modernization",
                  text: "Transform legacy systems into modern, efficient, and future-ready platforms using the latest technologies.",
                },
                {
                  title: "API Development & Integration",
                  text: "Custom APIs that enable seamless communication between systems, improving data flow and functionality.",
                },
                {
                  title: "Cloud-Based Solutions",
                  text: "Flexible and scalable cloud-native applications designed for accessibility, performance, and security.",
                },
                {
                  title: "UX/UI Design & Development",
                  text: "Intuitive and user-friendly interfaces that enhance usability, productivity, and user satisfaction.",
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
              Let’s Build Something Great Together
            </h2>
            <p className="text-textDim">
              Whether you’re starting from scratch or modernizing existing
              systems, we’re here to create software that empowers your
              business to grow and compete with confidence.
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
        </div>
      </div>
    </main>
  );
}

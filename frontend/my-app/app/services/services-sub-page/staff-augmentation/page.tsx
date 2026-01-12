"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function StaffAugmentationPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-6">
        <Link href="/services" className="hover:underline">
          Services
        </Link>{" "}
        / Staff Augmentation
      </p>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-semibold text-gray-900 mb-6"
      >
        Staff Augmentation
      </motion.h1>

      {/* Intro */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 leading-relaxed max-w-4xl mb-12"
      >
        At Cynaris Solutions, we understand that your business environment is
        constantly evolving. The need to adapt quickly, scale effectively, and
        access specialized skills can make the difference between merely
        surviving and truly thriving in today’s competitive landscape. That’s
        where our <strong>Adaptive Talent Solutions</strong> come in.
      </motion.p>

      {/* WHY SECTION */}
      <section className="space-y-12 mb-20">
        <h2 className="text-2xl font-semibold text-gray-900">
          Why Staff Augmentation?
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              Flexibility When You Need It Most
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Your projects and business demands can change in an instant.
              Whether you're ramping up for a new initiative, managing seasonal
              peaks, or addressing unexpected challenges, having the right
              talent at the right time is crucial. Our Adaptive Talent Solutions
              give you the flexibility to scale your workforce up or down as
              needed.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              Strategic Workforce Management
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We don’t just fill positions — we strategically align our talent
              solutions with your business objectives. Every professional we
              place is not only skilled but also a strong fit for your team and
              long-term goals.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              Contract-to-Hire: The Best of Both Worlds
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our contract-to-hire model allows you to evaluate performance,
              skills, and cultural fit before making a permanent offer. This
              reduces hiring risks and ensures your team is built on proven
              expertise.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              Cost-Effective and Scalable
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Optimize your budget without compromising quality. Hire contract
              professionals for specific projects or short-term needs while
              maintaining scalability for growth.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE OFFERINGS */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">
          Our Service Offerings
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              On-Demand Talent
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Access a vast pool of skilled professionals ready to make an
              immediate impact. Whether for weeks or months, we deliver the
              right talent when and where you need it.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Contract-to-Hire Services
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Evaluate potential full-time employees through real-world
              performance before making long-term commitments.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Project-Based Staffing
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Specialized professionals with the exact expertise needed to
              drive your project to success from start to finish.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Strategic Talent Advisory
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Partner with our experts to build a customized staffing strategy
              aligned with your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* PARTNER SECTION */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Partner with Cynaris Solutions
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-4xl">
          We believe the right talent can transform your business. Our Adaptive
          Talent Solutions provide the flexibility, expertise, and strategic
          advantage needed to stay ahead in a fast-paced world.
        </p>
      </section>

      {/* CTA */}
      <section className="rounded-2xl bg-gray-50 p-10 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Let’s Talk About Your Needs
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Ready to discuss how our Adaptive Talent Solutions can help your
          business? We’re here to support your workforce strategy.
        </p>

        <p className="mb-6 text-gray-700 font-medium">
          Contact us:{" "}
          <a
            href="mailto:digital@cynarissolutions.com"
            className="text-primary hover:underline"
          >
            digital@cynarissolutions.com
          </a>
        </p>

        <Link
          href="/contact"
          className="inline-block rounded-lg bg-gradient-to-r from-primary to-accent px-8 py-3 text-sm font-medium text-white hover:opacity-90 transition"
        >
          Talk to Us
        </Link>
      </section>
      {/* FINAL CTA */}
<section className="mt-24 text-center">
  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
    Ready to get started?
  </h3>

  <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
    Let’s discuss how our Staff Augmentation solutions can support your
    business goals and scale your team effectively.
  </p>

  <Link
  href="/contact"
  className="
    inline-flex items-center justify-center
    rounded-full px-10 py-4
    text-sm font-medium
    text-primary
    backdrop-blur-md
    bg-white/10
    border border-primary/40
    shadow-lg
    hover:bg-blue/20
    hover:border-primary
    transition-all duration-300
    hover:shadow-primary/40
  "
>
  Contact Us
</Link>

</section>

    </main>
  );
}

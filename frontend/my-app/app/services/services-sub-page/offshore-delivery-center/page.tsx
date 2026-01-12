"use client";

import Link from "next/link";

export default function OffshoreDeliveryCenterPage() {
  return (
    <main className="bg-white">
      <section className="relative min-h-screen px-6 py-24">
        <div className="max-w-5xl mx-auto text-gray-900">
          {/* Breadcrumb */}
          <p className="text-sm text-gray-500 mb-6">
            <Link href="/services" className="hover:underline">
              Services
            </Link>{" "}
            / Offshore Delivery Center
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Offshore Delivery Center
          </h1>

          <p className="text-lg text-gray-600 mb-12">
            In an increasingly globalized world, leveraging offshore resources has
            become a strategic advantage. At Cynaris Solutions, our Offshore
            Delivery Center (ODC) services provide a seamless extension of your
            operations, delivering efficiency, expertise, and scalability.
          </p>

          {/* Why Choose */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-medium mb-3">
                Why Choose Offshore Delivery Center Services?
              </h2>
              <p className="text-gray-600">
                Our ODC model enables organizations to optimize costs, access
                global talent, and accelerate delivery while maintaining full
                control and transparency across projects.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">
                Access to Global Talent
              </h3>
              <p className="text-gray-600">
                Gain access to a diverse pool of highly skilled professionals
                across software development, engineering, data analytics, and more.
                Our offshore teams bring deep expertise and domain knowledge to
                your projects.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">
                Cost-Effective Solutions
              </h3>
              <p className="text-gray-600">
                Reduce operational and staffing costs without compromising on
                quality. Our ODC services help you optimize budgets by eliminating
                overhead associated with in-house hiring and infrastructure.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">
                Scalability and Flexibility
              </h3>
              <p className="text-gray-600">
                Easily scale your offshore team up or down based on evolving
                project needs. Our flexible engagement model ensures the right
                resources are available at the right time.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">
                Seamless Integration with Your Operations
              </h3>
              <p className="text-gray-600">
                Our offshore teams operate as an extension of your in-house staff,
                aligned with your workflows, tools, and business objectives to
                ensure smooth collaboration and consistent outcomes.
              </p>
            </div>
          </div>

          {/* Service Offerings */}
          <div className="mt-16">
            <h2 className="text-2xl font-medium mb-6">
              Our Service Offerings
            </h2>

            <ul className="space-y-4 text-gray-600 list-disc list-inside">
              <li>
                <strong>Dedicated Offshore Teams:</strong> Skilled professionals
                fully aligned with your business goals and processes.
              </li>
              <li>
                <strong>Flexible Engagement Models:</strong> Dedicated, project-
                based, or hybrid models tailored to your needs.
              </li>
              <li>
                <strong>End-to-End Project Management:</strong> Complete oversight
                from planning and execution to delivery.
              </li>
              <li>
                <strong>Quality Assurance and Compliance:</strong> Rigorous QA
                processes and adherence to industry standards.
              </li>
              <li>
                <strong>24/7 Operational Support:</strong> Continuous progress with
                teams operating across time zones.
              </li>
              <li>
                <strong>Secure and Confidential Operations:</strong> Robust
                security measures to protect data and intellectual property.
              </li>
            </ul>
          </div>

          {/* Closing */}
          <div className="mt-16 space-y-6">
            <h2 className="text-2xl font-medium">
              Let’s Achieve More Together
            </h2>

            <p className="text-gray-600">
              Whether you’re looking to scale faster, reduce costs, or access
              world-class talent, Cynaris Solutions’ Offshore Delivery Center
              services are built to support your success.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-8 py-3 text-sm font-medium text-gray-900 bg-white/60 backdrop-blur-md hover:bg-gray-100 transition"
              >
                Contact Us
              </Link>
            </div>

            <p className="text-sm text-gray-500 pt-2">
              digital@cynarissolutions.com
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import Link from "next/link";

export default function ResearchAndDevelopmentPage() {
  return (
    <main className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-6">
          <Link href="/services" className="hover:underline">
            Services
          </Link>{" "}
          / Research and Development
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-textDark">
          Research & Development
        </h1>

        <p className="text-lg text-textDim max-w-3xl mb-14 leading-relaxed">
          Innovation is the driving force behind progress. At Cynaris Solutions,
          we help enterprises, institutes, and organizations unlock their full
          potential through focused and future-ready Research & Development
          services.
        </p>

        {/* Why Choose */}
        <div className="space-y-12 max-w-4xl">
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-textDark">
              Why Choose Research & Development Services?
            </h2>
            <p className="text-textDim">
              In a rapidly evolving world, continuous innovation is essential.
              Our R&D services help you explore new technologies, validate ideas,
              and convert concepts into impactful outcomes that drive growth and
              long-term value.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-textDark">
              Fuel Innovation and Growth
            </h3>
            <p className="text-textDim">
              We help organizations stay ahead by researching emerging
              technologies, experimenting with new approaches, and enabling
              breakthroughs that deliver competitive advantage.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-textDark">
              Customized R&D Solutions
            </h3>
            <p className="text-textDim">
              Every organization is unique. Our R&D approach is fully customized
              to your goals, whether you’re developing new products, conducting
              academic research, or exploring new market opportunities.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-textDark">
              Expertise Across Disciplines
            </h3>
            <p className="text-textDim">
              Our team brings expertise across engineering, software development,
              data science, and emerging technologies—working closely with your
              teams to solve complex challenges.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-textDark">
              Accelerated Time-to-Market
            </h3>
            <p className="text-textDim">
              We streamline research and development processes to help you move
              faster—from ideation to deployment—without compromising on quality
              or innovation.
            </p>
          </div>
        </div>

        {/* Service Offerings */}
        <div className="mt-16 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-6 text-textDark">
            Our Service Offerings
          </h2>

          <ul className="space-y-4 text-textDim list-disc list-inside">
            <li>
              <strong>Technology Research & Exploration:</strong> Identifying and
              evaluating emerging technologies with real business potential.
            </li>
            <li>
              <strong>Product Development & Prototyping:</strong> Designing,
              building, and validating innovative products and solutions.
            </li>
            <li>
              <strong>Scientific Research & Analysis:</strong> Supporting
              academic and institutional research with robust methodologies and
              insights.
            </li>
            <li>
              <strong>Innovation Management:</strong> Structuring and managing
              R&D initiatives aligned with strategic objectives.
            </li>
            <li>
              <strong>Collaborative Research Projects:</strong> Partnering with
              enterprises and institutes to drive joint innovation.
            </li>
            <li>
              <strong>Intellectual Property Development:</strong> Assisting with
              IP creation, protection, and commercialization.
            </li>
          </ul>
        </div>

        {/* Closing */}
        <div className="mt-20 max-w-3xl space-y-6">
          <h2 className="text-2xl font-semibold text-textDark">
            Let’s Innovate Together
          </h2>
          <p className="text-textDim">
            Whether you’re pioneering new technologies or advancing research,
            Cynaris Solutions provides the expertise and support needed to turn
            ideas into impact.
          </p>

          <Link
            href="/contact"
            className="
              inline-flex items-center justify-center
              rounded-full px-10 py-4
              text-sm font-medium text-primary
              border border-primary/40
              hover:bg-primary hover:text-white
              transition
            "
          >
            Contact Us →
          </Link>

          <p className="text-sm text-gray-500 pt-2">
            research@cynarissolutions.com
          </p>
        </div>
      </div>
    </main>
  );
}

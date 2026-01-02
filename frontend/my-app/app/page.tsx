export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-blue-50 via-white to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Engineering Digital Excellence
        </h1>

        <div className="h-1 w-20 bg-blue-600 mb-6"></div>

        <p className="text-lg text-gray-600 max-w-3xl mb-10">
          Cynaris Solutions partners with organizations to build scalable,
          secure, and future-ready software solutions that drive innovation and
          business growth.
        </p>

        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Get in Touch
        </a>
      </section>

      {/* Value Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            "Enterprise-Grade Solutions",
            "Agile & Scalable Delivery",
            "Trusted Technology Partner",
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item}
              </h3>
              <p className="text-gray-600">
                Delivering high-quality solutions aligned with business goals
                and industry standards.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

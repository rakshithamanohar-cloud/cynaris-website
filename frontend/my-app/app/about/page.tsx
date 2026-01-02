export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-center mb-6">
        About Cynaris Solutions
      </h1>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Cynaris Solutions is committed to delivering efficient, scalable, and
        technology-driven solutions that empower businesses in a digital-first world.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-600">
            To provide reliable IT services and software solutions that help
            organizations improve efficiency and achieve sustainable growth.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Our Expertise</h2>
          <p className="text-gray-600">
            Our team focuses on web technologies, application support, and modern
            development practices to deliver high-quality results.
          </p>
        </div>
      </div>
    </main>
  );
}


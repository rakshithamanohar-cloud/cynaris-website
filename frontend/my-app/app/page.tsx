export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Cynaris Solutions
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Building reliable, scalable, and efficient digital solutions for modern businesses.
        </p>
      </section>

      {/* Info Cards */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="border rounded-lg p-8">
          <h2 className="text-xl font-semibold mb-3">Who We Are</h2>
          <p className="text-gray-600">
            Cynaris Solutions is a technology-driven company focused on delivering
            high-quality software and IT services that support business growth.
          </p>
        </div>

        <div className="border rounded-lg p-8">
          <h2 className="text-xl font-semibold mb-3">What We Do</h2>
          <p className="text-gray-600">
            We specialize in web development, application support, and enterprise-level
            IT solutions tailored to client needs.
          </p>
        </div>
      </section>
    </main>
  );
}

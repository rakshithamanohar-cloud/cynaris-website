export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to Cynaris Solutions
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Building reliable digital solutions for modern businesses.
        </p>
      </div>

      {/* About Preview */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold mb-2">Who We Are</h2>
          <p className="text-gray-600">
            Cynaris Solutions is a technology-driven company focused on
            delivering efficient and scalable software solutions.
          </p>
        </div>

        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold mb-2">What We Do</h2>
          <p className="text-gray-600">
            We specialize in web development, application support, and
            enterprise-level IT solutions.
          </p>
        </div>
      </div>
    </section>
  );
}


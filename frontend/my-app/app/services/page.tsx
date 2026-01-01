export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Our Services
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          We provide reliable and scalable digital solutions tailored to your business needs.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="rounded-lg border p-6">
          <h2 className="mb-3 text-xl font-semibold text-gray-900">
            Frontend Development
          </h2>
          <p className="text-gray-600">
            Building responsive and modern user interfaces using React, Next.js, and Tailwind CSS.
          </p>
        </div>

        <div className="rounded-lg border p-6">
          <h2 className="mb-3 text-xl font-semibold text-gray-900">
            UI / UX Design
          </h2>
          <p className="text-gray-600">
            Designing clean, user-friendly interfaces focused on usability and performance.
          </p>
        </div>

        <div className="rounded-lg border p-6">
          <h2 className="mb-3 text-xl font-semibold text-gray-900">
            Web Solutions
          </h2>
          <p className="text-gray-600">
            Developing scalable and maintainable web applications for growing businesses.
          </p>
        </div>
      </div>
    </section>
  );
}

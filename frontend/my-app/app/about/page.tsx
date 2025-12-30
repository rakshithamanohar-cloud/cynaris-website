export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          About Cynaris Solutions
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          We deliver modern, reliable, and scalable digital solutions.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Who We Are
          </h2>
          <p className="leading-relaxed text-gray-600">
            Cynaris Solutions is a technology-focused company dedicated to
            building high-quality web applications. We focus on clean design,
            performance, and user-friendly interfaces.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            What We Do
          </h2>
          <p className="leading-relaxed text-gray-600">
            We specialize in frontend development, UI design, and scalable
            web solutions using technologies such as React, Next.js, and
            Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}


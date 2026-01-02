export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          About Us
        </h1>

        <div className="h-1 w-20 bg-blue-600 mb-6"></div>

        <p className="text-gray-600 max-w-4xl mb-10">
          At Cynaris Solutions, we are more than a software development company —
          we are strategic partners in innovation, delivering solutions that
          empower businesses in the digital age.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="text-gray-600">
              To co-create, co-craft, co-execute, and co-deliver world-class
              software solutions that drive efficiency, innovation, and growth.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
            <p className="text-gray-600">
              To revolutionize industries through technology that enhances
              agility, assurance, and operational resilience.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}


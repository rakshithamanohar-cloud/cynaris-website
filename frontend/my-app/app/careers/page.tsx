export default function CareersPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-center mb-4">
        Careers at Cynaris Solutions
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Join our team and grow your career in the IT industry.
      </p>

      <div className="space-y-6">
        <div className="border rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2">
            Frontend Developer Intern
          </h3>
          <p className="text-gray-600">
            Basic knowledge of HTML, CSS, JavaScript and an interest in web development.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2">
            Application Support Intern
          </h3>
          <p className="text-gray-600">
            Willingness to learn application troubleshooting and support processes.
          </p>
        </div>
      </div>
    </main>
  );
}

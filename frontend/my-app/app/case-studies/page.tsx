export default function CaseStudiesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-center mb-4">
        Case Studies
      </h1>
      <p className="text-center text-gray-600 mb-12">
        A glimpse into projects and solutions delivered by Cynaris Solutions.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2">
            Student Registration System
          </h3>
          <p className="text-gray-600">
            Developed a web-based registration system with form validation and data handling.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2">
            Corporate Website Development
          </h3>
          <p className="text-gray-600">
            Designed and built a responsive company website with clean UI.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2">
            Application Support Assistance
          </h3>
          <p className="text-gray-600">
            Assisted in monitoring and resolving application-level issues.
          </p>
        </div>
      </div>
    </main>
  );
}


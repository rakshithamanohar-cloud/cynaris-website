export default function ServicesPage() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Services & Solutions</h1>

      <p className="text-gray-600 mb-12">
        We provide end-to-end technology services and business-focused solutions
        to help organizations scale and innovate.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          {
            title: "Web Development",
            desc: "Modern and scalable web applications using latest frameworks.",
          },
          {
            title: "Application Support",
            desc: "Reliable L1/L2 support and maintenance services.",
          },
          {
            title: "Cloud Solutions",
            desc: "Cloud migration, deployment, and infrastructure optimization.",
          },
          {
            title: "Data Analytics",
            desc: "Data-driven insights and reporting solutions.",
          },
          {
            title: "IT Consulting",
            desc: "Strategic technology consulting for business growth.",
          },
          {
            title: "Staff Augmentation",
            desc: "Skilled professionals to extend development teams.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="border rounded-xl p-6 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-semibold mb-4">Our Solution Approach</h2>
      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        <li>Requirement analysis & planning</li>
        <li>Solution design & architecture</li>
        <li>Development & testing</li>
        <li>Deployment & ongoing support</li>
      </ul>
    </section>
  );
}

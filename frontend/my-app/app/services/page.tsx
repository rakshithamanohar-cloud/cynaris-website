export default function ServicesPage() {
  const services = [
    {
      title: "Staff Augmentation",
      description:
        "Flexible staffing solutions that help organizations quickly scale their teams with highly skilled professionals.",
      link: "/services/staff-augmentation",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Custom Software Development",
      description:
        "End-to-end software development tailored to business needs, ensuring scalability and performance.",
      link: "/services/custom-software-development",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Scaled Agile Implementation",
      description:
        "Enterprise-wide agile transformation to improve collaboration, speed, and delivery outcomes.",
      link: "/services/scaled-agile-implementation",
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Digital Transformation Services",
      description:
        "Modernizing systems, processes, and experiences to help businesses stay competitive.",
      link: "/services/digital-transformation",
      color: "from-orange-500 to-amber-500",
    },
    {
      title: "Research and Development",
      description:
        "Innovation-driven R&D services to explore emerging technologies and accelerate breakthroughs.",
      link: "/services/research-and-development",
      color: "from-indigo-500 to-violet-500",
    },
    {
      title: "Offshore Delivery Center",
      description:
        "Cost-effective offshore teams delivering quality, scalability, and operational efficiency.",
      link: "/services/offshore-delivery-center",
      color: "from-rose-500 to-red-500",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
        Our Services
      </h1>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
        At Cynaris Solutions, we deliver innovative, scalable, and secure
        technology services that help businesses transform and grow in a
        digital-first world.
      </p>

      {/* Services Grid */}
      <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative rounded-2xl p-[2px] hover:scale-[1.02] transition-transform"
          >
            {/* Gradient Border */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color}`}
            ></div>

            {/* Card */}
            <div className="relative bg-white rounded-2xl p-6 h-full">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h2>

              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <a
                href={service.link}
                className="inline-block font-medium text-blue-600 hover:text-blue-800"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

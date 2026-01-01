export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {/* Page Heading */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Get in touch with us for inquiries, collaborations, or support.
        </p>
      </div>

      {/* Contact Form */}
      <form className="mx-auto max-w-3xl space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-black focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-black focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            rows={5}
            placeholder="Write your message"
            className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-black focus:outline-none"
          ></textarea>
        </div>

        <button
          type="button"
          className="rounded-md bg-black px-6 py-3 text-white transition hover:bg-gray-800"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

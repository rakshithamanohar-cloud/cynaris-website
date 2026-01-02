export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Contact Us
        </h1>

        <div className="h-1 w-20 bg-blue-600 mb-6"></div>

        <p className="text-gray-600 mb-10">
          Reach out to Cynaris Solutions to discuss how we can support your
          digital transformation journey.
        </p>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-3"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg px-4 py-3"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border rounded-lg px-4 py-3 h-32"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

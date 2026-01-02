export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-center mb-4">
        Contact Us
      </h1>

      <p className="text-center text-gray-600 mb-12">
        Get in touch with us for inquiries, collaborations, or support.
      </p>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            className="w-full border rounded-md px-4 py-2"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email Address</label>
          <input
            type="email"
            className="w-full border rounded-md px-4 py-2"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            className="w-full border rounded-md px-4 py-2"
            rows={4}
            placeholder="Enter your message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-md"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}

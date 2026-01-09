export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Have a question or want to work with us?  
          Reach out and our team will get back to you shortly.
        </p>
      </header>

      <section className="grid gap-14 lg:grid-cols-2">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Get in Touch
          </h2>

          <ul className="space-y-4 text-gray-700 text-sm">
            <li>
              <strong>Address:</strong>  
              <br />
              #475, 2nd & 3rd Floor, Croissance Hub,  
              RBI Layout, JP Nagar 7th Phase,  
              Bangalore – 560078, India
            </li>

            <li>
              <strong>Phone:</strong> +91 9342 011 011
            </li>

            <li>
              <strong>Email:</strong> info@cynarissolutions.com
            </li>

            <li>
              <strong>Office Hours:</strong> Mon – Sun, 9:00 AM – 9:00 PM
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <form className="rounded-2xl bg-white p-8 shadow-sm border space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

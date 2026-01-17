"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch(
        "http://localhost:1337/api/contact-submissions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: formData,
          }),
        }
      );

      if (!res.ok) throw new Error("Failed");

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-8 shadow-sm border space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
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
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message..."
              className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-600 text-sm">
              Message sent successfully!
            </p>
          )}

          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}
        </form>
      </section>
    </main>
  );
}

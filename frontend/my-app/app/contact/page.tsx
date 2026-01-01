export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Get in touch with Cynaris Solutions for your digital needs.
        </p>
      </div>

      <div className="mx-auto max-w-2xl space-y-6 text-center">
        <p className="text-gray-600">
          We are always open to discussing new projects, creative ideas,
          or opportunities to be part of your vision.
        </p>

        <div className="space-y-2 text-gray-700">
          <p>
            <span className="font-medium">Email:</span> contact@cynaris.com
          </p>
          <p>
            <span className="font-medium">Phone:</span> +91 XXXXX XXXXX
          </p>
          <p>
            <span className="font-medium">Location:</span> India
          </p>
        </div>
      </div>
    </section>
  );
}

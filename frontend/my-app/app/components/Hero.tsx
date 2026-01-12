"use client";
import Image from "next/image";
import Link from "next/link";
import heroImage from "../public/robot-wave.png"; // replace with your correct image path

export default function Hero() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transforming <br />
            Technology <span className="text-primary">&</span> Talent
          </h1>
          <p className="text-gray-700 mb-8">
            Cynaris Solutions partners with organizations to deliver scalable
            technology solutions and high-impact digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/services"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition"
            >
              Talk to Us
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 relative w-full h-64 md:h-96">
          <Image
            src={heroImage}
            alt="Robot Wave"
            className="object-contain"
            fill
          />
        </div>
      </div>
    </section>
  );
}

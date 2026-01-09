import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">
        
        {/* Brand */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Cynaris Solutions
          </h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Delivering scalable, secure, and innovative digital solutions for
            businesses worldwide.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
            <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services" className="hover:text-white">Staff Augmentation</Link></li>
            <li><Link href="/services" className="hover:text-white">Custom Software</Link></li>
            <li><Link href="/services" className="hover:text-white">Digital Transformation</Link></li>
            <li><Link href="/services" className="hover:text-white">R&D Services</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
          <p className="text-sm text-gray-400">
            contact@cynarissolutions.com <br />
            +91 98765 43210 <br />
            India
          </p>
        </div>

      </div>

      <div className="border-t border-gray-800 text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Cynaris Solutions. All rights reserved.
      </div>
    </footer>
  );
}

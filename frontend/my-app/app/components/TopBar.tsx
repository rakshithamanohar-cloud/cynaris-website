"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-gray-900 text-gray-200 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-2 flex flex-wrap items-center justify-between gap-4">
        {/* Left */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span>contact@cynarissolutions.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>+91 98765 43210</span>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <MapPin size={14} />
          <span>India</span>
        </div>
      </div>
    </div>
  );
}

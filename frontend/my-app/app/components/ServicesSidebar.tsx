"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  HiOutlineCode,
  HiOutlineUsers,
  HiOutlineBeaker,
  HiOutlineGlobeAlt,
  HiOutlineCog,
  HiOutlineLightningBolt,
} from "react-icons/hi";

const services = [
  {
    name: "Staff Augmentation",
    href: "/services/services-sub-page/staff-augmentation",
    icon: HiOutlineUsers,
  },
  {
    name: "Custom Software Development",
    href: "/services/services-sub-page/custom-software-development",
    icon: HiOutlineCode,
  },
  {
    name: "Scaled Agile Implementation",
    href: "/services/services-sub-page/scaled-agile-implementation",
    icon: HiOutlineLightningBolt,
  },
  {
    name: "Digital Transformation",
      href: "/services/services-sub-page/digital-transformation",
    icon: HiOutlineCog,
  },
  {
    name: "Research & Development",
    href: "/services/services-sub-page/research-and-development",
    icon: HiOutlineBeaker,
  },
  {
    name: "Offshore Delivery Center",
    href: "/services/services-sub-page/offshore-delivery-center",
    icon: HiOutlineGlobeAlt,
  },
];

export default function ServicesSidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* ===== DESKTOP SIDEBAR ===== */}
      <aside className="hidden lg:block sticky top-28 h-fit">
        <div className="relative rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">

          {services.map((service) => {
            const isActive = pathname === service.href;
            const Icon = service.icon;

            return (
              <Link
                key={service.href}
                href={service.href}
                className={`relative flex items-center gap-3 px-6 py-4 text-sm font-medium transition
                  ${isActive ? "text-blue-600" : "text-gray-700 hover:bg-gray-50"}
                `}
              >
                {/* Active indicator */}
                {isActive && (
                  <motion.span
                    layoutId="activeService"
                    className="absolute left-0 top-0 h-full w-1 bg-blue-600 rounded-r"
                  />
                )}

                <Icon className={`text-lg ${isActive ? "text-blue-600" : "text-gray-400"}`} />
                {service.name}
              </Link>
            );
          })}

        </div>
      </aside>

      {/* ===== MOBILE SIDEBAR ===== */}
      <div className="lg:hidden mb-10">
        <details className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <summary className="cursor-pointer px-5 py-4 font-medium text-gray-900">
            Services Navigation
          </summary>

          <div className="flex flex-col">
            {services.map((service) => {
              const isActive = pathname === service.href;

              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className={`px-5 py-3 text-sm transition
                    ${isActive
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-700 hover:bg-gray-50"}
                  `}
                >
                  {service.name}
                </Link>
              );
            })}
          </div>
        </details>
      </div>
    </>
  );
}

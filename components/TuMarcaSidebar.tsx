"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TuMarcaSidebar() {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Rentar un espacio",
      href: "/tu-marca/rentar-espacio",
      icon: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      label: "Publicita tu marca",
      href: "/tu-marca/publicita-tu-marca",
      icon: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 5-2.5 5-2.5" />
          <path d="M15 12v5s3.03-.55 4.5-2c1.63-1.62 2.5-5 2.5-5" />
        </svg>
      ),
    },
  ];

  return (
    <aside className="w-full md:w-36 lg:w-40 bg-white border-r border-gray-200 shrink-0 self-stretch flex flex-row md:flex-col shadow-xs">
      <nav className="flex flex-row md:flex-col w-full">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex-1 md:flex-none flex flex-col items-center justify-center text-center py-7 px-3 transition-colors relative border-b md:border-b-0 md:border-r-0 ${
                isActive
                  ? "bg-[#eaf1fb] text-[#0d47a1] font-semibold"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium"
              }`}
            >
              {/* Active left border indicator on desktop */}
              {isActive && (
                <span className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-[#0d47a1]" />
              )}
              {/* Active bottom border indicator on mobile */}
              {isActive && (
                <span className="md:hidden absolute bottom-0 left-0 right-0 h-1 bg-[#0d47a1]" />
              )}

              <div
                className={`mb-2.5 transition-colors ${
                  isActive ? "text-[#0d47a1]" : "text-gray-500"
                }`}
              >
                {item.icon}
              </div>
              <span className="text-xs sm:text-sm leading-snug">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

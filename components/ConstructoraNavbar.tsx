"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { scrollToTarget } from "@/lib/scrollToTarget";

export default function ConstructoraNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [showLogoFallback, setShowLogoFallback] = useState(false);

  useEffect(() => {
    if (!pathname.startsWith("/tu-marca")) {
      return;
    }

    const targetId = window.location.hash.replace("#", "");
    if (!targetId) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      scrollToTarget(targetId, { headerOffset: 90 });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    if (pathname === "/tu-marca") {
      scrollToTarget(targetId, { headerOffset: 90 });
    } else {
      router.push(`/tu-marca#${targetId}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-xs">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Lado izquierdo: Logo */}
        <Link href="/tu-marca" aria-label="Imperial Plaza - Inicio" className="shrink-0">
          {!showLogoFallback ? (
            <img
              src="/images/logo.png"
              alt="Imperial Plaza"
              className="h-9 w-auto object-contain sm:h-10"
              onError={() => setShowLogoFallback(true)}
            />
          ) : null}
          <span
            className={`${showLogoFallback ? "flex" : "hidden"} items-center gap-2 text-xl font-bold tracking-tight text-blue-950`}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-tr from-emerald-500 to-blue-600 text-white font-black text-sm">
              P
            </span>
            Imperial Plaza
          </span>
        </Link>

        {/* Lado derecho: Enlaces de navegación */}
        <ul className="flex items-center gap-6">
          <li>
            <a
              href="/tu-marca#quienes-somos"
              onClick={(e) => handleSmoothScroll(e, "quienes-somos")}
              className="text-sm font-semibold text-[#1e2a78] transition-colors hover:text-[#0b1342] cursor-pointer"
            >
              ¿Quiénes somos?
            </a>
          </li>
          <li>
            <Link
              href="/centro-ayuda"
              className="text-sm font-semibold text-[#1e2a78] transition-colors hover:text-[#0b1342]"
            >
              Centro de ayuda
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
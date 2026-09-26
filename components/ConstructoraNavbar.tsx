"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function ConstructoraNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [showLogoFallback, setShowLogoFallback] = useState(false);

  const scrollToTarget = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const headerOffset = 90;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      window.scrollTo(0, offsetPosition);
      window.history.pushState(null, "", `#${targetId}`);
      return;
    }

    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;
    const duration = 1200; // 1.2 segundos para una bajada suave y lenta
    let start: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        window.history.pushState(null, "", `#${targetId}`);
      }
    };

    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    if (!pathname.startsWith("/tu-marca")) {
      return;
    }

    const targetId = window.location.hash.replace("#", "");
    if (!targetId) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      scrollToTarget(targetId);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    if (pathname === "/tu-marca") {
      scrollToTarget(targetId);
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
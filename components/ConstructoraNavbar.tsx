"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { scrollToTarget } from "@/lib/scrollToTarget";
import logoImg from "@/public/images/logo.png";

export default function ConstructoraNavbar() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
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
        <Link href="/tu-marca" aria-label="Imperial Plaza - Inicio" className="shrink-0 flex items-center">
          <Image
            src={logoImg}
            alt="Imperial Plaza"
            priority
            className="h-9 w-auto object-contain sm:h-10"
          />
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
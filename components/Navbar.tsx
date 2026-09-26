"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/images/logo.png";

// Enlaces principales del nav
const navLinks = [
  { label: "Tiendas", href: "/tiendas" },
  { label: "Eventos y Cine", href: "/eventos-cine" },
  { label: "Gastronomía", href: "/gastronomia" },
  { label: "Servicios", href: "/servicios" },
  { label: "Sostenibilidad", href: "/sostenibilidad" },
];

// Opciones de sedes / plazas
const sedes = [
  { id: "Cusco 1", name: "Cusco 1", horario: "10:00am - 10:00pm", abierto: true },
  { id: "Cusco 2", name: "Cusco 2", horario: "10:00am - 10:00pm", abierto: true },
  { id: "Cusco 3", name: "Cusco 3", horario: "10:00am - 10:00pm", abierto: true },
];

export default function Navbar() {
  const [selectedSede, setSelectedSede] = useState(sedes[0]);
  const [isSedeDropdownOpen, setIsSedeDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar el dropdown al hacer clic afuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSedeDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-xs">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        {/* --- LADO IZQUIERDO: Logo + Links desktop --- */}
        <div className="flex items-center gap-8 xl:gap-10">
          {/*
            Logo: Enlace libre (href="/"). Modifícalo según desees.
            Imagen en: public/images/logo.png
          */}
          <Link href="/" aria-label="Imperial Plaza - Inicio" className="shrink-0 flex items-center">
            <Image
              src={logoImg}
              alt="Imperial Plaza"
              priority
              className="h-9 w-auto object-contain sm:h-10"
            />
          </Link>

          {/* Menú enlaces versión Desktop */}
          <ul className="hidden items-center gap-6 xl:gap-7 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-semibold text-[#1e2a78] transition-colors hover:text-[#0b1342]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* --- LADO DERECHO: Buscador, Selector Desplegable, Horario, Botón CTA y Botón Hamburguesa --- */}
        <div className="flex items-center gap-4 sm:gap-6">
          
          {/* Icono de búsqueda */}
          <button
            type="button"
            aria-label="Buscar"
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#0f8b8d] transition-colors hover:bg-gray-100 hover:text-[#0b6b6c]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.2}
              stroke="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 3 10.5a7.5 7.5 0 0 0 13.65 6.15Z"
              />
            </svg>
          </button>

          {/* Selector de Sede con Dropdown exacto al mockup */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsSedeDropdownOpen((prev) => !prev)}
              aria-expanded={isSedeDropdownOpen}
              className="flex items-center gap-1.5 text-sm font-semibold text-[#1e2a78] transition-colors hover:text-[#0b1342] focus:outline-hidden"
            >
              <span>{selectedSede.name}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="#10b981"
                className={`h-4 w-4 transition-transform duration-200 ${
                  isSedeDropdownOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {/* Menú desplegable flotante de sedes */}
            {isSedeDropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 rounded-md border border-gray-100 bg-white py-2 shadow-lg ring-1 ring-black/5 z-50 animate-in fade-in zoom-in-95 duration-100">
                {sedes.map((sede) => (
                  <button
                    key={sede.id}
                    type="button"
                    onClick={() => {
                      setSelectedSede(sede);
                      setIsSedeDropdownOpen(false);
                    }}
                    className={`flex w-full items-center justify-between px-4 py-2 text-left text-sm font-medium transition-colors ${
                      selectedSede.id === sede.id
                        ? "text-[#1e2a78] font-bold bg-blue-50/60"
                        : "text-[#1e2a78] hover:bg-gray-50"
                    }`}
                  >
                    <span>{sede.name}</span>
                    {selectedSede.id === sede.id && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1e2a78]"></span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Horario y estado Abierto */}
          <div className="hidden sm:flex flex-col text-right leading-tight">
            <span className="inline-flex items-center justify-end gap-1.5 text-[11px] font-extrabold uppercase tracking-wide text-emerald-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              {selectedSede.abierto ? "ABIERTO" : "CERRADO"}
            </span>
            <span className="text-[11px] font-medium text-gray-500">
              {selectedSede.horario}
            </span>
          </div>

          {/* Botón CTA (Tu marca con nosotros) */}
          <Link
            href="/tu-marca"
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-[#001789] px-4 py-2 text-xs md:text-sm font-bold text-white shadow-xs transition-colors hover:bg-[#001166]"
          >
            Tu marca con nosotros
          </Link>

          {/* --- Botón Hamburguesa (para móviles y tablets) --- */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Abrir menú de navegación"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[#1e2a78] hover:bg-gray-100 lg:hidden"
          >
            {isMobileMenuOpen ? (
              // Icono X para cerrar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              // Icono Hamburguesa
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* --- Cajón / Menú Desplegable Móvil (Hamburguesa) --- */}
      {isMobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pt-3 pb-6 shadow-xl lg:hidden">
          <ul className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-[#1e2a78] hover:bg-gray-50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Sección de horario y CTA dentro del menú móvil */}
          <div className="mt-5 border-t border-gray-100 pt-4 flex flex-col gap-3">
            <div className="flex items-center justify-between px-3">
              <span className="text-xs font-semibold text-gray-500">Sede {selectedSede.name}:</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                ABIERTO ({selectedSede.horario})
              </span>
            </div>

            <Link
              href="/tu-marca"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-md bg-[#001789] py-2.5 text-center text-sm font-bold text-white shadow-xs hover:bg-[#001166]"
            >
              Tu marca con nosotros
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

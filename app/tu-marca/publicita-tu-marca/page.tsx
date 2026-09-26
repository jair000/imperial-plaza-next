"use client";

import { useState } from "react";
import Image from "next/image";
import ConstructoraNavbar from "@/components/ConstructoraNavbar";
import TuMarcaSidebar from "@/components/TuMarcaSidebar";
import { scrollToTarget } from "@/lib/scrollToTarget";

interface PublicidadTab {
  id: string;
  label: string;
  image: string;
  imageAlt: string;
  bullets: string[];
}

const tabsData: PublicidadTab[] = [
  {
    id: "carteleria",
    label: "Cartelería digital",
    image: "/images/carteleria-digital.jpg",
    imageAlt: "Cartelería digital en centro comercial",
    bullets: [
      "Maximiza tu visibilidad en nuestros centros comerciales usando cartelería digital.",
      "Llega a tu audiencia objetivo de manera efectiva.",
      "Optimiza tus resultados comerciales con el uso de elementos publicitarios digitales presentes en el centro comercial.",
    ],
  },
  {
    id: "estatica",
    label: "Estática",
    image: "/images/estatica.jpg",
    imageAlt: "Publicidad estática en estacionamiento y pasillos",
    bullets: [
      "Aprovecha espacios estratégicos.",
      "Capta la atención de tu audiencia en el centro comercial.",
      "Optimiza tus resultados comerciales con estrategias personalizadas.",
    ],
  },
  {
    id: "activaciones",
    label: "Activaciones",
    image: "/images/activaciones.jpg",
    imageAlt: "Activaciones de marca y experiencias interactivas",
    bullets: [
      "Arriendos temporales de una plaza/espacio atractivo en el centro comercial.",
      "Conecta emocionalmente con tu audiencia y destaca en el mercado.",
      "Impulsa tu presencia de manera memorable y única.",
    ],
  },
];

export default function PublicitaTuMarcaPage() {
  const [activeTab, setActiveTab] = useState<string>("carteleria");

  const currentTab = tabsData.find((tab) => tab.id === activeTab) || tabsData[0];
  const activeIndex = tabsData.findIndex((tab) => tab.id === activeTab);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ConstructoraNavbar />

      <div className="flex-1 flex flex-col md:flex-row">
        {/* Sidebar */}
        <TuMarcaSidebar />

        {/* Contenido principal */}
        <main className="flex-1 py-12 px-4 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Título de la sección */}
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0d47a1] tracking-tight">
                ¿Qué tenemos para ti?
              </h1>
            </div>

            {/* Píldoras / Tabs de categorías */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-10">
              {tabsData.map((tab) => {
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-[#0a1e64] text-white shadow-sm ring-1 ring-[#0a1e64]"
                        : "bg-white text-[#0a1e64] border border-[#0a1e64]/40 hover:border-[#0a1e64] hover:bg-blue-50/50"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Gran Imagen / Carrusel Visual */}
            <div className="relative w-full aspect-16/9 rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-gray-100 mb-6">
              <Image
                src={currentTab.image}
                alt={currentTab.imageAlt}
                fill
                priority
                className="object-cover object-center transition-all duration-500"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>

            {/* Indicador de puntos (Dots) */}
            <div className="flex items-center justify-center gap-2 mb-10">
              {tabsData.map((tab, idx) => {
                const isSelected = activeIndex === idx;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    aria-label={`Ir a ${tab.label}`}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      isSelected
                        ? "w-8 h-2.5 bg-[#0a1e64]"
                        : "w-2.5 h-2.5 bg-[#0a1e64]/30 hover:bg-[#0a1e64]/60"
                    }`}
                  />
                );
              })}
            </div>

            {/* Puntos clave / Beneficios con checks verdes */}
            <div className="max-w-2xl mx-auto mb-10">
              <ul className="space-y-3.5 mb-10">
                {currentTab.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-left">
                    <svg
                      className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-xs sm:text-sm text-gray-700 font-normal leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Botón Consultar ahora */}
              <div className="text-center">
                <a
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTarget("contacto", { headerOffset: 90 });
                  }}
                  className="inline-flex items-center justify-center px-10 py-3.5 rounded-full bg-[#0a1e64] text-white font-semibold text-sm sm:text-base shadow-md hover:bg-[#071649] hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  Consultar ahora
                </a>
              </div>

              <section
                id="contacto"
                className="scroll-mt-24 mt-12 rounded-3xl border border-blue-100 bg-white p-6 sm:p-8 text-left shadow-sm"
              >
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a1e64] tracking-tight">
                  Consultar ahora
                </h2>
                <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                  Explora el centro de ayuda y revisa la información clave para compartir con nuestro equipo comercial la alternativa publicitaria que mejor se ajuste a tu marca.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/centro-ayuda"
                    className="inline-flex items-center justify-center rounded-full bg-[#0a1e64] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#071649]"
                  >
                    Ir al centro de ayuda
                  </a>
                  <a
                    href="/tu-marca#quienes-somos"
                    className="inline-flex items-center justify-center rounded-full border border-[#0a1e64]/20 px-6 py-3 text-sm font-semibold text-[#0a1e64] transition-all duration-200 hover:bg-blue-50"
                  >
                    Conocer Imperial Plaza
                  </a>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

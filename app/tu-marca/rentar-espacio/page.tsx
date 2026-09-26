"use client";

import { useState } from "react";
import ConstructoraNavbar from "@/components/ConstructoraNavbar";
import TuMarcaSidebar from "@/components/TuMarcaSidebar";

interface TabData {
  id: string;
  label: string;
  size: string;
  requirements: string[];
  bannerTitle: string;
  benefits: string[];
}

const tabsData: TabData[] = [
  {
    id: "locales",
    label: "Locales",
    size: "Distintos tamaños: 15 a 150 m2 aprox.",
    requirements: [
      "Diseño y proyecto de arquitectura.",
      "Construcción de tienda.",
    ],
    bannerTitle: "Tu espacio es imprescindible para tus ventas",
    benefits: [
      "Perfectos para negocios establecidos.",
      "Oportunidad ideal para expandir tu marca.",
      "Contratos a mediano y largo plazo.",
    ],
  },
  {
    id: "modulos",
    label: "Módulos",
    size: "Tamaños compactos: 4 a 12 m2 aprox.",
    requirements: [
      "Diseño conceptual y visual del módulo.",
      "Aprobación de especificaciones técnicas.",
    ],
    bannerTitle: "Visibilidad máxima en zonas de alto tráfico",
    benefits: [
      "Ubicaciones privilegiadas en pasillos principales.",
      "Inversión inicial ágil y flexible.",
      "Ideal para venta por impulso y exhibición.",
    ],
  },
  {
    id: "modulos-predisenados",
    label: "Módulos Prediseñados",
    size: "Formatos listos para operar: 6 a 10 m2.",
    requirements: [
      "Adaptación gráfica y branding de marca.",
      "Cumplimiento de estándares de exhibición.",
    ],
    bannerTitle: "Empieza a vender sin preocuparte por la construcción",
    benefits: [
      "Instalación inmediata 'llave en mano'.",
      "Costos de implementación optimizados.",
      "Diseño estandarizado de alta calidad.",
    ],
  },
  {
    id: "ferias",
    label: "Ferias",
    size: "Espacios dinámicos y temporales.",
    requirements: [
      "Propuesta de temática y productos.",
      "Montaje para periodos específicos.",
    ],
    bannerTitle: "Conéctate en temporadas de alta afluencia",
    benefits: [
      "Participación en fechas festivas y campañas especiales.",
      "Formatos temporales de corta y mediana duración.",
      "Excelente retorno para marcas emergentes.",
    ],
  },
  {
    id: "bodegas",
    label: "Bodegas",
    size: "Espacios de almacenamiento: 10 a 80 m2 aprox.",
    requirements: [
      "Uso exclusivo para stock y logística interna.",
      "Registro de personal autorizado.",
    ],
    bannerTitle: "Optimiza tu logística y stock a pasos de tu tienda",
    benefits: [
      "Almacenamiento seguro dentro del centro comercial.",
      "Reabastecimiento rápido y continuo de tu tienda.",
      "Acceso directo y control de inventarios.",
    ],
  },
  {
    id: "oficinas",
    label: "Oficinas",
    size: "Superficies flexibles: 30 a 200 m2 aprox.",
    requirements: [
      "Acondicionamiento según normativa corporativa.",
      "Contrato comercial formal.",
    ],
    bannerTitle: "Espacios corporativos con conectividad y servicios",
    benefits: [
      "Ubicación céntrica con estacionamientos y servicios.",
      "Entorno empresarial moderno y seguro.",
      "Conectividad con las mejores zonas de la ciudad.",
    ],
  },
];

export default function RentarEspacioPage() {
  const [activeTab, setActiveTab] = useState<string>("locales");

  const currentTab = tabsData.find((tab) => tab.id === activeTab) || tabsData[0];

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
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10">
              {tabsData.map((tab) => {
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
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

            {/* Card con degradado suave */}
            <div className="rounded-3xl bg-linear-to-b from-[#f0f4f9] via-[#e5edf7] to-[#d6e3f3] p-7 sm:p-10 border border-blue-100/70 shadow-sm mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white/90 shadow-xs flex items-center justify-center text-[#0a1e64]">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
              </div>

              <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-6">
                {currentTab.size}
              </h2>

              <div>
                <p className="text-sm font-semibold text-gray-700 mb-3">
                  Requiere:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {currentTab.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2 shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Subtítulo inferior & beneficios con checks verdes */}
            <div className="max-w-xl mx-auto mb-10 text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0a1e64] tracking-tight mb-6">
                {currentTab.bannerTitle}
              </h3>

              <ul className="space-y-3.5 mb-10">
                {currentTab.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-emerald-600 shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm sm:text-base font-medium text-gray-800">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Botón Consultar disponibilidad */}
              <div className="text-center sm:text-center">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#0a1e64] text-white font-semibold text-sm sm:text-base shadow-md hover:bg-[#071649] hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  Consultar disponibilidad
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

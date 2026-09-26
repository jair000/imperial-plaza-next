"use client";

import { useState } from "react";
import ConstructoraNavbar from "@/components/ConstructoraNavbar";

interface FaqItem {
  id: number;
  question: string;
  answer: React.ReactNode;
}

const faqs: FaqItem[] = [
  {
    id: 1,
    question: "¿Me pueden enviar un listado de los locales disponibles, las dimensiones y sus respectivos valores?",
    answer: (
      <span>
        Te invitamos a completar el formulario en la opción{" "}
        <a href="/tu-marca/rentar-espacio" className="font-semibold text-[#0d47a1] hover:underline">
          &apos;Consultar disponibilidad&apos;
        </a>{" "}
        para que alguno de nuestros ejecutivos comerciales pueda ponerse en contacto contigo y brindarte toda la información.
      </span>
    ),
  },
  {
    id: 2,
    question: "¿Cuáles son las condiciones del contrato?",
    answer: (
      <span>
        Los contratos de arrendamiento comercial suelen establecerse por plazos mínimos de 1 a 3 años renovables. Se requiere garantía de cumplimiento, comprobación de solvencia crediticia y constitución de pólizas de seguro vigentes. Las condiciones detalladas se ajustan según la tipología del local y giro de negocio.
      </span>
    ),
  },
  {
    id: 3,
    question: "¿Puedo visitar los espacios disponibles antes de tomar una decisión?",
    answer: (
      <span>
        ¡Por supuesto! Puedes coordinar una visita guiada con nuestro equipo comercial para conocer las ubicaciones exactas, flujos peatonales, acometidas de servicios y áreas de carga antes de formalizar cualquier propuesta.
      </span>
    ),
  },
  {
    id: 4,
    question: "¿Si ingreso al centro comercial, puedo tener apoyo de marketing?",
    answer: (
      <span>
        Sí, todas las marcas locatarias forman parte de nuestras campañas generales de difusión, activación de eventos en pasillos, presencia en nuestras pantallas publicitarias digitales, directorio web y publicaciones destacadas en redes sociales institucionales.
      </span>
    ),
  },
  {
    id: 5,
    question: "¿Cuál es el proceso que debo seguir para rentar un espacio en un Centro Comercial?",
    answer: (
      <span>
        El proceso inicia enviando tu solicitud a través de nuestro formulario en línea o contactando a nuestro equipo. Posteriormente evaluamos tu concepto de marca, te presentamos las opciones disponibles, coordinamos la visita técnica, se aprueba la propuesta comercial y legal, y finalmente se procede a la firma y adecuación del local.
      </span>
    ),
  },
  {
    id: 6,
    question: "¿Cuál es el costo de rentar un local, módulo o stand de feria?",
    answer: (
      <span>
        El costo varía en función de los metros cuadrados, la ubicación estratégica dentro del centro comercial (planta baja, pasillo central, plazoleta de comidas) y la modalidad (local permanente, isla/módulo o feria temporal). Contáctanos para enviarte una cotización personalizada según las necesidades de tu marca.
      </span>
    ),
  },
];

export default function CentroAyudaPage() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb] flex flex-col">
      <ConstructoraNavbar />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Título de la página */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#154696] tracking-tight mb-8">
            Centro de ayuda
          </h1>

          {/* Lista de acordeones */}
          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl bg-white shadow-xs border border-gray-100/80 transition-all duration-200 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between text-left px-6 py-5 sm:py-6 gap-4 cursor-pointer select-none transition-colors hover:bg-gray-50/50"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-gray-700 leading-snug">
                      {faq.id} - {faq.question}
                    </span>
                    <span className="text-gray-500 shrink-0 transition-transform duration-200">
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 animate-fadeIn">
                      <div className="w-full border-t border-blue-400 mb-4" />
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
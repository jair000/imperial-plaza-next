import Image from "next/image";
import Link from "next/link";
import ConstructoraNavbar from "@/components/ConstructoraNavbar";

export default function TuMarcaPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ConstructoraNavbar />
      
      <main className="flex-1 py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Banner Container */}
          <section className="relative overflow-hidden rounded-3xl bg-[#0d47a1] text-white shadow-xl">
            {/* Background Decorative Rings / Curves */}
            <div
              className="pointer-events-none absolute right-[-5%] top-1/2 -translate-y-1/2 w-[480px] h-[480px] md:w-[600px] md:h-[600px] opacity-20"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full stroke-white stroke-[2.5]"
              >
                <circle cx="280" cy="250" r="210" />
                <circle cx="340" cy="200" r="170" />
                <circle cx="320" cy="310" r="160" />
                <path d="M150,150 C230,190 320,130 400,260" />
                <path d="M120,320 C220,280 300,380 430,340" />
              </svg>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 md:p-12 lg:p-14">
              {/* Left Column: 3 Circular / Curved Images cluster */}
              <div className="lg:col-span-4 flex items-center justify-center">
                <div className="relative w-[280px] h-[260px] sm:w-[320px] sm:h-[300px]">
                  {/* Top Left Circle */}
                  <div className="absolute top-0 left-0 w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white/90 shadow-md">
                    <Image
                      src="/images/banner.jpg"
                      alt="Centro comercial y entorno"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 128px, 144px"
                    />
                  </div>

                  {/* Top Right Circle */}
                  <div className="absolute top-2 right-2 w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white/90 shadow-md">
                    <Image
                      src="/images/banner.jpg"
                      alt="Oportunidades comerciales"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 128px, 144px"
                    />
                  </div>

                  {/* Bottom Center / Left overlap Circle */}
                  <div className="absolute bottom-0 left-8 sm:left-10 w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white/90 shadow-lg">
                    <Image
                      src="/images/banner.jpg"
                      alt="Nuestros centros comerciales"
                      fill
                      className="object-cover object-bottom"
                      sizes="(max-width: 640px) 128px, 144px"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Text & Features & Arrow */}
              <div className="lg:col-span-8 flex flex-col justify-center text-left">
                {/* Subtitle / Pre-title */}
                <p className="text-sm sm:text-base md:text-lg font-medium tracking-wide text-blue-100 mb-2">
                  Lleva tu negocio al siguiente nivel
                </p>

                {/* Main Heading */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-tight tracking-tight text-white mb-8 max-w-2xl">
                  Descubre oportunidades en nuestros centros comerciales
                </h1>

                {/* Feature Tags / Badges */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-xs sm:text-sm font-medium text-white/95">
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg" role="img" aria-label="Renta de locales">🏢</span>
                    <span>Renta de locales</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg" role="img" aria-label="Módulos y ferias">🛍️</span>
                    <span>Módulos y ferias</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg" role="img" aria-label="Publicidad">📢</span>
                    <span>Publicidad</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg" role="img" aria-label="Soluciones e-commerce">📦</span>
                    <span>Soluciones e-commerce</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg" role="img" aria-label="Bodegas y oficinas">🏬</span>
                    <span>Bodegas y oficinas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hand-drawn Curved Arrow at Bottom Right */}
            <div className="absolute right-12 bottom-6 hidden sm:block pointer-events-none select-none">
              <svg
                width="42"
                height="42"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white drop-shadow-sm"
              >
                <path
                  d="M12 6 C28 8 36 20 28 32 C26 35 23 37 18 38"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M26 36 L16 38 L22 28"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </section>

          {/* Sección: ¿Qué tenemos para ti? */}
          <section className="mt-16 sm:mt-24 mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0d47a1] tracking-tight mb-10">
              ¿Qué tenemos para ti?
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-6 max-w-4xl mx-auto">
              {/* Opción 1: Rentar un espacio */}
              <Link
                href="/tu-marca/rentar-espacio"
                className="group flex flex-col items-center justify-center w-48 sm:w-52 h-40 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 p-5 cursor-pointer text-gray-700 hover:text-[#0d47a1]"
              >
                <div className="mb-3 text-gray-500 group-hover:text-[#0d47a1] transition-colors">
                  <svg
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base font-semibold text-inherit">
                  Rentar un espacio
                </span>
              </Link>

              {/* Opción 2: Publicita tu marca */}
              <Link
                href="/tu-marca/publicita-tu-marca"
                className="group flex flex-col items-center justify-center w-48 sm:w-52 h-40 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 p-5 cursor-pointer text-gray-700 hover:text-[#0d47a1]"
              >
                <div className="mb-3 text-gray-500 group-hover:text-[#0d47a1] transition-colors">
                  <svg
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 5-2.5 5-2.5" />
                    <path d="M15 12v5s3.03-.55 4.5-2c1.63-1.62 2.5-5 2.5-5" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base font-semibold text-inherit">
                  Publicita tu marca
                </span>
              </Link>
            </div>
          </section>

          {/* Sección: ¿Quiénes somos? (Enlazado al nav) */}
          <section
            id="quienes-somos"
            className="scroll-mt-24 mt-20 sm:mt-28 mb-20 text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0d47a1] tracking-tight mb-6">
              ¿Quiénes somos?
            </h2>

            <div className="max-w-4xl mx-auto px-4 mb-14 space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              <p>
                Somos una empresa Latinoamericana de rentas inmobiliarias, con más de 40 años de experiencia en el desarrollo y operación de activos inmobiliarios multiformato, principalmente de uso comercial.
              </p>
              <p>
                La calidad de nuestros activos, así como nuestra experiencia e importante diversificación geográfica en Chile, Perú y Colombia, nos han consolidado como uno de los principales actores de la industria.
              </p>
            </div>

            {/* 4 Cards de Métricas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-left">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0d47a1] mb-5">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" strokeDasharray="2 2" />
                    <rect x="7" y="7" width="10" height="10" rx="1" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0d47a1] mb-2 tracking-tight">
                  +1 Mill. m²
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-snug">
                  Área Bruta Locataria (ABL) a nivel regional.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0d47a1] mb-5">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16" />
                    <path d="M9 7h1" />
                    <path d="M14 7h1" />
                    <path d="M9 11h1" />
                    <path d="M14 11h1" />
                    <path d="M9 15h1" />
                    <path d="M14 15h1" />
                    <path d="M4 21h16" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0d47a1] mb-2 tracking-tight">
                  +50
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-snug">
                  Centros comerciales en Chile, Perú y Colombia.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0d47a1] mb-5">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0d47a1] mb-2 tracking-tight">
                  +5000
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-snug">
                  Locales comerciales en operación en los tres países.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0d47a1] mb-5">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0d47a1] mb-2 tracking-tight">
                  +300 Mill.
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-snug">
                  Visitas anuales en nuestros centros comerciales.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}


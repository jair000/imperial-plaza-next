"use client";

import Link from "next/link";

export default function Home() {
  const handleScrollToContent = () => {
    const nextSection = document.getElementById("seccion-explorar");
    if (!nextSection) return;

    // Calcular posición exacta considerando el navbar fijo/sticky si existe
    const navbar = document.querySelector("header");
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    const elementPosition = nextSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;
    const duration = 1200; // Desplazamiento lento y suave (1.2s)
    let start: number | null = null;

    // Aceleración y desaceleración fluida tipo cine
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  return (
    <>
      {/* ========================================================= */}
      {/* 1. HERO BANNER PANTALLA COMPLETA                         */}
      {/* ========================================================= */}
      <section className="relative flex h-[calc(100vh-65px)] min-h-[520px] w-full items-center justify-center overflow-hidden bg-slate-950">
        {/* Imagen de fondo (public/images/banner.jpg) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{
            backgroundImage: "url('/images/banner.jpg')",
          }}
        />

        {/* Gradiente oscuro cinematográfico */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/80" />

        {/* Texto del Banner */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl drop-shadow-md">
            ¡Bienvenidos al Imperial Plaza!
          </h1>
          <p className="mt-4 text-lg font-medium text-slate-200 sm:text-2xl md:text-3xl drop-shadow">
            Descubre todo lo que tenemos para ti
          </p>
        </div>

        {/* Indicador de scroll clickeable */}
        <button
          type="button"
          onClick={handleScrollToContent}
          aria-label="Desplazarse a la siguiente sección"
          className="group absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/70 hover:text-white transition-all cursor-pointer focus:outline-none"
        >
          <span className="text-[11px] uppercase tracking-widest font-semibold drop-shadow transition-transform group-hover:translate-y-0.5">
            Explorar más
          </span>
          <div className="flex items-center justify-center rounded-full p-1 transition-all group-hover:bg-white/10 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4 drop-shadow"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </button>
      </section>

      {/* ========================================================= */}
      {/* 2. SECCIÓN: ¿Qué estás buscando? + Categorías            */}
      {/* ========================================================= */}
      <section id="seccion-explorar" className="w-full bg-[#f8f9fa] py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
            ¿Qué estás buscando?
          </h2>

          {/* Barra de Búsqueda con botón rojo */}
          <div className="mt-6 flex items-center justify-center">
            <div className="flex w-full max-w-2xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm focus-within:ring-2 focus-within:ring-red-400">
              <input
                type="text"
                placeholder="Ingresa una tienda o categoría"
                className="w-full px-5 py-3.5 text-sm sm:text-base text-gray-700 placeholder-gray-400 focus:outline-none"
              />
              <button
                type="button"
                className="flex items-center justify-center bg-[#e53935] px-6 text-white transition-colors hover:bg-[#d32f2f]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 3 10.5a7.5 7.5 0 0 0 13.65 6.15Z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Línea divisoria y subtítulo "Busca por categorías" */}
          <div className="relative my-8 flex items-center justify-center">
            <div className="w-full border-t border-gray-200" />
            <span className="absolute bg-[#f8f9fa] px-4 text-xs sm:text-sm font-medium text-gray-500">
              Busca por categorías
            </span>
          </div>

          {/* Tarjetas de categorías tipo píldoras */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* Promociones */}
            <div className="flex items-center gap-2.5 rounded-xl border border-gray-100 bg-white px-4 py-2.5 shadow-sm transition hover:shadow-md cursor-pointer">
              <svg className="h-5 w-5 text-[#ff7043]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <span className="text-xs sm:text-sm font-semibold text-[#ff7043]">Promociones</span>
            </div>

            {/* Tiendas */}
            <div className="flex items-center gap-2.5 rounded-xl border border-gray-100 bg-white px-4 py-2.5 shadow-sm transition hover:shadow-md cursor-pointer">
              <svg className="h-5 w-5 text-[#2563eb]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="text-xs sm:text-sm font-semibold text-[#2563eb]">Tiendas</span>
            </div>

            {/* Eventos y Cine */}
            <div className="flex items-center gap-2.5 rounded-xl border border-gray-100 bg-white px-4 py-2.5 shadow-sm transition hover:shadow-md cursor-pointer">
              <svg className="h-5 w-5 text-[#b03a8d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
              </svg>
              <span className="text-xs sm:text-sm font-semibold text-[#b03a8d]">Eventos y Cine</span>
            </div>

            {/* Gastronomía */}
            <div className="flex items-center gap-2.5 rounded-xl border border-gray-100 bg-white px-4 py-2.5 shadow-sm transition hover:shadow-md cursor-pointer">
              <svg className="h-5 w-5 text-[#ef4444]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 20V10a4 4 0 00-8 0v10M6 4v6a2 2 0 002 2h0a2 2 0 002-2V4" />
              </svg>
              <span className="text-xs sm:text-sm font-semibold text-[#ef4444]">Gastronomía</span>
            </div>

            {/* Servicios */}
            <div className="flex items-center gap-2.5 rounded-xl border border-gray-100 bg-white px-4 py-2.5 shadow-sm transition hover:shadow-md cursor-pointer">
              <svg className="h-5 w-5 text-[#64748b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-xs sm:text-sm font-semibold text-[#64748b]">Servicios</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. SECCIÓN: LO MÁS VISITADO                              */}
      {/* ========================================================= */}
      <section className="w-full bg-[#f1f3f5] py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-[#001789]">
            LO MÁS <span className="italic text-[#f97316]">VISITADO</span>
          </h3>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {/* Botón Verde TIENDAS */}
            <div className="flex items-center justify-center gap-3 rounded-lg bg-[#00a87e] py-4 px-6 text-white font-bold tracking-wide shadow-sm hover:bg-[#00926d] transition cursor-pointer">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="text-base sm:text-lg">TIENDAS</span>
            </div>

            {/* Botón Verde EVENTOS Y CINE */}
            <div className="flex items-center justify-center gap-3 rounded-lg bg-[#00a87e] py-4 px-6 text-white font-bold tracking-wide shadow-sm hover:bg-[#00926d] transition cursor-pointer">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span className="text-base sm:text-lg">EVENTOS Y CINE</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. SECCIÓN: LOS MEJORES EVENTOS (Carrusel/Tarjetas)       */}
      {/* ========================================================= */}
      <section className="w-full bg-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Columna Izquierda: Título y descripción */}
            <div className="lg:col-span-3">
              <h4 className="text-lg font-black uppercase italic tracking-wide text-[#f97316]">
                LOS MEJORES
              </h4>
              <h2 className="text-2xl font-black uppercase text-[#001789] leading-tight">
                EVENTOS
              </h2>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                Ven a conocer y a disfrutar todos los eventos que el mall tiene para ti
              </p>
            </div>

            {/* Columna Derecha: Tarjetas de Eventos con flechas */}
            <div className="relative lg:col-span-9">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Próximos Eventos
              </h3>

              {/* Botón Flecha Izquierda */}
              <button
                type="button"
                aria-label="Anterior"
                className="absolute -left-3 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-gray-400/80 text-white shadow hover:bg-gray-600 transition"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Botón Flecha Derecha */}
              <button
                type="button"
                aria-label="Siguiente"
                className="absolute -right-3 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-gray-400/80 text-white shadow hover:bg-gray-600 transition"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Grid de 3 Tarjetas de Eventos */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                
                {/* Evento 1: Mega Ruleta Regalona */}
                <div className="flex flex-col overflow-hidden rounded-xl shadow-md border border-gray-100">
                  <div className="h-44 w-full bg-slate-200 relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80"
                      alt="Mega Ruleta Regalona"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* Cuerpo verde esmeralda */}
                  <div className="flex flex-1 flex-col justify-between bg-[#38b284] p-4 text-white">
                    <div>
                      <h4 className="text-center text-base font-bold leading-tight min-h-[40px] flex items-center justify-center">
                        Mega Ruleta Regalona
                      </h4>
                      <div className="mt-3 space-y-1.5 text-xs text-white/95">
                        <div className="flex items-center gap-2">
                          <svg className="h-4 w-4 shrink-0 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>viernes, 25 de septiembre</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="h-4 w-4 shrink-0 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>16:00 - 18:00</span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="mt-4 w-full rounded bg-[#001789] py-2 text-center text-xs font-bold text-white transition hover:bg-[#001066]"
                    >
                      Ver Más
                    </button>
                  </div>
                </div>

                {/* Evento 2: Orquesta Candela */}
                <div className="flex flex-col overflow-hidden rounded-xl shadow-md border border-gray-100">
                  <div className="h-44 w-full bg-slate-200 relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80"
                      alt="Orquesta Candela en vivo"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* Cuerpo verde esmeralda */}
                  <div className="flex flex-1 flex-col justify-between bg-[#38b284] p-4 text-white">
                    <div>
                      <h4 className="text-center text-base font-bold leading-tight min-h-[40px] flex items-center justify-center">
                        Orquesta Candela en vivo
                      </h4>
                      <div className="mt-3 space-y-1.5 text-xs text-white/95">
                        <div className="flex items-center gap-2">
                          <svg className="h-4 w-4 shrink-0 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>viernes, 25 de septiembre</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="h-4 w-4 shrink-0 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>17:00 - 20:00</span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="mt-4 w-full rounded bg-[#001789] py-2 text-center text-xs font-bold text-white transition hover:bg-[#001066]"
                    >
                      Ver Más
                    </button>
                  </div>
                </div>

                {/* Evento 3: Gustavo Cerati con Fernando Sosa */}
                <div className="flex flex-col overflow-hidden rounded-xl shadow-md border border-gray-100">
                  <div className="h-44 w-full bg-slate-200 relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80"
                      alt="Gustavo Cerati con Fernando Sosa"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* Cuerpo verde esmeralda */}
                  <div className="flex flex-1 flex-col justify-between bg-[#38b284] p-4 text-white">
                    <div>
                      <h4 className="text-center text-base font-bold leading-tight min-h-[40px] flex items-center justify-center">
                        Gustavo Cerati con Fernando Sosa
                      </h4>
                      <div className="mt-3 space-y-1.5 text-xs text-white/95">
                        <div className="flex items-center gap-2">
                          <svg className="h-4 w-4 shrink-0 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>sábado, 26 de septiembre</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="h-4 w-4 shrink-0 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>19:00 - 20:00</span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="mt-4 w-full rounded bg-[#001789] py-2 text-center text-xs font-bold text-white transition hover:bg-[#001066]"
                    >
                      Ver Más
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
      {/* ========================================================= */}
      {/* 5. SECCIÓN: ¡SIGAMOS EN CONTACTO!                        */}
      {/* ========================================================= */}
      <section className="relative w-full overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8">
        {/* Curvas decorativas verdes y anaranjadas a la izquierda (idénticas a la imagen) */}
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#ff7043] opacity-90 sm:h-80 sm:w-80" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-[#00a87e] opacity-95 sm:h-72 sm:w-72" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm transition hover:shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              
              {/* Imagen izquierda de la chica en laptop */}
              <div className="h-64 sm:h-80 w-full overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="Mujer trabajando en laptop"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Contenido derecho */}
              <div className="p-8 sm:p-10 flex flex-col justify-center items-start">
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wide text-[#001789]">
                  ¡SIGAMOS EN <span className="italic text-[#f97316]">CONTACTO!</span>
                </h3>
                <p className="mt-4 text-xs sm:text-sm text-gray-500 leading-relaxed max-w-md">
                  Descubre un mundo de experiencias y entérate de todas las novedades, eventos y todo lo que tenemos para ti en Imperial Plaza.
                </p>

                {/* Botón SUSCRÍBETE */}
                <button
                  type="button"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#00a87e] px-6 py-3 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-sm hover:bg-[#00926d] transition cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  <span>SUSCRÍBETE</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

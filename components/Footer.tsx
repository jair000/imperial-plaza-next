"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#0a0082] text-white pt-14 pb-12">
      {/* Patrones decorativos rayados a los costados (idénticos a la imagen) */}
      <div className="pointer-events-none absolute left-0 bottom-6 flex flex-col gap-2 opacity-90">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-2 w-10 sm:w-16 bg-white" />
        ))}
      </div>

      <div className="pointer-events-none absolute right-0 bottom-6 flex flex-col gap-2 opacity-90">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-2 w-10 sm:w-16 bg-white" />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 items-start">
          
          {/* Columna 1: Logo y Redes Sociales */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <Link href="/" className="inline-flex items-center gap-2">
              <img
                src="/images/logo.png"
                alt="Imperial Plaza"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const fallback = document.getElementById("footer-logo-fallback");
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <span
                id="footer-logo-fallback"
                style={{ display: "none" }}
                className="items-center gap-2 text-xl font-bold tracking-tight text-white"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white font-black text-sm">
                  I
                </span>
                Imperial Plaza
              </span>
            </Link>

            {/* Iconos de Redes Sociales circulares */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0a0082] transition hover:bg-slate-200"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0a0082] transition hover:bg-slate-200"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0a0082] transition hover:bg-slate-200"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="#"
                aria-label="TikTok"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0a0082] transition hover:bg-slate-200"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01v8.86c-.02 2.18-.76 4.38-2.22 6.03-1.57 1.79-3.94 2.87-6.32 2.86-2.52-.03-4.99-1.28-6.52-3.26-1.65-2.13-2.14-5.06-1.32-7.66.86-2.73 3.12-4.87 5.92-5.56.84-.21 1.72-.28 2.58-.23v4.13c-.76-.08-1.55.03-2.24.38-1.05.53-1.78 1.56-1.92 2.72-.19 1.53.61 3.11 1.95 3.84 1.34.74 3.08.57 4.25-.43.76-.64 1.17-1.61 1.17-2.61V.02h-1.67z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2: Nosotros */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Nosotros</h4>
            <ul className="mt-3 space-y-2 text-xs text-white/80">
              <li><Link href="/sobre-nosotros" className="hover:text-white transition">Sobre nosotros</Link></li>
              <li><Link href="/tu-marca" className="hover:text-white transition">Tu marca con nosotros</Link></li>
              <li><Link href="/sostenibilidad" className="hover:text-white transition">Medio ambiente</Link></li>
            </ul>
          </div>

          {/* Columna 3: Sostenibilidad */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Sostenibilidad</h4>
            <ul className="mt-3 space-y-2 text-xs text-white/80">
              <li><Link href="/sostenibilidad" className="hover:text-white transition">Ambiental</Link></li>
              <li><Link href="/sostenibilidad" className="hover:text-white transition">Social</Link></li>
              <li><Link href="/sostenibilidad" className="hover:text-white transition">Resultados</Link></li>
            </ul>
          </div>

          {/* Columna 4: Términos y condiciones */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Términos y condiciones</h4>
            <ul className="mt-3 space-y-2 text-xs text-white/80">
              <li><a href="#" className="hover:text-white transition">Legales de campañas</a></li>
              <li><a href="#" className="hover:text-white transition">Políticas Generales</a></li>
              <li><a href="#" className="hover:text-white transition">Política de cookies</a></li>
              <li><a href="#" className="hover:text-white transition">Protección de datos</a></li>
            </ul>
          </div>

          {/* Columna 5: Cómo llegar + Libro de Reclamaciones */}
          <div className="flex flex-col gap-4 items-start sm:items-start">
            {/* Botón Cómo llegar */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#0a0082] shadow-sm hover:bg-slate-100 transition"
            >
              <svg className="h-3.5 w-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Cómo llegar</span>
              <span className="text-blue-600 font-extrabold">&rarr;</span>
            </a>

            {/* Libro de Reclamaciones */}
            <div className="overflow-hidden rounded-md border border-white/20 bg-white p-2 shadow-sm max-w-[140px] text-center">
              <span className="block text-[10px] font-black uppercase text-[#0a0082] leading-tight mb-1">
                Libro de Reclamaciones
              </span>
              <img
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=250&q=80"
                alt="Libro de Reclamaciones"
                className="h-9 w-full object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

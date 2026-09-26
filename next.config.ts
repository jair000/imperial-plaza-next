import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',                      // Genera los archivos estáticos en la carpeta /out
  basePath: '/imperial-plaza-next',      // Nombre exacto de tu repositorio en GitHub
  images: {
    unoptimized: true,                   // Obligatorio para exportación estática en GitHub Pages
    domains: ["images.unsplash.com"],     // Mantiene la compatibilidad con tus imágenes de Unsplash
  },
};

export default nextConfig;
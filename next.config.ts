import type { NextConfig } from "next";

const basePath = "/imperial-plaza-next";

const nextConfig: NextConfig = {
  output: 'export',                      // Genera los archivos estáticos en la carpeta /out
  basePath,                              // Nombre exacto de tu repositorio en GitHub
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,                   // Obligatorio para exportación estática en GitHub Pages
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
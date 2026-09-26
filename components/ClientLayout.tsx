"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // No mostrar nav y footer en las páginas de tu-marca ni centro-ayuda
  const showNavAndFooter = !pathname.startsWith("/tu-marca") && !pathname.startsWith("/centro-ayuda");

  return (
    <>
      {showNavAndFooter && <Navbar />}
      <main className="flex-1">{children}</main>
      {showNavAndFooter && <Footer />}
    </>
  );
}
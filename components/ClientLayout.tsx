"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClientLayout({
  slot,
}: {
  slot: "header" | "footer";
}) {
  const pathname = usePathname();
  const showNavAndFooter = !pathname.startsWith("/tu-marca") && !pathname.startsWith("/centro-ayuda");

  if (!showNavAndFooter) {
    return null;
  }

  return slot === "header" ? <Navbar /> : <Footer />;
}
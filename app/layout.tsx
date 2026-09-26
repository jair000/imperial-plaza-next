import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Imperial Plaza",
  description: "Centro comercial Imperial Plaza",
  icons: {
    icon: "/imperial-plaza-next/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="flex min-h-screen flex-col">
        <ClientLayout slot="header" />
        <main className="flex-1">{children}</main>
        <ClientLayout slot="footer" />
      </body>
    </html>
  );
}

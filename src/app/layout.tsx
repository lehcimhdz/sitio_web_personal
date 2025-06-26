import React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Michel Cano - Científico de Datos, Desarrollador de IA y Automatización",
  description: "Transformando negocios e instituciones con tecnología. Especialista en ciencia de datos, automatización e inteligencia artificial.",
  keywords: "ciencia de datos, automatización, inteligencia artificial, Python, análisis de datos, web scraping, ETL",
  authors: [{ name: "Michel Cano Hernández" }],
  openGraph: {
    title: "Michel Cano - Científico de Datos y Automatización",
    description: "Transformando negocios con tecnología avanzada",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${poppins.variable} ${inter.variable} font-poppins antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
} 
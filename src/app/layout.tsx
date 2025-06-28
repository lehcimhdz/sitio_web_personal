import React from "react";
import type { Metadata } from "next";
import { Inter, Roboto_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto-mono",
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
      <body className={`${spaceGrotesk.variable} ${robotoMono.variable} ${inter.variable} font-sans antialiased bg-black text-white m-0 p-0`}>
        {children}
      </body>
    </html>
  );
} 
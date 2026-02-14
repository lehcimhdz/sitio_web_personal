
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
  title: "Michel Cano - Data Engineer",
  description: "Data Engineer specializing in ETL pipelines, Python automation, and scalable backend architectures.",
  keywords: "Data Engineer, Python, SQL, ETL, Automation, Backend, Michel Cano",
  authors: [{ name: "Michel Cano" }],
  openGraph: {
    title: "Michel Cano - Data Engineer",
    description: "Architecting scalable data platforms.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${robotoMono.variable} ${inter.variable} font-sans antialiased bg-black text-white m-0 p-0`}>
        {children}
      </body>
    </html>
  );
}
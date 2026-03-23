
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
  title: "Michel Cano - Python Developer & Backend Developer",
  description: "Python Developer and Backend Developer with 4 years of experience building production systems. Specializes in Django, FastAPI, Airflow, AWS, and open-source tooling.",
  keywords: "Python Developer, Backend Developer, Data Engineer, Django, FastAPI, Apache Airflow, AWS, Terraform, Michel Cano",
  authors: [{ name: "Michel Cano" }],
  openGraph: {
    title: "Michel Cano - Python Developer & Backend Developer",
    description: "Building production systems that eliminate manual work and scale with real-world complexity.",
    type: "website",
    locale: "en_US",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Michel Cano - Python Developer & Backend Developer",
    description: "Building production systems that eliminate manual work and scale with real-world complexity.",
    images: ["/og-image.png"],
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
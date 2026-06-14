
import React from "react";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Michel Cano - Python Developer & Data Engineer",
  description: "Python Developer and Data Engineer with 5 years of experience building production systems for government institutions. Specializes in Django, FastAPI, Airflow, PySpark, AWS, Terraform, and open-source tooling.",
  keywords: "Python Developer, Data Engineer, Django, FastAPI, Apache Airflow, PySpark, dbt, AWS, Terraform, Michel Cano, legismex, open-data-mexico",
  authors: [{ name: "Michel Cano" }],
  openGraph: {
    title: "Michel Cano - Python Developer & Data Engineer",
    description: "Building production systems that eliminate manual work and scale with real-world complexity.",
    type: "website",
    locale: "en_US",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Michel Cano - Python Developer & Data Engineer",
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
      <body className={`${robotoMono.variable} ${inter.variable} font-sans antialiased bg-neutral-950 text-neutral-100 m-0 p-0`}>
        {children}
      </body>
    </html>
  );
}
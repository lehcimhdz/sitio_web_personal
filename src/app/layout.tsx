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
  metadataBase: new URL("https://michel-cano.netlify.app"),
  title: "Michel Cano — Backend engineer",
  description: "Backend engineer in Mexico City. Python, Django, Postgres, Celery — currently writing healthcare backends at XalDigital and keeping a public-sector victim registry online.",
  keywords: "Michel Cano, Backend engineer, Python, Django, Celery, PostgreSQL, FastAPI, Airflow, Mexico City",
  authors: [{ name: "Michel Cano" }],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Michel Cano — Backend engineer",
    description: "Python systems for organizations where the cost of getting it wrong is measured in someone's afternoon, not in revenue.",
    type: "website",
    locale: "en_US",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Michel Cano — Backend engineer",
    description: "Python systems for organizations where the cost of getting it wrong is measured in someone's afternoon, not in revenue.",
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

import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Katalog UMKM | Desa Toapaya Utara",
  description: "Jelajahi ragam produk, usaha, dan cerita para pelaku UMKM yang tumbuh bersama Desa Toapaya Utara.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${instrumentSerif.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-brand-background text-brand-dark font-sans selection:bg-brand-accent/30">
        <LenisProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}

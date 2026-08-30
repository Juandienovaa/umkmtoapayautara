"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
export default function VillageSection() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section id="desa" ref={containerRef} className="relative h-screen min-h-[600px] w-full flex items-end justify-center overflow-hidden bg-black">
      {/* Background Parallax Image */}
      <motion.div style={{ y, height: "120%", width: "100%", position: "absolute", top: "-10%", zIndex: 0 }}>
        <Image
          src="/images/village_view.jpg"
          alt="Pemandangan Desa Toapaya Utara"
          fill
          className="object-cover opacity-90"
        />
      </motion.div>
      
      {/* Gradient Overlays for Readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#151515] via-black/60 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="container relative z-20 mx-auto px-6 md:px-12 max-w-7xl w-full pb-24 md:pb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <p className="font-sans text-sm tracking-[0.2em] uppercase text-[#FF6B00] font-bold mb-6">
              03 / DESA KITA
            </p>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-8xl leading-[0.95] text-white">
              Kenali <br className="hidden md:block"/> Tempatnya.
            </h2>
          </div>
          
          <div className="md:max-w-md bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-[2rem] shadow-2xl">
            <p className="font-sans text-base md:text-lg text-white/90 leading-relaxed">
              Toapaya Utara bukan sekadar titik di peta. Ini adalah tempat di mana alam yang asri, budaya yang kental, dan semangat masyarakatnya tumbuh bersama, melahirkan karya-karya lokal yang patut dirayakan.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-[#FF6B00]" />
              <span className="font-sans text-xs tracking-widest uppercase text-white/50 font-bold">Jelajah Lebih Jauh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

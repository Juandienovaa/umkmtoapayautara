"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function IntroStatement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section className="py-24 md:py-32 bg-[#151515] text-white border-b border-white/5 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] bg-[#FF6B00]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        <div ref={ref} className="flex flex-col items-center text-center gap-10 md:gap-16">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#FF6B00]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.714 2.023-9.609 8.983-10.609l-1.048 2.01c-3.32.96-5.467 3.033-5.467 6.002h4.515v9.988h-7.983zm-14.017 0v-7.391c0-5.714 2.023-9.609 8.983-10.609l-1.048 2.01c-3.32.96-5.467 3.033-5.467 6.002h4.515v9.988h-7.983z"/>
            </svg>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.2] text-white/90"
          >
            "Di setiap usaha, <span className="text-[#E6B973] italic">ada tangan yang bekerja.</span> <br className="hidden md:block"/> 
            Di setiap produk, <span className="text-[#FF6B00]">ada cerita yang tumbuh.</span>"
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="font-sans text-base md:text-lg leading-relaxed text-white/50">
              E-Katalog UMKM Desa Toapaya Utara menjadi ruang untuk mengenal karya, 
              dedikasi, dan usaha masyarakat desa secara lebih dekat dan bermakna.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

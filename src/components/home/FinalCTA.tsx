"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FinalCTA() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={containerRef} className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden bg-brand-dark flex items-center justify-center">
      {/* Cinematic Image Background */}
      <motion.div style={{ y, height: "140%", width: "100%", position: "absolute", top: "-20%" }}>
        <Image
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2000&auto=format&fit=crop"
          alt="Toapaya Utara"
          fill
          className="object-cover opacity-60"
        />
      </motion.div>
      <div className="absolute inset-0 bg-brand-dark/50 mix-blend-multiply" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-brand-background flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] max-w-5xl mb-8"
        >
          BAWA CERITA TOAPAYA UTARA LEBIH JAUH.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-sans text-lg md:text-xl opacity-80 max-w-2xl mb-12"
        >
          Temukan usaha lokal. Kenali ceritanya. Dukung karyanya.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link href="#umkm" className="group flex items-center gap-4 text-brand-background hover:text-brand-accent transition-colors bg-brand-dark/30 backdrop-blur-sm border border-brand-background/20 px-8 py-4 rounded-full">
            <span className="font-sans text-sm tracking-widest uppercase font-semibold">JELAJAHI UMKM</span>
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

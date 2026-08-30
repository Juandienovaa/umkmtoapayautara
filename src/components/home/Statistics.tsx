"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { num: "50+", label: "PELAKU UMKM" },
  { num: "04", label: "KATEGORI" },
  { num: "20+", label: "PRODUK" },
  { num: "01", label: "DESA" }
];

export default function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="py-20 md:py-24 bg-[#111111] text-white border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 md:gap-8">
          {STATS.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              className="flex flex-col items-center text-center"
            >
              <span className="font-serif text-6xl md:text-[7rem] leading-none mb-4 text-[#FF6B00] drop-shadow-xl">{stat.num}</span>
              <span className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-white/50 font-bold">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

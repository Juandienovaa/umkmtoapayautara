"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MOCK_UMKM_DATA, CATEGORIES, UMKM } from "@/data/mockData";
import { cn } from "@/lib/utils";

export default function UMKMExplorer() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredData = activeCategory === "Semua" 
    ? MOCK_UMKM_DATA 
    : MOCK_UMKM_DATA.filter(umkm => umkm.category === activeCategory);

  return (
    <section id="umkm" className="py-32 bg-[#151515] min-h-screen">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[90rem]">
        
        {/* Section Header */}
        <div className="mb-16 max-w-4xl">
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-white/40 font-bold mb-6">
            01 / JELAJAH
          </p>
          <h2 className="font-serif text-5xl sm:text-6xl md:text-[5.5rem] leading-[0.95] text-white tracking-tight">
            Temukan yang <br className="hidden md:block"/> Tumbuh di Sini.
            <span className="block mt-4 text-3xl md:text-5xl italic text-[#E6B973] font-serif font-light">
              (UMKM Toapaya Utara)
            </span>
          </h2>
        </div>

        {/* Category Navigation */}
        <div className="mb-20 overflow-x-auto hide-scrollbar">
          <div className="flex items-center gap-8 md:gap-14 min-w-max pb-4 border-b border-white/10">
            {CATEGORIES.filter(c => ["Semua", "Kuliner", "Kerajinan", "Pertanian", "Jasa", "Fashion", "Lainnya"].includes(c)).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "relative font-sans text-xs md:text-sm tracking-[0.15em] uppercase transition-all duration-300 pb-4",
                  activeCategory === cat ? "text-[#FF6B00] font-bold" : "text-white/50 hover:text-white font-semibold"
                )}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeCategoryIndicator"
                    className="absolute bottom-[-1px] left-0 right-0 h-[3px] bg-[#FF6B00] rounded-t-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Aligned Grid */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {filteredData.length === 0 && (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-24 text-center opacity-50 font-serif text-2xl text-white"
              >
                Belum ada data untuk kategori ini.
              </motion.div>
            )}

            {filteredData.length > 0 && (
              <motion.div 
                key={activeCategory}
                className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-12 pb-16"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {filteredData.map((umkm, idx) => (
                  <div key={umkm.id} className="relative h-full">
                    <CreativeCard umkm={umkm} idx={idx} />
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function CreativeCard({ umkm, idx }: { umkm: UMKM, idx: number }) {
  const isFeatured = idx === 0 || umkm.name.toLowerCase().includes("featured");
  
  const getCategoryIcon = (cat: string) => {
    switch (cat.toLowerCase()) {
      case 'kuliner': return '🍯';
      case 'pertanian': return '🥬';
      case 'kerajinan': return '🧺';
      case 'fashion': return '🧵';
      case 'jasa': return '🛠️';
      default: return '✨';
    }
  };

  return (
    <Link href={`/umkm/${umkm.id}`} className="group block w-full h-full">
      <div className="bg-[#1E1E1E] rounded-2xl md:rounded-[2rem] shadow-xl md:shadow-2xl shadow-black/50 p-3 sm:p-4 md:p-5 transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-4 hover:shadow-[#FF6B00]/10 hover:shadow-2xl relative h-full flex flex-col border border-white/10 hover:border-white/20">
        
        {/* Featured Badge */}
        {isFeatured && (
          <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 z-20 bg-[#FF6B00] text-white font-sans text-[8px] sm:text-[10px] md:text-xs tracking-widest font-bold uppercase px-2 py-1 md:px-4 md:py-2 rounded-full shadow-[0_8px_20px_rgba(255,107,0,0.3)]">
            Featured
          </div>
        )}

        {/* Image Container */}
        <div className="relative w-full aspect-[1/1] md:aspect-[4/5] rounded-xl md:rounded-[1.5rem] overflow-hidden bg-black mb-3 md:mb-6 border border-white/5">
          <Image
            src={umkm.image}
            alt={umkm.name}
            fill
            className="object-cover object-center transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
          />
          
          {/* Floating Icon Badge */}
          <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 z-10 w-8 h-8 md:w-12 md:h-12 bg-black/60 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center text-xs md:text-xl group-hover:scale-110 group-hover:bg-[#FF6B00] transition-all duration-500 border border-white/20 group-hover:border-transparent">
            {getCategoryIcon(umkm.category)}
          </div>
        </div>
        
        {/* Content */}
        <div className="flex flex-col flex-grow px-1 md:px-2 pb-1 md:pb-2">
          <p className="font-sans text-[8px] md:text-[10px] tracking-widest uppercase text-[#FF6B00] font-bold mb-1 md:mb-2">
            {umkm.category}
          </p>
          <h3 className="font-serif text-lg sm:text-xl md:text-3xl text-white leading-[1.1] mb-2 md:mb-3 group-hover:text-[#FF6B00] transition-colors duration-300">
            {umkm.name}
          </h3>
          <p className="font-sans text-[10px] sm:text-xs md:text-sm text-white/60 line-clamp-2 md:line-clamp-3 leading-relaxed mb-3 md:mb-6 flex-grow hidden sm:block">
            {umkm.description}
          </p>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-auto pt-2 md:pt-4 border-t border-white/10 gap-2">
            <span className="font-sans text-[8px] md:text-[10px] tracking-widest uppercase text-white/40 font-semibold truncate">
              {umkm.location}
            </span>
            <div className="hidden sm:flex w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 items-center justify-center group-hover:bg-[#FF6B00] group-hover:text-white text-white/50 transition-all duration-300">
              <span className="text-xs md:text-sm font-medium">→</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

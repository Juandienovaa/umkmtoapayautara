"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { num: "01", label: "BERANDA", href: "/", img: "/images/village_view.jpg" },
  { num: "02", label: "JELAJAH UMKM", href: "#umkm", img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800&auto=format&fit=crop" },
  { num: "03", label: "CERITA LOKAL", href: "#cerita", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" },
  { num: "04", label: "DESA KITA", href: "#desa", img: "/images/village_view.jpg" },
];

export default function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
          exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 bg-[#0A0A0A] text-[#FAF9F6] flex flex-col justify-between pt-24 pb-6 px-6 md:px-16"
        >
          {/* Hover Image Preview */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-20 md:opacity-40">
            <AnimatePresence>
              {hoveredIndex !== null && (
                <motion.div
                  key={hoveredIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image 
                    src={navLinks[hoveredIndex].img} 
                    alt="Preview" 
                    fill 
                    className="object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <div className="absolute inset-0 bg-brand-dark/70" />
          </div>

          <div className="relative z-10 w-full max-w-6xl mx-auto flex-1 flex flex-col overflow-y-auto hide-scrollbar py-8">
            {/* Navigation Links */}
            <nav className="flex flex-col gap-4 md:gap-6 w-full my-auto">
              {navLinks.map((link, i) => (
                <div
                  key={link.label}
                  className="group relative inline-block self-start"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Link 
                    href={link.href} 
                    onClick={onClose}
                    className="flex items-baseline gap-4 md:gap-8"
                  >
                    <motion.span 
                      animate={{ 
                        opacity: hoveredIndex === null || hoveredIndex === i ? 0.5 : 0.2,
                        x: hoveredIndex === i ? 10 : 0
                      }}
                      className="text-sm md:text-lg font-sans transition-all duration-300"
                    >
                      {link.num}
                    </motion.span>
                    <div className="relative py-2">
                      <motion.span 
                        animate={{ 
                          opacity: hoveredIndex === null || hoveredIndex === i ? 1 : 0.3,
                          x: hoveredIndex === i ? 20 : 0
                        }}
                        className="block text-3xl sm:text-5xl md:text-[4.5rem] font-serif uppercase leading-[1.1] transition-all duration-300"
                      >
                        {link.label}
                      </motion.span>
                      {/* Hover reveal underline */}
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: hoveredIndex === i ? 1 : 0 }}
                        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF6B00] origin-left translate-x-5"
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </nav>
          </div>
          
          {/* Footer Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative z-10 w-full max-w-6xl mx-auto border-t border-brand-background/20 pt-6 mt-12 flex flex-col md:flex-row justify-between text-xs md:text-sm font-sans uppercase tracking-widest text-brand-background/60"
          >
            <div className="mb-6 md:mb-0">
              <p className="text-brand-background">TOAPAYA UTARA</p>
              <p>BINTAN • KEPULAUAN RIAU</p>
            </div>
            
            <div className="flex gap-6 mb-6 md:mb-0">
              <a href="#" className="hover:text-brand-background transition-colors">Instagram</a>
              <a href="#" className="hover:text-brand-background transition-colors">Facebook</a>
              <a href="#" className="hover:text-brand-background transition-colors">WhatsApp</a>
              <a href="#" className="hover:text-brand-background transition-colors">Email</a>
            </div>

            <div>
              <p>© 2026 Desa Toapaya Utara</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

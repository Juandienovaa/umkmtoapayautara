"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import FullscreenMenu from "./FullscreenMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-out",
          scrolled 
            ? "bg-[#FAF9F6] py-5 shadow-sm border-b border-[#0F291E]/5" 
            : "bg-transparent py-10" // Generous breathing room
        )}
      >
        <div className="container mx-auto px-8 md:px-16 flex items-center justify-between">
          {/* LOGO */}
          <div className={cn(
            "z-50 cursor-pointer text-xs md:text-sm font-sans tracking-[0.25em] font-bold uppercase transition-colors duration-500",
            scrolled || menuOpen ? "text-[#0F291E]" : "text-white"
          )}>
            <span>TOAPAYA UTARA</span>
          </div>

          {/* MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={cn(
              "z-50 text-xs md:text-sm font-sans tracking-[0.25em] font-bold uppercase transition-colors duration-500 hover:opacity-70",
              scrolled || menuOpen ? "text-[#0F291E]" : "text-white"
            )}
          >
            {menuOpen ? "TUTUP" : "MENU"}
          </button>
        </div>
      </header>

      <FullscreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

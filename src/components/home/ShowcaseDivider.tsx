"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ShowcaseDivider() {
  return (
    <section className="relative w-full bg-[#151515] py-12 px-6 md:px-12 flex items-center justify-center border-y border-white/5">
      
      {/* Promotional Banner Container */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-7xl mx-auto rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl bg-[#71503E]"
      >
        
        {/* Left Content (Text) */}
        <div className="w-full md:w-1/2 p-10 md:p-16 lg:p-24 flex flex-col justify-center z-10 relative">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
            Dapatkan <span className="relative inline-block"><span className="relative z-10 text-white px-2">DISKON 50%</span><span className="absolute inset-0 bg-[#FF6B00] transform -skew-x-12 z-0"></span></span> <br className="hidden md:block"/>
            Keripik Pisang <br className="hidden md:block"/> Nano Banana
          </h2>
          
          <p className="font-sans text-lg md:text-2xl text-white/90 font-light tracking-wide mb-8">
            Setiap pembelian minimal Rp 100.000
          </p>

          <Link href="#produk">
            <button className="self-start px-8 py-4 bg-white text-[#71503E] font-sans text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#FF6B00] hover:text-white transition-colors duration-300">
              Klaim Sekarang
            </button>
          </Link>
        </div>

        {/* Right Content (Image) */}
        <div className="w-full md:w-1/2 h-[300px] md:h-auto relative">
          {/* Subtle gradient blend on desktop */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#71503E] to-transparent z-10 hidden md:block" />
          {/* Subtle gradient blend on mobile */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#71503E] to-transparent z-10 md:hidden" />
          
          <Image 
            src="/images/nano_banana_promo.jpg"
            alt="Nano Banana Promo"
            fill
            className="object-cover object-center"
          />
        </div>

      </motion.div>

    </section>
  );
}

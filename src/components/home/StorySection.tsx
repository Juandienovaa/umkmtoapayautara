"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { MOCK_UMKM_DATA } from "@/data/mockData";

export default function StorySection() {
  const containerRef = useRef(null);
  
  // Create parallax effect for the portrait image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // We'll pick one of the UMKMs that has a good story as our featured story.
  const featuredStory = MOCK_UMKM_DATA.find(u => u.name === "Kerajinan Rotan Bintan") || MOCK_UMKM_DATA[1];

  return (
    <section id="cerita" ref={containerRef} className="py-20 md:py-28 bg-gradient-to-b from-[#151515] to-[#1A1311] text-[#FAF9F6] overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Header */}
        <div className="mb-12 md:mb-20 text-center md:text-left">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#FF6B00] font-bold mb-4">03 / CERITA LOKAL</p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.1] max-w-3xl">
            Di Balik Setiap Karya, <br className="hidden md:block"/> Ada Sentuhan Manusia.
          </h2>
        </div>

        {/* Story Composition */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Portrait Image with Premium Framing */}
          <div className="w-full md:w-5/12 lg:w-4/12 relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl bg-black group">
              <motion.div style={{ y, height: "115%", width: "100%", position: "absolute", top: "-5%" }}>
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                  alt={`Potret ${featuredStory.owner}`}
                  fill
                  className="object-cover sepia-[.3] contrast-125 brightness-75 group-hover:brightness-90 group-hover:sepia-0 transition-all duration-700"
                />
              </motion.div>
            </div>
            {/* Decorative background element */}
            <div className="absolute -inset-4 border border-white/5 rounded-[2.5rem] -z-10 hidden md:block" />
          </div>

          {/* Story Quote */}
          <div className="w-full md:w-7/12 lg:w-8/12 flex flex-col justify-center">
            <motion.blockquote 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.3] mb-8 md:mb-12 text-white/90"
            >
              "Setiap anyaman yang kami buat adalah bagian kecil dari perjalanan keluarga kami dan bentuk cinta untuk desa ini."
            </motion.blockquote>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-[1px] bg-[#FF6B00]" />
              <div>
                <p className="font-sans text-sm tracking-widest uppercase mb-1 text-white font-bold">
                  {featuredStory.owner}
                </p>
                <p className="font-sans text-xs text-white/50 tracking-wider">
                  PEMILIK {featuredStory.name.toUpperCase()}
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

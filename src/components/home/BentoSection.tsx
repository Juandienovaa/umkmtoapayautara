"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MOCK_UMKM_DATA } from "@/data/mockData";
import Link from "next/link";

export default function BentoSection() {
  const featuredUMKM = MOCK_UMKM_DATA[0]; // UMKM Bunda 2L
  const secondUMKM = MOCK_UMKM_DATA[1]; // NOFA SNACK
  const thirdUMKM = MOCK_UMKM_DATA[7]; // Jamu Herbal Bunda Umay
  const fourthUMKM = MOCK_UMKM_DATA[3]; // UMKM Mawar

  return (
    <section className="py-20 md:py-28 bg-[#151515] text-[#FAF9F6] border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#FF6B00] font-bold mb-4">Eksplorasi Lokal</p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.1] max-w-3xl">
            Ragam Karya UMKM <br className="hidden md:block"/> Toapaya Utara.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          
          {/* Box 1: Main Large Box */}
          <motion.div 
            className="col-span-2 md:col-span-2 md:row-span-2 relative rounded-[2rem] overflow-hidden group border border-white/10 min-h-[400px] md:min-h-[600px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <Image 
              src={featuredUMKM.image} 
              alt={featuredUMKM.name} 
              fill 
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-12">
              <span className="px-4 py-1.5 rounded-full bg-[#FF6B00] text-white text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                Unggulan
              </span>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4">{featuredUMKM.name}</h3>
              <p className="font-sans text-sm md:text-base text-white/90 max-w-lg">
                {featuredUMKM.story}
              </p>
            </div>
          </motion.div>

          {/* Box 2: Info Box */}
          <motion.div 
            className="col-span-2 md:col-span-1 md:row-span-1 rounded-[2rem] bg-[#71503E] p-8 md:p-10 flex flex-col justify-center border border-white/10 min-h-[300px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-serif text-2xl md:text-3xl mb-4 text-white">Pesona Toapaya Utara</h3>
            <p className="font-sans text-sm md:text-base text-white/90 leading-relaxed mb-8 flex-grow">
              Desa Toapaya Utara kaya akan potensi sumber daya alam. Melalui UMKM lokal, kami menghadirkan karya yang dibuat sepenuh hati oleh tangan terampil masyarakat desa.
            </p>
            <Link href="#produk" className="text-xs md:text-sm font-bold tracking-widest uppercase hover:text-[#FF6B00] transition-colors inline-flex items-center gap-2 text-white">
              Jelajahi Produk <span aria-hidden="true">&rarr;</span>
            </Link>
          </motion.div>

          {/* Box 3: Secondary Box 1 */}
          <motion.div 
            className="col-span-1 md:col-span-1 md:row-span-1 relative rounded-[2rem] overflow-hidden group border border-white/10 min-h-[250px] md:min-h-[300px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
             <Image 
              src={thirdUMKM.image} 
              alt={thirdUMKM.name} 
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 md:p-8 w-full">
              <h3 className="font-serif text-lg md:text-2xl mb-2 text-white">{thirdUMKM.name}</h3>
              <p className="font-sans text-[11px] md:text-sm text-white/80 line-clamp-2">
                {thirdUMKM.category}
              </p>
            </div>
          </motion.div>
          
          {/* Box 4: Secondary Box 2 */}
          <motion.div 
            className="col-span-1 md:col-span-1 md:row-span-1 relative rounded-[2rem] overflow-hidden group border border-white/10 min-h-[250px] md:min-h-[300px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
             <Image 
              src={fourthUMKM.image} 
              alt={fourthUMKM.name} 
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 md:p-8 w-full">
              <h3 className="font-serif text-lg md:text-2xl mb-2 text-white">{fourthUMKM.name}</h3>
              <p className="font-sans text-[11px] md:text-sm text-white/80 line-clamp-2">
                {fourthUMKM.category}
              </p>
            </div>
          </motion.div>

          {/* Box 5: Wide Box */}
          <motion.div 
            className="col-span-2 md:col-span-2 md:row-span-1 relative rounded-[2rem] overflow-hidden group border border-white/10 flex flex-col sm:flex-row bg-[#1A1311]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
             <div className="w-full sm:w-2/5 md:w-1/2 relative min-h-[200px] sm:min-h-full">
                <Image 
                  src={secondUMKM.image} 
                  alt={secondUMKM.name} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
             </div>
             <div className="w-full sm:w-3/5 md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                <span className="px-4 py-1.5 rounded-full bg-white/10 text-white text-[10px] md:text-xs font-bold uppercase tracking-wider mb-3 md:mb-4 self-start border border-white/20">
                  Populer
                </span>
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-4 text-white">{secondUMKM.name}</h3>
                <p className="font-sans text-sm md:text-base text-white/80 mb-4 md:mb-6">
                  {secondUMKM.story || secondUMKM.description}
                </p>
                <div className="flex gap-4">
                  <div className="font-sans">
                    <p className="text-[10px] md:text-xs text-white/50 uppercase tracking-wider mb-1">Pemilik</p>
                    <p className="text-xs md:text-sm text-white">{secondUMKM.owner}</p>
                  </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

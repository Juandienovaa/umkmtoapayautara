"use client";

import Image from "next/image";
import Link from "next/link";
import { MOCK_UMKM_DATA } from "@/data/mockData";
import { Product } from "@/data/mockData";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function ProductGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Extract all products from UMKMs and filter for souvenirs (oleh-oleh)
  const excludedCategories = ["Sayuran", "Makanan Berat", "Katering", "Bahan Makanan", "Perabotan", "Dekorasi"];
  const allProducts: (Product & { umkmName: string })[] = MOCK_UMKM_DATA.flatMap(umkm => 
    umkm.products.map(p => ({ ...p, umkmName: umkm.name }))
  ).filter(p => !excludedCategories.includes(p.category));

  const [emblaRef] = useEmblaCarousel({ 
    dragFree: true,
    containScroll: "trimSnaps"
  });

  return (
    <section id="produk" className="py-24 bg-[#151515] text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl mb-12">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-white/40 font-bold mb-6">02 / PRODUK PILIHAN</p>
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-white">
          Karya yang Bisa <br className="hidden md:block"/> Dibawa Pulang.
        </h2>
      </div>

      <div ref={ref} className="w-full relative cursor-grab active:cursor-grabbing">
        {/* Embla Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          {/* Embla Container */}
          <div className="flex gap-6 md:gap-8 lg:gap-12 px-6 md:px-12 pb-12 ml-4">
            {allProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                className="flex-[0_0_85vw] sm:flex-[0_0_60vw] md:flex-[0_0_45vw] lg:flex-[0_0_30vw] max-w-[500px] min-w-0"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
            {/* Spacer for end of scroll */}
            <div className="flex-[0_0_20px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product & { umkmName: string } }) {
  return (
    <Link href={`/produk/${product.id}`} className="group flex flex-col gap-6 block w-full h-full">
      <div className="relative w-full aspect-[4/5] bg-black rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 group-hover:shadow-[#FF6B00]/20 group-hover:-translate-y-2">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      </div>
      
      <div className="flex flex-col justify-between items-start gap-4 px-2">
        <div className="w-full">
          <p className="font-sans text-[10px] uppercase tracking-widest text-[#FF6B00] font-bold mb-2">{product.umkmName}</p>
          <h3 className="font-serif text-2xl md:text-3xl mb-1 text-white group-hover:text-[#FF6B00] transition-colors">{product.name}</h3>
        </div>
        
        <div className="flex w-full items-center justify-between mt-2 pt-4 border-t border-white/10">
          {product.price && (
            <p className="font-sans text-lg font-semibold text-white/90">
              Rp {product.price.toLocaleString("id-ID")}
            </p>
          )}
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FF6B00] group-hover:text-white text-white/50 transition-all duration-300">
            <span className="text-sm font-medium">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

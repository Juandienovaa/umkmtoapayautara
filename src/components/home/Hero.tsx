"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import gsap from "gsap";

const slides = [
  {
    id: 1,
    titleMain: "E-KATALOG",
    titleSub: "Desa Toapaya Utara.",
    description: "SELAMAT DATANG. Temukan pesona dan kekayaan lokal desa kami, mulai dari hasil bumi segar, kuliner otentik, hingga karya tangan pengrajin yang penuh dedikasi.",
    primaryButton: "MULAI JELAJAH",
    secondaryButton: "TENTANG DESA",
    promoBadge: "SELAMAT DATANG",
    image: "/images/flat_village.jpg",
    gradient: "from-[#0F291E] to-[#0A1C14]", // Dark premium forest green
    accent: "text-[#E6B973]"
  },
  {
    id: 2,
    titleMain: "RENGGINANG UBI",
    titleSub: "UMKM Bunda 2L.",
    description: "RENYAH & GURIH. Komposisi: Ubi, bawang putih, garam, penyedap, pewarna.",
    primaryButton: "PESAN SEKARANG",
    secondaryButton: "JELAJAHI",
    promoBadge: "PRODUK UNGGULAN",
    image: "/images/rengginang.jpeg",
    gradient: "from-[#2A1508] to-[#1A0A02]", // Dark earthy brown/orange tone
    accent: "text-[#E6B973]"
  },
  {
    id: 3,
    titleMain: "ANEKA PEYEK",
    titleSub: "NOFA SNACK.",
    description: "RENYAH & NIKMAT. Peyek Kacang, Bilis, & Campur (Original/Pedas). Mulai Rp 120.000/kg. Oleh Nofa Nurlinda (0831-8617-6351).",
    primaryButton: "PESAN SEKARANG",
    secondaryButton: "LIHAT KOLEKSI",
    promoBadge: "SNACK LOKAL",
    image: "/images/keringan-tempe.jpeg",
    gradient: "from-[#2A1F18] to-[#402F24]", // Earthy brown
    accent: "text-[#D38B5D]"
  }
];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    const ctx = gsap.context(() => {
      // Marquee animation (Left to Right)
      gsap.fromTo(
        ".marquee-content",
        { xPercent: -50 },
        { xPercent: 0, ease: "none", duration: 25, repeat: -1 }
      );
    });
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
      ctx.revert();
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative w-full flex flex-col bg-[#151515] selection:bg-[#FF6B00] selection:text-white">
      
      {/* Dynamic Background */}
      <div 
        className={`absolute inset-0 z-0 bg-gradient-to-br transition-colors duration-1000 ${slides[selectedIndex].gradient}`}
      />

      {/* Hero Carousel */}
      <div className="relative z-10 w-full h-[100svh] min-h-[700px] flex items-center overflow-hidden" ref={emblaRef}>
        <div className="flex w-full h-full">
          {slides.map((slide, idx) => (
            <div key={slide.id} className="relative flex-[0_0_100%] min-w-0 w-full h-full">
              
              <div className="container mx-auto px-8 md:px-16 lg:px-24 h-full flex flex-col md:flex-row items-center justify-between">
                
                {/* Left Content (Text) */}
                <div className="w-full md:w-[55%] z-20 flex flex-col justify-center h-full pt-20 md:pt-0 pointer-events-auto">
                  <span className="inline-block px-3 py-1 bg-[#FF6B00] text-white text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-sm mb-4 md:mb-6 self-start shadow-xl">
                    {slide.promoBadge}
                  </span>
                  
                  <h1 className="font-sans text-5xl sm:text-6xl md:text-[5rem] lg:text-[7.5rem] font-black leading-[0.85] tracking-tighter uppercase text-white mb-2 transform -ml-1">
                    {slide.titleMain}
                  </h1>
                  
                  <h2 className={`font-serif italic text-3xl md:text-5xl lg:text-[4rem] font-light leading-none mb-6 md:mb-8 ${slide.accent}`}>
                    {slide.titleSub}
                  </h2>
                  
                  <p className="font-sans text-xs md:text-sm lg:text-base text-white/80 uppercase tracking-widest max-w-[80%] leading-loose mb-8 md:mb-12 border-l-2 border-[#FF6B00] pl-4">
                    {slide.description}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <Link href="#umkm" className="bg-[#FF6B00] hover:bg-[#E66000] text-white transition-colors px-6 py-4 md:px-8 md:py-4 font-sans text-xs md:text-sm font-bold tracking-widest uppercase rounded-sm">
                      {slide.primaryButton}
                    </Link>
                    <Link href="#umkm" className="border border-white/20 hover:border-white text-white transition-colors px-6 py-4 md:px-8 md:py-4 font-sans text-xs md:text-sm font-bold tracking-widest uppercase rounded-sm hidden sm:block">
                      {slide.secondaryButton}
                    </Link>
                  </div>
                </div>

                {/* Image Content - Full width background on mobile, right-aligned split on desktop */}
                <div className="absolute inset-0 md:inset-auto md:right-0 md:top-0 md:bottom-0 w-full md:w-[45%] h-[100%] z-0 md:z-10 opacity-40 md:opacity-100">
                  <div className="relative w-full h-full overflow-hidden">
                     
                     {/* Mobile Gradient Overlay (Vertical) - blends the image into the background so text is readable */}
                     <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent z-10 md:hidden" />
                     <div className="absolute inset-0 bg-gradient-to-r from-[#151515]/90 via-[#151515]/50 to-transparent z-10 md:hidden" />
                     
                     {/* Desktop Gradient Mask (Horizontal) - blends the left side of the image with the solid background */}
                     <div className={`absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r ${slide.gradient.split(' ')[0]} via-transparent to-transparent z-10 hidden md:block opacity-90`} />

                     <Image 
                       src={slide.image} 
                       alt={slide.titleMain} 
                       fill 
                       className="object-cover object-center mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" 
                       priority={idx === 0}
                     />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
        
        {/* Carousel Indicators (Dots) - Moved INSIDE the relative carousel container */}
        <div className="absolute bottom-8 md:bottom-12 left-8 md:left-24 z-30 flex items-center gap-3">
          {slides.map((_, idx) => (
            <button 
               key={idx} 
               onClick={() => emblaApi?.scrollTo(idx)}
               aria-label={`Go to slide ${idx + 1}`}
               className={`h-[3px] transition-all duration-300 rounded-full ${idx === selectedIndex ? "w-12 bg-[#FF6B00]" : "w-6 bg-white/30 hover:bg-white/50"}`}
            />
          ))}
        </div>
      </div>

      {/* Divider Marquee */}
      <div className="relative z-20 w-full bg-[#151515] py-6 md:py-8 overflow-hidden flex items-center border-t border-white/10">
        <div className="marquee-content flex whitespace-nowrap will-change-transform">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 md:gap-10 px-3 md:px-5">
              <span className="font-sans text-xs md:text-sm tracking-[0.25em] uppercase text-white/80 font-bold">E-KATALOG DESA TOAPAYA UTARA</span>
              <span className="text-[#FF6B00]">✦</span>
              <span className="font-sans text-xs md:text-sm tracking-[0.25em] uppercase text-white/80 font-bold">MENDUKUNG PRODUK LOKAL</span>
              <span className="text-[#FF6B00]">✦</span>
              <span className="font-sans text-xs md:text-sm tracking-[0.25em] uppercase text-white/80 font-bold">KARYA MASYARAKAT</span>
              <span className="text-[#FF6B00]">✦</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { UMKM } from "@/data/mockData";
import { cn } from "@/lib/utils";

interface UMKMCardProps {
  umkm: UMKM;
  featured?: boolean;
}

export default function UMKMCard({ umkm, featured = false }: UMKMCardProps) {
  return (
    <Link href={`/umkm/${umkm.id}`} className="group block w-full h-full">
      <div className={cn(
        "relative rounded-3xl overflow-hidden bg-brand-sand/10 border border-brand-dark/5 transition-all duration-500",
        "group-hover:-translate-y-2 group-hover:shadow-xl",
        featured ? "aspect-[4/5] md:aspect-[16/9]" : "aspect-[4/5]"
      )}>
        <Image
          src={umkm.image}
          alt={umkm.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
        
        <div className="absolute inset-0 p-6 flex flex-col justify-end text-brand-white">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[10px] tracking-widest uppercase bg-brand-accent text-brand-dark px-3 py-1 rounded-full">
                {umkm.category}
              </span>
              <span className="text-xs opacity-80">{umkm.location}</span>
            </div>
            
            <h3 className={cn("font-serif mb-2 leading-tight", featured ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl")}>
              {umkm.name}
            </h3>
            
            <p className={cn(
              "text-brand-white/70 font-sans text-sm line-clamp-2 transition-all duration-500",
              featured ? "mb-6 max-w-md" : "mb-4"
            )}>
              {umkm.description}
            </p>
            
            <div className="flex items-center gap-2 text-sm font-semibold text-brand-sand opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span>Lihat Detail</span>
              <ArrowRight className="w-4 h-4 -translate-x-2 group-hover:translate-x-0 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

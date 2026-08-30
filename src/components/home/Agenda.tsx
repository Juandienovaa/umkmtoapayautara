"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const AGENDAS = [
  { date: "24", month: "AUG", title: "BAZAR UMKM", subtitle: "TOAPAYA UTARA", href: "#" },
  { date: "12", month: "SEP", title: "PELATIHAN DIGITAL", subtitle: "UNTUK PELAKU USAHA LOKAL", href: "#" },
  { date: "28", month: "OCT", title: "PAMERAN KERAJINAN", subtitle: "FESTIVAL BUDAYA BINTAN", href: "#" }
];

export default function Agenda() {
  return (
    <section id="agenda" className="py-24 bg-brand-background text-brand-dark border-t border-brand-dark/10">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <p className="font-sans text-xs tracking-[0.2em] uppercase opacity-50 mb-16">05 / AGENDA</p>
        
        <div className="flex flex-col">
          {AGENDAS.map((agenda, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link href={agenda.href} className="group block border-b border-brand-dark/10 py-12 hover:border-brand-accent transition-colors duration-500">
                <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-24">
                  {/* Date */}
                  <div className="flex items-baseline gap-4 w-48 shrink-0">
                    <span className="font-serif text-6xl md:text-7xl group-hover:text-brand-accent transition-colors duration-500">{agenda.date}</span>
                    <span className="font-sans text-xl md:text-2xl opacity-60 tracking-widest uppercase">{agenda.month}</span>
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="font-serif text-3xl md:text-5xl mb-2 group-hover:translate-x-4 transition-transform duration-500">{agenda.title}</h3>
                    <p className="font-sans text-sm tracking-widest uppercase opacity-60 group-hover:translate-x-4 transition-transform duration-500 delay-75">{agenda.subtitle}</p>
                  </div>

                  {/* CTA */}
                  <div className="hidden md:flex items-center gap-4 text-sm font-sans tracking-widest uppercase opacity-0 group-hover:opacity-100 group-hover:text-brand-accent transition-all duration-500">
                    <span>Lihat agenda</span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

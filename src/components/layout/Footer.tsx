import Link from "next/link";
import { Instagram, Facebook } from "@/components/ui/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-background pt-32 pb-12 rounded-t-[3rem] mt-24">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-32">
          <div className="md:w-1/2">
            <h2 className="font-serif text-5xl md:text-8xl leading-none mb-6">TOAPAYA<br/>UTARA</h2>
            <p className="font-sans opacity-70 max-w-sm text-lg">
              Katalog digital UMKM Desa Toapaya Utara.
            </p>
          </div>

          <div className="md:w-1/2 flex flex-col md:flex-row gap-16 md:justify-end">
            {/* Navigation */}
            <div>
              <h4 className="font-sans text-xs uppercase tracking-widest opacity-40 mb-6">Navigasi</h4>
              <ul className="flex flex-col gap-4 font-sans">
                <li><Link href="/" className="hover:opacity-60 transition-opacity">Beranda</Link></li>
                <li><Link href="#umkm" className="hover:opacity-60 transition-opacity">Jelajah UMKM</Link></li>
                <li><Link href="#produk" className="hover:opacity-60 transition-opacity">Produk</Link></li>
                <li><Link href="#cerita" className="hover:opacity-60 transition-opacity">Cerita</Link></li>
                <li><Link href="#agenda" className="hover:opacity-60 transition-opacity">Agenda</Link></li>
                <li><Link href="#desa" className="hover:opacity-60 transition-opacity">Tentang Desa</Link></li>
              </ul>
            </div>

            {/* Contact & Socials */}
            <div>
              <h4 className="font-sans text-xs uppercase tracking-widest opacity-40 mb-6">Kontak</h4>
              <ul className="flex flex-col gap-4 font-sans mb-8">
                <li><a href="mailto:info@toapayautara.desa.id" className="hover:opacity-60 transition-opacity">Email</a></li>
                <li><a href="https://wa.me/6281234567890" className="hover:opacity-60 transition-opacity">WhatsApp</a></li>
              </ul>
              
              <h4 className="font-sans text-xs uppercase tracking-widest opacity-40 mb-6">Sosial</h4>
              <ul className="flex gap-4 font-sans">
                <li>
                  <a href="#" className="hover:opacity-60 transition-opacity flex items-center justify-center">
                    <Instagram className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-60 transition-opacity flex items-center justify-center">
                    <Facebook className="w-5 h-5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-brand-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans uppercase tracking-widest opacity-50">
          <p>© 2026 DESA TOAPAYA UTARA</p>
          <p>BINTAN • KEPULAUAN RIAU</p>
        </div>

      </div>
    </footer>
  );
}

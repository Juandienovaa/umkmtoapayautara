import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Phone } from "lucide-react";
import { MOCK_UMKM_DATA } from "@/data/mockData";

export function generateStaticParams() {
  return MOCK_UMKM_DATA.map((umkm) => ({
    id: umkm.id,
  }));
}

export default async function UMKMDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const umkm = MOCK_UMKM_DATA.find(u => u.id === id);

  if (!umkm) {
    notFound();
  }

  return (
    <article className="bg-brand-background min-h-screen pb-32">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[80vh] bg-brand-dark overflow-hidden">
        <Image
          src={umkm.image}
          alt={umkm.name}
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />
        
        <Link href="/#explore" className="absolute top-24 left-6 md:left-12 z-10 flex items-center gap-2 text-brand-white/80 hover:text-brand-white transition-colors font-mono text-xs tracking-widest uppercase bg-brand-dark/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
          <ArrowLeft className="w-4 h-4" /> Kembali
        </Link>
        
        <div className="absolute inset-0 p-6 md:p-16 flex flex-col justify-end text-brand-white container mx-auto max-w-7xl">
          <span className="font-mono text-sm tracking-widest uppercase text-brand-accent mb-4 block">
            {umkm.category}
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-[1.1] max-w-4xl">
            {umkm.name}
          </h1>
          <p className="font-sans text-lg md:text-xl text-brand-white/80 max-w-2xl leading-relaxed">
            {umkm.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Main Content */}
          <div className="lg:col-span-8 flex flex-col gap-24">
            
            {/* Tentang Usaha */}
            <section>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-forest mb-8">Tentang Usaha</h2>
              <div className="prose prose-lg prose-p:text-brand-dark/80 prose-p:leading-relaxed max-w-none font-sans">
                <p>{umkm.story}</p>
                <p>
                  Berkomitmen untuk terus berinovasi tanpa melupakan akar tradisi yang sudah dibangun selama bertahun-tahun. Kami selalu mengutamakan kualitas dalam setiap karya dan produk yang dihasilkan untuk kepuasan pelanggan.
                </p>
              </div>
            </section>

            {/* Produk */}
            <section>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-forest mb-8">Produk</h2>
              {umkm.products.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
                  {umkm.products.map(product => (
                    <div key={product.id} className="group">
                      <div className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-brand-sand/20 mb-3 sm:mb-6">
                        <Image 
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between items-start mb-1 sm:mb-2 gap-1 sm:gap-2">
                        <h3 className="font-serif text-lg sm:text-2xl group-hover:text-brand-accent transition-colors leading-tight">{product.name}</h3>
                        {product.price && (
                          <span className="font-mono text-xs sm:text-base font-bold text-brand-forest shrink-0">Rp {product.price.toLocaleString("id-ID")}</span>
                        )}
                      </div>
                      <p className="font-sans text-xs sm:text-base font-medium text-brand-dark/80 sm:text-brand-dark/90 leading-relaxed line-clamp-3 sm:line-clamp-none">{product.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-brand-dark/60 font-sans">Belum ada produk yang ditambahkan.</p>
              )}
            </section>

            {/* Cerita Pemilik */}
            <section className="bg-brand-earth/10 rounded-3xl p-8 md:p-12 border border-brand-earth/20">
              <h2 className="font-serif text-3xl md:text-4xl text-brand-forest mb-12">Cerita Pemilik</h2>
              <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
                <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-full overflow-hidden relative border-4 border-brand-sand/50">
                  <Image 
                    src={umkm.image} // Reusing image as placeholder for owner
                    alt={umkm.owner}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-3xl mb-2">{umkm.owner}</h3>
                  <p className="font-mono text-xs uppercase tracking-widest text-brand-earth mb-6">Pendiri / Pemilik Usaha</p>
                  <p className="font-sans text-brand-dark/80 leading-relaxed text-lg italic">
                    "Setiap karya yang kami hasilkan bukan hanya tentang produk, melainkan tentang cerita, dedikasi, dan harapan untuk terus membawa manfaat bagi masyarakat sekitar."
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar / Lokasi */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-dark/5">
              <h3 className="font-serif text-2xl mb-8 border-b border-brand-dark/10 pb-4">Informasi & Lokasi</h3>
              
              <div className="flex flex-col gap-6 mb-8">
                <div className="flex gap-4 items-start">
                  <MapPin className="w-5 h-5 text-brand-earth shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm mb-1 uppercase tracking-wider font-mono">Alamat</p>
                    <p className="text-brand-dark/70 font-sans">{umkm.location}</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <Phone className="w-5 h-5 text-brand-earth shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm mb-1 uppercase tracking-wider font-mono">Kontak</p>
                    <p className="text-brand-dark/70 font-sans">{umkm.whatsapp ? `+${umkm.whatsapp}` : "Tidak tersedia"}</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-brand-dark/10">
                <a 
                  href={`https://wa.me/${umkm.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-brand-forest text-brand-white py-4 rounded-full font-semibold tracking-wide hover:bg-brand-accent hover:text-brand-dark transition-colors"
                >
                  CHAT VIA WHATSAPP
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}

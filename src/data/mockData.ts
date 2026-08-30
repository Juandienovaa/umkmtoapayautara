export type Product = {
  id: string;
  name: string;
  description: string;
  price?: number;
  image: string;
  category: string;
};

export type UMKM = {
  id: string;
  name: string;
  category: string;
  description: string;
  story: string;
  image: string;
  owner: string;
  location: string;
  phone?: string;
  whatsapp?: string;
  instagram?: string;
  products: Product[];
};

export const MOCK_UMKM_DATA: UMKM[] = [

  {
    id: "umkm-06",
    name: "UMKM Bunda 2L",
    category: "Kuliner",
    description: "UMKM lokal yang memproduksi Rengginang Ubi yang renyah dan gurih dengan resep tradisional.",
    story: "Berawal dari resep rumahan yang diolah dengan teliti, Ibu Sugianti memproduksi rengginang ubi yang menjadi camilan favorit bagi warga sekitar. Proses pembuatannya yang alami tanpa bahan pengawet berbahaya membuatnya aman dan disukai banyak orang.",
    image: "/images/rengginang.jpeg",
    owner: "Ibu Sugianti",
    location: "Desa Toapaya Utara",
    whatsapp: "6283823015849",
    products: [
      {
        id: "prod-07",
        name: "Rengginang Ubi",
        description: "Komposisi ubi, bawang putih, garam, penyedap, pewarna. Tersedia kemasan 500g (Rp 18.000) dan 1kg (Rp 35.000).",
        price: 18000,
        image: "/images/rengginang.jpeg",
        category: "Makanan Ringan"
      },
      {
        id: "prod-34",
        name: "Kuping Gajah",
        description: "Camilan tradisional kuping gajah yang renyah dan manis. Sangat cocok untuk teman santai atau suguhan tamu.",
        image: "/images/kuping-gajah.jpeg",
        category: "Makanan Ringan"
      }
    ]
  },
  {
    id: "umkm-07",
    name: "NOFA SNACK",
    category: "Kuliner",
    description: "Memproduksi aneka peyek gurih dan renyah dengan varian kacang, bilis, dan campur.",
    story: "Nofa Nurlinda memulai usaha Nofa Snack untuk menghadirkan camilan peyek tradisional yang nikmat. Tersedia dalam varian rasa original dan pedas, cocok sebagai pelengkap makan atau camilan harian.",
    image: "/images/keringan-tempe.jpeg",
    owner: "Nofa Nurlinda",
    location: "Desa Toapaya Utara",
    whatsapp: "6283186176351",
    products: [
      {
        id: "prod-08",
        name: "Aneka Peyek",
        description: "Peyek Kacang (Rp 120.000/kg), Peyek Bilis (Rp 130.000/kg), Peyek Campur. Tersedia varian original dan pedas (+Rp 5.000/kg).",
        price: 120000,
        image: "/images/keringan-tempe.jpeg",
        category: "Makanan Ringan"
      },
      {
        id: "prod-27",
        name: "Jajanan Pasar & Gorengan",
        description: "Risoles, Martabak telur mini, Martabak mi, Bakwan. Harga Rp 1.000/pcs.",
        price: 1000,
        image: "/images/nofa-snack.jpeg",
        category: "Makanan Ringan"
      },
      {
        id: "prod-28",
        name: "Kue Basah & Manis",
        description: "Putu ayu, Lapis, Kusoi, Donat. Harga Rp 1.000/pcs.",
        price: 1000,
        image: "/images/nofa-snack2.jpeg",
        category: "Makanan Ringan"
      },
      {
        id: "prod-29",
        name: "Gorengan Tradisional",
        description: "Jadah goreng, Tepung gomak, dan aneka jajanan lainnya. Harga Rp 1.000/pcs.",
        price: 1000,
        image: "/images/nofa-snack3.jpeg",
        category: "Makanan Ringan"
      }
    ]
  },
  {
    id: "umkm-08",
    name: "Opak Setia",
    category: "Kuliner",
    description: "Memproduksi opak tradisional yang gurih, renyah, dan terjangkau.",
    story: "Ibu Setiyawarni mengolah resep tradisional untuk menciptakan Opak Setia. Camilan opak yang renyah ini dibuat dari bahan pilihan dan menjadi favorit banyak orang sebagai pelengkap hidangan atau teman bersantai.",
    image: "/images/opak.jpeg",
    owner: "Setiyawarni",
    location: "Desa Toapaya Utara",
    whatsapp: "6287841007736",
    products: [
      {
        id: "prod-09",
        name: "Opak Renyah",
        description: "Opak tradisional yang gurih dan renyah. Cocok untuk dinikmati bersama teh atau kopi, maupun sebagai pelengkap makan.",
        price: 10000,
        image: "/images/opak.jpeg",
        category: "Makanan Ringan"
      }
    ]
  },
  {
    id: "umkm-09",
    name: "UMKM Mawar",
    category: "Kuliner",
    description: "Produsen tempe rumahan berkualitas dengan bahan kedelai pilihan.",
    story: "Ibu Asni secara konsisten memproduksi tempe berkualitas tinggi setiap harinya. Dengan proses fermentasi alami, tempe UMKM Mawar selalu segar, padat, dan memiliki cita rasa khas kedelai murni.",
    image: "/images/tempe.jpeg",
    owner: "Asni",
    location: "Desa Toapaya Utara",
    whatsapp: "6287888020360",
    products: [
      {
        id: "prod-10",
        name: "Tempe Segar",
        description: "Tempe segar buatan rumah tangga yang diolah dari kacang kedelai murni. Kaya protein nabati dan sangat nikmat saat digoreng atau dimasak. Harga Rp 25.000.",
        price: 25000,
        image: "/images/tempe.jpeg",
        category: "Bahan Makanan"
      }
    ]
  },
  {
    id: "umkm-10",
    name: "Setia Rasa Snack & Catering",
    category: "Kuliner",
    description: "Melayani berbagai pesanan kue basah, snack box, nasi kotak, hingga tumpeng untuk berbagai acara.",
    story: "Ibu Riska Dewi Yuriati membangun Setia Rasa Snack & Catering untuk melayani kebutuhan konsumsi berbagai acara di Desa Toapaya Utara dan sekitarnya. Dengan menu yang sangat bervariasi dan harga terjangkau, Setia Rasa menjadi andalan warga untuk urusan katering.",
    image: "/images/Setia-Rasa-snack&catering.jpeg",
    owner: "Riska Dewi Yuriati",
    location: "Desa Toapaya Utara",
    whatsapp: "6281275021377",
    products: [
      {
        id: "prod-11",
        name: "Kue Basah & Jajanan Pasar",
        description: "Tersedia Risoles Kentang (Rp 1.000/pcs), Risoles Ayam (Rp 2.500/pcs), Nona Manis Ungu (Rp 1.000/pcs) dan aneka kue basah lainnya (Rp 1.000 - Rp 2.000/pcs).",
        price: 1000,
        image: "/images/Setia-Rasa-snack&catering.jpeg",
        category: "Makanan Ringan"
      },
      {
        id: "prod-12",
        name: "Paket Katering & Snack Box",
        description: "Menerima pesanan Snack Box (Mulai Rp 8.000/box), Nasi Kotak (Mulai Rp 25.000/kotak), dan Nasi Tumpeng (Mulai Rp 180.000).",
        price: 8000,
        image: "/images/Setia-Rasa-snack&catering.jpeg",
        category: "Katering"
      }
    ]
  },
  {
    id: "umkm-11",
    name: "Desantfood",
    category: "Kuliner",
    description: "Menyediakan aneka cemilan, makanan berat, gorengan, minuman, hingga sayuran dengan harga terjangkau.",
    story: "Desantfood hadir untuk memenuhi selera masyarakat dengan pilihan menu yang sangat beragam. Mulai dari jajanan ringan hingga makanan berat, semuanya diolah dengan bahan berkualitas dan disajikan dengan rasa yang menggugah selera.",
    image: "/images/desantfood.jpeg",
    owner: "Dewi Nur yani",
    location: "Desa Toapaya Utara",
    whatsapp: "6283188428528",
    products: [
      {
        id: "prod-13",
        name: "Aneka Risol & Dimsum",
        description: "Risol mayo sosis telur (20k/5pcs), risol sayur/coklat, sosis solo jumbo (22k/5pcs), dimsum bakar/kukus/mercon (20k).",
        price: 16000,
        image: "/images/risol.jpeg",
        category: "Makanan Ringan"
      },
      {
        id: "prod-14",
        name: "Pisang Keju & Cemilan Manis",
        description: "Pisang keju aneka topping (20k-25k), banana roll/nuget (16k-18k).",
        price: 16000,
        image: "/images/pisang-keju.jpeg",
        category: "Makanan Ringan"
      },
      {
        id: "prod-15",
        name: "Aneka Lauk & Seafood",
        description: "Pilihan ayam, lele, ati ampela, cumi, udang, ceker (22k-40k). Dimasak bakar, geprek, kribo, lada hitam, dll.",
        price: 22000,
        image: "/images/ceker.jpeg",
        category: "Makanan Berat"
      },
      {
        id: "prod-16",
        name: "Gorengan & Jajanan Gurih",
        description: "Tempe mendoan, bakwan, cireng ayam/ati, tahu isi, sempol ikan (mulai 15k). Tersedia juga aneka tusuk-tusuk (bakso, sosis, nuget).",
        price: 15000,
        image: "/images/gorengan.jpeg",
        category: "Makanan Ringan"
      },
      {
        id: "prod-17",
        name: "Sayuran & Ubi Bilis",
        description: "Ubi bilis sambal (17k), tumis pokcoy, tumis pepaya, sambal tempe bilis (mulai 15k).",
        price: 15000,
        image: "/images/ubi-balado.jpeg",
        category: "Makanan Berat"
      }
    ]
  },
  {
    id: "umkm-12",
    name: "Pempek Bunda Aqila",
    category: "Kuliner",
    description: "Pempek ikan tenggiri asli dengan tekstur kenyal di luar dan lembut di dalam.",
    story: "Pempek adalah makanan yang terbuat dari daging ikan giling dan tepung sagu pilihan. Disajikan dengan kuah cuko khas yang rasanya asam, manis, pedas, dan gurih. Cocok untuk cemilan, sarapan, sampai menu makan siang.",
    image: "/images/pempekbundaqila.jpeg",
    owner: "Surti",
    location: "Desa Toapaya Utara",
    whatsapp: "6281364995681",
    products: [
      {
        id: "prod-18",
        name: "Paket Pempek Porsi",
        description: "Satu porsi pempek campur lengkap dengan kuah cuko mantap. Harga Rp 10.000/porsi.",
        price: 10000,
        image: "/images/pempekbundaqila.jpeg",
        category: "Makanan Ringan"
      },
      {
        id: "prod-19",
        name: "Pempek Lenjer",
        description: "Bentuk panjang, isian full daging ikan. (Rp 2.000/pcs)",
        price: 2000,
        image: "/images/pempekbundaqila.jpeg",
        category: "Makanan Ringan"
      },
      {
        id: "prod-20",
        name: "Pempek Kapal Selam",
        description: "Ukuran besar, isi telur ayam. (Rp 4.000/pcs)",
        price: 4000,
        image: "/images/pempekbundaqila.jpeg",
        category: "Makanan Ringan"
      }
    ]
  },
  {
    id: "umkm-13",
    name: "Jamu Herbal Bunda Umay",
    category: "Kuliner",
    description: "Memproduksi aneka jamu herbal tradisional dari bahan-bahan rempah pilihan yang menyegarkan dan menyehatkan.",
    story: "Ibu Darniti meracik jamu herbal tradisional dengan resep warisan yang kaya manfaat. Menggunakan bahan-bahan alami seperti kunyit, kencur, jahe, dan rempah lainnya, Jamu Bunda Umay dipercaya dapat menjaga daya tahan tubuh dan menyembuhkan berbagai keluhan kesehatan.",
    image: "/images/jamu.jpeg",
    owner: "Darniti",
    location: "Desa Toapaya Utara",
    whatsapp: "6283809534287",
    products: [
      {
        id: "prod-21",
        name: "Kunyit Asam",
        description: "Komposisi: Kunyit, asam, serai, jahe, daun manis, kapulaga, bunga lawang. Harga: 250g (Rp 10.000) / 350g (Rp 12.000).",
        price: 10000,
        image: "/images/jamu.jpeg",
        category: "Minuman"
      },
      {
        id: "prod-22",
        name: "Kunyit Putih",
        description: "Komposisi: Cendawan teh, daun sirsak, kunyit putih. Harga: 250g (Rp 13.000) / 380g (Rp 16.000).",
        price: 13000,
        image: "/images/jamu.jpeg",
        category: "Minuman"
      },
      {
        id: "prod-23",
        name: "Beras Kencur",
        description: "Komposisi: Beras, kencur, jahe, biji kedawung, gula merah. Harga mulai Rp 13.000 - Rp 15.000.",
        price: 13000,
        image: "/images/jamu.jpeg",
        category: "Minuman"
      },
      {
        id: "prod-24",
        name: "Jamu Pegal Linu",
        description: "Komposisi: Daun kumis kucing, brotowali, temulawak, dan rempah alami. Meredakan pegal linu.",
        price: 15000,
        image: "/images/jamu.jpeg",
        category: "Minuman"
      },
      {
        id: "prod-25",
        name: "Jamu Kewanitaan",
        description: "Komposisi: Kunyit, asam, pinang muda, kayu rapet, sirih merah, rempah (Maja Lani Komplit).",
        price: 15000,
        image: "/images/jamu.jpeg",
        category: "Minuman"
      },
      {
        id: "prod-26",
        name: "Rimpang Komplit",
        description: "Komposisi: Kunyit, jahe, serai, lengkuas, kapulaga, jintan hitam, kayu manis.",
        price: 15000,
        image: "/images/jamu.jpeg",
        category: "Minuman"
      }
    ]
  },
  {
    id: "umkm-14",
    name: "Lumer.hs",
    category: "Kuliner",
    description: "Menyediakan aneka dessert kekinian, brownies custom, dan cemilan manis gurih.",
    story: "Aisyah Apriliani merintis Lumer.hs untuk menghadirkan camilan kekinian yang lumer di mulut. Mulai dari fudgy brownies custom untuk hari spesial hingga jajanan ringan sehari-hari, semua dibuat dengan bahan berkualitas dan penuh cinta.",
    image: "/images/lumer.hs.jpeg",
    owner: "Aisyah Apriliani",
    location: "Desa Toapaya Utara",
    whatsapp: "6281277834694",
    products: [
      {
        id: "prod-30",
        name: "Fudgy Brownies & Dessert Box",
        description: "Fudgy brownies dengan aneka topping, bisa custom untuk ulang tahun/tunangan. Tersedia juga Dessert Box dan Salad buah. Harga bervariasi.",
        price: 20000,
        image: "/images/lumer.hs.jpeg",
        category: "Makanan Ringan"
      },
      {
        id: "prod-31",
        name: "Pizza Roti Tawar & Corndog",
        description: "Cemilan gurih Pizza roti tawar dan Corndog mini yang lumer. Harga bervariasi.",
        price: 5000,
        image: "/images/pizza.jpeg",
        category: "Makanan Ringan"
      },
      {
        id: "prod-32",
        name: "Lumpia & Keripik Pisang Coklat",
        description: "Lumpia pisang coklat dan keripik pisang coklat lumer yang manis dan krispi.",
        price: 5000,
        image: "/images/lumpia-pisang.jpeg",
        category: "Makanan Ringan"
      },
      {
        id: "prod-33",
        name: "Es Kul-Kul",
        description: "Es kul-kul buah segar berbalut coklat tebal yang nikmat. Harga mulai 2rb.",
        price: 2000,
        image: "/images/eskulkul.jpeg",
        category: "Makanan Ringan"
      }
    ]
  }
];

export const CATEGORIES = [
  "Semua",
  "Kuliner",
  "Kerajinan",
  "Pertanian",
  "Jasa",
  "Fashion",
  "Produk Rumahan",
  "Lainnya"
];

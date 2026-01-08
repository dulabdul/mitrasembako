// data/content.ts

export const SITE_CONFIG = {
  name: "Mitra Sembako",
  description: "Pusat grosir sembako termurah. Stok lengkap, siap kirim seluruh Indonesia",
  whatsapp: "6281234567890", // Ganti nomor asli
  email: "info@mitrasembako.web.id",
  address: "Jakarta, Indonesia",
  url: "https://www.mitrasembako.web.id"
};

export const CONTENT = {
  hero: {
    alt: "Mitra Sembako Official Banner"
  },
  stats: [
    { label: "Pelanggan Puas", value: "10,000+" },
    { label: "Kota Terjangkau", value: "50+" },
    { label: "Produk Terjual", value: "1Jt+" },
    { label: "Mitra Toko", value: "500+" }
  ],
  about: {
    title: "Tentang Kami",
    headline: "Mitra Sembako - Pusat Grosir Termurah",
    paragraphs: [
      "Mitra Sembako adalah pusat grosir sembako termurah yang menyediakan berbagai kebutuhan bahan pokok dengan harga kompetitif, kualitas terbaik, dan layanan pengiriman ke seluruh Indonesia.",
      "Dengan sistem pemesanan yang mudah melalui WhatsApp, kami memastikan setiap pelanggan mendapatkan pengalaman belanja yang cepat, aman, dan nyaman.",
      "Kami berkomitmen menjadi mitra terbaik bagi para pelaku usaha, dengan menyediakan produk berkualitas, harga transparan, serta pelayanan profesional."
    ],
    features: ["Harga Grosir", "Stok Ready", "Produk Berkualitas"]
  },
  whyChooseUs: [
    {
      title: "Produk Lengkap",
      desc: "Semua kebutuhan sembako tersedia dalam satu tempat dengan standar kualitas terbaik.",
      icon: "Package"
    },
    {
      title: "Pemesanan Mudah",
      desc: "Proses pemesanan mudah lewat online cukup klik sekali, pesanan langsung diproses tanpa ribet.",
      icon: "MousePointerClick"
    },
    {
      title: "Pengiriman Luas",
      desc: "Layanan pengiriman produk kami cepat, aman, dan menjangkau berbagai daerah di Indonesia.",
      icon: "Truck"
    }
  ],
  // BAGIAN INI YANG SEBELUMNYA HILANG:
  cta: {
    headline: "Mulai Belanja Sembako Grosir Termurah Sekarang!",
    subheadline: "Dapatkan penawaran terbatas untuk pembelian besar! Setiap transaksi grosir akan mendapatkan harga ekstra murah dengan jaminan stok aman dan pengiriman cepat ke seluruh Indonesia",
    buttonText: "Hubungi Kami Sekarang"
  },
  testimonials: [
    { 
      name: "Bernard Siregar", 
      role: "Pemilik Toko Kelontong, Surabaya", 
      text: "Harga grosirnya juara, dibanding tempat lain ini paling masuk akal. Barang juga selalu dipacking rapi dan aman sampai toko.", 
      image: "/images/face_1.jpg" 
    },
    { 
      name: "Ani Purwa", 
      role: "Pengusaha Katering, Jakarta", 
      text: "Udah langganan hampir 2 tahun dan sejauh ini nggak pernah kecewa. Cocok banget buat toko kecil kayak punya saya, stok aman dan lancar.", 
      image: "/images/face_2.jpg" 
    },
    { 
      name: "Regita", 
      role: "Agen Sembako, Medan", 
      text: "Adminnya fast response, ramah, dan penjelasannya gampang dipahami. Transaksi juga simpel, nggak ribet. Recommended banget.", 
      image: "/images/face_3.jpg" 
    }
  ]
};
import type { Metadata } from 'next';
import { fontSans, fontHeading } from './fonts';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWidget from '@/components/features/FloatingWidget';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/data/content';
import './globals.css';

// SETUP METADATA GLOBAL
export const metadata: Metadata = {
  // 1. Sangat Penting: Base URL untuk resolve semua link relatif (termasuk OG Image)
  metadataBase: new URL(SITE_CONFIG.url),

  title: {
    default: 'Mitra Sembako - Pusat Grosir Termurah & Terlengkap',
    template: '%s | Mitra Sembako',
  },
  description: SITE_CONFIG.description,
  keywords: [
    'grosir sembako',
    'distributor minyak goreng',
    'beras murah',
    'gula pasir grosir',
    'agen sembako',
  ],

  // 2. OpenGraph Config
  // Catatan: Karena ada file 'opengraph-image.tsx', Next.js otomatis
  // mengisi property 'images'. Kita hanya perlu define property lain.
  openGraph: {
    title: 'Mitra Sembako - Pusat Grosir',
    description:
      'Belanja sembako grosir harga termurah. Stok Ready & Kirim Seluruh Indonesia.',
    url: SITE_CONFIG.url,
    siteName: 'Mitra Sembako',
    locale: 'id_ID',
    type: 'website',
  },

  // 3. Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Mitra Sembako',
    description: 'Pusat Grosir Sembako Termurah',
    // Images juga otomatis diambil dari opengraph-image.tsx
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='id'
      className='scroll-pt-24'>
      <body
        className={`${fontSans.variable} ${fontHeading.variable} antialiased`}>
        <Navbar />
        <main className='min-h-screen'>{children}</main>
        <Footer />
        <FloatingWidget />
        <JsonLd />
      </body>
    </html>
  );
}

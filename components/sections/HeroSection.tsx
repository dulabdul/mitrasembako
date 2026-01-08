import Image from 'next/image';
import Container from '../ui/Container';
import { CONTENT } from '@/data/content';

export default function HeroSection() {
  return (
    // Menggunakan py-6 md:py-10 untuk memberi jarak dari Navbar (sesuai referensi desktop)
    <section className='bg-white py-6 md:py-10'>
      <Container>
        {/* Wrapper untuk rounded corners dan shadow halus */}
        <div className='relative w-full overflow-hidden rounded-2xl md:rounded-3xl shadow-sm border border-gray-100'>
          <Image
            src='/images/hero.jpg' // Pastikan Anda ganti file ini dengan banner asli Anda
            alt={CONTENT.hero.alt}
            width={1280}
            height={600} // Estimasi rasio banner dari screenshot, akan auto-adjust karena class w-full h-auto
            className='w-full h-auto object-cover'
            priority // Load prioritas tinggi untuk LCP (Largest Contentful Paint)
            sizes='(max-width: 768px) 100vw, 1280px'
          />
        </div>
      </Container>
    </section>
  );
}

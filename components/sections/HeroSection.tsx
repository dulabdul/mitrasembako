import Image from 'next/image';
import Container from '../ui/Container';

export default function HeroSection() {
  return (
    <section className='relative w-full aspect-[21/9] bg-gray-100 overflow-hidden'>
      {/* Placeholder for User Banner */}
      <div className='absolute inset-0'>
        <Image
          src='/images/hero.jpg' // User akan ganti ini
          alt='Mitra Sembako Banner Utama'
          fill
          className='object-cover object-center'
          priority
          sizes='100vw'
          quality={90}
        />
        {/* Overlay gradient agar text navbar terbaca jika banner terang */}
        <div className='absolute inset-0 bg-gradient-to-b from-black/10 to-transparent' />
      </div>

      {/* Konten Hero opsional jika banner hanya gambar polos, 
            tapi user minta purely image banner, jadi kosongkan content */}
    </section>
  );
}

import Image from 'next/image';
import Container from '../ui/Container';
import { CONTENT } from '@/data/content';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className='py-24 bg-[var(--color-background)] overflow-hidden'>
      <Container>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-heading)]'>
            Testimoni Pelanggan
          </h2>
          <p className='text-gray-600'>Apa kata pelanggan tentang kami?</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {CONTENT.testimonials.map((testi, idx) => (
            <div
              key={idx}
              className='bg-white p-8 rounded-2xl shadow-sm relative mt-8 md:mt-0'>
              <div className='absolute -top-6 left-8 bg-[var(--color-secondary)] p-3 rounded-full text-white shadow-md'>
                <Quote className='w-6 h-6 fill-current' />
              </div>

              <p className='text-gray-600 italic mb-8 mt-4 leading-relaxed'>
                {testi.text}
              </p>

              <div className='flex items-center gap-4 border-t border-gray-100 pt-6'>
                <div className='relative w-12 h-12 flex-shrink-0'>
                  <Image
                    src={testi.image}
                    alt={testi.name}
                    fill
                    className='rounded-full object-cover bg-gray-200'
                    sizes='48px'
                  />
                </div>
                <div>
                  <h4 className='font-bold text-gray-900 text-sm'>
                    {testi.name}
                  </h4>
                  <p className='text-xs text-gray-500'>{testi.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

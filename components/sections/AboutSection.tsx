import Image from 'next/image';
import Container from '../ui/Container';
import { CONTENT } from '@/data/content';
import { CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section
      id='about'
      className='py-20 md:py-28 bg-[var(--color-background)]'>
      <Container>
        <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-20'>
          {/* Image Side */}
          <div className='w-full lg:w-1/2 relative'>
            <div className='aspect-square relative rounded-2xl overflow-hidden shadow-2xl'>
              <Image
                src='/images/about.jpg'
                alt='Tentang Mitra Sembako'
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, 50vw'
              />
            </div>
            {/* Decorative Element */}
            <div className='absolute -bottom-6 -right-6 w-48 h-48 bg-[var(--color-secondary)] rounded-2xl -z-10 hidden md:block' />
          </div>

          {/* Text Side */}
          <div className='w-full lg:w-1/2'>
            <h4 className='text-[var(--color-primary)] font-bold uppercase tracking-wider mb-2'>
              {CONTENT.about.title}
            </h4>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-gray-900 font-[family-name:var(--font-heading)]'>
              {CONTENT.about.headline}
            </h2>

            <div className='space-y-4 text-gray-600 text-lg leading-relaxed mb-8'>
              {CONTENT.about.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {CONTENT.about.features.map((feature, idx) => (
                <li
                  key={idx}
                  className='flex items-center gap-3'>
                  <CheckCircle2 className='w-6 h-6 text-[var(--color-secondary)]' />
                  <span className='font-semibold text-gray-900'>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

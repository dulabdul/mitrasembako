'use client';
import Container from '../ui/Container';
import { CONTENT } from '@/data/content';

export default function StatsSection() {
  return (
    <section className='bg-white py-12 border-b border-gray-100'>
      <Container>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
          {CONTENT.stats.map((stat, index) => (
            <div
              key={index}
              className='flex flex-col items-center'>
              <span className='text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-2 block'>
                {stat.value}
              </span>
              <span className='text-sm md:text-base text-gray-600 font-medium uppercase tracking-wider'>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

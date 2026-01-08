import Container from '../ui/Container';
import { CONTENT } from '@/data/content';
import { Package, MousePointerClick, Truck } from 'lucide-react';

const icons = {
  Package: Package,
  MousePointerClick: MousePointerClick,
  Truck: Truck,
};

export default function WhyChooseUs() {
  return (
    <section className='py-24 bg-white'>
      <Container>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-heading)]'>
            Mengapa Memilih Kami?
          </h2>
          <p className='text-gray-600 text-lg'>
            Kami berdedikasi memberikan pelayanan terbaik untuk kelancaran
            bisnis Anda.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {CONTENT.whyChooseUs.map((item, idx) => {
            const IconComponent =
              icons[item.icon as keyof typeof icons] || Package;
            return (
              <div
                key={idx}
                className='bg-[var(--color-background)] p-8 rounded-2xl transition hover:-translate-y-1 hover:shadow-lg border border-transparent hover:border-gray-100'>
                <div className='w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm text-[var(--color-primary)]'>
                  <IconComponent className='w-8 h-8' />
                </div>
                <h3 className='text-xl font-bold mb-4 text-gray-900'>
                  {item.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

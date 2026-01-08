import Container from '../ui/Container';
import Button from '../ui/Button';
import { CONTENT, SITE_CONFIG } from '@/data/content';

export default function CtaBanner() {
  return (
    <section className='relative py-24 overflow-hidden'>
      {/* Background Image (Placeholder) */}
      <div
        className="absolute inset-0 bg-[url('/images/cta-bg.jpg')] bg-cover bg-center bg-fixed"
        aria-hidden='true'
      />
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/70' />

      <Container className='relative z-10 text-center text-white'>
        <span className='inline-block py-1 px-3 rounded-full bg-[var(--color-secondary)] text-black text-xs font-bold uppercase tracking-wider mb-4'>
          {SITE_CONFIG.name}
        </span>
        <h2 className='text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight font-[family-name:var(--font-heading)]'>
          {CONTENT.cta.headline}
        </h2>
        <p className='text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto'>
          {CONTENT.cta.subheadline}
        </p>
        <Button
          href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
          target='_blank'
          variant='primary'
          size='lg'
          className='shadow-xl shadow-red-900/20'>
          {CONTENT.cta.buttonText}
        </Button>
      </Container>
    </section>
  );
}

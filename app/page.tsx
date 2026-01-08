import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import AboutSection from '@/components/sections/AboutSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import CtaBanner from '@/components/sections/CtaBanner';
import ProductSection from '@/components/sections/ProductSection';
import Testimonials from '@/components/sections/Testimonials';
import ContactSection from '@/components/sections/ContactSection';
import WelcomeSection from '@/components/sections/WelcomeSection';

export default function Home() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WholesaleStore',
            name: 'Mitra Sembako',
            image: 'https://mitrasembako.web.id/logo.png',
            description: 'Pusat grosir sembako termurah di Indonesia.',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'ID',
            },
            priceRange: '$$',
          }),
        }}
      />

      <HeroSection />
      <WelcomeSection />
      <ProductSection />
      {/* <StatsSection /> */}
      <CtaBanner />
      <AboutSection />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
    </>
  );
}

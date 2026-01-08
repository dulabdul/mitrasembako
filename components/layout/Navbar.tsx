'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingCart } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { SITE_CONFIG } from '@/data/content';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Produk', href: '#products' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav className='sticky top-0 z-40 w-full bg-white/95 backdrop-blur shadow-sm'>
      <Container>
        <div className='flex h-20 items-center justify-between'>
          {/* Logo */}
          <Link
            href='/'
            className='flex items-center gap-2 group'>
            <div className='bg-[var(--color-primary)] p-2 rounded-lg text-white'>
              <ShoppingCart className='w-6 h-6' />
            </div>
            <span className='text-xl font-bold tracking-tight text-gray-900 group-hover:text-[var(--color-primary)] transition'>
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center gap-8'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className='text-sm font-medium text-gray-700 hover:text-[var(--color-primary)] transition'>
                {link.name}
              </Link>
            ))}
            <Button
              variant='whatsapp'
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              size='sm'>
              Chat WA
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className='md:hidden p-2 text-gray-600'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle menu'>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden border-t border-gray-100 bg-white'>
          <Container className='py-4 flex flex-col gap-4'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className='text-base font-medium text-gray-700 py-2 hover:text-[var(--color-primary)]'>
                {link.name}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </nav>
  );
}

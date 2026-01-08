import { ImageResponse } from 'next/og';
import { SITE_CONFIG } from '@/data/content';

// Konfigurasi Route
export const runtime = 'edge';

// Metadata Image
export const alt = SITE_CONFIG.name;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  // FIX: Menghapus fetch font WOFF2 yang menyebabkan error "Unsupported OpenType signature".
  // Kita menggunakan default system font (sans-serif) yang aman dan cepat.

  return new ImageResponse(
    (
      // Container Utama
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F8F4EE', // Warna Background Branding
          position: 'relative',
          fontFamily: 'sans-serif', // Fallback font yang aman
        }}>
        {/* Dekorasi Background (Circle) */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'linear-gradient(to bottom left, #FFAA00, #EA1C1C)',
            opacity: 0.1,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-50px',
            left: '-50px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'linear-gradient(to top right, #EA1C1C, #FFAA00)',
            opacity: 0.1,
          }}
        />

        {/* Logo Icon Wrapper */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '120px',
            height: '120px',
            borderRadius: '24px',
            backgroundColor: '#EA1C1C', // Warna Primary
            marginBottom: '40px',
            boxShadow: '0 8px 30px rgba(234, 28, 28, 0.3)',
          }}>
          {/* SVG Icon Shopping Cart (Putih) */}
          <svg
            width='64'
            height='64'
            viewBox='0 0 24 24'
            fill='none'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <circle
              cx='8'
              cy='21'
              r='1'
            />
            <circle
              cx='19'
              cy='21'
              r='1'
            />
            <path d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12' />
          </svg>
        </div>

        {/* Text Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}>
          <h1
            style={{
              fontSize: '80px',
              fontWeight: 800,
              color: '#000000',
              margin: '0 0 20px 0',
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}>
            {SITE_CONFIG.name}
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#4B5563',
              margin: 0,
              fontWeight: 500,
              maxWidth: '800px',
            }}>
            Pusat Grosir Sembako Termurah & Terlengkap
          </p>
        </div>

        {/* Footer Bar / URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '24px',
            color: '#EA1C1C',
            fontWeight: 600,
          }}>
          <span>{SITE_CONFIG.url.replace(/^https?:\/\//, '')}</span>
        </div>
      </div>
    ),
    {
      ...size,
      // fonts: [] // Hapus config fonts agar pakai default system font
    }
  );
}

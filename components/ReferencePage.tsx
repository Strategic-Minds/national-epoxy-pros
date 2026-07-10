'use client';
import Link from 'next/link';

export default function ReferencePage({
  pageKey,
  mode = 'service',
}: {
  pageKey: string;
  mode?: 'home' | 'service' | 'charts' | 'bid' | 'contact' | 'reviews' | 'legal';
}) {
  return (
    <main style={{ background: '#0A0A0A', minHeight: '100vh', color: '#fff' }}>
      <section style={{ padding: '6rem 2rem 4rem', maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <span style={{ color: '#D4A017', fontSize: '.75rem', fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase' }}>
          National Epoxy Pros
        </span>
        <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, textTransform: 'uppercase', marginTop: '1rem', lineHeight: 1.1 }}>
          Premium Floor Coating Systems
        </h1>
        <p style={{ color: '#aaa', maxWidth: 600, margin: '1.5rem auto' }}>
          Epoxy, metallic, flake, polished concrete — installed by certified professionals at 70+ locations nationwide.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
          <Link href="/free-digital-bid" style={{ background: 'linear-gradient(180deg,#E5B431,#B8860B)', color: '#0A0A0A', fontWeight: 900, fontSize: '.85rem', letterSpacing: '.06em', textTransform: 'uppercase', padding: '.85rem 2rem', borderRadius: 6, textDecoration: 'none' }}>
            Get Free Quote
          </Link>
          <Link href="/floor-systems" style={{ border: '1.5px solid rgba(212,160,23,.4)', color: '#D4A017', fontWeight: 700, fontSize: '.85rem', letterSpacing: '.06em', textTransform: 'uppercase', padding: '.85rem 2rem', borderRadius: 6, textDecoration: 'none' }}>
            Explore Systems
          </Link>
        </div>
      </section>
    </main>
  );
}

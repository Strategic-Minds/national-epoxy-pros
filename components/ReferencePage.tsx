'use client';
import Link from 'next/link';
import QuoteFormCard from '@/components/QuoteFormCard';

// Safe static ReferencePage — no dynamic iteration over site data
export default function ReferencePage({
  pageKey,
  mode = 'service',
}: {
  pageKey: string;
  mode?: 'home' | 'service' | 'charts' | 'bid' | 'contact' | 'reviews' | 'legal';
}) {
  return (
    <main className="route-layout">
      <section className="hero-locked" style={{ minHeight: 500, background: '#0A0A0A', display: 'flex', alignItems: 'center' }}>
        <div className="hero-inner" style={{ maxWidth: 1200, margin: '0 auto', padding: '4rem 2rem', display: 'flex', gap: '3rem', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <span className="eyebrow">National Epoxy Pros</span>
            <h1 className="hero-h1">
              <span className="line-white">ENTERPRISE FLOOR</span>
              <span className="line-gold">COATING SYSTEMS</span>
            </h1>
            <p className="hero-copy">Premium epoxy, metallic, flake, and polished concrete systems installed by certified professionals nationwide.</p>
            <div className="cta-row" style={{ marginTop: '1.5rem' }}>
              <Link className="btn btn-gold" href="/free-digital-bid">Get Free Quote</Link>
              <Link className="btn btn-outline" href="/floor-systems">View Systems</Link>
            </div>
          </div>
          <div style={{ width: 380, flexShrink: 0 }}>
            <QuoteFormCard />
          </div>
        </div>
      </section>

      {mode === 'charts' && (
        <section className="section section-dark">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Color Charts & <span className="gold">Finish Collections</span></h2>
            </div>
            <p className="section-sub" style={{ textAlign: 'center', color: '#888' }}>
              Browse our full catalog of flake, metallic, quartz, solid, and stain finishes.
            </p>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/color-charts" className="btn btn-gold">View Full Color Catalog</Link>
            </div>
          </div>
        </section>
      )}

      {mode === 'contact' && (
        <section className="section section-dark">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Contact</span>
                <h2 className="section-title">Let&apos;s Get <span className="gold">Started</span></h2>
                <p style={{ color: '#aaa', marginTop: '1rem' }}>
                  <strong style={{ color: '#fff' }}>Phone:</strong> (877) 958-6408<br />
                  <strong style={{ color: '#fff' }}>Email:</strong> support@nationalepoxypros.com<br />
                  <strong style={{ color: '#fff' }}>Leads:</strong> leads@nationalepoxypros.com
                </p>
              </div>
              <QuoteFormCard />
            </div>
          </div>
        </section>
      )}

      {(mode === 'service' || mode === 'home') && (
        <section className="section section-dark">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="section-title">Floor <span className="gold">Systems</span></h2>
            <p style={{ color: '#888', marginTop: '1rem' }}>
              From garage floors to commercial spaces — we have a system for every surface.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <Link href="/floor-systems" className="btn btn-gold">Explore All Systems</Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteFormCard from '@/components/QuoteFormCard';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Floor Systems | National Epoxy Pros',
  description: 'Professional epoxy floor systems for garages, patios, commercial spaces, and more. Built for performance. Designed to impress.',
};

const CDN = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4';

const heroImg = `${CDN}/f50a9af63_hero-main.png`;
const garageImg = `${CDN}/177dbda38_garage.png`;
const metallicImg = `${CDN}/d2640781c_metallic.png`;
const flakeImg = `${CDN}/67ccbd034_flake.png`;
const commercialImg = `${CDN}/95159c28b_commercial.png`;
const polishedImg = `${CDN}/33088d54e_polished.png`;
const solidColorImg = `${CDN}/a4fd70b36_solid-color.png`;

const systems = [
  { title: 'Garage Floors', img: garageImg, desc: 'Durable, high-impact coatings built for daily wear and chemical resistance.', href: '/garage-floor-coatings', icon: '🏠' },
  { title: 'Patio & Driveway', img: solidColorImg, desc: 'Weather-resistant exterior coatings with UV stability and slip resistance.', href: '/exterior-coatings', icon: '☀' },
  { title: 'Metallic Epoxy', img: metallicImg, desc: 'Stunning, one-of-a-kind metallic floors for showrooms and interiors.', href: '/metallic-epoxy', icon: '✦' },
  { title: 'Commercial Spaces', img: commercialImg, desc: 'Heavy-duty commercial systems engineered for traffic and performance.', href: '/commercial-flooring', icon: '🏢' },
  { title: 'Flake Garage Floors', img: flakeImg, desc: 'Decorative flake floors with texture, color, and slip resistance.', href: '/flake-garage-floors', icon: '❖' },
];

const galleryStrip = [garageImg, metallicImg, flakeImg, commercialImg, polishedImg];

const compareRows: { label: string; values: string[] }[] = [
  { label: 'Best For', values: ['Budget garages', 'Daily-use garages', 'High-traffic garages', 'Showrooms & interiors'] },
  { label: 'Coat Thickness', values: ['~8 mils', '~16 mils', '~24 mils', '~30 mils'] },
  { label: 'Durability', values: ['★★★☆☆', '★★★★☆', '★★★★☆', '★★★★★'] },
  { label: 'Chemical Resistance', values: ['Good', 'Very Good', 'Excellent', 'Excellent'] },
  { label: 'Slip Resistance', values: ['Low', 'Medium', 'High', 'Medium'] },
  { label: 'Warranty', values: ['5-Year', '10-Year', '10-Year', '10+ Year'] },
  { label: 'Starting At', values: ['$3.50/sq ft', '$5.00/sq ft', '$6.50/sq ft', '$8.00/sq ft'] },
];

const compareCols = ['Base Coat System', 'Pro Coat System', 'Premium Flake System', 'Metallic System'];

const featuresStrip = ['SEAMLESS & DURABLE', 'CHEMICAL & STAIN RESISTANT', 'EASY TO CLEAN & MAINTAIN', 'BUILT TO WITHSTAND IMPACT', 'BEAUTY THAT LASTS'];

const trustBadges = ['10+ Year Warranty', 'Lifetime Warranty', 'Licensed & Insured', 'Expert Installers', 'Nationwide Service'];

const checkmarks = [
  'High-performance coatings built to last',
  'Moisture, chemical, and stain resistant',
  'Easy to clean and maintain',
  '100% solids epoxy systems',
  'Backed by strong warranties',
];

export default function FloorSystemsPage() {
  return (
    <>
      <Header />
      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', background: '#060606', color: '#fff' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.5 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,#050505 0%,rgba(5,5,5,.88) 40%,rgba(5,5,5,.35) 72%,rgba(5,5,5,.7) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 390px', gap: '2rem', alignItems: 'center', padding: '4rem 1rem', minHeight: 580 }}>
          <div>
            <span style={{ color: '#D4A017', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem' }}>PREMIUM EPOXY</span>
            <h1 style={{ fontFamily: "Impact,'Arial Narrow',Arial,sans-serif", textTransform: 'uppercase', lineHeight: 0.92, margin: '0.65rem 0', fontSize: 'clamp(3rem,7vw,6.6rem)', letterSpacing: '0.01em' }}>
              <span style={{ color: '#fff', display: 'block' }}>FLOOR SYSTEMS.</span>
              <span style={{ color: '#D4A017', display: 'block' }}>BUILT TO LAST.</span>
            </h1>
            <p style={{ maxWidth: 620, fontSize: '1.08rem', lineHeight: 1.65, color: '#e8e8e8' }}>
              Professional epoxy floor systems for garages, patios, commercial spaces, and more. Built for performance. Designed to impress.
            </p>
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginTop: '1.3rem' }}>
              <a href="/floor-systems#explore" style={{ background: 'linear-gradient(180deg,#F6B800,#B8860B)', color: '#0A0A0A', border: '1px solid #D4A017', borderRadius: 8, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.03em', padding: '0.85rem 1.5rem', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', boxShadow: '0 10px 24px rgba(184,134,11,.22)' }}>EXPLORE SYSTEMS</a>
              <a href="/design-center" style={{ border: '1px solid rgba(212,160,23,.5)', color: '#fff', background: 'rgba(0,0,0,.55)', borderRadius: 8, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.03em', padding: '0.85rem 1.5rem', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center' }}>DESIGN CENTER</a>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem', marginTop: '2rem' }}>
              {trustBadges.map(b => (
                <span key={b} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: '#ccc' }}>
                  <span style={{ color: '#D4A017', fontSize: '1rem' }}>✓</span> {b}
                </span>
              ))}
            </div>
          </div>
          <QuoteFormCard />
        </div>
      </section>

      {/* FLOOR SYSTEMS — ENGINEERED FOR EVERY SPACE */}
      <section style={{ background: '#0A0A0A', color: '#fff', padding: '4.5rem 1rem' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <span style={{ color: '#D4A017', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem' }}>ENGINEERED FOR EVERY SPACE</span>
            <h2 style={{ fontFamily: "Impact,'Arial Narrow',Arial,sans-serif", textTransform: 'uppercase', fontSize: 'clamp(2.2rem,4.5vw,4rem)', lineHeight: 0.95, margin: '0.5rem 0 1.2rem', color: '#fff' }}>FLOOR SYSTEMS<br/><span style={{ color: '#D4A017' }}>ENGINEERED FOR EVERY SPACE</span></h2>
            <p style={{ color: '#bbb', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              From residential garages to commercial showrooms, our epoxy floor systems are engineered for maximum durability, chemical resistance, and visual appeal. Every system is backed by industry-leading warranties and installed by certified professionals.
            </p>
            <div style={{ display: 'grid', gap: '0.85rem', marginBottom: '1.8rem' }}>
              {checkmarks.map(c => (
                <div key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem' }}>
                  <span style={{ color: '#D4A017', fontSize: '1.2rem', fontWeight: 900, flexShrink: 0 }}>✓</span>
                  <span style={{ color: '#ddd', fontSize: '0.95rem' }}>{c}</span>
                </div>
              ))}
            </div>
            <div style={{ background: '#111', border: '1px solid rgba(212,160,23,.3)', borderRadius: 12, padding: '1.5rem', marginBottom: '1.5rem' }}>
              <p style={{ margin: 0, fontFamily: "Impact,'Arial Narrow',Arial,sans-serif", textTransform: 'uppercase', fontSize: '1.6rem', color: '#fff', letterSpacing: '0.02em' }}>
                BUILT FOR LIFE. <span style={{ color: '#D4A017' }}>BACKED BY PROS.</span>
              </p>
            </div>
            <a href="/free-digital-bid" style={{ display: 'inline-flex', alignItems: 'center', background: 'linear-gradient(180deg,#F6B800,#B8860B)', color: '#0A0A0A', border: '1px solid #D4A017', borderRadius: 8, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.03em', padding: '0.9rem 2rem', fontSize: '0.9rem', boxShadow: '0 10px 24px rgba(184,134,11,.22)' }}>GET YOUR FREE QUOTE</a>
          </div>
          <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(212,160,23,.3)' }}>
            <img src={garageImg} alt="Premium epoxy garage floor" style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* EXPLORE OUR EPOXY FLOOR SYSTEMS */}
      <section id="explore" style={{ background: '#050505', color: '#fff', padding: '4.5rem 1rem' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ color: '#D4A017', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem' }}>EXPLORE</span>
            <h2 style={{ fontFamily: "Impact,'Arial Narrow',Arial,sans-serif", textTransform: 'uppercase', fontSize: 'clamp(2.2rem,4.5vw,4rem)', lineHeight: 0.95, margin: '0.4rem 0 0', color: '#fff' }}>OUR EPOXY <span style={{ color: '#D4A017' }}>FLOOR SYSTEMS</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1.2rem' }}>
            {systems.map(s => (
              <div key={s.title} style={{ background: '#111', border: '1px solid #222', borderRadius: 14, overflow: 'hidden', transition: 'transform .2s' }}>
                <div style={{ position: 'relative', height: 200 }}>
                  <img src={s.img} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', bottom: -22, left: '1rem', width: 46, height: 46, borderRadius: '50%', background: 'linear-gradient(180deg,#F6B800,#B8860B)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', border: '2px solid #050505', boxShadow: '0 4px 12px rgba(0,0,0,.4)' }}>{s.icon}</div>
                </div>
                <div style={{ padding: '2rem 1rem 1.2rem' }}>
                  <h3 style={{ margin: '0 0 0.5rem', textTransform: 'uppercase', fontSize: '1.1rem', fontWeight: 900, color: '#fff' }}>{s.title}</h3>
                  <p style={{ margin: '0 0 1rem', color: '#999', fontSize: '0.88rem', lineHeight: 1.5 }}>{s.desc}</p>
                  <Link href={s.href} style={{ color: '#D4A017', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.82rem', letterSpacing: '0.03em', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>VIEW SYSTEMS →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE OUR TOP SYSTEMS */}
      <section style={{ background: '#0A0A0A', color: '#fff', padding: '4.5rem 1rem' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ color: '#D4A017', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem' }}>SYSTEM COMPARISON</span>
            <h2 style={{ fontFamily: "Impact,'Arial Narrow',Arial,sans-serif", textTransform: 'uppercase', fontSize: 'clamp(2.2rem,4.5vw,4rem)', lineHeight: 0.95, margin: '0.4rem 0 0', color: '#fff' }}>COMPARE OUR <span style={{ color: '#D4A017' }}>TOP SYSTEMS</span></h2>
          </div>
          <div style={{ overflowX: 'auto', borderRadius: 14, border: '1px solid #222' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
              <thead>
                <tr>
                  <th style={{ background: '#111', padding: '1.2rem 1rem', textAlign: 'left', fontSize: '0.82rem', textTransform: 'uppercase', color: '#888', fontWeight: 800, borderBottom: '2px solid #D4A017' }}></th>
                  {compareCols.map(col => (
                    <th key={col} style={{ background: '#111', padding: '1.2rem 1rem', textAlign: 'center', fontSize: '0.88rem', textTransform: 'uppercase', color: '#D4A017', fontWeight: 900, borderBottom: '2px solid #D4A017' }}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={row.label} style={{ background: i % 2 === 0 ? '#0A0A0A' : '#0F0F0F' }}>
                    <td style={{ padding: '0.9rem 1rem', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.82rem', color: '#ccc', borderBottom: '1px solid #1a1a1a' }}>{row.label}</td>
                    {row.values.map((v, j) => (
                      <td key={j} style={{ padding: '0.9rem 1rem', textAlign: 'center', color: '#ddd', fontSize: '0.88rem', borderBottom: '1px solid #1a1a1a' }}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <p style={{ color: '#999', marginBottom: '1rem', fontSize: '0.95rem' }}>NOT SURE WHICH SYSTEM IS RIGHT?</p>
            <a href="/design-center" style={{ display: 'inline-flex', alignItems: 'center', background: 'linear-gradient(180deg,#F6B800,#B8860B)', color: '#0A0A0A', border: '1px solid #D4A017', borderRadius: 8, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.03em', padding: '0.85rem 2rem', fontSize: '0.9rem' }}>DESIGN CENTER</a>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section style={{ background: '#000' }}>
        <div style={{ display: 'flex', height: 260, gap: 0 }}>
          {galleryStrip.map((src, i) => (
            <div key={i} style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
              <img src={src} alt={`Gallery ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM FEATURES STRIP */}
      <section style={{ background: '#0A0A0A', borderTop: '1px solid rgba(212,160,23,.2)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', padding: '1.8rem 1rem', gap: '1.5rem' }}>
          {featuresStrip.map(f => (
            <span key={f} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.8rem', color: '#ccc', letterSpacing: '0.02em' }}>
              <span style={{ color: '#D4A017' }}>⬢</span> {f}
            </span>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ background: 'linear-gradient(135deg,#0A0A0A,#1a1500)', borderTop: '3px solid #D4A017', borderBottom: '3px solid #D4A017', padding: '3.5rem 1rem' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
          <div>
            <h2 style={{ fontFamily: "Impact,'Arial Narrow',Arial,sans-serif", textTransform: 'uppercase', fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: 0.95, margin: '0 0 0.5rem', color: '#fff' }}>READY TO TRANSFORM <span style={{ color: '#D4A017' }}>YOUR SPACE?</span></h2>
            <p style={{ color: '#999', margin: 0 }}>Get a free quote today and see why homeowners and businesses trust National Epoxy Pros.</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
            <a href="/free-digital-bid" style={{ display: 'inline-flex', alignItems: 'center', background: 'linear-gradient(180deg,#F6B800,#B8860B)', color: '#0A0A0A', border: '1px solid #D4A017', borderRadius: 8, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.03em', padding: '0.9rem 1.8rem', fontSize: '0.9rem', boxShadow: '0 10px 24px rgba(184,134,11,.22)' }}>GET A FREE QUOTE</a>
            <a href={site.phoneHref} style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid rgba(212,160,23,.5)', color: '#fff', background: 'rgba(0,0,0,.55)', borderRadius: 8, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.03em', padding: '0.9rem 1.8rem', fontSize: '0.9rem' }}>1-800-EPOXY-PRO</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

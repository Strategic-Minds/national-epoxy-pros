import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteFormCard from '@/components/QuoteFormCard';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Flake Garage Floors | National Epoxy Pros',
  description: 'Decorative flake epoxy floors with unmatched durability, slip resistance, and style. Engineered to withstand heavy use and look incredible for years.',
};

const CDN = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4';

const flakeImg = `${CDN}/67ccbd034_flake.png`;
const garageImg = `${CDN}/177dbda38_garage.png`;
const metallicImg = `${CDN}/d2640781c_metallic.png`;
const commercialImg = `${CDN}/95159c28b_commercial.png`;
const polishedImg = `${CDN}/33088d54e_polished.png`;
const solidColorImg = `${CDN}/a4fd70b36_solid-color.png`;
const flakeColorChart = `${CDN}/12d008b66_flake-color-chart.png`;

const galleryImages = [flakeImg, garageImg, metallicImg, commercialImg, polishedImg];

const processSteps = [
  { num: '1', title: 'PREPARE', desc: 'Surface grinding, cleaning, and crack repair to create the ideal bonding surface.' },
  { num: '2', title: 'BASE COAT', desc: 'High-solids epoxy base coat applied evenly across the prepared substrate.' },
  { num: '3', title: 'FLAKE BROADCAST', desc: 'Decorative vinyl flakes broadcast into the wet base coat for full coverage and texture.' },
  { num: '4', title: 'TOPCOAT', desc: 'Clear polyaspartic or polyurethane topcoat sealed over the flake layer for durability and sheen.' },
  { num: '5', title: 'CURE', desc: 'System cures to full hardness — ready for foot traffic and vehicle use per timeline.' },
];

const whyChooseUs = [
  'Unmatched slip resistance with decorative texture',
  'Hides minor imperfections in the concrete surface',
  'Available in dozens of color blends and sizes',
  'Chemical, stain, and UV resistant topcoat',
  'Fast installation — most garages done in 1–2 days',
  'Easy to clean and maintain for years',
];

const faqItems: [string, string][] = [
  ['How long does installation take?', 'Most standard two-car garage flake floor installations are completed in 1 to 2 days depending on size, surface condition, and curing conditions.'],
  ['When can I use my garage again?', 'Foot traffic is typically safe within 24 hours, and vehicle traffic within 48–72 hours after the final topcoat. Your installer will confirm exact timing based on the specific system used.'],
  ['Are flake floors slippery?', 'Flake floors offer better slip resistance than smooth epoxy due to the textured surface. Additional anti-slip additives can be incorporated into the topcoat for enhanced traction.'],
  ['How do I clean and maintain it?', 'Regular sweeping and occasional mopping with a pH-neutral cleaner is all that is needed. Avoid harsh chemicals and abrasive tools that could dull the topcoat over time.'],
];

const trustStats = [
  { value: '10+', label: 'Year Warranty' },
  { value: '1000s', label: 'Floors Installed' },
  { value: '4.4★', label: 'Product Rating' },
  { value: '100%', label: 'Solids Epoxy' },
];

export default function FlakeGarageFloorsPage() {
  return (
    <>
      <Header />
      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', background: '#060606', color: '#fff' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${flakeImg})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.5 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,#050505 0%,rgba(5,5,5,.88) 40%,rgba(5,5,5,.35) 72%,rgba(5,5,5,.7) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 390px', gap: '2rem', alignItems: 'center', padding: '4rem 1rem', minHeight: 580 }}>
          <div>
            <h1 style={{ fontFamily: "Impact,'Arial Narrow',Arial,sans-serif", textTransform: 'uppercase', lineHeight: 0.92, margin: '0 0 0.65rem', fontSize: 'clamp(3rem,7vw,6.6rem)', letterSpacing: '0.01em' }}>
              <span style={{ color: '#fff', display: 'block' }}>FLAKE GARAGE FLOORS</span>
              <span style={{ color: '#fff', display: 'block' }}>BUILT TO IMPRESS.</span>
              <span style={{ color: '#D4A017', display: 'block' }}>BUILT TO LAST.</span>
            </h1>
            <p style={{ maxWidth: 620, fontSize: '1.08rem', lineHeight: 1.65, color: '#e8e8e8' }}>
              Decorative flake epoxy floors with unmatched durability, slip resistance, and style. Engineered to withstand heavy use and look incredible for years.
            </p>
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginTop: '1.3rem' }}>
              <a href="/free-digital-bid" style={{ background: 'linear-gradient(180deg,#F6B800,#B8860B)', color: '#0A0A0A', border: '1px solid #D4A017', borderRadius: 8, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.03em', padding: '0.85rem 1.5rem', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', boxShadow: '0 10px 24px rgba(184,134,11,.22)' }}>GET A FREE QUOTE</a>
              <a href="#flake-colors" style={{ border: '1px solid rgba(212,160,23,.5)', color: '#fff', background: 'rgba(0,0,0,.55)', borderRadius: 8, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.03em', padding: '0.85rem 1.5rem', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center' }}>VIEW FLAKE COLORS</a>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem', marginTop: '2rem' }}>
              {['10+ Year Warranty', 'Nationwide Service', 'Licensed & Insured', 'Expert Installers'].map(b => (
                <span key={b} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: '#ccc' }}>
                  <span style={{ color: '#D4A017', fontSize: '1rem' }}>✓</span> {b}
                </span>
              ))}
            </div>
          </div>
          <QuoteFormCard />
        </div>
      </section>

      {/* FLAKE COLORS & FINISHES */}
      <section id="flake-colors" style={{ background: '#0A0A0A', color: '#fff', padding: '4.5rem 1rem' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span style={{ color: '#D4A017', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem' }}>COLOR OPTIONS</span>
            <h2 style={{ fontFamily: "Impact,'Arial Narrow',Arial,sans-serif", textTransform: 'uppercase', fontSize: 'clamp(2.2rem,4.5vw,4rem)', lineHeight: 0.95, margin: '0.4rem 0 0.5rem', color: '#fff' }}>FLAKE COLORS <span style={{ color: '#D4A017' }}>& FINISHES</span></h2>
            <p style={{ color: '#999', fontSize: '1rem' }}>Beautiful blends. Superior performance. Built for your space.</p>
          </div>
          <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(212,160,23,.3)', background: '#fff' }}>
            <img src={flakeColorChart} alt="Flake color chart" style={{ width: '100%', display: 'block' }} />
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href="/design-center" style={{ display: 'inline-flex', alignItems: 'center', background: 'linear-gradient(180deg,#F6B800,#B8860B)', color: '#0A0A0A', border: '1px solid #D4A017', borderRadius: 8, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.03em', padding: '0.85rem 2rem', fontSize: '0.9rem' }}>VIEW ALL COLORS</a>
          </div>
        </div>
      </section>

      {/* 3-COLUMN LAYOUT: PROCESS | WHY CHOOSE US | FAQ */}
      <section style={{ background: '#050505', color: '#fff', padding: '4.5rem 1rem' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '2rem', alignItems: 'start' }}>
          {/* LEFT: PROCESS */}
          <div>
            <span style={{ color: '#D4A017', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem' }}>INSTALLATION</span>
            <h3 style={{ fontFamily: "Impact,'Arial Narrow',Arial,sans-serif", textTransform: 'uppercase', fontSize: '1.6rem', lineHeight: 0.95, margin: '0.4rem 0 1.5rem', color: '#fff' }}>OUR FLAKE FLOOR PROCESS</h3>
            <div style={{ display: 'grid', gap: '1.2rem' }}>
              {processSteps.map(step => (
                <div key={step.num} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(180deg,#F6B800,#B8860B)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 900, color: '#0A0A0A', border: '2px solid #D4A017' }}>{step.num}</div>
                  <div>
                    <h4 style={{ margin: '0 0 0.3rem', textTransform: 'uppercase', fontSize: '0.95rem', fontWeight: 900, color: '#fff', letterSpacing: '0.02em' }}>{step.title}</h4>
                    <p style={{ margin: 0, color: '#999', fontSize: '0.85rem', lineHeight: 1.5 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CENTER: WHY HOMEOWNERS CHOOSE US */}
          <div>
            <span style={{ color: '#D4A017', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem' }}>WHY US</span>
            <h3 style={{ fontFamily: "Impact,'Arial Narrow',Arial,sans-serif", textTransform: 'uppercase', fontSize: '1.6rem', lineHeight: 0.95, margin: '0.4rem 0 1.5rem', color: '#fff' }}>WHY HOMEOWNERS CHOOSE US</h3>
            <div style={{ display: 'grid', gap: '0.9rem', marginBottom: '1.5rem' }}>
              {whyChooseUs.map(w => (
                <div key={w} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem' }}>
                  <span style={{ color: '#D4A017', fontSize: '1.1rem', fontWeight: 900, flexShrink: 0 }}>✓</span>
                  <span style={{ color: '#ddd', fontSize: '0.9rem', lineHeight: 1.5 }}>{w}</span>
                </div>
              ))}
            </div>
            <div style={{ background: '#111', border: '1px solid rgba(212,160,23,.3)', borderRadius: 12, padding: '1.2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#D4A017', fontFamily: "Impact,'Arial Narrow',Arial,sans-serif" }}>10-YEAR</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: '#ccc', letterSpacing: '0.05em' }}>Warranty</div>
            </div>
          </div>

          {/* RIGHT: FAQ */}
          <div>
            <span style={{ color: '#D4A017', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem' }}>QUESTIONS</span>
            <h3 style={{ fontFamily: "Impact,'Arial Narrow',Arial,sans-serif", textTransform: 'uppercase', fontSize: '1.6rem', lineHeight: 0.95, margin: '0.4rem 0 1.5rem', color: '#fff' }}>FLAKE FLOOR FAQs</h3>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              {faqItems.map(([q, a]) => (
                <details key={q} style={{ background: '#111', border: '1px solid #222', borderRadius: 10, padding: '0.9rem 1rem', cursor: 'pointer' }}>
                  <summary style={{ fontWeight: 800, fontSize: '0.88rem', color: '#fff', textTransform: 'none', outline: 'none' }}>{q}</summary>
                  <p style={{ margin: '0.7rem 0 0', color: '#999', fontSize: '0.85rem', lineHeight: 1.6 }}>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FLAKE GARAGE FLOOR INSPIRATION GALLERY */}
      <section style={{ background: '#0A0A0A', color: '#fff', padding: '4.5rem 1rem' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ color: '#D4A017', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem' }}>INSPIRATION</span>
            <h2 style={{ fontFamily: "Impact,'Arial Narrow',Arial,sans-serif", textTransform: 'uppercase', fontSize: 'clamp(2.2rem,4.5vw,4rem)', lineHeight: 0.95, margin: '0.4rem 0 0', color: '#fff' }}>FLAKE GARAGE FLOOR <span style={{ color: '#D4A017' }}>INSPIRATION</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1rem' }}>
            {galleryImages.map((src, i) => (
              <div key={i} style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid #222' }}>
                <img src={src} alt={`Flake floor inspiration ${i + 1}`} style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED. PROVEN. PERFORMANCE. */}
      <section style={{ background: '#050505', borderTop: '1px solid rgba(212,160,23,.2)', borderBottom: '1px solid rgba(212,160,23,.2)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', textAlign: 'center', padding: '2.5rem 1rem' }}>
          <span style={{ color: '#D4A017', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem' }}>TRUSTED PERFORMANCE</span>
          <h2 style={{ fontFamily: "Impact,'Arial Narrow',Arial,sans-serif", textTransform: 'uppercase', fontSize: 'clamp(1.8rem,3.5vw,3rem)', lineHeight: 0.95, margin: '0.4rem 0 2rem', color: '#fff' }}>TRUSTED. <span style={{ color: '#D4A017' }}>PROVEN. PERFORMANCE.</span></h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem' }}>
            {trustStats.map(stat => (
              <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem' }}>
                <div style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 900, color: '#D4A017', fontFamily: "Impact,'Arial Narrow',Arial,sans-serif", lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: '#ccc', letterSpacing: '0.05em' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ background: 'linear-gradient(135deg,#0A0A0A,#1a1500)', borderTop: '3px solid #D4A017', borderBottom: '3px solid #D4A017', padding: '3.5rem 1rem' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
          <div>
            <h2 style={{ fontFamily: "Impact,'Arial Narrow',Arial,sans-serif", textTransform: 'uppercase', fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: 0.95, margin: '0 0 0.5rem', color: '#fff' }}>READY TO UPGRADE <span style={{ color: '#D4A017' }}>YOUR GARAGE?</span></h2>
            <p style={{ color: '#999', margin: 0 }}>Get a free quote today and transform your garage with a premium flake floor system.</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
            <a href="/free-digital-bid" style={{ display: 'inline-flex', alignItems: 'center', background: 'linear-gradient(180deg,#F6B800,#B8860B)', color: '#0A0A0A', border: '1px solid #D4A017', borderRadius: 8, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.03em', padding: '0.9rem 1.8rem', fontSize: '0.9rem', boxShadow: '0 10px 24px rgba(184,134,11,.22)' }}>GET A FREE QUOTE</a>
            <a href={site.phoneHref} style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid rgba(212,160,23,.5)', color: '#fff', background: 'rgba(0,0,0,.55)', borderRadius: 8, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.03em', padding: '0.9rem 1.8rem', fontSize: '0.9rem' }}>OR CALL 1-800-EPOXY-PRO</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

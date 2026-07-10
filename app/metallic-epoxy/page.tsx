import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteFormCard from '@/components/QuoteFormCard';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Metallic Epoxy Floors | National Epoxy Pros',
  description: 'Stunning, one-of-a-kind metallic epoxy floors engineered for beauty, built for performance, and designed to last.',
};

const CDN = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4';

const metallicImg = `${CDN}/d2640781c_metallic.png`;
const garageImg = `${CDN}/177dbda38_garage.png`;
const commercialImg = `${CDN}/95159c28b_commercial.png`;
const polishedImg = `${CDN}/33088d54e_polished.png`;
const flakeImg = `${CDN}/67ccbd034_flake.png`;

const metallicColors = [
  { name: 'Silver Night', gradient: 'radial-gradient(circle at 30% 30%, #E8E8E8, #4a4a4a, #1a1a1a)' },
  { name: 'Steel Gray', gradient: 'radial-gradient(circle at 30% 30%, #C0C0C0, #6B6B6B, #2a2a2a)' },
  { name: 'Gunmetal', gradient: 'radial-gradient(circle at 30% 30%, #808890, #3a3f44, #1c1e22)' },
  { name: 'Pearl White', gradient: 'radial-gradient(circle at 30% 30%, #FFFAF0, #E8E0D0, #B8B0A0)' },
  { name: 'Midnight Blue', gradient: 'radial-gradient(circle at 30% 30%, #4A6FA5, #1E3A5F, #0A1A2F)' },
  { name: 'Bronze Amber', gradient: 'radial-gradient(circle at 30% 30%, #D4A017, #8B6914, #3D2E0A)' },
  { name: 'Copper Moon', gradient: 'radial-gradient(circle at 30% 30%, #E8A060, #B87333, #5C3A1E)' },
  { name: 'Onyx Black', gradient: 'radial-gradient(circle at 30% 30%, #3a3a3a, #111111, #000000)' },
];

const processSteps = [
  { num: '1', title: 'PREPARE', icon: '🔨', desc: 'Surface assessment, diamond grinding, and crack/joint repair to ensure a flawless foundation for the metallic system.' },
  { num: '2', title: 'BUILD', icon: '🏗', desc: 'Primer and base coat application tailored to your substrate conditions and moisture profile.' },
  { num: '3', title: 'DESIGN', icon: '✦', desc: 'Metallic pigment blending and specialized tooling techniques create your one-of-a-kind visual effect.' },
  { num: '4', title: 'PROTECT', icon: '🛡', desc: 'Clear topcoat with UV-stable formulation locks in the design and delivers lasting chemical and abrasion resistance.' },
];

const spaces = [
  { title: 'GARAGES', img: garageImg },
  { title: 'BASEMENTS', img: polishedImg },
  { title: 'KITCHENS', img: metallicImg },
  { title: 'COMMERCIAL SPACES', img: commercialImg },
  { title: 'SHOWROOMS', img: flakeImg },
];

const featureBadges = [
  'Seamless & Porous-Free',
  'Chemical & Stain Resistant',
  'Impact & Abrasion Resistant',
  'UV Stable Non-Yellowing',
  'Custom Designs Endless Possibilities',
];

const trustBadgesHero = ['10+ Year Warranty', 'Lifetime Warranty', 'Licensed & Insured', 'Expert Installers'];

const trustBadgesBottom = [
  { icon: '⬢', label: '10+ Year Warranty' },
  { icon: '★', label: '4.4-Star Rated Products' },
  { icon: '🛡', label: 'Licensed & Insured' },
  { icon: '📍', label: 'Nationwide Service' },
  { icon: '⚡', label: 'Powered by Xtreme Polishing Systems' },
];

const smallImages = [metallicImg, commercialImg, garageImg];

export default function MetallicEpoxyPage() {
  return (
    <>
      <Header />
      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', background: '#060606', color: '#fff' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${metallicImg})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.45 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,#050505 0%,rgba(5,5,5,.88) 40%,rgba(5,5,5,.35) 72%,rgba(5,5,5,.7) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 390px', gap: '2rem', alignItems: 'center', padding: '4rem 1rem', minHeight: 580 }}>
          <div>
            <span style={{ color: '#D4A017', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem' }}>METALLIC EPOXY FLOORS</span>
            <h1 style={{ fontFamily: "Impact,'Arial Narrow',Arial,sans-serif", textTransform: 'uppercase', lineHeight: 0.92, margin: '0.65rem 0', fontSize: 'clamp(3rem,7vw,6.6rem)', letterSpacing: '0.01em' }}>
              <span style={{ color: '#fff', display: 'block' }}>LIQUID ART.</span>
              <span style={{ color: '#D4A017', display: 'block' }}>UNMATCHED DURABILITY.</span>
            </h1>
            <p style={{ maxWidth: 620, fontSize: '1.08rem', lineHeight: 1.65, color: '#e8e8e8' }}>
              Stunning, one-of-a-kind metallic epoxy floors engineered for beauty, built for performance, and designed to last.
            </p>
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginTop: '1.3rem' }}>
              <a href="/free-digital-bid" style={{ background: 'linear-gradient(180deg,#F6B800,#B8860B)', color: '#0A0A0A', border: '1px solid #D4A017', borderRadius: 8, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.03em', padding: '0.85rem 1.5rem', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', boxShadow: '0 10px 24px rgba(184,134,11,.22)' }}>GET A FREE QUOTE</a>
              <a href="/floor-systems" style={{ border: '1px solid rgba(212,160,23,.5)', color: '#fff', background: 'rgba(0,0,0,.55)', borderRadius: 8, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.03em', padding: '0.85rem 1.5rem', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center' }}>EXPLORE FLOOR SYSTEMS</a>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem', marginTop: '2rem' }}>
              {trustBadgesHero.map(b => (
                <span key={b} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: '#ccc' }}>
                  <span style={{ color: '#D4A017', fontSize: '1rem' }}>✓</span> {b}
                </span>
              ))}
            </div>
          </div>
          <QuoteFormCard />
        </div>
      </section>

      {/* CHOOSE YOUR METALLIC LOOK */}
      <section style={{ background: '#0A0A0A', color: '#fff', padding: '4.5rem 1rem' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ color: '#D4A017', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem' }}>COLOR SELECTION</span>
            <h2 style={{ fontFamily: "Impact,'Arial Narrow',Arial,sans-serif", textTransform: 'uppercase', fontSize: 'clamp(2.2rem,4.5vw,4rem)', lineHeight: 0.95, margin: '0.4rem 0 0', color: '#fff' }}>CHOOSE YOUR <span style={{ color: '#D4A017' }}>METALLIC LOOK</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: '2rem', maxWidth: 900, margin: '0 auto' }}>
            {metallicColors.map(c => (
              <div key={c.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{ width: 100, height: 100, borderRadius: '50%', background: c.gradient, border: '3px solid rgba(212,160,23,.4)', boxShadow: '0 4px 16px rgba(0,0,0,.5)' }} />
                <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: '#ddd', letterSpacing: '0.02em' }}>{c.name}</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a href="/design-center" style={{ display: 'inline-flex', alignItems: 'center', background: 'linear-gradient(180deg,#F6B800,#B8860B)', color: '#0A0A0A', border: '1px solid #D4A017', borderRadius: 8, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.03em', padding: '0.85rem 2rem', fontSize: '0.9rem' }}>EXPLORE ALL COLORS & FINISHES →</a>
          </div>
        </div>
      </section>

      {/* OUR 4-STEP METALLIC EPOXY PROCESS */}
      <section style={{ background: '#050505', color: '#fff', padding: '4.5rem 1rem' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ color: '#D4A017', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem' }}>INSTALLATION PROCESS</span>
            <h2 style={{ fontFamily: "Impact,'Arial Narrow',Arial,sans-serif", textTransform: 'uppercase', fontSize: 'clamp(2.2rem,4.5vw,4rem)', lineHeight: 0.95, margin: '0.4rem 0 0', color: '#fff' }}>OUR 4-STEP <span style={{ color: '#D4A017' }}>METALLIC EPOXY PROCESS</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1.5rem' }}>
            {processSteps.map(step => (
              <div key={step.num} style={{ background: '#111', border: '1px solid #222', borderRadius: 14, padding: '2rem 1.5rem', textAlign: 'center' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(180deg,#F6B800,#B8860B)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 900, color: '#0A0A0A', margin: '0 auto 1rem', border: '2px solid #D4A017' }}>{step.num}</div>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{step.icon}</div>
                <h3 style={{ margin: '0 0 0.7rem', textTransform: 'uppercase', fontSize: '1.1rem', fontWeight: 900, color: '#fff', letterSpacing: '0.02em' }}>{step.title}</h3>
                <p style={{ margin: 0, color: '#999', fontSize: '0.88rem', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERFECT FOR ANY SPACE */}
      <section style={{ background: '#0A0A0A', color: '#fff', padding: '4.5rem 1rem' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ color: '#D4A017', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem' }}>VERSATILITY</span>
            <h2 style={{ fontFamily: "Impact,'Arial Narrow',Arial,sans-serif", textTransform: 'uppercase', fontSize: 'clamp(2.2rem,4.5vw,4rem)', lineHeight: 0.95, margin: '0.4rem 0 0', color: '#fff' }}>PERFECT FOR <span style={{ color: '#D4A017' }}>ANY SPACE</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1.2rem' }}>
            {spaces.map(s => (
              <div key={s.title} style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', border: '1px solid #222' }}>
                <img src={s.img} alt={s.title} style={{ width: '100%', height: 240, objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 50%,rgba(0,0,0,.85) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem', textAlign: 'center' }}>
                  <h3 style={{ margin: 0, textTransform: 'uppercase', fontSize: '1rem', fontWeight: 900, color: '#fff', letterSpacing: '0.03em' }}>{s.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE BADGES */}
      <section style={{ background: '#050505', borderTop: '1px solid rgba(212,160,23,.2)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', padding: '1.8rem 1rem', gap: '1.5rem' }}>
          {featureBadges.map(f => (
            <span key={f} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.78rem', color: '#ccc', letterSpacing: '0.02em' }}>
              <span style={{ color: '#D4A017' }}>✦</span> {f}
            </span>
          ))}
        </div>
      </section>

      {/* NO TWO FLOORS ARE ALIKE */}
      <section style={{ background: '#0A0A0A', color: '#fff', padding: '4.5rem 1rem' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <span style={{ color: '#D4A017', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem' }}>UNIQUE BY DESIGN</span>
            <h2 style={{ fontFamily: "Impact,'Arial Narrow',Arial,sans-serif", textTransform: 'uppercase', fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: 0.95, margin: '0.5rem 0 1.2rem', color: '#fff' }}>NO TWO FLOORS ARE ALIKE.<br/><span style={{ color: '#D4A017' }}>YOURS WILL BE EXTRAORDINARY.</span></h2>
            <p style={{ color: '#bbb', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Every metallic epoxy floor is a completely unique creation. The interplay of pigments, tooling techniques, and ambient conditions means your floor will have its own signature look — never duplicated, always stunning.
            </p>
            <a href="/gallery" style={{ display: 'inline-flex', alignItems: 'center', background: 'linear-gradient(180deg,#F6B800,#B8860B)', color: '#0A0A0A', border: '1px solid #D4A017', borderRadius: 8, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.03em', padding: '0.85rem 2rem', fontSize: '0.9rem' }}>SEE REAL PROJECTS →</a>
          </div>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {smallImages.map((src, i) => (
              <div key={i} style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(212,160,23,.25)' }}>
                <img src={src} alt={`Metallic epoxy project ${i + 1}`} style={{ width: '100%', height: 130, objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BY HOMEOWNERS & BUSINESSES */}
      <section style={{ background: '#050505', borderTop: '1px solid rgba(212,160,23,.2)', borderBottom: '1px solid rgba(212,160,23,.2)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', textAlign: 'center', padding: '2.5rem 1rem' }}>
          <span style={{ color: '#D4A017', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem' }}>TRUSTED NATIONWIDE</span>
          <h2 style={{ fontFamily: "Impact,'Arial Narrow',Arial,sans-serif", textTransform: 'uppercase', fontSize: 'clamp(1.6rem,3vw,2.8rem)', lineHeight: 0.95, margin: '0.4rem 0 1.5rem', color: '#fff' }}>TRUSTED BY HOMEOWNERS & BUSINESSES NATIONWIDE</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            {trustBadgesBottom.map(b => (
              <div key={b.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', minWidth: 160 }}>
                <span style={{ fontSize: '2rem', color: '#D4A017' }}>{b.icon}</span>
                <span style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: '#ccc', textAlign: 'center' }}>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ background: 'linear-gradient(135deg,#0A0A0A,#1a1500)', borderTop: '3px solid #D4A017', borderBottom: '3px solid #D4A017', padding: '3.5rem 1rem' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
          <div>
            <h2 style={{ fontFamily: "Impact,'Arial Narrow',Arial,sans-serif", textTransform: 'uppercase', fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: 0.95, margin: '0 0 0.5rem', color: '#fff' }}>READY TO CREATE YOUR <span style={{ color: '#D4A017' }}>ONE-OF-A-KIND FLOOR?</span></h2>
            <p style={{ color: '#999', margin: 0 }}>Get a free quote today and bring liquid art to your space.</p>
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

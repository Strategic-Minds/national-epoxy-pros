import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteFormCard from '@/components/QuoteFormCard';

const HERO = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/f50a9af63_hero-main.png';
const FLAKE_CHART = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/12d008b66_flake-color-chart.png';
const METALLIC_CHART = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/bb184fe54_metallic-colors.webp';
const SOLID_CHART = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/0f9a7263b_solid-color-epoxy.webp';
const QUARTZ_CHART = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/e8158bac1_quartz-colors.webp';
const DYE_CHART = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/38ca6eafe_concrete-dye-stain.webp';
const GARAGE = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/177dbda38_garage.png';
const METALLIC = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/d2640781c_metallic.png';
const COMMERCIAL = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/95159c28b_commercial.png';
const POLISHED = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/33088d54e_polished.png';

const COLLECTIONS = [
  { img: SOLID_CHART, name: 'Neutral Essentials', count: '24 colors' },
  { img: SOLID_CHART, name: 'Desert Tones', count: '18 colors' },
  { img: SOLID_CHART, name: 'Cool Grays', count: '22 colors' },
  { img: SOLID_CHART, name: 'Warm Beiges', count: '16 colors' },
  { img: METALLIC_CHART, name: 'Coastal Blues', count: '14 colors' },
  { img: METALLIC_CHART, name: 'Earthy Greens', count: '12 colors' },
  { img: METALLIC_CHART, name: 'Charcoal Series', count: '10 colors' },
  { img: SOLID_CHART, name: 'Bold Accents', count: '12 colors' },
];

const GALLERY_TILES = [
  { img: GARAGE, label: 'Garage Floors', count: '108 Photos' },
  { img: COMMERCIAL, label: 'Patio & Outdoor', count: '86 Photos' },
  { img: COMMERCIAL, label: 'Commercial Spaces', count: '36 Photos' },
  { img: POLISHED, label: 'Basements', count: '64 Photos' },
  { img: METALLIC, label: 'Showrooms', count: '64 Photos' },
];

export default function ColorChartsPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="hero" style={{ minHeight: 520 }}>
        <div className="hero-bg" style={{ backgroundImage: `url(${HERO})` }} />
        <div className="hero-overlay" />
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr 400px' }}>
          <div className="hero-left">
            <span className="eyebrow">Color Charts &amp;</span>
            <h1 className="hero-h1">
              <span className="line-white">DESIGN CENTER</span>
            </h1>
            <p className="hero-copy">Explore premium epoxy colors, finishes, and flake blends. Build your perfect floor with confidence.</p>
            <div className="cta-row">
              <Link href="/free-digital-bid" className="btn btn-gold">Start My Design</Link>
              <Link href="/floor-systems" className="btn btn-outline">View Floor Systems</Link>
            </div>
          </div>
          <div style={{ background: 'rgba(17,17,17,.9)', border: '1px solid rgba(212,160,23,.2)', borderRadius: 12, padding: '2rem' }}>
            <h3 style={{ color: '#fff', fontWeight: 900, fontSize: '.9rem', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: '1.25rem' }}>Why Our Design Center?</h3>
            {[
              ['🏆', 'Industry-Leading Quality', 'Premium materials built to perform.'],
              ['🎨', 'Endless Customization', 'Thousands of colors, flakes & finishes.'],
              ['☀', 'UV & Stain Resistant', 'Long-lasting beauty, easy to maintain.'],
              ['👷', 'Installed by Pros', 'Expert installation nationwide.'],
            ].map(([icon, title, desc]) => (
              <div key={title as string} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(212,160,23,.15)', border: '1px solid rgba(212,160,23,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icon}</div>
                <div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: '.85rem', marginBottom: '.15rem' }}>{title}</div>
                  <div style={{ color: '#888', fontSize: '.8rem' }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE COLOR COLLECTIONS */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '2.5rem' }}>
            {/* Sidebar */}
            <div>
              <h3 style={{ color: '#D4A017', fontSize: '.72rem', fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Collections</h3>
              {['All Collections', 'Solid Colors', 'Flake Blends', 'Metallic Epoxy', 'Natural Stone Looks', 'Industrial Series', 'Bold & Accent Colors'].map(cat => (
                <div key={cat} style={{ padding: '.6rem .75rem', borderRadius: 6, fontSize: '.82rem', fontWeight: 700, color: cat === 'All Collections' ? '#D4A017' : '#888', background: cat === 'All Collections' ? 'rgba(212,160,23,.1)' : 'transparent', cursor: 'pointer', marginBottom: '.3rem' }}>{cat}</div>
              ))}
            </div>
            {/* Grid */}
            <div>
              <div className="section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                <h2 className="section-title">Explore <span className="gold">Color Collections</span></h2>
                <p className="section-sub">Premium epoxy finishes for every style and space.</p>
              </div>
              <div className="cards-grid cards-grid-4">
                {COLLECTIONS.map(c => (
                  <div key={c.name} className="collection-card">
                    <img src={c.img} alt={c.name} style={{ aspectRatio: '4/3', objectFit: 'cover', width: '100%' }} />
                    <div className="collection-card-body">
                      <h4>{c.name}</h4>
                      <p>{c.count}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <Link href="/free-digital-bid" className="btn btn-outline">View All Collections →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACTUAL COLOR CHARTS — full width display */}
      <section className="section section-black">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Flake &amp; Finish <span className="gold">Collections</span></h2>
            <p className="section-sub">Beautiful blends. Superior performance. Built for your space.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Flake Color Chart */}
            <div>
              <h3 style={{ color: '#D4A017', fontWeight: 800, fontSize: '.85rem', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: '1rem' }}>Full Flake Blends — 1/4 inch Chips</h3>
              <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(212,160,23,.2)' }}>
                <img src={FLAKE_CHART} alt="Epoxy flake color chart — full blend collection" style={{ width: '100%', display: 'block' }} />
              </div>
            </div>
            {/* Metallic Colors */}
            <div>
              <h3 style={{ color: '#D4A017', fontWeight: 800, fontSize: '.85rem', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: '1rem' }}>Metallic Epoxy Colors</h3>
              <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(212,160,23,.2)' }}>
                <img src={METALLIC_CHART} alt="Metallic epoxy color options" style={{ width: '100%', display: 'block' }} />
              </div>
            </div>
            {/* 3-col row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
              <div>
                <h3 style={{ color: '#D4A017', fontWeight: 800, fontSize: '.82rem', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.75rem' }}>Solid Color Epoxy Base Coats</h3>
                <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(212,160,23,.2)' }}>
                  <img src={SOLID_CHART} alt="Solid color epoxy base coat options" style={{ width: '100%', display: 'block' }} />
                </div>
              </div>
              <div>
                <h3 style={{ color: '#D4A017', fontWeight: 800, fontSize: '.82rem', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.75rem' }}>Quartz Color Systems</h3>
                <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(212,160,23,.2)' }}>
                  <img src={QUARTZ_CHART} alt="Quartz epoxy color systems" style={{ width: '100%', display: 'block' }} />
                </div>
              </div>
              <div>
                <h3 style={{ color: '#D4A017', fontWeight: 800, fontSize: '.82rem', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.75rem' }}>Concrete Dye &amp; Stain Colors</h3>
                <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(212,160,23,.2)' }}>
                  <img src={DYE_CHART} alt="Concrete dye and stain colors" style={{ width: '100%', display: 'block' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY TILES */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Design Inspiration <span className="gold">Gallery</span></h2>
            <p className="section-sub">Browse real installed floors across every system and space.</p>
          </div>
          <div className="cards-grid cards-grid-5">
            {GALLERY_TILES.map(t => (
              <div key={t.label} style={{ position: 'relative', borderRadius: 10, overflow: 'hidden', cursor: 'pointer' }}>
                <img src={t.img} alt={t.label} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent,rgba(0,0,0,.8)', padding: '1rem .75rem' }}>
                  <div style={{ color: '#fff', fontWeight: 800, fontSize: '.82rem', textTransform: 'uppercase', letterSpacing: '.04em' }}>{t.label}</div>
                  <div style={{ color: '#D4A017', fontSize: '.72rem', fontWeight: 700 }}>{t.count}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/gallery" className="btn btn-outline">View All Galleries →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-banner">
        <div className="cta-banner-inner">
          <div className="cta-shield">🎨</div>
          <h2>Ready to Build Your Perfect Floor?</h2>
          <p>Start your digital bid and get a custom quote with your chosen colors and finish.</p>
          <div className="cta-row" style={{ justifyContent: 'center' }}>
            <Link href="/free-digital-bid" className="btn btn-gold">Start My Design</Link>
            <Link href="/floor-systems" className="btn btn-outline">View Floor Systems</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

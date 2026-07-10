import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteFormCard from '@/components/QuoteFormCard';

const HERO = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/f50a9af63_hero-main.png';
const SOLID = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/a4fd70b36_solid-color.png';
const POLISHED = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/33088d54e_polished.png';
const GARAGE = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/177dbda38_garage.png';
const COMMERCIAL = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/95159c28b_commercial.png';

export default function ExteriorCoatingsPage() {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${HERO})` }} />
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div className="hero-left">
            <span className="eyebrow">Exterior Coatings</span>
            <h1 className="hero-h1">
              <span className="line-white">BEAUTIFUL. DURABLE.</span>
              <span className="line-gold">BUILT TO ENDURE.</span>
            </h1>
            <p className="hero-copy">Premium epoxy &amp; polyaspartic coatings for patios, driveways, walkways, pool decks &amp; more. UV-stable. Slip-resistant. Built to last.</p>
            <div className="cta-row">
              <Link href="/free-digital-bid" className="btn btn-gold">Get a Free Quote</Link>
              <Link href="/gallery" className="btn btn-outline">View Gallery</Link>
            </div>
            <div className="trust-badges">
              {[['🛡','10+ Year Warranty'],['♾','Lifetime Warranty'],['📋','Licensed & Insured'],['👷','Expert Installers']].map(([icon,label])=>(
                <div key={label} className="trust-badge"><div className="trust-badge-icon">{icon}</div><span>{label}</span></div>
              ))}
            </div>
          </div>
          <QuoteFormCard title="Get Your Free Quote" />
        </div>
      </section>

      {/* FEATURE STRIP */}
      <div className="feature-strip">
        <div className="feature-strip-inner">
          {[['☀','UV & Fade Resistant'],['🦶','Slip-Resistant Surface'],['🧪','Chemical & Stain Resistant'],['💪','Crack & Peel Resistant'],['⚡','Fast Install Minimal Downtime'],['🧹','Easy to Clean']].map(([icon,label])=>(
            <div key={label} className="feature-item"><span className="feature-item-icon">{icon}</span><span>{label}</span></div>
          ))}
        </div>
      </div>

      {/* PATIO & DRIVEWAY SPLIT CARDS */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Exterior Coating <span className="gold">Solutions</span></h2>
            <p className="section-sub">From patios to driveways — built to perform outdoors, year after year.</p>
          </div>
          <div className="cards-grid cards-grid-2">
            {/* Patio */}
            <div style={{ background: 'var(--charcoal2)', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(212,160,23,.12)' }}>
              <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                <img src={POLISHED} alt="Patio epoxy coating" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 50%,rgba(0,0,0,.7))' }} />
                <div style={{ position: 'absolute', bottom: '1rem', left: '1rem' }}>
                  <span style={{ background: 'rgba(212,160,23,.9)', color: '#0A0A0A', fontSize: '.68rem', fontWeight: 900, letterSpacing: '.07em', textTransform: 'uppercase', padding: '.3rem .7rem', borderRadius: 4 }}>Patio Coatings</span>
                </div>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontWeight: 900, fontSize: '1.1rem', marginBottom: '.75rem' }}>Patio Coatings</h3>
                <p style={{ color: '#aaa', fontSize: '.88rem', marginBottom: '1rem' }}>Transform your patio into a slip-resistant, low-maintenance outdoor living space that&apos;s beautiful and built to last.</p>
                <ul className="check-list">
                  <li>UV-stable &amp; fade-resistant</li>
                  <li>Textured for slip resistance</li>
                  <li>Resists stains, oil &amp; chemicals</li>
                  <li>Designed for outdoor durability</li>
                </ul>
                <Link href="/free-digital-bid" className="card-link" style={{ display: 'inline-flex', marginTop: '1rem' }}>Explore Patio Coatings →</Link>
              </div>
            </div>
            {/* Driveway */}
            <div style={{ background: 'var(--charcoal2)', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(212,160,23,.12)' }}>
              <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                <img src={SOLID} alt="Driveway epoxy coating" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 50%,rgba(0,0,0,.7))' }} />
                <div style={{ position: 'absolute', bottom: '1rem', left: '1rem' }}>
                  <span style={{ background: 'rgba(212,160,23,.9)', color: '#0A0A0A', fontSize: '.68rem', fontWeight: 900, letterSpacing: '.07em', textTransform: 'uppercase', padding: '.3rem .7rem', borderRadius: 4 }}>Driveway Coatings</span>
                </div>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontWeight: 900, fontSize: '1.1rem', marginBottom: '.75rem' }}>Driveway Coatings</h3>
                <p style={{ color: '#aaa', fontSize: '.88rem', marginBottom: '1rem' }}>Upgrade your driveway with a seamless, durable finish that can handle heavy vehicles and brutal weather.</p>
                <ul className="check-list">
                  <li>Heavy-duty impact resistance</li>
                  <li>Resists salt, oil &amp; tire marks</li>
                  <li>Beautiful, high-end finish</li>
                  <li>Long-lasting curb appeal</li>
                </ul>
                <Link href="/free-digital-bid" className="card-link" style={{ display: 'inline-flex', marginTop: '1rem' }}>Explore Driveway Coatings →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <div className="gallery-strip">
        {[GARAGE, SOLID, POLISHED, COMMERCIAL].map((src, i) => (
          <img key={i} src={src} alt={`Exterior coating example ${i + 1}`} />
        ))}
      </div>

      {/* TRUST PANEL */}
      <section className="section section-black">
        <div className="container">
          <div className="split">
            <div>
              <h2 className="section-title">Trusted By Homeowners <span className="gold">&amp; Businesses</span></h2>
              <ul className="check-list" style={{ marginTop: '1.25rem' }}>
                <li>Licensed &amp; Insured</li>
                <li>Premium Materials &amp; Proven Systems</li>
                <li>10-Year System Warranty</li>
                <li>4.4-Star Rated by Homeowners</li>
                <li>Local Experts, Nationwide</li>
              </ul>
              <Link href="/free-digital-bid" className="btn btn-gold" style={{ marginTop: '1.75rem' }}>Get a Free Quote</Link>
            </div>
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  ['⭐', 'Google', '4.4 Star Rating'],
                  ['👍', 'Facebook', 'Highly Recommended'],
                  ['🏡', 'HomeAdvisor', 'Top Rated Pro'],
                  ['🏆', 'BBB', 'Accredited Business'],
                ].map(([icon, source, label]) => (
                  <div key={source as string} style={{ background: '#111', border: '1px solid rgba(212,160,23,.15)', borderRadius: 10, padding: '1.25rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.8rem', color: '#D4A017', marginBottom: '.5rem' }}>{icon}</div>
                    <div style={{ color: '#fff', fontWeight: 800, fontSize: '.85rem', marginBottom: '.2rem' }}>{source}</div>
                    <div style={{ color: '#888', fontSize: '.75rem' }}>{label}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '.7rem', color: '#555', marginTop: '.75rem', textAlign: 'center' }}>Trusted by homeowners &amp; businesses nationwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-banner">
        <div className="cta-banner-inner">
          <div className="cta-shield">🛡</div>
          <h2>Ready to Upgrade Your Outdoors?</h2>
          <p>Get a free, no-obligation quote for your patio, driveway, or outdoor space.</p>
          <div className="cta-row" style={{ justifyContent: 'center' }}>
            <Link href="/free-digital-bid" className="btn btn-gold">Get a Free Quote</Link>
            <a href="tel:+18779586408" className="btn btn-outline">1-800-EPOXY-PRO</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

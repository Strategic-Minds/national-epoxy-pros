import Link from 'next/link';
import QuoteFormCard from '@/components/QuoteFormCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HERO = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/f50a9af63_hero-main.png';
const GARAGE = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/177dbda38_garage.png';
const METALLIC = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/d2640781c_metallic.png';
const FLAKE = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/67ccbd034_flake.png';
const COMMERCIAL = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/95159c28b_commercial.png';
const POLISHED = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/33088d54e_polished.png';

const SYSTEMS = [
  { img: GARAGE, icon: '🏠', title: 'Garage Floors', desc: 'Durable, chemical-resistant coatings with high-gloss or flake finishes.', href: '/flake-garage-floors' },
  { img: METALLIC, icon: '✨', title: 'Patio & Driveway', desc: 'UV-stable, slip-resistant outdoor coatings that won\'t fade or peel.', href: '/exterior-coatings' },
  { img: FLAKE, icon: '💧', title: 'Metallic Epoxy', desc: 'Stunning, one-of-a-kind metallic finishes that turn heads.', href: '/metallic-epoxy' },
  { img: COMMERCIAL, icon: '🏢', title: 'Commercial Spaces', desc: 'Heavy-duty, long-lasting solutions for retail, automotive, and industrial.', href: '/floor-systems' },
];

const BADGES = [
  { icon: '🛡', label: '10-Year System Warranty' },
  { icon: '📍', label: 'Nationwide Service' },
  { icon: '⭐', label: '5-Star Rated' },
  { icon: '♾', label: 'Lifetime Warranty' },
  { icon: '📋', label: 'Licensed & Insured' },
  { icon: '👷', label: 'Expert Installers' },
];

export default function HomePage() {
  return (
    <>
      <Header />
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${HERO})` }} />
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div className="hero-left">
            <span className="eyebrow">Premium Epoxy Floors</span>
            <h1 className="hero-h1">
              <span className="line-white">BUILT NATIONWIDE.</span>
              <span className="line-gold">MADE TO LAST.</span>
            </h1>
            <p className="hero-copy">Professional epoxy floor systems for garages, patios & commercial spaces. Source-controlled. Scalable. Secure. Ready to grow.</p>
            <ul className="hero-checks">
              <li>Source-controlled systems &amp; materials</li>
              <li>Trained professionals. Consistent results.</li>
              <li>Custom colors, flake blends &amp; metallics</li>
              <li>Built for performance. Backed for life.</li>
            </ul>
            <div className="cta-row">
              <Link href="/free-digital-bid" className="btn btn-gold">Get a Free Quote</Link>
              <Link href="/floor-systems" className="btn btn-outline">Explore Floor Systems</Link>
            </div>
            <div className="trust-badges">
              {[['🛡','10+ Year Warranty'],['♾','Lifetime Warranty'],['📋','Licensed & Insured'],['👷','Expert Installers']].map(([icon,label]) => (
                <div key={label} className="trust-badge">
                  <div className="trust-badge-icon">{icon}</div>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <QuoteFormCard title="Get Your Free Quote" />
        </div>
      </section>

      {/* FEATURE STRIP */}
      <div className="feature-strip">
        <div className="feature-strip-inner">
          {BADGES.map(b => (
            <div key={b.label} className="feature-item">
              <span className="feature-item-icon">{b.icon}</span>
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FLOOR SYSTEMS GRID */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Premium Epoxy <span className="gold">Floor Systems</span></h2>
            <p className="section-sub">Engineered for beauty, built for performance. Installed by pros.</p>
          </div>
          <div className="cards-grid cards-grid-4">
            {SYSTEMS.map(s => (
              <div key={s.title} className="card">
                <div className="card-img-wrap">
                  <img src={s.img} alt={s.title} />
                  <div className="card-icon-badge">{s.icon}</div>
                </div>
                <div className="card-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <Link href={s.href} className="card-link">Explore Systems →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TRUST US — SPLIT */}
      <section className="section section-black">
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow">Why Choose Us</span>
              <h2 className="section-title">Why Homeowners &amp; Businesses<br /><span className="gold">Trust National Epoxy Pros</span></h2>
              <ul className="check-list">
                <li>Source-controlled systems &amp; materials</li>
                <li>Trained professionals. Consistent results.</li>
                <li>Custom colors, flake blends &amp; metallics</li>
                <li>Fast installs with minimal downtime</li>
                <li>Built for performance. Backed for life.</li>
              </ul>
              <Link href="/free-digital-bid" className="btn btn-gold" style={{marginTop:'1.5rem'}}>Get a Free Quote</Link>
            </div>
            <div>
              <div className="split-img" style={{position:'relative'}}>
                <img src={POLISHED} alt="Polished concrete commercial floor" />
                <div style={{position:'absolute',bottom:0,left:0,right:0,background:'linear-gradient(transparent,rgba(0,0,0,.85))',padding:'2rem 1.5rem',borderRadius:'0 0 12px 12px'}}>
                  <p style={{color:'#fff',fontWeight:950,fontSize:'1.1rem',textTransform:'uppercase',letterSpacing:'.04em',lineHeight:1.2}}>One System.<br />One Standard.<br /><span style={{color:'#D4A017'}}>Every Location.</span></p>
                  <p style={{color:'#aaa',fontSize:'.8rem',marginTop:'.5rem'}}>Consistent quality, Coast to coast. That&apos;s the National Epoxy Pros way.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Testimonials</span>
            <h2 className="section-title">5-Star Rated <span className="gold">By Homeowners</span></h2>
            <p className="section-sub">Real results. Real reviews. Real people.</p>
          </div>
          <div className="reviews-grid">
            {[
              { name:'Jason M.', loc:'Phoenix, AZ', text:'"The team was incredible from start to finish. Our garage looks better than we imagined!"' },
              { name:'Sarah T.', loc:'Nashville, TN', text:'"Fast install, flawless finish, and super professional. Highly recommend!"' },
              { name:'Mike R.', loc:'Orlando, FL', text:'"Best decision we made for our shop. Tough, easy to clean, and looks amazing."' },
            ].map(r => (
              <div key={r.name} className="review-card">
                <div className="stars">★★★★★</div>
                <p className="review-text">{r.text}</p>
                <p className="reviewer">{r.name} — {r.loc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <div className="cta-banner">
        <div className="cta-banner-inner">
          <div className="cta-shield">🛡</div>
          <h2>Ready to Transform Your Space?</h2>
          <p>Get a free, no-obligation quote from your local epoxy flooring experts.</p>
          <div className="cta-row" style={{justifyContent:'center'}}>
            <Link href="/free-digital-bid" className="btn btn-gold">Get a Free Quote</Link>
            <Link href="tel:18006e79769776" className="btn btn-outline">1-800-EPOXY-PRO</Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteFormCard from '@/components/QuoteFormCard';

const HERO = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/f50a9af63_hero-main.png';
const GARAGE = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/177dbda38_garage.png';
const METALLIC = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/d2640781c_metallic.png';
const FLAKE = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/67ccbd034_flake.png';
const COMMERCIAL = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/95159c28b_commercial.png';
const POLISHED = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/33088d54e_polished.png';

const SYSTEMS = [
  { img:GARAGE, icon:'🏠', title:'Garage Floors', desc:'Durable, chemical-resistant coatings with high-gloss or flake finishes.', href:'/flake-garage-floors' },
  { img:FLAKE, icon:'🎨', title:'Patio & Driveway', desc:'UV-stable, slip-resistant outdoor coatings that won\'t fade or peel.', href:'/exterior-coatings' },
  { img:METALLIC, icon:'✨', title:'Metallic Epoxy', desc:'Stunning, one-of-a-kind metallic finishes that turn heads.', href:'/metallic-epoxy' },
  { img:COMMERCIAL, icon:'🏢', title:'Commercial Spaces', desc:'Heavy-duty, long-lasting solutions for retail, automotive, and industrial.', href:'/floor-systems' },
  { img:FLAKE, icon:'❄', title:'Flake Garage Floors', desc:'Decorative flake systems that hide imperfections and add texture.', href:'/flake-garage-floors' },
];

const TABLE_ROWS = [
  { label:'Best For', vals:['Budget-Friendly','High Performance','Decorative & Durable','Luxury & Custom Looks'] },
  { label:'Coat Thickness', vals:['10-12 mils','15-20 mils','20-25 mils','25+ mils'] },
  { label:'Durability', vals:['★★★','★★★★','★★★★★','★★★★★'] },
  { label:'Chemical Resistance', vals:['★★★','★★★★','★★★★★','★★★★★'] },
  { label:'Slip Resistance', vals:['★★★','★★★★','★★★★★','★★★★'] },
  { label:'Warranty', vals:['5 Years','10 Years','15 Years','15 Years+'] },
  { label:'Starting At', vals:['$3.49/sq ft','$4.49/sq ft','$5.99/sq ft','$5.99/sq ft'] },
];

export default function FloorSystemsPage() {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="hero-bg" style={{backgroundImage:`url(${HERO})`}} />
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div className="hero-left">
            <span className="eyebrow">Premium Epoxy</span>
            <h1 className="hero-h1">
              <span className="line-white">FLOOR SYSTEMS.</span>
              <span className="line-gold">BUILT TO LAST.</span>
            </h1>
            <p className="hero-copy">Professional epoxy floor systems for garages, patios, commercial spaces, and more. Built for performance. Designed to impress.</p>
            <ul className="hero-checks">
              <li>High-performance coatings built to last</li>
              <li>Moisture, chemical, and stain resistant</li>
              <li>Easy to clean and maintain</li>
              <li>100% solids epoxy systems</li>
              <li>Backed by strong warranties</li>
            </ul>
            <div className="cta-row">
              <Link href="/free-digital-bid" className="btn btn-gold">Explore Systems</Link>
              <Link href="/color-charts" className="btn btn-outline">Design Center</Link>
            </div>
            <div className="trust-badges">
              {[['🛡','10+ Year Warranty'],['♾','Lifetime Warranty'],['📋','Licensed & Insured'],['👷','Expert Installers'],['📍','Nationwide Service']].map(([icon,label])=>(
                <div key={label} className="trust-badge"><div className="trust-badge-icon">{icon}</div><span>{label}</span></div>
              ))}
            </div>
          </div>
          <QuoteFormCard title="Get Your Free Quote" />
        </div>
      </section>

      {/* SPLIT — engineered section */}
      <section className="section section-black">
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow">Floor Systems</span>
              <h2 className="section-title">Engineered For<br /><span className="gold">Every Space.</span></h2>
              <p className="section-sub" style={{color:'#aaa',marginBottom:'1rem'}}>Our commercial-grade epoxy floor systems are engineered for durability, beauty, and long-term performance. Each system is built with premium materials, expert installation, and proven results you can trust.</p>
              <ul className="check-list">
                <li>High-performance coatings built to last</li>
                <li>Moisture, chemical, and stain resistant</li>
                <li>Easy to clean and maintain</li>
                <li>100% solids epoxy systems</li>
                <li>Backed by strong warranties</li>
              </ul>
              <div className="inset-box">
                <h4>Built For Life. Backed By Pros.</h4>
                <p>Every system is installed by trained professionals using premium materials and proven processes.</p>
              </div>
              <Link href="/free-digital-bid" className="btn btn-gold" style={{marginTop:'1.5rem'}}>Get Your Free Quote</Link>
            </div>
            <div className="split-img">
              <img src={GARAGE} alt="Epoxy garage floor with sports cars" />
            </div>
          </div>
        </div>
      </section>

      {/* 5-SYSTEM CARDS */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Explore Our <span className="gold">Epoxy Floor Systems</span></h2>
            <p className="section-sub">Solutions for garages, patios, commercial spaces, and more.</p>
          </div>
          <div className="cards-grid cards-grid-5">
            {SYSTEMS.map(s=>(
              <div key={s.title} className="card">
                <div className="card-img-wrap"><img src={s.img} alt={s.title} /><div className="card-icon-badge">{s.icon}</div></div>
                <div className="card-body"><h3>{s.title}</h3><p>{s.desc}</p><Link href={s.href} className="card-link">View Systems →</Link></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE TABLE */}
      <section className="section section-black">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Compare Our <span className="gold">Top Systems</span></h2>
            <p className="section-sub">Find the perfect system for your space and performance needs.</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 280px',gap:'2rem',alignItems:'start'}}>
            <div className="compare-wrap">
              <table className="compare-table">
                <thead><tr><th>Features</th><th>Base Coat System</th><th>Pro Coat System</th><th>Premium Flake System</th><th>Metallic System</th></tr></thead>
                <tbody>
                  {TABLE_ROWS.map(row=>(
                    <tr key={row.label}><td>{row.label}</td>{row.vals.map(v=><td key={v}>{v}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="inset-box">
              <h4>Not Sure Which System Is Right?</h4>
              <p>Use our Design Center to visualize options or get a custom recommendation.</p>
              <Link href="/color-charts" className="btn btn-gold" style={{marginTop:'1rem',width:'100%'}}>Design Center</Link>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <div className="gallery-strip">
        {[GARAGE,FLAKE,METALLIC,COMMERCIAL,POLISHED].map((src,i)=>(
          <img key={i} src={src} alt={`Floor system example ${i+1}`} />
        ))}
      </div>

      {/* FEATURE STRIP */}
      <div className="feature-strip">
        <div className="feature-strip-inner">
          {[['🔗','Seamless & Durable'],['🧪','Chemical & Stain Resistant'],['🧹','Easy to Clean & Maintain'],['💪','Built to Withstand Impact'],['✨','Beauty That Lasts']].map(([icon,label])=>(
            <div key={label} className="feature-item"><span className="feature-item-icon">{icon}</span><span>{label}</span></div>
          ))}
        </div>
      </div>

      {/* CTA */}
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

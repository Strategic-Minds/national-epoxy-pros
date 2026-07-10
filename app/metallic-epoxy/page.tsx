import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteFormCard from '@/components/QuoteFormCard';

const HERO = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/d2640781c_metallic.png';
const METALLIC_COLORS = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/bb184fe54_metallic-colors.webp';
const GARAGE = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/177dbda38_garage.png';
const COMMERCIAL = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/95159c28b_commercial.png';

const SWATCHES = [
  { name:'Silver Night', style:'radial-gradient(circle at 35% 35%, #e8e8e8, #9e9e9e, #616161)' },
  { name:'Steel Gray', style:'radial-gradient(circle at 35% 35%, #b0bec5, #78909c, #455a64)' },
  { name:'Gunmetal', style:'radial-gradient(circle at 35% 35%, #90a4ae, #546e7a, #263238)' },
  { name:'Pearl White', style:'radial-gradient(circle at 35% 35%, #ffffff, #eceff1, #cfd8dc)' },
  { name:'Midnight Blue', style:'radial-gradient(circle at 35% 35%, #5c6bc0, #283593, #1a237e)' },
  { name:'Bronze Amber', style:'radial-gradient(circle at 35% 35%, #ffca28, #f57f17, #8d4e0d)' },
  { name:'Copper Moon', style:'radial-gradient(circle at 35% 35%, #ffab40, #e65100, #7c2d00)' },
  { name:'Onyx Black', style:'radial-gradient(circle at 35% 35%, #616161, #212121, #000000)' },
];

const STEPS = [
  { n:1, title:'Prepare', desc:'We grind and prep the concrete for maximum adhesion.' },
  { n:2, title:'Build', desc:'A high-build epoxy base coat creates depth and durability.' },
  { n:3, title:'Design', desc:'Metallic pigments are artfully applied to create movement.' },
  { n:4, title:'Protect', desc:'A crystal-clear top coat locks in beauty and resists wear.' },
];

export default function MetallicEpoxyPage() {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="hero-bg" style={{backgroundImage:`url(${HERO})`}} />
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div className="hero-left">
            <span className="eyebrow">Metallic Epoxy Floors</span>
            <h1 className="hero-h1">
              <span className="line-white">LIQUID ART.</span>
              <span className="line-gold">UNMATCHED DURABILITY.</span>
            </h1>
            <p className="hero-copy">Stunning, one-of-a-kind metallic epoxy floors engineered for beauty, built for performance, and designed to last.</p>
            <div className="cta-row">
              <Link href="/free-digital-bid" className="btn btn-gold">Get a Free Quote</Link>
              <Link href="/floor-systems" className="btn btn-outline">Explore Floor Systems</Link>
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

      {/* COLOR SWATCHES */}
      <section className="section section-black">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Choose Your <span className="gold">Metallic Look</span></h2>
            <p className="section-sub">Every floor is custom. Every finish is a masterpiece.</p>
          </div>
          <div className="swatch-grid">
            {SWATCHES.map(s=>(
              <div key={s.name} className="swatch-item">
                <div className="swatch-circle" style={{background:s.style}} />
                <span className="swatch-name">{s.name}</span>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center',marginTop:'1rem'}}>
            <Link href="/color-charts" className="btn btn-outline">Explore All Colors &amp; Finishes →</Link>
          </div>
          {/* Actual color chart image */}
          <div style={{marginTop:'2.5rem',borderRadius:12,overflow:'hidden'}}>
            <img src={METALLIC_COLORS} alt="Metallic epoxy color chart" style={{width:'100%',display:'block'}} />
          </div>
        </div>
      </section>

      {/* 4-STEP PROCESS */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our 4-Step <span className="gold">Metallic Epoxy Process</span></h2>
          </div>
          <div className="process-steps">
            {STEPS.map(s=>(
              <div key={s.n} className="process-step">
                <div className="step-num">{s.n}</div>
                <div className="step-title">{s.title}</div>
                <div className="step-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERFECT FOR ANY SPACE */}
      <section className="section section-black">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Perfect For <span className="gold">Any Space</span></h2>
            <p className="section-sub">From residential to commercial, metallic epoxy delivers unmatched impact.</p>
          </div>
          <div className="cards-grid cards-grid-5">
            {[
              {img:GARAGE,icon:'🚗',title:'Garages',desc:'Showroom-quality floors that impress.'},
              {img:GARAGE,icon:'🏠',title:'Basements',desc:'Transform unused space into wow.'},
              {img:COMMERCIAL,icon:'🍳',title:'Kitchens',desc:'Beautiful, seamless, and easy to clean.'},
              {img:COMMERCIAL,icon:'🏢',title:'Commercial Spaces',desc:'High-traffic performance that stands out.'},
              {img:COMMERCIAL,icon:'🏪',title:'Showrooms',desc:'Elevate your brand with a luxury finish.'},
            ].map(s=>(
              <div key={s.title} className="card">
                <div className="card-img-wrap"><img src={s.img} alt={s.title} /><div className="card-icon-badge">{s.icon}</div></div>
                <div className="card-body"><h3>{s.title}</h3><p>{s.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <div className="feature-strip">
        <div className="feature-strip-inner">
          {[['🧹','Seamless & Porous-Free'],['🧪','Chemical & Stain Resistant'],['💪','Impact & Abrasion Resistant'],['☀','UV Stable Non-Yellowing'],['🎨','Custom Designs Endless Possibilities']].map(([icon,label])=>(
            <div key={label} className="feature-item"><span className="feature-item-icon">{icon}</span><span>{label}</span></div>
          ))}
        </div>
      </div>

      {/* NO TWO FLOORS ALIKE */}
      <section className="section section-black">
        <div className="container">
          <div className="split">
            <div>
              <h2 className="section-title">No Two Floors Are Alike.<br /><span className="gold">Yours Will Be Extraordinary.</span></h2>
              <p style={{color:'#bbb',marginTop:'1rem',marginBottom:'1.5rem'}}>Metallic epoxy creates deep, flowing movement and dimension that can&apos;t be replicated with paint or stains. It&apos;s art you can walk on — and it&apos;s built to last.</p>
              <Link href="/gallery" className="btn btn-gold">See Real Projects →</Link>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
              <div style={{borderRadius:10,overflow:'hidden',aspectRatio:'1/1'}}><img src={GARAGE} alt="Metallic floor" style={{width:'100%',height:'100%',objectFit:'cover'}} /></div>
              <div style={{borderRadius:10,overflow:'hidden',aspectRatio:'1/1'}}><img src={COMMERCIAL} alt="Metallic showroom" style={{width:'100%',height:'100%',objectFit:'cover'}} /></div>
              <div style={{borderRadius:10,overflow:'hidden',aspectRatio:'1/1',gridColumn:'1/-1'}}><img src={HERO} alt="Metallic epoxy detail" style={{width:'100%',height:'200px',objectFit:'cover'}} /></div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Trusted By Homeowners &amp; Businesses <span className="gold">Nationwide</span></h2>
          </div>
          <div className="stats-row stats-row-5">
            {[['⭐','4.4-Star','Rated By Homeowners'],['📍','70+','Locations Nationwide'],['🏆','10+','Years Of Experience'],['📋','Licensed','Insured & Bonded'],['♾','Lifetime','Warranty on Most Systems']].map(([icon,val,label])=>(
              <div key={label} className="stat-box"><div className="stat-icon">{icon}</div><div className="stat-val">{val}</div><div className="stat-label">{label}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-banner">
        <div className="cta-banner-inner">
          <div className="cta-shield">🛡</div>
          <h2>Ready to Create Your One-of-a-Kind Floor?</h2>
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

'use client';
import { useState } from 'react';
import Link from 'next/link';

const FLOOR_SYSTEMS = [
  { slug:'flake', icon:'🏠', title:'Decorative Flake', desc:'Durable, chip-broadcast systems for garages and commercial spaces. Slip-resistant and easy to clean.', img:'/images/floor-systems/nep-hero-flake-garage-sports-cars.png' },
  { slug:'metallic', icon:'✨', title:'Metallic Epoxy', desc:'Stunning one-of-a-kind metallic finishes for showrooms, salons, and luxury interiors.', img:'/images/floor-systems/nep-metallic-epoxy-luxury-lounge.png' },
  { slug:'solid-color', icon:'🎨', title:'Solid Color Epoxy', desc:'Clean, professional high-gloss systems for commercial warehouses and industrial spaces.', img:'/images/floor-systems/nep-solid-color-commercial-epoxy.png' },
  { slug:'quartz', icon:'💎', title:'Quartz Flooring', desc:'Decorative quartz systems offering superior aesthetics and slip resistance for any environment.', img:'/images/floor-systems/nep-polished-concrete-retail.png' },
  { slug:'polished-concrete', icon:'🏢', title:'Polished Concrete', desc:'Modern, low-maintenance polished concrete for retail, commercial, and architectural spaces.', img:'/images/floor-systems/nep-polished-concrete-commercial-lobby.png' },
  { slug:'exterior', icon:'🌤', title:'Exterior Coatings', desc:'UV-stable, slip-resistant polyaspartic coatings for patios, driveways, and pool decks.', img:'/images/floor-systems/nep-exterior-patio-coating.png' },
];

const PROCESS = [
  { n:'01', title:'Free Quote', desc:'Submit your project details online in 60 seconds.' },
  { n:'02', title:'Site Visit', desc:'We measure and assess your space at no charge.' },
  { n:'03', title:'Surface Prep', desc:'Professional grinding, repair, and priming.' },
  { n:'04', title:'Installation', desc:'Multi-coat professional system application.' },
  { n:'05', title:'Inspection', desc:'Quality walkthrough and care instructions.' },
];

const REVIEWS = [
  { stars:5, text:'"The team was incredible from start to finish. Our garage looks better than we ever imagined!"', name:'Jason M.', location:'Phoenix, AZ' },
  { stars:5, text:'"Fast install, flawless finish, and super professional. Highly recommend to anyone."', name:'Sarah T.', location:'Nashville, TN' },
  { stars:5, text:'"Best decision we made for our shop. Tough, easy to clean, and looks amazing."', name:'Mike R.', location:'Orlando, FL' },
];

const FAQS = [
  { q:'How long does installation take?', a:'Most residential garage floors are completed in 1–2 days. Commercial projects vary based on size and scope.' },
  { q:'How long before I can use my floor?', a:'Light foot traffic is typically safe within 24 hours. Vehicle traffic after 72 hours. Full cure in 7 days.' },
  { q:'Are epoxy floors slippery?', a:'Our flake and quartz systems include anti-slip additives. All exterior coatings are textured for grip.' },
  { q:'What areas do you serve?', a:'We operate in 70+ cities nationwide. Use our quote form to confirm service in your area.' },
  { q:'Do you offer a warranty?', a:'Yes — our systems come with a 10-year workmanship warranty backed by Xtreme Polishing Systems.' },
];

export default function HomePage() {
  const [form, setForm] = useState({ name:'', phone:'', email:'', type:'', zip:'', notes:'' });
  const [status, setStatus] = useState<'idle'|'loading'|'ok'|'err'>('idle');
  const [openFaq, setOpenFaq] = useState<number|null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/leads', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ ...form, source:'Homepage Quote Card' })
      });
      setStatus(res.ok ? 'ok' : 'err');
    } catch { setStatus('err'); }
  }

  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg" style={{backgroundImage:'url(/images/floor-systems/nep-hero-flake-garage-sports-cars.png)'}} />
        <div className="hero-inner">
          <div>
            <span className="eyebrow">Premium Epoxy Floors</span>
            <h1 className="hero-title display">
              PREMIUM FLOORS.<br/>
              <span className="gold-line">BUILT NATIONWIDE.</span><br/>
              MADE TO LAST.
            </h1>
            <p className="hero-sub">
              High-performance epoxy, concrete coating, and polished flooring solutions for garages, businesses, and industrial spaces. Source-controlled. Scalable. Ready to grow.
            </p>
            <div className="hero-ctas">
              <Link href="/quote" className="btn btn-gold btn-lg">GET MY FREE QUOTE</Link>
              <Link href="/floor-systems" className="btn btn-outline btn-lg">VIEW FLOOR SYSTEMS</Link>
            </div>
            <div className="trust-badges">
              {[
                ['⏱','12-Hr Quote Guarantee'],
                ['📍','100+ Cities Nationwide'],
                ['⭐','5-Star Rated'],
                ['🛡','Licensed & Insured'],
                ['🔒','Lifetime Warranty'],
              ].map(([icon,label]) => (
                <div key={label} className="trust-badge"><span>{icon}</span><span>{label}</span></div>
              ))}
            </div>
          </div>

          {/* Quote Card */}
          <div className="quote-card">
            <div className="quote-card-title">GET MY FREE QUOTE</div>
            <div className="quote-card-sub">Free quote in 60 seconds — no obligation</div>
            {status === 'ok' ? (
              <div style={{textAlign:'center',padding:'24px 0'}}>
                <div style={{fontSize:40,marginBottom:12}}>✅</div>
                <h3 style={{fontFamily:'Montserrat,sans-serif',fontWeight:800,marginBottom:8}}>Request Received!</h3>
                <p style={{fontSize:14,color:'var(--text-muted)'}}>Our team will contact you within 24 hours.</p>
                <Link href="/quote" className="btn btn-gold" style={{marginTop:20,width:'100%',justifyContent:'center'}}>START FULL QUOTE →</Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {[
                  { name:'name', label:'Full Name', type:'text', placeholder:'Your full name', required:true },
                  { name:'phone', label:'Phone Number', type:'tel', placeholder:'(000) 000-0000', required:true },
                  { name:'email', label:'Email Address', type:'email', placeholder:'name@email.com', required:true },
                ].map(f => (
                  <div key={f.name} className="form-field">
                    <label>{f.label}{f.required && ' *'}</label>
                    <input type={f.type} placeholder={f.placeholder} required={f.required}
                      value={(form as any)[f.name]} onChange={e => setForm(p => ({...p,[f.name]:e.target.value}))} />
                  </div>
                ))}
                <div className="form-field">
                  <label>Project Type</label>
                  <select value={form.type} onChange={e => setForm(p => ({...p,type:e.target.value}))}>
                    <option value="">Select project type</option>
                    {['Garage Floor','Commercial Space','Patio/Outdoor','Basement','Showroom','Other'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="form-field">
                  <label>Zip Code</label>
                  <input type="text" placeholder="Enter zip code" value={form.zip} onChange={e => setForm(p => ({...p,zip:e.target.value}))} />
                </div>
                <div className="form-field">
                  <label>Tell us about your project</label>
                  <textarea placeholder="Describe your project..." rows={3} value={form.notes} onChange={e => setForm(p => ({...p,notes:e.target.value}))} />
                </div>
                {status === 'err' && <p style={{color:'#dc2626',fontSize:13,marginBottom:12}}>Something went wrong. Please try again.</p>}
                <button type="submit" className="btn btn-gold" style={{width:'100%',justifyContent:'center'}} disabled={status==='loading'}>
                  {status === 'loading' ? 'SENDING...' : 'REQUEST MY FREE QUOTE →'}
                </button>
                <p className="form-privacy">🔒 Your information is secure and never shared.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <div className="trust-strip">
        <div className="trust-strip-inner">
          {[
            ['🏆','10+ Year System Warranty'],
            ['🌎','Nationwide Service'],
            ['⭐','5-Star Rated by Homeowners'],
            ['🔒','Lifetime Warranty'],
            ['🛡','Licensed & Insured'],
            ['👷','Expert Installers'],
          ].map(([icon,label]) => (
            <div key={label} className="trust-item"><span className="trust-icon">{icon}</span><span>{label}</span></div>
          ))}
        </div>
      </div>

      {/* ── FLOOR SYSTEMS ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Systems</span>
            <h2>PREMIUM EPOXY FLOOR SYSTEMS</h2>
            <p>Engineered for beauty, built for performance. Installed by pros.</p>
          </div>
          <div className="grid-3">
            {FLOOR_SYSTEMS.map(s => (
              <Link key={s.slug} href={`/floor-systems/${s.slug}`} className="card">
                <img src={s.img} alt={s.title} className="card-img" />
                <div className="card-body">
                  <div className="card-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="card-link">EXPLORE SYSTEM →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section-alt">
        <div className="container">
          <div className="why-us-grid">
            <div>
              <span className="eyebrow">Why National Epoxy Pros</span>
              <h2 className="heading" style={{fontSize:'clamp(28px,3.5vw,44px)',marginBottom:24}}>WHY HOMEOWNERS &amp; BUSINESSES TRUST US</h2>
              <ul className="check-list">
                {[
                  'Source-controlled systems and materials',
                  'Trained professionals. Consistent results.',
                  'Custom colors, flake blends & metallics',
                  'Fast installs with minimal downtime',
                  'Built for performance. Backed for life.',
                  '10-year workmanship warranty standard',
                ].map(item => (
                  <li key={item}><span className="check-icon">✓</span>{item}</li>
                ))}
              </ul>
              <Link href="/quote" className="btn btn-gold" style={{marginTop:32}}>GET MY FREE QUOTE</Link>
            </div>
            <div>
              <div className="stats-grid">
                {[
                  ['10+','Years in Business'],
                  ['70+','Cities Nationwide'],
                  ['5★','Rated by Homeowners'],
                  ['100%','Licensed & Bonded'],
                ].map(([val,label]) => (
                  <div key={label} className="stat-card">
                    <div className="stat-num">{val}</div>
                    <div className="stat-label">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">How It Works</span>
            <h2>OUR 5-STEP PROCESS</h2>
            <p>From quote to completion — professional, transparent, and on schedule.</p>
          </div>
          <div className="process-steps">
            {PROCESS.map(p => (
              <div key={p.n} className="process-step">
                <div className="process-num">{p.n}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISUALIZER CTA ── */}
      <section className="section-dark">
        <div className="container" style={{textAlign:'center'}}>
          <span className="eyebrow" style={{color:'var(--gold)'}}>Floor Visualizer</span>
          <h2 className="heading" style={{fontSize:'clamp(28px,3.5vw,44px)',color:'var(--white)',marginBottom:16}}>VISUALIZE YOUR NEW FLOOR</h2>
          <p style={{fontSize:17,color:'#aaa',marginBottom:32,maxWidth:520,margin:'0 auto 32px'}}>
            Upload a photo of your space and see how our floor systems will look before you commit.
          </p>
          <div style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/visualizer" className="btn btn-gold btn-lg">OPEN FLOOR VISUALIZER</Link>
            <Link href="/floor-systems" className="btn btn-outline-white btn-lg">EXPLORE SYSTEMS</Link>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Reviews</span>
            <h2>5-STAR RATED BY HOMEOWNERS</h2>
            <p>Real results. Real reviews. Real people.</p>
          </div>
          <div className="grid-3">
            {REVIEWS.map((r,i) => (
              <div key={i} className="review-card">
                <div className="review-stars">{'★'.repeat(r.stars)}</div>
                <p className="review-text">{r.text}</p>
                <div className="review-author">{r.name}</div>
                <div className="review-location">{r.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">FAQs</span>
            <h2>FREQUENTLY ASKED QUESTIONS</h2>
          </div>
          <div className="faq-list">
            {FAQS.map((f,i) => (
              <div key={i} className="faq-item">
                <button className="faq-q" onClick={() => setOpenFaq(openFaq===i ? null : i)}>
                  {f.q}
                  <span className="faq-chevron" style={{transform: openFaq===i ? 'rotate(180deg)' : 'none'}}>▾</span>
                </button>
                {openFaq === i && <p className="faq-a">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <div className="cta-banner">
        <div className="container">
          <span className="eyebrow" style={{color:'var(--gold)'}}>Get Started Today</span>
          <h2>READY TO TRANSFORM YOUR FLOOR?</h2>
          <p>Get a free, no-obligation quote from your local epoxy flooring experts.</p>
          <div className="cta-banner-btns">
            <Link href="/quote" className="btn btn-gold btn-lg">GET MY FREE QUOTE</Link>
            <a href="tel:18006679776" className="btn btn-outline-white btn-lg">📞 1-800-EPOXY-PRO</a>
          </div>
        </div>
      </div>
    </main>
  );
}

'use client';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HERO = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/f50a9af63_hero-main.png';
const GARAGE = 'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/177dbda38_garage.png';

const STEPS7 = ['Contact & Project Info','Space & Dimensions','Floor Condition','Design Preferences','Uploads','Review & Summary','Submit & Receive Bid'];
const STEP_ICONS = ['👤','📐','🔍','🎨','📸','📋','✅'];

export default function DigitalBidPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name:'', email:'', phone:'', projectType:'', zipCode:'' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await fetch('/api/leads', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ ...form, source:'digital-bid' }) });
    } catch {}
    setSubmitted(true);
  }

  return (
    <>
      <Header />
      <section className="hero">
        <div className="hero-bg" style={{backgroundImage:`url(${HERO})`}} />
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div className="hero-left">
            <span className="eyebrow">Fast. Accurate. Professional.</span>
            <h1 className="hero-h1">
              <span className="line-white">GET YOUR DIGITAL BID.</span>
              <span className="line-gold">BUILT FOR YOUR SPACE.</span>
            </h1>
            <p className="hero-copy">Our guided digital bid walks you through every detail to deliver an accurate, transparent quote—fast.</p>
            <ul className="hero-checks">
              <li>Step-by-step form with smart validation</li>
              <li>Upload photos &amp; details for precision pricing</li>
              <li>Review, approve, and submit with confidence</li>
              <li>Receive your custom bid—fast and hassle-free</li>
            </ul>
            <div className="cta-row">
              <button onClick={() => document.getElementById('bid-form')?.scrollIntoView({behavior:'smooth'})} className="btn btn-gold">Start My Free Digital Bid</button>
              <Link href="/gallery" className="btn btn-outline">View Example Bid</Link>
            </div>
            <div className="trust-badges">
              {[['📋','Licensed & Insured'],['🛡','10+ Year Warranty'],['📍','Nationwide Service'],['⭐','4.4-Star Rated'],['👷','Expert Installers']].map(([icon,label])=>(
                <div key={label} className="trust-badge"><div className="trust-badge-icon">{icon}</div><span>{label}</span></div>
              ))}
            </div>
          </div>

          {/* BID FORM CARD */}
          <div className="quote-card" id="bid-form">
            {submitted ? (
              <div style={{textAlign:'center',padding:'2rem 0'}}>
                <div style={{fontSize:'3rem',color:'#D4A017',marginBottom:'1rem'}}>✓</div>
                <h3>Bid Request Received!</h3>
                <p style={{color:'#666',fontSize:'.88rem',marginTop:'.5rem'}}>Our team will reach out within 24 hours with your custom quote.</p>
              </div>
            ) : (
              <>
                <h3>Start Your Digital Bid</h3>
                <p className="step-label">Step 1 of 7 — Contact &amp; Project Info</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-field"><label>Full Name</label><input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required /></div>
                  <div className="form-field"><label>Email Address</label><input name="email" type="email" value={form.email} onChange={handleChange} placeholder="name@email.com" required /></div>
                  <div className="form-field"><label>Phone Number</label><input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(000) 123-4567" /></div>
                  <div className="form-field">
                    <label>Project Type</label>
                    <select name="projectType" value={form.projectType} onChange={handleChange}>
                      <option value="">Select project type</option>
                      <option>Garage Floor</option><option>Patio / Driveway</option>
                      <option>Commercial Space</option><option>Basement Floor</option>
                      <option>Metallic Epoxy</option><option>Other</option>
                    </select>
                  </div>
                  <div className="form-field"><label>Location (Zip Code)</label><input name="zipCode" value={form.zipCode} onChange={handleChange} placeholder="Enter zip code" /></div>
                  <button type="submit" className="form-submit">Next Step →</button>
                  <p className="form-privacy">🔒 Your information is secure and never shared.</p>
                </form>
                <div className="step-dots">
                  {[1,2,3,4,5,6,7].map(n=>(
                    <div key={n} className={`step-dot${n===step?' active':''}`}>{n}</div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — 7 STEPS */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How Our <span className="gold">Digital Bid Works</span></h2>
            <p className="section-sub">A simple 7-step process to deliver your custom epoxy floor quote.</p>
          </div>
          <div style={{display:'flex',gap:'1rem',overflowX:'auto',paddingBottom:'1rem'}}>
            {STEPS7.map((label,i)=>(
              <div key={i} style={{flex:'0 0 calc(14.28% - 1rem)',textAlign:'center',minWidth:120}}>
                <div style={{width:52,height:52,borderRadius:'50%',border:'2px solid #D4A017',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto .75rem',fontSize:'1.3rem',background:'rgba(212,160,23,.1)'}}>{STEP_ICONS[i]}</div>
                <div style={{fontSize:'.72rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'.05em',color:step===i+1?'#D4A017':'#fff',marginBottom:'.25rem'}}>{label}</div>
                <div style={{fontSize:'.68rem',color:'#888'}}>{['Tell us about you and your project.','Share your space measurements.','Describe your current floor condition.','Choose colors, flakes, and finishes.','Add photos, plans, or reference images.','Review your details and selections.','Submit and receive your custom bid.'][i]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL GET + IMAGE */}
      <section className="section section-black">
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'2rem',alignItems:'start'}}>
            <div>
              <h2 className="section-title">Built For Accuracy.<br /><span className="gold">Designed For Pros.</span></h2>
              <p style={{color:'#bbb',margin:'1rem 0',fontSize:'.9rem'}}>Our digital bid system ensures we capture every detail needed to deliver a precise quote the first time.</p>
              <ul className="check-list">
                <li>Smart form logic prevents missing details</li>
                <li>Photo uploads help us see what you see</li>
                <li>Real-time validation for a smooth experience</li>
                <li>Faster turnaround with better accuracy</li>
              </ul>
            </div>
            <div className="inset-box">
              <h4>What You&apos;ll Get</h4>
              <ul className="check-list" style={{marginTop:'.5rem'}}>
                <li>Detailed line-item pricing</li>
                <li>Material &amp; labor breakdown</li>
                <li>Timeline estimate</li>
                <li>Product recommendations</li>
                <li>Clear next steps</li>
              </ul>
            </div>
            <div style={{borderRadius:12,overflow:'hidden',aspectRatio:'4/3'}}><img src={GARAGE} alt="Professional epoxy installation" style={{width:'100%',height:'100%',objectFit:'cover'}} /></div>
          </div>
        </div>
      </section>

      {/* 5 TRUST BADGES */}
      <div className="feature-strip">
        <div className="feature-strip-inner">
          {[['🔒','Secure & Private'],['🎯','Accurate Quotes'],['⚡','Fast Turnaround'],['🤝','No Obligation'],['👷','Expert Support']].map(([icon,label])=>(
            <div key={label} className="feature-item"><span className="feature-item-icon">{icon}</span><span>{label}</span></div>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Trusted By Homeowners &amp; Businesses <span className="gold">Nationwide</span></h2>
            <p className="section-sub">From garages to showrooms to warehouses, we deliver premium epoxy floor systems that last.</p>
          </div>
          <div className="stats-row stats-row-4">
            {[['🛡','10+','Years Warranty'],['📍','70+','Locations Nationwide'],['⭐','4.4-Star','Rated By Homeowners'],['🏠','10,000+','Projects Completed']].map(([icon,val,label])=>(
              <div key={label} className="stat-box"><div className="stat-icon">{icon}</div><div className="stat-val">{val}</div><div className="stat-label">{label}</div></div>
            ))}
          </div>
          <div style={{textAlign:'center',marginTop:'2rem'}}>
            <Link href="/gallery" className="btn btn-gold">View Our Work</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-banner">
        <div className="cta-banner-inner">
          <h2>Ready to Get Your Custom Bid?</h2>
          <p>Start your digital bid now and get a precise quote for your space.</p>
          <div className="cta-row" style={{justifyContent:'center'}}>
            <button onClick={() => document.getElementById('bid-form')?.scrollIntoView({behavior:'smooth'})} className="btn btn-gold">Start My Free Digital Bid</button>
            <Link href="/gallery" className="btn btn-outline">View Example Bid</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
